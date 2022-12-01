
import { useEffect, useState } from "react"
const MortgageValueComponent = ({yourSalary})=>{

    const [maxMortgage, setMaxMortgage] = useState("")

    useEffect(() =>{
        setMaxMortgage(yourSalary*3)
    })
    

    

    return(
        <div>
            <p>Your salary is ${yourSalary}</p>
            <p>Your max mortgage is ${maxMortgage}</p>
        </div>

    )


}

export default MortgageValueComponent