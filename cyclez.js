document.addEventListener("DOMContentLoaded", () => {
  const colors = ["#B7975D", "#AFA7D6", "#CFBA28", "#4AD231"];
  const images = [
    "images/EXOTIC_MANIFOLD.webp",
    "images/5430.webp",
    "images/6089.webp",
    "images/5296.webp",
    "images/2816.webp",
    "images/0489.webp",
  ];

  const cycle = (list, ms, fn) => {
    let i = 0;
    const step = () => { fn(list[i]); i = (i + 1) % list.length; };
    step();
    setInterval(step, ms);
  };

  cycle(colors, 7000, (c) => { document.body.style.backgroundColor = c; });

  const pic = document.getElementById("a_pic");
  if (pic) {
    images.forEach((src) => { new Image().src = src; });
    let first = true;
    cycle(images, 4000, (src) => {
      if (first) { pic.src = src; first = false; return; }
      pic.style.opacity = 0;
      setTimeout(() => {
        pic.src = src;
        pic.decode().catch(() => {}).then(() => { pic.style.opacity = 1; });
      }, 400);
    });
  }
});
