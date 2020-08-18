"use strict";

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

function signIn(mode) {
  let loginResponse = ipcRenderer.sendSync("firebase-signin", {
    user: "jorge.farfan@live.com.ar",
    password: "Stichjor1990",
  });
  console.log("RESPONSE LOGIN => ", loginResponse);
}

function detectChanges() {
  let user = document.logIn.user.value;
  let password = document.logIn.password.value;
  document.getElementById("btnLogin").disabled = !(
    user !== "" && password !== ""
  );
}
