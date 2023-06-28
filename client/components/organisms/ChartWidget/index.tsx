import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartWidget = () => {
  const data = {
    labels: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    datasets: [
      {
        label: "Kpis",
        data: [234, 345, 321, 412, 435, 543, 300],
        fill: "start",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "white");
          gradient.addColorStop(1, "#52D3ED");
          return gradient;
        },
        borderColor: "white",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    interaction: {
      intersect: true,
    },
  };

  return (
    <div className="w-full p-8 rounded-2xl bg-sky text-white">
      <Line data={data} height={"365px"} options={options} />
    </div>
  );
};

export { ChartWidget };
