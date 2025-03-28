import { useSelector, useDispatch } from "react-redux";
import { removeQuery } from "../redux/querySlice";
import { useState } from "react";

const QueryHistory = ({ setQueryInput }) => {
  const queries = useSelector((state) => state.query.queries);
  const dispatch = useDispatch();
  const [expandedQuery, setExpandedQuery] = useState(null);

  const handleClick = (query) => {
    setQueryInput(query);
  };

  const handleDelete = (index) => {
    dispatch(removeQuery(index));
  };

  return (
    <div className="w-1/4 bg-slate-800 text-indigo-950 shadow-lg p-4 rounded-lg mx-auto max-h-screen">
      <h2 className="text-lg font-semibold mb-4 text-slate-400">Query History</h2>

      {queries.length === 0 ? (
        <p className="text-gray-100">No past queries yet.</p>
      ) : (
        <ul className="space-y-2">
          {queries.map((query, index) => {
            const isExpanded = expandedQuery === index;
            return (
              <li
                key={index}
                className={`bg-gray-300 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-400 hover:text-slate-950 transition flex justify-between items-center ${
                  isExpanded ? "whitespace-normal break-words" : "truncate"
                }`}
                onClick={() => setExpandedQuery(isExpanded ? null : index)} 
              >
                <span onClick={() => handleClick(query)} className="flex-grow">
                  {query}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleDelete(index);
                  }}
                  className="text-red-500 hover:text-red-700 ml-3"
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
