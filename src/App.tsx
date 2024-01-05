import { useState } from 'react'
import './App.css'
import Chart from 'chart.js/auto';
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { ErrorBoundary } from './components/erroBoudary';

function App() {
  const [data, setData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 4
    }]
  })

  // const ctx: any = document.querySelector("#ctx")
  // const chart = new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       borderWidth: 1
  //     }]
  //   },
  // });

  return (
    <main>
      <h1>Graficos react-chartjs-2</h1>
      {/* <BarChart data={data}/> */}
      <ErrorBoundary fallback={<p>Something went wrong</p>}>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5%' }}>
          <div style={{ width: '45%', marginTop: '5%' }}>
            <p>Bar</p>
            <Bar data={data} />
          </div>

          <div style={{ width: '45%', marginTop: '5%' }}>
            <p>Line</p>
            <Line data={data} />
          </div>

          <div style={{ width: '45%', marginTop: '5%' }}>
            <p>Pie</p>
            <Pie data={data} />
          </div>

          <div style={{ width: '45%', marginTop: '5%' }}>
            <p>Doughnut</p>
            <Doughnut data={data} />
          </div>

          <div style={{ width: '45%', marginTop: '5%' }}>
            <p>PolarArea</p>
            <PolarArea data={data} />
          </div>

          <div style={{ width: '45%', marginTop: '5%' }}>
            <p>Radar</p>
            <Radar data={data} />
          </div>
        </div>

      </ErrorBoundary>


    </main>
  )
}

export default App
