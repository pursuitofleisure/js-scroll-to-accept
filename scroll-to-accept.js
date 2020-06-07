function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const button = document.querySelector('.accept');
  // const watch = document.querySelector('.watch');

  if (!terms) {
    return; // quit function because there is no terms
  }

  // fires on page load because can't find element
  function obCallback(payload) {
    // console.log(payload[0].isIntersecting); // whether element is in view or not
    // console.log(payload[0].intersectionRatio); // how much of the element is showing
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // stop observing the last element
      ob.unobserve(terms.lastElementChild);
    }
  }

  // takes in callback parameter
  // will be called every time it needs to check if something is currently on the page
  // watcher (needs to be told what to watch
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  // call observe method on what we want to watch
  // ob.observe(watch);
  ob.observe(terms.lastElementChild);

}

scrollToAccept();
