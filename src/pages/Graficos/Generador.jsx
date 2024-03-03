import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';


const ChartComponent = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [chartData, setChartData] = useState({});
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleAddData = () => {
      const newData = parseFloat(inputValue);
      if (!isNaN(newData)) {
        setData([...data, newData]);
        setInputValue('');
      } else {
        alert('Por favor, introduce un número válido.');
      }
    };
  
    const generateChartData = () => {
      setChartData({
        labels: data.map((_, index) => index + 1),
        datasets: [
          {
            label: 'Datos',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      });
    };
  
    return (
      <div>
        <h2>Generador de gráficos de tabla</h2>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Introduce un número"
          />
          <button onClick={handleAddData}>Añadir</button>
        </div>
        <div>
          <button onClick={generateChartData}>Generar gráfico</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          {data.length > 0 && (
            <Line
              data={chartData}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                  xAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: 'Muestras',
                      },
                    },
                  ],
                  yAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: 'Valor',
                      },
                    },
                  ],
                },
              }}
            />
          )}
        </div>
      </div>
    );
  };
  
  export default ChartComponent;
  