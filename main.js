import technologies from "./images/export.js";
const imageLink = technologies.preview;
// const og_img = document.createElement("meta")
const previewWebsite = document.getElementById("og_img");
const head = document.querySelector("head");
previewWebsite.content = imageLink;

head.append(og_img);
console.log(imageLink);

const mutedSkills = {};
const coloredSkills = {};

technologies.images.forEach((img) => {
  const imgName = img.split("/")[2].split(".")[0].split("(")[0];
  if (img.includes("()")) {
    coloredSkills[imgName] = img;
  } else {
    mutedSkills[imgName] = img;
  }
});

const card = document.getElementsByClassName("card");
Object.values(card).forEach((e) => {
  const cardSkills = e.children[1].children;

  e.addEventListener("mouseenter", () => {
    Object.values(cardSkills).forEach((a) => {
      const imgName = a.src.split("/")[4].split(".")[0].split("(")[0];
      a.src = coloredSkills[imgName];
    });
  });

  e.addEventListener("mouseleave", () => {
    Object.values(cardSkills).forEach((a) => {
      const imgName = a.src.split("/")[4].split(".")[0].split("(")[0];
      a.src = mutedSkills[imgName];
    });
  });
});

// const canvas = document.querySelector("canvas");
// const c = canvas.getContext("2d");

// const width = 400;
// const height = 400;

// canvas.width = width;
// canvas.height = height;

// function setVelocity() {
//   const X = Math.random() < 0.5 ? Math.random() : -Math.random();
//   const Y = Math.random() < 0.5 ? -Math.random() : Math.random();

//   const velocity = { x: X / 5, y: Y / 5 };
//   return velocity;
// }

// class Skill {
//   constructor(image, index, x, y, r, velocity, color, w, h, hover, imgOffset) {
//     (this.image = image),
//       (this.index = index),
//       (this.x = x),
//       (this.y = y),
//       (this.r = r),
//       (this.velocity = velocity),
//       (this.color = color),
//       (this.w = w),
//       (this.h = h),
//       (this.hover = hover),
//       (this.imgOffset = imgOffset);
//   }
//   draw() {
//     this.update();
//     c.beginPath();
//     c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//     this.hover ? (c.fillStyle = this.color) : (c.strokeStyle = this.color);
//     c.lineWidth = 2;
//     this.hover ? c.fill() : c.stroke();
//     c.drawImage(
//       this.image,
//       this.x - this.imgOffset,
//       this.y - this.imgOffset,
//       this.w,
//       this.h
//     );
//   }
//   update() {
//     this.x += this.velocity.x;
//     this.y += this.velocity.y;

//     const mouse_dist_skill = Math.hypot(
//       canvasMouseY - this.y,
//       canvasMouseX - this.x
//     );
//     const skill_dist_border = Math.hypot(
//       height / 2 - this.y,
//       width / 2 - this.x
//     );

//     const otherSkills = skills.filter((e) => e.image !== this.image);
//     otherSkills.forEach((e) => {
//       const skill_dist_skill = Math.hypot(e.y - this.y, e.x - this.x);
//       const angle = Math.atan2(e.y - this.y, e.x - this.x);

//       if (skill_dist_skill < this.r + e.r) {
//         this.velocity.x = -Math.cos(angle) * 1.25;
//         this.velocity.y = -Math.sin(angle) * 1.25;
//       }
//     });

//     if (skill_dist_border > width / 2 - this.r) {
//       const angle = Math.atan2(height / 2 - this.y, width / 2 - this.x);
//       this.velocity.x = Math.cos(angle) / 5;
//       this.velocity.y = Math.sin(angle) / 5;
//     }

//     if (mouse_dist_skill < this.r) {
//       this.velocity.x = 0;
//       this.velocity.y = 0;
//       if (this.w < 100) {
//         this.w += 1;
//         this.h += 1;
//         this.r += 0.5;
//         this.imgOffset += 0.5;
//       }
//       this.color = "#dee2e6";
//       this.hover = true;
//       this.image.src = coloredSkills[this.index];
//     } else {
//       if (this.velocity.x === 0) {
//         this.velocity = setVelocity();
//       }
//       if (this.w > 50) {
//         this.w -= 1;
//         this.h -= 1;
//         this.r -= 0.5;
//         this.imgOffset -= 0.5;
//       }
//       this.color = "rgba(0,0,0,0)";
//       c.shadowBlur = 0;
//       this.hover = false;
//       this.image.src = mutedSkills[this.index];
//     }
//     if (skill_dist_border > width / 2 + this.r) {
//       this.x = width / 2;
//       this.y = height / 2;
//     }
//   }
// }
// let x = 0;
// let y = height / 2;

// const skills = Object.values(mutedSkills).map((e, i) => {
//   const imgName = e.split("/")[2].split(".")[0].split("(")[0];
//   const img = document.createElement("img");
//   img.src = e;
//   x += canvas.width / 7.5;
  

//   const skill = new Skill(
//     img,
//     imgName,
//     x,
//     y,
//     25,
//     setVelocity(),
//     "black",
//     50,
//     50,
//     false,
//     25
//   );
//   return skill;
// });

// let canvasMouseX = null;
// let canvasMouseY = null;

// canvas.addEventListener("mousemove", (e) => {
//   const mouseX = e.clientX - canvas.getBoundingClientRect().x;
//   const mouseY = e.clientY - canvas.getBoundingClientRect().y;
//   canvasMouseX = mouseX;
//   canvasMouseY = mouseY;
// });
// setInterval(() => {
//   c.fillStyle = "#4A5566";
//   c.fillRect(0, 0, width, height);
//   skills.forEach((e) => {
//     e.draw();
//   });
// }, 25);

//.....divider shape fill....
const divider = document.getElementById("divider");

const clientWidth = window.innerWidth * 2;
const clientHeight = divider.clientHeight;

const hexWidth = 104;
const hexHeight = 120;

for (let i = 0; i * hexHeight < clientHeight * 1.5; i++) {
  if (i % 2 !== 0) {
    console.log("even");
    const row = document.createElement("div");
    row.classList.add("shapes", "even");
    for (let j = 0; j * hexWidth < clientWidth * 1.25; j++) {
      if (Math.random() < 0.5) {
        createHexagon2(row);
        continue;
      }
      createHexagon(row);
    }
  } else {
    console.log("odd");
    const row = document.createElement("div");
    row.classList.add("shapes", "odd");
    for (let j = 0; j * hexWidth < clientWidth * 1.25; j++) {
      if (Math.random() < 0.5) {
        createHexagon2(row);
        continue;
      }
      createHexagon(row);
    }
  }
}

function createHexagon2(row) {
  const hexWrap = document.createElement("div");
  hexWrap.classList.add("hexagon-wrapper");

  const hexTop = document.createElement("div");
  hexTop.classList.add("hexagon", "hex-top");
  hexTop.style.cssText = "border-bottom: 30px solid transparent;";

  const hexMid = document.createElement("div");
  hexMid.classList.add("hexagon", "hex-mid");
  hexMid.style.cssText = "background: transparent;";

  const hexBot = document.createElement("div");
  hexBot.classList.add("hexagon", "hex-bot");
  hexBot.style.cssText = "border-top: 30px solid transparent;";

  hexWrap.append(hexTop, hexMid, hexBot);
  row.append(hexWrap);
  divider.append(row);
}

function createHexagon(row) {
  const hexWrap = document.createElement("div");
  hexWrap.classList.add("hexagon-wrapper");

  const hexTop = document.createElement("div");
  hexTop.classList.add("hexagon", "hex-top");

  const hexMid = document.createElement("div");
  hexMid.classList.add("hexagon", "hex-mid");
  const hexShade = document.createElement("div");
  hexShade.classList.add("hex-shade");

  const hexBot = document.createElement("div");
  hexBot.classList.add("hexagon", "hex-bot");

  hexMid.append(hexShade);
  hexWrap.append(hexTop, hexMid, hexBot);
  row.append(hexWrap);
  divider.append(row);
}
