

const { ipcRenderer } = require("electron");

function openNewExpense() {
  window.location.href = "./pages/load-expanse.html";
}

function openShowExpense() {
  window.location.href = "./pages/list-expanse.html";
}

function openClosesExpense() {
  window.location.href = "./pages/liquidated-expanses.html";
}

function openGraphExpenses() {
  window.location.href = "./pages/graph-expanses.html";
}

setTimeout(() => {
  ipcRenderer.send("firebase-signin", {
    user: "jorge.farfan@live.com.ar",
    password: "Stichjor1990"
  });
}, 2000);