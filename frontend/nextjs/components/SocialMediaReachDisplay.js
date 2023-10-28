```javascript
import React from 'react';
import { Bar } from 'react-chartjs-2';

const SocialMediaReachDisplay = ({ data }) => {
  const chartData = {
    labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
    datasets: [
      {
        label: 'Social Media Reach',
        data: data,
        backgroundColor: [
          'rgba(59, 89, 152, 0.6)',
          'rgba(85, 172, 238, 0.6)',
          'rgba(228, 64, 95, 0.6)',
          'rgba(0, 119, 181, 0.6)'
        ],
        borderColor: [
          'rgba(59, 89, 152, 1)',
          'rgba(85, 172, 238, 1)',
          'rgba(228, 64, 95, 1)',
          'rgba(0, 119, 181, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <div className="socialMediaDisplay">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SocialMediaReachDisplay;
```