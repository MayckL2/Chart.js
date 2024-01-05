
export default function Enquete(props: any) {

    return (
        <form action="">
            <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="radio" name="check" value={'final fantasy'} onChange={props.change} />
                    <p>Final Fantasy</p>
                </li>

                <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="radio" name="check" value={'Skyrim'} onChange={props.change} />
                    <p>Skyrim</p>
                </li>

                <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="radio" name="check" value={'Fire emblem'} onChange={props.change} />
                    <p>Fire Emblem</p>
                </li>
            </ul>

            <button type='button' onClick={props.votar}>Votar!</button>
        </form>
    )
}