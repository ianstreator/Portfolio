export default async function wakaStats() {
  console.log("hitting");
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch("http://localhost:4000/waka", options);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
