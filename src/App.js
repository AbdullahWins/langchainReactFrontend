import { useEffect, useState } from "react";
import "cal-sans";
import axios from "axios";
import { themeChange } from "theme-change";

function App() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    themeChange(false);
  }, []);

  // Function to send data to server.js when the submit button is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        data: e.target[0].value,
      };
      const axiosResponse = await axios.post(
        process.env.REACT_APP_LANGCHAIN_BACKEND_BASE_URL,
        requestData
      );
      console.log("Response:", axiosResponse.data);
      setResponse(axiosResponse.data);
    } catch (error) {
      console.error("Error submitting data:", error);
      setError(
        "An error occurred while submitting the data. Please try again."
      );
    }
  };

  // Function to render the response from server.js
  const renderPoints = () => {
    const points = response.split("\n").map((point, index) => {
      return <div key={index}>{point}</div>;
    });
    return points;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <select className="gradientselect select select-sm" data-choose-theme>
          <option disabled value="">
            Pick a theme
          </option>
          <option value="">Default</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="valentine">Valentine</option>
          <option value="cyberpunk">Cyberpunk</option>
        </select>
        <h1 className="text-3xl font-bold py-6">Company Name Generator AI</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-6"
        >
          <input
            className="input input-bordered w-72"
            type="text"
            placeholder="what the company is about?"
          />
          <button className="btn btn-sm normal-case" type="submit">
            Generate
          </button>
        </form>
        <div className="text-center">{renderPoints()}</div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
}

export default App;
