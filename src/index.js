import Chart from "chart.js";
const ctx = document.querySelector("#myChart");
import selectionSort from "./selection";
import insetionSort from "./insertion";
import bubbleSort from "./bubble";
import mergeSort from "./merge";
import quickSort from "./quick";

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [],
      },
    ],
  },

  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

function addData(chart, data) {
  chart.data.datasets.map((dataset) => {
    dataset.data.push(data);
    chart.data.labels.push(data);
  });

  chart.update();
}

function updateData(chart, arr, label = "") {
  chart.data.datasets.map((dataset) => {
    dataset.label = label;
    dataset.data = arr;
  });
  chart.data.labels = arr;
  chart.update();
}

document.querySelector("#add").addEventListener("click", () => {
  const data = Math.floor(Math.random() * 1000) + 1;
  addData(chart, data);
});

document.querySelector("#add50").addEventListener("click", () => {
  for (let i = 0; i <= 50; i++) {
    const data = Math.floor(Math.random() * 1000) + 1;
    addData(chart, data);
  }
});

document.querySelector("#random").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  updateData(chart, arr);
});

document.querySelector("#bubble").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  const bubble = bubbleSort(arr);
  updateData(chart, bubble, "Bubble Sort");
});

document.querySelector("#selection").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  const selection = selectionSort(arr);
  updateData(chart, selection, "Selection Sort");
});

document.querySelector("#insertion").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  const insertion = insetionSort(arr);
  updateData(chart, insertion, "Insertion Sort");
});

document.querySelector("#merge").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  const merge = mergeSort(arr);
  updateData(chart, merge, "Merge Sort");
});

document.querySelector("#quick").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  const quick = quickSort(arr);
  updateData(chart, quick, "Quick Sort");
});
