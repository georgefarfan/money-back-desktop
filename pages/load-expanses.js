"use strict";

function goHome() {
  window.history.back();
}

function detectChanges() {
  console.log("Changes ...");
  let amount = document.newExpense.amount.value;
  let user = document.newExpense.user.value;
  let name = document.newExpense.name.value;
  let date = document.newExpense.date.value;
  let type = document.newExpense.typeExpense.value;
  document.getElementById("btnNewExpense").disabled = !(
    amount !== "" &&
    user !== "" &&
    name !== "" &&
    date !== "" &&
    type !== ""
  );
}

function showLoading() {
  document.getElementById("load-expenses").className = "disabled-block";
  document.getElementById("loader").style.display = "block";
}

function hideLoading() {
  document.getElementById("load-expenses").className = "enabled-block";
  document.getElementById("loader").style.display = "none";
}

document
  .getElementById("btnNewExpense")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let amount = document.newExpense.amount.value;
    let user = document.newExpense.user.value;
    let name = document.newExpense.name.value;
    let date = document.newExpense.date.value;
    let type = document.newExpense.typeExpense.value;
    let description = document.newExpense.description.value;

    let data = {
      user,
      amount: Number(amount),
      name,
      date,
      type,
      description,
      state: "uncharged",
    };

    showLoading();
    fetch("http://localhost:4000/addExpense", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        hideLoading();
        configtToast();
        setTimeout(() => {
          hideToast();
        }, 5000);
      });
  });

function hideToast() {
  document.getElementById("my-toast").style.display = "none";
}

function configtToast() {
  document.getElementById("my-toast").style.display = "block";
  document.getElementById("toast-title").innerHTML = "Exito !!!";
  document.getElementById("toast-content").innerHTML = "Se guardo el gasto.";
}
