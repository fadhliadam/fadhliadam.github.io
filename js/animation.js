// Wrap every letter in a span
var textWrapper = document.querySelector(".anim-name .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime
  .timeline({ loop: true, direction: "alternate" })
  .add({
    targets: ".anim-name .line",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 250,
    endDelay: 300,
  })
  .add({
    targets: ".anim-name .line",
    translateX: [0, document.querySelector(".anim-name .letters").getBoundingClientRect().width + 10],
    duration: 700,
    easing: "spring(1, 75, 10, 0)",
  })
  .add(
    {
      targets: ".anim-name .letter",
      opacity: [0, 1],
      translateX: [60, 0],
      translateZ: 0,
      scaleX: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 150 + 25 * i,
      endDelay: 1500,
    },
    "-=1675"
  )
  .add(
    {
      targets: ".anim-name .line",
      opacity: [1, 0],
      easing: "easeInOutQuad",
      duration: 250,
    },
    "-=100"
  );
