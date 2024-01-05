import { useState } from 'react'
import Chart from 'chart.js/auto';
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble } from "react-chartjs-2";
import { CategoryScale, BarElement, Title } from 'chart.js';
Chart.register(CategoryScale, BarElement, Title);

export default function Resultado(props: any) {
    const [storage, setStorage ] = useState(JSON.parse(localStorage.getItem('data') || '{}'))
    const [data, setData] = useState({
        labels: [''],
        datasets: [
            {
                label: 'Final Fantasy',
                data: [storage[0].votos],
                // borderWidth: 4,
                // borderColor: '#54AAB8',
                backgroundColor: '#3DD2EA'
            },
            {
                label: 'Skyrim',
                data: [storage[1].votos],
                // borderWidth: 4,
                // borderColor: '#121318',
                backgroundColor: '#121318'
            },
            {
                label: 'Fire Emblem',
                data: [storage[2].votos],
                // borderWidth: 4,
                // borderColor: '#B32E33',
                backgroundColor: '#E50D14'
            }
        ],
    })
    const [options, setOptions] = useState<any>({
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title',
                font: {size: 20}
            }
        }
    })

    return (
        <div style={{ width: '90vw', marginTop: '5%' }}>
            <Bar data={data} options={options} />
            <button onClick={props.voltar}>Votar novamente</button>
        </div>
    )
}
