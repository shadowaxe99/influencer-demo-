```javascript
import React from 'react';
import { Line } from 'react-chartjs-2';

const PerformanceMetricsDisplay = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Performance Metrics',
                data: data.map(item => item.value),
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="metricsDisplay">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default PerformanceMetricsDisplay;
```