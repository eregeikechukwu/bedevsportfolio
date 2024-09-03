"use strict";
/*
<!--
<button class="dropdownButton" aria-expanded="false" aria-controls="dropdownMenu1">Toggle Dropdown 1</button>
<div id="dropdownMenu1" class="dropdownMenu" aria-hidden="true">
    <!-- Dropdown content 1 -->
</div>

<button class="dropdownButton" aria-expanded="false" aria-controls="dropdownMenu2">Toggle Dropdown 2</button>
<div id="dropdownMenu2" class="dropdownMenu" aria-hidden="true">
    <!-- Dropdown content 2 -->
</div>

<script>
  // Select all buttons with the class 'dropdownButton'
  const dropdownButtons = document.querySelectorAll('.dropdownButton');

  dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the ID of the associated dropdown menu from the aria-controls attribute
      const dropdownId = button.getAttribute('aria-controls');
      const dropdownMenu = document.getElementById(dropdownId);
      
      // Toggle the aria-expanded attribute on the button
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle the aria-hidden attribute on the dropdown menu
      dropdownMenu.setAttribute('aria-hidden', isExpanded);
    });
  });
</script>
*/
const dropdownsbtns = document.querySelectorAll(".MuiSvgIcon-fontSizeMedium");
// console.log(dropdownsbtns);

dropdownsbtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // console.log("yeddd");
    // console.log(btn.closest(".MuiAccordionSummary-expandIconWrapper"));
    const closestParent = btn.closest(".MuiAccordionSummary-expandIconWrapper");
    closestParent.classList.toggle("Mui-expanded");

    const closebaseroot = btn.closest(".MuiButtonBase-root");
    // console.log(closebaseroot);
    const isbaseHidden = closebaseroot.getAttribute("aria-expanded") === "true";
    // console.log(isbaseHidden);
    closebaseroot.classList.toggle("Mui-expanded");
    closebaseroot.setAttribute("aria-expanded", !isbaseHidden);

    // const closecontent = btn.closest(".MuiAccordionSummary-content");
    // console.log(closecontent);
    // closecontent.classList.toggle("Mui-expanded");

    const isHidden = btn.getAttribute("aria-hidden") === "true";
    // console.log(isHidden);

    btn.setAttribute("aria-hidden", !isHidden);
    // console.log(btn);

    const iconparent = btn.parentElement;
    const parentsibing =
      iconparent.previousElementSibling.previousElementSibling;
    // console.log(iconparent);

    //#endregion

    parentsibing.classList.toggle("Mui-expanded");
    // console.log(closebaseroot.nextElementSibling.nextElementSibling);

    const collapsedcontenet =
      closebaseroot.nextElementSibling.nextElementSibling;

    const collapsecontent = function () {
      collapsedcontenet.classList.toggle("MuiCollapse-entered");
      collapsedcontenet.classList.toggle("MuiCollapse-hidden");

      collapsedcontenet.classList.toggle("css-c4sutr");
      collapsedcontenet.classList.toggle("css-a0y2e3");

      collapsedcontenet.classList.toggle("animate");
      collapsedcontenet.classList.toggle("unanimate");

      // <<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
      // collapsedcontenet.style.height =
      //   collapsedcontenet.style.height === "0" ? "auto" : "0";
      // if (collapsedcontenet.style.height === "0") {
      //   collapsedcontenet.style.height = "auto";
      //   // setTimeout(() => {
      //   //   collapsedcontenet.style.height = "auto";
      //   // }, 300)

        // console.log();
      // } else {
      //   collapsedcontenet.style.height = "0";
      //   // setTimeout(() => {
      //   //   collapsedcontenet.style.height = "0";
      //   // }, 300);
      // }
      // // <<<<<<<  50ffda9e-92c4-4754-8b64-57c07962de8a  >>>>>>>
      // if (collapsedcontenet.style.height === "auto") {
      //   collapsedcontenet.style.height = "0";
      // }
    };
    // console.log(collapsedcontenet.parentElement);
    collapsecontent();
    // console.log(closecontent.parentElement.nextElementSibling)
  });
});
// console.log("djdi");

// const dropdownsvg = document.querySelector(".customIcon");
// console.log(dropdownsvg.closest(".MuiAccordionSummary-expandIconWrapper"));
// dropdownsvg.addEventListener("click", function (event) {
  // console.log("Clicked on svg");
//   // event.target
//   //   .closest(".MuiAccordionSummary-expandIconWrapper")
//   //   .classList.toggle("Mui-expanded");
  // console.log(event);
  // console.log(event.target.closest(".MuiAccordionSummary-expandIconWrapper"));
// });
// console.log("djdi");
//So ii need a ja thats toggles the aria-expanded attribute tp fals and true, and also ads and removes the Mui-exppanded class. It adds it to to the two divs that have this class:
