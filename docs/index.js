function responsiveMenu() {
     var x = document.getElementById("menu");
     if (x.className === "menu") {
         x.className += " responsive";
     } else {
         x.className = "menu";
     }
}

function hideMenu(id) {
    var x = document.getElementById("menu");
    if (x.className !== "menu") {
        x.className = "menu";
    }

    // var menuLinks = document.getElementsByClassName("menu-link");
    // for (var i = 0; i < menuLinks.length; i++) {
    //     menuLinks[i].className = "menu-link";
    // }
}