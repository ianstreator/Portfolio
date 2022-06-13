import technologies from "../images/export.js";


export default function cardSkills() {
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
}
