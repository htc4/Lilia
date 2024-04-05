function createCards() {
  let main_container = document.getElementById("main_content");
  let my_url = window.location.href;
  if (my_url.endsWith("colletion.html")) {
    main_container.innerHTML = `
      <p class="title">Our Collection</p>
      <div class="cards">
        <a href="../Chandeliers/chandeliers.html">
          <img src="../Components/images/chandeliers.png" alt="" />
        </a>
        <a href="../Spots/spots.html">
          <img src="../Components/images/spots.png" alt="" />
        </a>
        <a href="../Sconces/sconces.html">
          <img src="../Components/images/sconces.png" alt="" />
        </a>
        <a href="../Desk_Lamps/desklamps.html">
          <img src="../Components/images/desk_lamps.png" alt="" />
        </a>
        <a href="../Floor_Lamps/floorlamps.html">
          <img src="../Components/images/floor_lamps.png" alt="" />
        </a>
        <a href="../Pendants/pendants.html">
          <img src="../Components/images/pendants.png" alt="" />
        </a>
      </div>`;
  }
  if (my_url.endsWith("chandeliers.html")) {
    main_container.innerHTML = `
      <div class="top">
        <a href="../Collection/colletion.html">
          <img class="back" src="../Components/images/arrow_black.png"/>
        </a>
        <p class="title">Chandeliers</p>
      </div>
      <div class="cards">
        <a href="../Chandeliers/chandeliers.html">
          <img src="../Components/images/chandeliers1.png" alt="" />
        </a>
        <a href="../Chandeliers/chandeliers.html">
          <img src="../Components/images/chandeliers2.png" alt="" />
        </a>
        <a href="../Chandeliers/chandeliers.html">
          <img src="../Components/images/chandeliers3.png" alt="" />
        </a>
        <a href="../Chandeliers/chandeliers.html">
          <img src="../Components/images/chandeliers4.png" alt="" />
        </a>
        <a href="../Chandeliers/chandeliers.html">
          <img src="../Components/images/chandeliers5.png" alt="" />
        </a>
        <a href="../Chandeliers/chandeliers.html">
          <img src="../Components/images/chandeliers6.png" alt="" />
        </a>
      </div>
`;
  }
  if (my_url.endsWith("spots.html")) {
    main_container.innerHTML = `
        <div class="top">
          <a href="../Collection/colletion.html">
            <img class="back" src="../Components/images/arrow_black.png"/>
          </a>
        <p class="title">Spots</p>
        </div>
        <div class="cards">
          <a href="../Spots/spots.html">
            <img src="../Components/images/spots1.png" alt="" />
          </a>
          <a href="../Spots/spots.html">
            <img src="../Components/images/spots2.png" alt="" />
          </a>
          <a href="../Spots/spots.html">
            <img src="../Components/images/spots3.png" alt="" />
          </a>
          <a href="../Spots/spots.html">
            <img src="../Components/images/spots4.png" alt="" />
          </a>
          <a href="../Spots/spots.html">
            <img src="../Components/images/spots5.png" alt="" />
          </a>
          <a href="../Spots/spots.html">
            <img src="../Components/images/spots6.png" alt="" />
          </a>
        </div>`;
  }
  if (my_url.endsWith("sconces.html")) {
    main_container.innerHTML = `
        <div class="top">
          <a href="../Collection/colletion.html">
            <img class="back" src="../Components/images/arrow_black.png"/>
          </a>
        <p class="title">Sconces</p>
        </div>
        <div class="cards">
          <a href="../Sconces/sconces.html">
            <img src="../Components/images/sconces1.png" alt="" />
          </a>
          <a href="../Sconces/sconces.html">
            <img src="../Components/images/sconces2.png" alt="" />
          </a>
          <a href="../Sconces/sconces.html">
            <img src="../Components/images/sconces3.png" alt="" />
          </a>
          <a href="../Sconces/sconces.html">
            <img src="../Components/images/sconces4.png" alt="" />
          </a>
          <a href="../Sconces/sconces.html">
            <img src="../Components/images/sconces5.png" alt="" />
          </a>
          <a href="../Sconces/sconces.html">
            <img src="../Components/images/sconces6.png" alt="" />
          </a>
        </div>`;
  }
  if (my_url.endsWith("pendants.html")) {
    main_container.innerHTML = `
        <div class="top">
          <a href="../Collection/colletion.html">
            <img class="back" src="../Components/images/arrow_black.png"/>
          </a>
          <p class="title">Pendants</p>
        </div>
        <div class="cards">
          <a href="../Pendants/pendants.html">
            <img src="../Components/images/pendants1.png" alt="" />
          </a>
          <a href="../Pendants/pendants.html">
            <img src="../Components/images/pendants2.png" alt="" />
          </a>
          <a href="../Pendants/pendants.html">
            <img src="../Components/images/pendants3.png" alt="" />
          </a>
          <a href="../Pendants/pendants.html">
            <img src="../Components/images/pendants4.png" alt="" />
          </a>
          <a href="../Pendants/pendants.html">
            <img src="../Components/images/pendants5.png" alt="" />
          </a>
          <a href="../Pendants/pendants.html">
            <img src="../Components/images/pendants6.png" alt="" />
          </a>
        </div>`;
  }
  if (my_url.endsWith("desklamps.html")) {
    main_container.innerHTML = `
        <div class="top">
          <a href="../Collection/colletion.html">
            <img class="back" src="../Components/images/arrow_black.png"/>
          </a>
          <p class="title">Desk Lamps</p>
        </div>
        <div class="cards">
          <a href="../Desk_Lamps/desklamps.html">
            <img src="../Components/images/desk_lamps1.png" alt="" />
          </a>
          <a href="../Desk_Lamps/desklamps.html">
            <img src="../Components/images/desk_lamps2.png" alt="" />
          </a>
          <a href="../Desk_Lamps/desklamps.html">
            <img src="../Components/images/desk_lamps3.png" alt="" />
          </a>
          <a href="../Desk_Lamps/desklamps.html">
            <img src="../Components/images/desk_lamps4.png" alt="" />
          </a>
          <a href="../Desk_Lamps/desklamps.html">
            <img src="../Components/images/desk_lamps5.png" alt="" />
          </a>
          <a href="../Desk_Lamps/desklamps.html">
            <img src="../Components/images/desk_lamps6.png" alt="" />
          </a>
        </div>`;
  }
  if (my_url.endsWith("floorlamps.html")) {
    main_container.innerHTML = `
        <div class="top">
          <a href="../Collection/colletion.html">
            <img class="back" src="../Components/images/arrow_black.png"/>
          </a>
          <p class="title">Floor Lamps</p>
        </div>
        <div class="cards">
          <a href="../Floor_Lamps/floorlamps.html">
            <img src="../Components/images/floor_lamps1.png" alt="" />
          </a>
          <a href="../Floor_Lamps/floorlamps.html">
            <img src="../Components/images/floor_lamps2.png" alt="" />
          </a>
          <a href="../Floor_Lamps/floorlamps.html">
            <img src="../Components/images/floor_lamps3.png" alt="" />
          </a>
          <a href="../Floor_Lamps/floorlamps.html">
            <img src="../Components/images/floor_lamps4.png" alt="" />
          </a>
          <a href="../Floor_Lamps/floorlamps.html">
            <img src="../Components/images/floor_lamps5.png" alt="" />
          </a>
          <a href="../Floor_Lamps/floorlamps.html">
            <img src="../Components/images/floor_lamps6.png" alt="" />
          </a>
        </div>`;
  }
}

createCards();
