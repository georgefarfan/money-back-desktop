const environment = import("../environments/environment-local.js");
console.log("ENV => ", environment);
function goHome() {
  window.history.back();
}

function clearRows() {
  document.querySelectorAll("table tbody tr").forEach(function (e) { e.remove() })
}

function loadExpenses() {
  const fetchPromiseExpanses = fetch(`http://localhost:4000/list`);
  fetchPromiseExpanses.then(response => {
    return response.json();
  }).then(expanses => {
    clearRows();
    let nodeTbody = document.getElementsByTagName("tbody");
    expanses.forEach((item, index) => {
      let tr = document.createElement('tr');
      let elements = [
        createTH(item.user),
        createTH(item.amount),
        createTH(item.name),
        createTH(item.date),
        createTH(item.type)];
      elements.forEach(element => {
        tr.appendChild(element);
      })
      nodeTbody[0].appendChild(tr);
    });
  });
}

function createTH(text) {
  let th = document.createElement('th');
  let thText = document.createTextNode(text);
  th.appendChild(thText);
  return th;
}

loadExpenses();

