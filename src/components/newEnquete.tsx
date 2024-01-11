import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Bar } from "react-chartjs-2";

export default function NewEnquete() {
    const [render, setRender] = useState<any>([])
    const [check, setCheck] = useState<any>('')
    // const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('newData') || '{}'))
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
        datasets: [
            {
                label: 'text',
                data: [0]
            }
        ],
    })

    useEffect(() => {
        setRender([...render, <input type='text' onBlur={(e) => {
            if (e.target.value != '') {
                setRender([...render, {
                    label: e.target.value,
                    data: [0],
                    backgroundColor: ['blue', 'green']
                }])
                if (render.length != 0 && render[render.length - 1].type != 'input') {
                    setData({
                        labels: [''],
                        datasets: [...render, {
                            label: e.target.value,
                            data: [0],
                            backgroundColor: ['blue', 'green']
                        }]
                    })
                }
            }
        }} />])

    }, [])

    useEffect(() => {
        console.log(render)
    }, [render, check])

    function newEnquete() {
        let erro = false
        render.map((value: any) => {
            if (value.type == 'input') {
                erro = true
            }
        })

        if (!erro) {
            setRender([...render, <input type='text' onBlur={(e) => {
                if (e.target.value != '') {
                    setRender([...render, {
                        label: e.target.value,
                        data: [0],
                        backgroundColor: ['blue', 'green']
                    }
                    ])
                    if (render.length != 0 && render[render.length - 1].type != 'input') {
                        setData({
                            labels: [''],
                            datasets: [...render, {
                                label: e.target.value,
                                data: [0],
                                backgroundColor: ['blue', 'green']
                            }]
                        })
                    }
                }
            }
            } />])
        }

    }

    return (<section>
        <Link to='/'>Home</Link><br></br>
        <Link to='/showEnquete'>Show Enquete</Link><br></br>

        <button onClick={() => newEnquete()}>+ enquete</button>

        {render.map((value: any) =>
            value.label ? null : value
        )}

        {render.map((value: any, id: number) =>
            <li style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="radio" name="check" id={value.label} value={value.label} onChange={(e)=> setCheck(e.target.value)}/>
                <label htmlFor={value.label}>{value.label}</label>
            </li>
        )}
        <Link to='/showEnquete' onClick={()=>localStorage.setItem('newData', JSON.stringify(render))}>Criar enquete</Link>
        <hr></hr>
        <Bar data={data} options={options} />
    </section>)
}