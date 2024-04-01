// Function to create header
function createHeader() {
    const headerContainer = document.getElementById('header'); // Append header directly to the body
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
        <div class="header1">
            <div class="signin-signup">
                <span class="signin">Sign in</span>
                <span class="sugnup">Sign up</span>
            </div>
            <img class="lighting" src="Components/images/lighting.png">
        </div>`;

    headerContainer.appendChild(header); // Prepend header to the body
}

// Function to create footer
function createFooter() {
    const footerContainer = document.getElementById('footer'); // Append footer directly to the body
    const footer = document.createElement('div');
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="rectangle">
            <span class="contacts">Contact us</span>
            <div class="icons">
                <img class="facebook" src="Components/images/facebook.png" alt="">  
                <img class="youtube" src="Components/images/youtube.png" alt="">
                <img class="instagram" src="Components/images/instagram.png" alt="">
                <img class="telegram" src="Components/images/telegram.png" alt="">
            </div>
        </div> `;
    footerContainer.appendChild(footer);
}

// Call functions to create header and footer
if (document.getElementById('footer')) {
    createFooter();
}
if (document.getElementById('header')) {
    createHeader();
}
