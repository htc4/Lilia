function NavigateToCollection() {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernamePattern = /^[A-Z][A-Za-z0-9./\-_#]{3,}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[./\-_#]).{8,}$/;

  // if (username.trim() !== "" && password.trim() !== "") {
  //   window.location.href = "./home.html";
  // } else {
  //   console.log("Username and password are required.");
  // }

  if (emailPattern.test(email) && usernamePattern.test(username) && 
  passwordPattern.test(password) && password == confirm_password) {
    window.location.href = "../Collection/collection.html";
  } else {
    alert("invalid email, username, password or confirm password")
    console.log("Username and password are required.");
  }
}