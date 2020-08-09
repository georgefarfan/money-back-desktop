let ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "January",
        backgroundColor: getRandomColor(),
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "February",
        backgroundColor: getRandomColor(),
        data: [40, 100, 53, 12, 80, 3, 2],
      },
      {
        label: "March",
        backgroundColor: getRandomColor(),
        data: [60, 16, 63, 12, 28, 63, 82],
      },
      {
        label: "April",
        backgroundColor: getRandomColor(),
        data: [40, 103, 42, 43, 55, 3, 2],
      },
      {
        label: "May",
        backgroundColor: getRandomColor(),
        data: [40, 10, 43, 53, 8, 33, 2],
      },
      {
        label: "June",
        backgroundColor: getRandomColor(),
        data: [4, 1, 33, 12, 80, 3, 2],
      },
      {
        label: "July",
        backgroundColor: getRandomColor(),
        data: [40, 10, 5, 312, 80, 3, 2],
      }
    ],
  },
  options: {},
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function goHome() {
  window.history.back();
}

function changeGraph(filter) {

}

function loadExpenses() {
  const fetchPromiseExpanses = fetch(`http://localhost:4000/list`);
  fetchPromiseExpanses.then(response => {
    return response.json();
  }).then(expanses => {
    console.log("Expanses => ", expanses);
  });
}