function myCoode() {
  let circle = document.querySelector("#circle");
  let frames = document.querySelectorAll(".frame");
  let parent = document.querySelector(".frames");

  parent.addEventListener("mouseenter", () => {
    frames.forEach((frame) => {
      frame.addEventListener("mousemove", (details) => {
        // let dims = frame.getBoundingClientRect(); //it will gives us the dimensions
        // let start = dims.x;
        // console.log(start);
        // let end = dims.x + dims.width; // as we know the starting point and the width so we are able to initilize the ending point
        // console.log(end);
        let frameSpan = details.target.querySelectorAll("span");
        console.log(frameSpan);
        frameSpan.forEach((span) => {
          span.addEventListener("mouseenter", () => {
            gsap.to("#circle", {
              scale: 16,
              duration: 0.3,
              ease: Expo,
            });

            gsap.to(span, {
              color: "#fff",
              duration: 0.3,
              ease: Expo,
            });

            gsap.to(span, {
              y: "-100%",
              duration: 0.3,
              ease: Expo,
            });
          });
        });
      });

      frame.addEventListener("mouseleave", (details) => {
        let frameSpan = details.target.querySelectorAll("span");
        console.log(frameSpan);
        frameSpan.forEach((span) => {
          span.addEventListener("mouseleave", () => {
            gsap.to("#circle", {
              scale: 16,
              duration: 0.3,
              ease: Expo,
            });

            gsap.to(span, {
              color: "#00",
              duration: 0.3,
              ease: Expo,
            });

            gsap.to(span, {
              y: "0",
              duration: 0.3,
              ease: Expo,
            });
          });
        });
      });
    });
  });
}

const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", (details) => {
  gsap.to("#circle", {
    x: `${details.clientX - 10}px`,
    y: `${details.clientY - 10}px`,
    duration: 0.3,
    ease: "elastc.InOut(1,0.2)",
  });
});

let frames = document.querySelectorAll(".frame");
// let frame = document.querySelector(".frame");
frames.forEach((frame) => {
  frame.addEventListener("mousemove", (details) => {
    let dimensions = frame.getBoundingClientRect();
    xStart = dimensions.x;
    xEnd = dimensions.x + dimensions.width;

    let navDimensions = gsap.utils.mapRange(
      xStart,
      xEnd,
      0,
      1,
      details.clientX
    );

    // console.log();
    gsap.to("#circle", {
      scale: 8.5,
      ease: "Ease",
    });

    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.1,
      ease: "Power4.easeInOut",
      y: "-15vh",
    });

    gsap.to(frame.children, {
      x: lerp(-50, 50, navDimensions),
      duration: 0.2,
    });
  });

  frame.addEventListener("mouseleave", (details) => {
    gsap.to("#circle", {
      scale: 1,
      // duration: 0.5,
      ease: "Power4.easeInOut",
    });

    gsap.to(frame.children, {
      color: "#000",
      // duration: 1,
      ease: "Power4.easeInOut",
      y: 0,
    });

    gsap.to(frame.children, {
      x: 0,
      duration: 0.2,
    });
  });
});
