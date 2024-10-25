window.onload = () => {
  const titlesBtn = document.getElementById('titles-btn');
  const titlesOutput = document.getElementById('titles-output');

  async function getTitles() {
    const url = '/titles';
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
  }

  titlesBtn.onclick = () => getTitles();
}
