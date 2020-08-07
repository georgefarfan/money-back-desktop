
function goHome() {
  window.history.back();
}

function addExpense() {
  let amount = document.newExpense.amount.value;
  let user = document.newExpense.user.value;
  let name = document.newExpense.name.value;
  let date = document.newExpense.date.value;
  let type = document.newExpense.typeExpense.value;
  var data = {
    user: user,
    amount: Number(amount),
    name: name,
    date: date,
    type: type
  }
  console.log("DATA => ", data);
  fetch("http://localhost:4000/addExpense", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      console.log(data);
    });
}
