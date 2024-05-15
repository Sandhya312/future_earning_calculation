import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import { calculateInterest } from '../../utils/calculate';




const PieChart = ({details}) => {


    const data = {
        labels: ["Principal Amount", "Total Interest"],
        datasets: [
            {
                data: [details.loanAmt,calculateInterest(Number(details.loanAmt),Number(details.interest),Number(details.loanDuration),Number(details.courseDuration),Number(details.gracePeriod))],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
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

