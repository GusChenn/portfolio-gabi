export let setInnerHtmlWithTransition = (element, newInnerHtml) => {
  if (element.innerHTML === newInnerHtml) return;

  let startHeight = element.clientHeight + "px";

  element.innerHTML = newInnerHtml;
  element.clientHeight; // Force a reflow (sync layout)

  let endHeight = element.clientHeight + "px";

  // Set the initial height and transition property
  element.style.height = startHeight;
  element.style.transition = "height 0.5s ease-out";

  element.clientHeight; // Force a reflow (sync layout)

  // Set the final height
  element.style.height = endHeight;

  // Remove the transition property and fixed height after the transition ends
  element.addEventListener(
    "transitionend",
    function() {
      element.style.transition = "";
      element.style.height = "";
    },
    { once: true },
  );
};
