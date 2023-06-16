document
  .getElementById("minimize-button")
  .addEventListener("click", function () {
    var menu = document.querySelector(".issue-submit-container");
    var minimizeButton = document.getElementById("minimize-button");

    if (menu.style.display === "none") {
      menu.style.display = "block";
      menu.style.opacity = "1";

      minimizeButton.textContent = "━━";
      minimizeButton.style.fontSize = "15px";
      minimizeButton.style.top = "-6%";
      minimizeButton.style.padding = "3px 15px 20px 15px";
    } else {
      menu.style.display = "none";
      menu.style.opacity = "0";
      menu.style.transition = "display 2s linear";
      menu.style.transition = "opacity 1s ease-in-out";

      minimizeButton.textContent = "+";
      minimizeButton.style.fontSize = "24px";
      minimizeButton.style.top = "-20%";
      minimizeButton.style.fontweight = "700";
      minimizeButton.style.padding = "0 15px 20px 15px";
    }
  });
