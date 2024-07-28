let circle = document.querySelector("#circle");
// let frames = document.querySelector("#frames");
let frame = document.querySelector(".frame");

window.addEventListener("mousemove", (details) => {
  gsap.to("#circle", {
    x: details.clientX,
    y: details.clientY,
    duration: 0.3,
    ease: Expo,
  });
});

frame.addEventListener("mousemove", () => {
  let dims = frame.getBoundingClientRect(); //it will gives us the dimensions
  let start = dims.x;
  console.log(start);
  let end = dims.x + dims.width; // as we know the starting point and the width so we are able to initilize the ending point
  console.log(end);
  gsap.to("#circle", {
    scale: 16,
    duration: 0.3,
    ease: Expo,
  });

  gsap.to(".frame span", {
    color: "#fff",
    duration: 0.3,
    ease: Expo,
  });

  gsap.to(".frame span", {
    y: "-100%",
    duration: 0.3,
    ease: Expo,
  });
});

frame.addEventListener("mouseleave", () => {
  gsap.to("#circle", {
    scale: 1,
    duration: 0.3,
    ease: Expo,
  });

  gsap.to(".frame span", {
    color: "#000",
    duration: 0.3,
    ease: Expo,
  });

  gsap.to(".frame span", {
    y: 0,
    duration: 0.3,
    ease: Expo,
  });
});

// frames.forEach((frame) => {

//   frame.addEventListener("mousemove", () => {
//     gsap.to("#circle", {
//       scale: 12,
//       duration: 0.3,
//       ease: Expo,
//     });

//     gsap.to(frame.children, {
//       color: "#fff",
//       duration: 0.3,
//       ease: Expo,
//     });

//     gsap.to(frame.children, {
//       y: "-100%",
//       duration: 0.3,
//       ease: Expo,
//     });
//   });

//   frame.addEventListener("mouseleave", () => {
//     gsap.to("#circle", {
//       scale: 1,
//       duration: 0.3,
//       ease: Expo,
//     });

//     gsap.to(frame.children, {
//       color: "#000",
//       duration: 0.3,
//       ease: Expo,
//     });

//     gsap.to(frame.children, {
//       y: 0,
//       duration: 0.3,
//       ease: Expo,
//     });
//   });
// });
