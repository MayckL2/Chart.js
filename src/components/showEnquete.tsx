import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { Link } from "react-router-dom"

export default function ShowEnquete() {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('newData') || '{}'))
    const [showResult, setShowResult] = useState<any>(false)
    const [options, setOptions] = useState<any>({
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title',
                font: { size: 20 }
            }
        }
    })
    const [data, setData] = useState({
        labels: [''],
        datasets: storage
    })

    useEffect(() => {
        console.log(storage)
    }, [])

    function select(voto: string) {
        let obj = storage
        storage.map((value: any, key: number) => {
            if (voto == value.label) {
                obj[key].data = [Number(obj[key].data) + 1]
            }
        });
        setStorage(obj)
    }

    function votar() {
        // localStorage.setItem('newData', JSON.stringify(storage))
        setData({
            labels: [''],
            datasets: storage
        })
        setShowResult(true)
    }

    return (<section>
        <Link to='/'>Home</Link><br></br>
        <Link to='/newEnquete'>New Enquete</Link>
        <h1>show enquete</h1>

        {showResult ?
            <Bar data={data} options={options} />
            :
            storage.map((value: any, id: number) =>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="radio" name="check" id={value.label} value={value.label} onChange={(e) => select(e.target.value)} />
                    <label htmlFor={value.label}>{value.label}</label>
                </li>
            )
        }
        {showResult ? <button onClick={()=> setShowResult(false)}>Votar novamente</button> : < button onClick={() => votar()}>Votar</button>}
    </section >)
}