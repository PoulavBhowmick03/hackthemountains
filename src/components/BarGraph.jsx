"use client";
import React from "react";

const BarGraph = ({ apiResponse }) => {
    if (!apiResponse || !apiResponse.scores) {
      return null;
    }
  
    const maxScore = Math.max(...apiResponse.scores);
  
    return (
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">API Response:</h3>
        <ul className="flex flex-wrap justify-between">
          {apiResponse.labels.map((label, index) => (
            <li key={index} className="w-1/3">
              <p className="text-gray-800">{label}</p>
              <div className="progress-bar h-2 bg-blue-100">
                <div
                  className="progress-bar-fill bg-blue-600"
                  style={{ width: `${apiResponse.scores[index] / maxScore * 100}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default BarGraph;
