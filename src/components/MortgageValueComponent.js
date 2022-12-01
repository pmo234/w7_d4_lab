
import { useEffect, useState } from "react"


const MortgageValueComponent = ({yourSalary, yourDeposit})=>{

    const [maxMortgage, setMaxMortgage] = useState("")

    useEffect(() =>{
        if (maxMortgage !== "") {
            setMaxMortgage(yourSalary*3)
        }
    })
    

    

    return(
        <div>
            <p>Your salary is ${yourSalary}</p>
            <p >Your max mortgage is ${maxMortgage}</p>
        </div>

    )


}

export default MortgageValueComponent