const stats_container = document.getElementById("waka_stats");
const URL = window.location.href;
export default async function wakaStats() {
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(`${URL}waka`, options);
    const data = await res.json();
    if (data.data.best_day === null) {
      return null;
    } 
    const langs = data.data.languages;
    for (let i = 0; i < 4; i++) {
      const language = langs[i];
      const br = document.createElement("br");
      const status = document.createElement("div");
      status.style.cssText = `height:1rem; width:${
        language.percent * 2
      }px; background-color: white;`;
      stats_container.append(language.name, status);
      stats_container.append(br);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}
