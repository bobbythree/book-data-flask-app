window.onload = () => {
  const titlesBtn = document.getElementById('titles-btn');
  const pageOutput = document.getElementById('page-output');
  const subBtn = document.getElementById('sub-btn');

  async function getTitles() {
    const url = '/titles';
    const res = await fetch(url);
    const data = await res.json();
    pageOutput.innerText = JSON.stringify(data, null, 2)
    // console.log(data)
  }

  titlesBtn.onclick = () => getTitles();

  async function getSubseries() {
    const url = '/subseries';
    const res = await fetch(url);
    const data = await res.json();
    pageOutput.innerText = JSON.stringify(data, null, 2)
      // console.log(data)
    }
  
    subBtn.onclick = () => getSubseries();
}
