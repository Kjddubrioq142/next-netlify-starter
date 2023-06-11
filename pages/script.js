document.onvisibilitychange = function() {
  if (document.visibilityState === 'hidden') {
    alert("test");
  }
};
