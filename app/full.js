//full.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { StartHome } from './home';
export default function Full() {
  const [csvData, setCsvData] = useState([]);
  const [T, setT] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/NEWschedule.csv');
        const text = await response.text();
        var parsedData = Papa.parse(text, { header: true }).data;
        const weekday = new Date().getDay();
        var excludeColumns = {
          0: [0,1,2,3],   //Sun
          1: [1,4],         //Mon
          2: [1,4],         //Tue
          3: [1,4],         //Wed
          4: [1,4],         //Thu
          5: [1,4],         //Fri
          6: [0,3],       //Sat
        };
        const excludedColumnIndices = excludeColumns[weekday];
const filteredData = parsedData.map(row => {
  const newRow = {};
  Object.keys(row).forEach((key, index) => {
    if (!excludedColumnIndices.includes(index)) {
      newRow[key] = row[key];
    }
  });
  return newRow;
});
        setCsvData(filteredData);
        updateT(filteredData);
      } catch (error) {
        console.error('Error fetching CSV file:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 30000);

    return () => {
      clearInterval(intervalId);
      
    };

  }, []);

  const updateT = (data) => {
    const range = Array.from({length:5},(_,index)=>{
      return data.reduce((acc, row) => {
        if (isTimePassed(row[Object.keys(row)[index]]))acc++;
        return acc;
      }, 0);
    });
    const adjustedRange = range.map(value => Math.max(...range) - value);
    setT({
      A: adjustedRange[0],
      B: adjustedRange[1],
      C: adjustedRange[2],
      D: adjustedRange[3],
      E: adjustedRange[4]
    });
  };
  
  const isTimePassed = (time) => {
    if (!time || typeof time === 'object') return false;
    const [hours, minutes] = String(time).split(':').map(Number);
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    return currentHours > hours || (currentHours === hours && currentMinutes >= minutes);
  };

  return (
    <div className="full">
      <style>{`
        .full tr td:nth-child(1){transform:translateY(calc(25px*${T.A}))}
        .full tr td:nth-child(2){transform:translateY(calc(25px*${T.B}))}
        .full tr td:nth-child(3){transform:translateY(calc(25px*${T.C}))}
        .full tr td:nth-child(4){transform:translateY(calc(25px*${T.D}))}
        .full tr td:nth-child(5){transform:translateY(calc(25px*${T.E}))}
      `}</style>
      <table>
        <thead>
          <tr>{csvData.length>0&&Object.keys(csvData[0]).map((h,i) =><th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
        {csvData.map((r, i) => (
  <tr key={i}>
    {Object.entries(r).map(([k, v]) => {
      const isAlreadyGreyedOut = v && v.classList && v.classList.contains('greyed-out');
      return (
        <td key={k} className={isAlreadyGreyedOut ? 'greyed-out' : isTimePassed(v) ? 'greyed-out' : ''}>{v}</td>
      );
    })}
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
}
