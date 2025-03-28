import QueryInput from "../components/QueryInput";
import QueryHistory from "../components/QueryHistory";
import ResultDisplay from "../components/ResultDisplay";

const Dashboard = () => {
  return (
    <div className="p-6 mx-auto min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-800 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-400">Gen AI Query Dashboard</h1>

      <div className="flex gap-6">
        <QueryHistory/>
        <div className="flex-grow flex flex-col gap-6">
          <QueryInput/>
          <ResultDisplay/>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
