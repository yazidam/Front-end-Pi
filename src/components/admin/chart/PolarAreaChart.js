
import React from 'react'
import { Polar } from 'react-chartjs-2'


export default function PolarAreaChart(){

    const data = {
        labels:[ 'No','Completed'],
        datasets : [{
            label : 'Vehicle circuit For 2021',
            data : [200, 700,],
            backgroundColor : ['rgba(210, 215, 211, 1)','rgba(54, 162, 235, 0.5)'],
            
        }
    ]
    }

    const options = {
        responsive: true,
        
    }

    return(
        <>
            <Polar data={data} options={options}/>
        </>
    )
}