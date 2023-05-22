import React, { useState } from "react";
import axios from "axios";

const LangChainChat = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  // Function to send data to server.js when the submit button is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        data: e.target[0].value,
      };
      const axiosResponse = await axios.post(
        `${process.env.REACT_APP_LANGCHAIN_BACKEND_BASE_URL}chat`,
        requestData
      );
      console.log("Response:", axiosResponse.data);
      setResponse(axiosResponse.data);
    } catch (error) {
      console.error("Error submitting data:", error);
      setError(
        "An error occurred while submitting the data. Please try again later."
      );
    }
  };

  console.log(response);

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <h1 className="text-3xl font-bold py-6">Chat With AI</h1>
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
      <div className="text-center">{response.response}</div>
      {/* <div className="text-center">{response}</div> */}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default LangChainChat;
