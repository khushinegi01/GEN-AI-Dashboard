import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const QueryChart = () => {
  const result = useSelector((state) => state.query.result);

  if (!result) {
    return (
      <p className="text-gray-500 text-center mt-6">
        Submit a query to see results.
      </p>
    );
  }

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-3/4 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Query Result</h2>
      
      <div className="h-72">
        <Bar
          data={result}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default QueryChart;
