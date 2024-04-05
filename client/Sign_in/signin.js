function NavigateToCollection() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernamePattern = /^[A-Z][A-Za-z0-9./\-_#]{3,}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[./\-_#]).{8,}$/;

    // if (username.trim() !== "" && password.trim() !== "") {
    //   window.location.href = "./home.html";
    // } else {
    //   console.log("Username and password are required.");
    // }

    if (usernamePattern.test(username) &&  passwordPattern.test(password)) {
      window.location.href = "../Collection/colletion.html";
    } else {
      alert("invalid username or password")
      console.log("Username and password are required.");
    }
  }