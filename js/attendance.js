const role = localStorage.getItem("role");
const studentId = localStorage.getItem("studentId");

let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

const list = document.getElementById("attendanceList");
const form = document.getElementById("attendanceForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const record = {
      name: name.value,
      id: id.value,
      subject: subject.value,
      date: date.value
    };

    attendance.push(record);
    localStorage.setItem("attendance", JSON.stringify(attendance));
    form.reset();
    showAttendance();
  });
}

function showAttendance() {
  if (!list) return;
  list.innerHTML = "";

  attendance.forEach(a => {
    if (role === "teacher" || a.id === studentId) {
      const li = document.createElement("li");
      li.innerText = `${a.name} | ${a.id} | ${a.subject} | ${a.date}`;
      list.appendChild(li);
    }
  });
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

showAttendance();
