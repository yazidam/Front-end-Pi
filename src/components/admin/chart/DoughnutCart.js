
import React from 'react'
import { Doughnut } from 'react-chartjs-2'


export default function DoughnutChart(){

    const data = {
        labels:[ 'User','Company'],
        datasets : [{
            label : 'Vehicle circuit For 2021',
            data : [200, 700,],
            backgroundColor : ['rgba(255, 99, 132, 1)', 'rgba(153, 102, 255, 1)'],
            
        }
    ]
    }

    const options = {
        responsive: true,
        
    }

    return(
        <>
            <Doughnut data={data} options={options}/>
        </>
    )
}