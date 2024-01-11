import { useState } from 'react'
import './App.css'
import Chart from 'chart.js/auto';
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { ErrorBoundary } from './components/erroBoudary';
import votar from './services/votar';
import Resultado from './components/resultado';
import Enquete from './components/enquete';
import { Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 4
    }]
  })
  const [page, setPage] = useState(false)
  const [check, setCheck] = useState(null)

  return (
    <main>
      <Link to='/newEnquete'>New Enquete</Link><br></br>
      <Link to='/showEnquete'>Show Enquete</Link>
      <div style={{display: 'flex'}}>
        {page ?
          <Resultado voltar={() => setPage(false)} />
          :
          <Enquete
            change={(e: any) => setCheck(e.target.value)}
            votar={() => setPage(votar(check))}
          />
        }
      </div>

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
