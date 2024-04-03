// script.js

function createCards() {
    let main_container = document.getElementById("main_content");
    let my_url = window.location.href;
    if (my_url.endsWith('colletion.html')) {
        main_container.innerHTML = `
        <p class="title">Our Collection</p>
        <div class="cards">
          <a href="../Chandeliers/chandeliers.html">
            <img src="../Components/images/chandeliers.png" alt="" />
          </a>
          <a href="../Chandeliers/chandeliers.html">
            <img src="../Components/images/spots.png" alt="" />
          </a>
          <a href="../Chandeliers/chandeliers.html">
            <img src="../Components/images/sconces.png" alt="" />
          </a>
          <a href="../Chandeliers/chandeliers.html">
            <img src="../Components/images/desk_lamps.png" alt="" />
          </a>
          <a href="../Chandeliers/chandeliers.html">
            <img src="../Components/images/floor_lamps.png" alt="" />
          </a>
          <a href="../Chandeliers/chandeliers.html">
            <img src="../Components/images/pendants.png" alt="" />
          </a>
        </div>`;
    }
}

createCards();

