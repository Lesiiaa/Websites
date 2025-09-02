//nie zapsiuje pozycji przegladania
window.history.scrollRestoration = "manual";

//po odswiezeniu, przewin do gory
function scrollToTopOnRefresh() {
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });
}

scrollToTopOnRefresh();

