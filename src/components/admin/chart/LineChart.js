
import React from 'react'
import { Line } from 'react-chartjs-2'


export default function LineChart(){

    const data = {
        labels:[ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets : [{
            label : 'Delivery For 2021',
            data : [200, 500, 300, 600, 800, 400, 450, 650, 750, 400, 250, 600],
            borderColor : ['rgba(54, 162, 235, 0.5)'],
            backgroundColor : ['rgba(54, 162, 235, 0.5)'],
            pointBorderColor : ['rgba(54, 162, 235, 0.5)'],
            pointBackgroundColor : ['rgba(54, 162, 235, 0.5)']
        },
        {
            label : 'Delivery For 2020',
            data : [400, 250, 600, 800, 900, 350, 550, 750, 850, 600, 500, 300],
            borderColor : ['rgba(210, 215, 211, 1)'],
            backgroundColor : ['rgba(210, 215, 211, 1)'],
            pointBorderColor : ['rgba(210, 215, 211, 1)'],
            pointBackgroundColor : ['rgba(210, 215, 211, 1)']
        }
    ]
    }

    const options = {
        responsive: true,
        scales:{
            yAxes :[
                {
                    ticks :{
                        beginAtZero : true
                    },
                    gridLines:{
                        display : false
                    }
                }
            ],
            xAxes : [{
                gridLines:{
                    display : false
                }
            }]
        }
    }

    return(
        <>
            <Line data={data} options={options}/>
        </>
    )
}