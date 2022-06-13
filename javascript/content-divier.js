const divider = document.getElementById("divider");

const clientWidth = window.innerWidth * 2;
const clientHeight = divider.clientHeight;

const hexWidth = 104;
const hexHeight = 120;

export default  function createDivider() {
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
