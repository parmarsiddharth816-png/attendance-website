function login() {
  const role = document.getElementById("role").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (role === "teacher" && user === "admin" && pass === "1234") {
    localStorage.setItem("role", "teacher");
    window.location.href = "dashboard.html";
  }
  else if (role === "student" && pass === "1111") {
    localStorage.setItem("role", "student");
    localStorage.setItem("studentId", user);
    window.location.href = "student.html";
  }
  else {
    alert("Invalid Login");
  }
}
