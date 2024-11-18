window.onload = () => {
  const titlesBtn = document.getElementById('titles-btn');
  const pageOutput = document.getElementById('page-output');
  const subBtn = document.getElementById('sub-btn');

  async function getTitles() {
    const url = '/titles';
    const res = await fetch(url);
    const data = await res.json();
    pageOutput.innerText = '';
    const output = data.forEach(e => {
      element = document.createElement('p');
      pageOutput.appendChild(element)
      element.innerText = e
    })
    return output
  }

  titlesBtn.onclick = () => getTitles();

  async function getSubseries() {
    const url = '/subseries';
    const res = await fetch(url);
    const data = await res.json();
    pageOutput.innerText = '';
    const output = data.forEach(e => {
      element = document.createElement('p');
      pageOutput.appendChild(element)
      element.innerText = e
    })
    }
  
    subBtn.onclick = () => getSubseries();
}
