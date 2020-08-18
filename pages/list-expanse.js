"use strict";

const environment = import("../environments/environment-local.js");

console.log("ENV => ", environment);
function goHome() {
  window.history.back();
}

function clearRows() {
  document.querySelectorAll("table tbody tr").forEach(function (e) {
    e.remove();
  });
}

function loadExpenses() {
  const fetchPromiseExpanses = fetch(`http://localhost:4000/list`);
  fetchPromiseExpanses
    .then((response) => {
      return response.json();
    })
    .then((expanses) => {
      clearRows();
      let totalAmount = 0;
      let nodeTbody = document.getElementsByTagName("tbody");
      expanses.forEach((item, index) => {
        let tr = document.createElement("tr");
        let elements = [
          createTH(item.user),
          createTH(`$ ${item.amount.toFixed(2)}`),
          createTH(item.name),
          createTH(moment(item.date).format("DD/MM/yyyy")),
          createTH(item.type),
          createTH(item.description),
        ];
        elements.forEach((element) => {
          tr.appendChild(element);
        });
        nodeTbody[0].appendChild(tr);
        totalAmount = totalAmount + item.amount;
      });
      document.getElementById(
        "totalAmount"
      ).innerHTML = `$ ${totalAmount.toFixed(2)}`;
    });
}

function createTH(text) {
  let th = document.createElement("th");
  th.className = "row-item";
  let thText = document.createTextNode(text);
  th.appendChild(thText);
  return th;
}

loadExpenses();

setTimeout(() => {
  let diff = moment().daysInMonth() - moment().date();
  let message =
    diff > 0
      ? `aún falta(n) ${diff} dia(s) para cerrar el mes de ${moment().format(
          "MMMM"
        )}`
      : ``;
  document.getElementById("notice").innerText = message;

  // <strong>Atención:</strong>
}, 3000);
