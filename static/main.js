window.onload = () => {
  const titlesBtn = document.getElementById('titles-btn');
  const pageOutput = document.getElementById('page-output');

  async function getTitles() {
    const url = '/titles';
    const res = await fetch(url);
    const data = await res.json();
    pageOutput.innerText = JSON.stringify(data, null, 2)
    // console.log(data)
  }

  titlesBtn.onclick = () => getTitles();
}
