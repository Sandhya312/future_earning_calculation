import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { calculateEmi, calculateSavings } from '../../utils/calculate';


const LineChart = ({details}) => {
    const emi = calculateEmi(Number(details.loanAmt),Number(details.interest),Number(details.loanDuration),Number(details.courseDuration),Number(details.gracePeriod))
    const years = Array.from({ length: details.years }, (_, i) => i + 1);
    const savings = years.map(year => calculateSavings(details.annualSalary, emi, year));
    
    const data = {
        labels: years,
        datasets: [
          {
            label: 'Savings over time',
            data: savings,
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
          },
          
        ],
    };

    const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
                position: 'bottom'
            }
          },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Savings'
                    }
                }
            }
        },
    };

    return (
        <>
            <Line data = {data} options={config.options} />
        </>
    )
}

export default LineChart
