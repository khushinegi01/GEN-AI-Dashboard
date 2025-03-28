import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "../redux/querySlice";

const QUERY_SUGGESTIONS = [
  "What were the total sales in Q1 2024?",
  "Show me the revenue trend for the last 6 months.",
  "Which product had the highest sales last year?",
  "How many new customers signed up this month?",
  "Which region has the highest customer retention rate?",
  "What is the most common reason for customer complaints?",
  "How has customer acquisition cost changed over the past year?",
  "How many website visitors converted into paying customers this month?",
  "Show me the monthly revenue trend for the last 12 months.",
  "Which day of the week has the highest sales volume?",
  "How many support tickets were resolved this week?"
];

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      setFilteredSuggestions(
        QUERY_SUGGESTIONS.filter((q) =>
          q.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleQuerySubmit = () => {
    if (query.trim() !== "") {
      dispatch(addQuery(query));
      setQuery("");
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="bg-white text-indigo-950 p-6 shadow-lg rounded-lg w-3/4 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Ask a Business Query</h2>
      
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Type your query..."
        />

        {filteredSuggestions.length > 0 && (
          <ul className="absolute w-full bg-white border mt-1 rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setQuery(suggestion);
                  setFilteredSuggestions([]);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={handleQuerySubmit}
        className="mt-4 bg-orange-400 text-white w-full py-3 rounded-md hover:bg-orange-500 transition"
      >
        Submit Query
      </button>
    </div>
  );
};

export default QueryInput;
