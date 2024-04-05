function createHeader() {
  const header = document.getElementById("header");
  header.className = "header";
  if (window.location.href.endsWith("index.html")) {
    header.innerHTML = `
          <div class="header1">
              <p class="signin_signup">
                  <a href="./Sign_in/signin.html"><span class="s1">Sign in</span></a>
                  <a href="./Sign_up/signup.html"><span class="s1">SIgn up</span></a>
              </p>
              <a href="../Collection/colletion.html">
                <img class="lighting" src="Components/images/lighting.png">
              </a>
          </div>`;
  } else {
    header.innerHTML = `
          <div class="header1">
              <a href="../index.html"><span class="log_out">Log out</span></a>
              <a href="../Collection/colletion.html">
                <img class="lighting" src="../Components/images/lighting.png">
              </a>
          </div>`;
    //   header.innerHTML = `
    //   <div class="header1">

    //       <img class="lighting" src="Components/images/lighting.png">
    //   </div>`;
  }
}

function createFooter() {
  const footer = document.getElementById("footer"); // Append footer directly to the body
  footer.className = "footer";
  if (window.location.href.endsWith("index.html")) {
    footer.innerHTML = `
            <div class="rectangle">
                <span class="contacts">Contact us</span>
                <div class="icons">
                    <img class="facebook" src="Components/images/facebook.png" alt="facebook">  
                    <img class="youtube" src="Components/images/youtube.png" alt="youtube">
                    <img class="instagram" src="Components/images/instagram.png" alt="instagram">
                    <img class="telegram" src="Components/images/telegram.png" alt="telegram">
                </div>
            </div> `;
  } else {
    footer.innerHTML = `
            <div class="rectangle">
                <span class="contacts">Contact us</span>
                <div class="icons">
                    <img class="facebook" src="../Components/images/facebook.png" alt="facebook">  
                    <img class="youtube" src="../Components/images/youtube.png" alt="youtube">
                    <img class="instagram" src="../Components/images/instagram.png" alt="instagram">
                    <img class="telegram" src="../Components/images/telegram.png" alt="telegram">
                </div>
            </div> `;
  }
}

if (document.getElementById("footer")) {
  createFooter();
}
if (document.getElementById("header")) {
  createHeader();
}
