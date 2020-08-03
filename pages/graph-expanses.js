let ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Abril",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Abril",
        backgroundColor: "green",
        borderColor: "green",
        data: [40, 100, 53, 12, 80, 3, 2],
      }
    ],
  },
  options: {},
});


function goHome() {
  window.history.back();
}

function changeGraph(filter) {

}
