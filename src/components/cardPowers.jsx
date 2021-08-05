import { Radar } from 'react-chartjs-2';
import React,{useState, useEffect} from 'react'

function CardPowers(Props) {
    const [values, setValues] = useState([])
    const {powers} = Props

    useEffect(() => {
        const valores = powers.map(item=>(Object.values(item)))
        setValues(valores[0])
    },[powers])

       const data =  {
        labels: ['Combat', 'Durability', 'Inelligence', 'Power', 'Speed', 'Strenght'],
        datasets: [{
            label:'powers',
            backgroundColor: "#36ff0456",
            borderColor:"#36ff04",
            borderWidth:4,
            data: [values[0], values[1], values[2], values[3], values[4], values[5]]
        }]
        }
       const options = {
           maintainAspectRadio:false,
        }

    return (
        <div class="cont-cardPowers">
            <div className="aling">
                <div className="cont-team-power">
                    <h3>Powers Team</h3>
                    <Radar
                    style={{width: "200px", height:'500px'}}
                     data={data} options={options} height="20" width="100" />
                </div>
                </div>
        </div>
    )
}
export default CardPowers