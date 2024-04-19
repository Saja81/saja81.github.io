const myChart = document.getElementById("myChart").getContext("2d");

const push = document.getElementById("push");
const pushValue = document.getElementById("pushvalue");
const pushLabel = document.getElementById("pushlabel");
push.addEventListener("click", pushValueChart);

const data = JSON.parse(localStorage.getItem("x"));
const label = JSON.parse(localStorage.getItem("y"));

// ---------------------------------------------------------

if (data === undefined || data === null) {
  // Om det inte finns data i localStorage hårdkodar jag data (data = träningspass & label = antal lyfta kilon). (V.1 P.1 = Vecka 1, Pass 1.)
  data = [
    "V.1 P.1",
    "V.1 P.2",
    "V.1 P.3",
    "V.1 P.4",
    "V.2 P.1",
    "V.2 P.2",
    "V.2 P.3",
    "V.2 P.4",
    "V.3 P.1",
    "V.3 P.2",
    "V.3 P.3",
    "V.3 P.4",
  ];
}

if (label === undefined || label === null) {
  label = [
    {
      label: "Kilo",
      data: [
        2325, 3720, 3190, 3920, 3170, 3290, 2760, 2570, 3200, 2645, 2330, 3290,
      ],
    },
  ];
}

// -------------------------------------------------------

const trainingVolumeChart = new Chart(myChart, {
  type: "line",
  data: {
    // Lägger in data från localstorage.
    labels: data,
    datasets: label,
  },
});

// ----------------------------------------------------------

// Nedan en funktion som tar data från input (pushLabel & pushValue) och pushar in det i data för träningspass och antal lyfta kilon.

function pushValueChart() {
  trainingVolumeChart.data.datasets[0].data.push(pushValue.value);
  trainingVolumeChart.data.labels.push(pushlabel.value);
  trainingVolumeChart.update();
  pushLabel.value = "";
  pushValue.value = "";

  // localStorage skapas nedan vilket sedan används på rad 8 & 9

  localStorage.setItem("x", JSON.stringify(trainingVolumeChart.data.labels));
  localStorage.setItem("y", JSON.stringify(trainingVolumeChart.data.datasets));
}
