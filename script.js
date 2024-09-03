"use strict";

const dropdownsbtns = document.querySelectorAll(".MuiSvgIcon-fontSizeMedium");

dropdownsbtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const closestParent = btn.closest(".MuiAccordionSummary-expandIconWrapper");
    closestParent.classList.toggle("Mui-expanded");

    const closebaseroot = btn.closest(".MuiButtonBase-root");
    const isbaseHidden = closebaseroot.getAttribute("aria-expanded") === "true";
    closebaseroot.setAttribute("aria-expanded", !isbaseHidden);

    const isHidden = btn.getAttribute("aria-hidden") === "true";

    btn.setAttribute("aria-hidden", !isHidden);

    const iconparent = btn.parentElement;
    const parentsibing =
      iconparent.previousElementSibling.previousElementSibling;

    parentsibing.classList.toggle("Mui-expanded");

    const collapsedcontenet =
      closebaseroot.nextElementSibling.nextElementSibling;

    const collapsecontent = function () {
      collapsedcontenet.classList.toggle("MuiCollapse-entered");
      collapsedcontenet.classList.toggle("MuiCollapse-hidden");

      collapsedcontenet.classList.toggle("css-c4sutr");
      collapsedcontenet.classList.toggle("css-a0y2e3");

      collapsedcontenet.classList.toggle("animate");
      collapsedcontenet.classList.toggle("unanimate");
    };
    collapsecontent();
  });
});
