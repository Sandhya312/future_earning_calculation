import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import { calculateInterest } from '../../utils/calculate';




const PieChart = ({details}) => {


    const data = {
        labels: ["Principal Amount", "Total Interest"],
        datasets: [
            {
                data: [details.loanAmount,calculateInterest(Number(details.loanAmount),Number(details.interest),Number(details.loanDuration),Number(details.courseDuration),Number(details.gracePeriod))],
                backgroundColor: [
                    '#E34731',
                    '#36A2EB',
                ],
                hoverBackgroundColor: [
                    '#E34731',
                    '#36A2EB',
                ]
            }
        ]
    }

    const config = {
        type: 'pie',
        data: data,
        options: {
          responsive: true
        },
    };

    return (
        <>
            <Pie data = {data} options={config.options}/>
        </>
        
    )
}

export default PieChart

