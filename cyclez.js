document.addEventListener("DOMContentLoaded", () => {
      const colors = [
        "#B7975D",
        "#AFA7D6",
        "#CFBA28",
        "#4AD231"
      ];

      const images = [
        "images/EXOTIC_MANIFOLD.webp",
        "images/5430.webp",
        "images/6089.webp",
        "images/5296.webp",
        "images/2816.webp",
        "images/0489.webp",
      ];

      const pic = document.getElementById("a_pic")
      let i = 0, j = 0;
      
      function cyclez_bg() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
      }

      function cyclez_img() {
        if (!pic) return;
        pic.src = images[j];
        j = (j + 1) % images.length;
      }
      cyclez_bg();
      setInterval(cyclez_bg, 7000);
      if (pic) {
        cyclez_img();
        setInterval(cyclez_img, 4000);
      }
    });
