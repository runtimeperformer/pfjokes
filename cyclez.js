document.addEventListener("DOMContentLoaded", () => {
      const colors = [
        "#B7975D",
        "#AFA7D6",
        "#CFBA28",
        "#4AD231"
      ];

      const images = [
        "EXOTIC_MANIFOLD.png",
        "IMG_5430.JPG",
        //"IMG_5333.JPG",
        "IMG_6089.jpeg",
        "IMG_5296.png",
        //"IMG_3831.png",
        "IMG_2816.png",
        "IMG_0489.png",
        //"IMG_0046.png",
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
