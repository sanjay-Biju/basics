import react, { useEffect, useState, useRef } from 'react'
import "./SalaryCalculation.css"
const Calculation = () => {



    const [FirstName, setFirstName] = useState('')
    const [SecondName, setSecondName] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [Salary, setSalary] = useState('')
    const [Showemail, setShowemail] = useState('')
    const [Showsalary, setShowsalary] = useState('')
    const [fullname, setfullname] = useState('')
    const [MaritalStatus, setMaritalStatus] = useState('')


    const buttonHandle = () => {

        setEmail(Email)
        setShowsalary(Salary)
        if (Gender === "female") {
            if (MaritalStatus === "single") {
                setfullname("Ms." + FirstName + " " +SecondName)
            } else {
                setfullname("Mrs." + FirstName +" "+ SecondName)
            }
        } else {
            setfullname("Mr." + FirstName +" "+ SecondName)
        }

    }


    return (
        <div  className='conatiner'>
            
            <div className='details'><h1>Details</h1></div>
            <div>First Name </div>
            <input  className='inputbox' type='text' placeholder='Enetr Your first Name' onChange={(event) => setFirstName(event.target.value)} />

            <div>
                <div>
                    <div>Second Name</div>
                    <input className='inputbox' type='text' placeholder='Enetr Your second Name' onChange={(event) => setSecondName(event.target.value)} />
                </div>
                <div>
                    <div>Email</div>
                    <input className='inputbox' type='email' placeholder='Enetr Your email' onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <div>Gender</div>
                    <input type='radio' value="male" onChange={(event) => setGender(event.target.value)} />male
                    <input type='radio' value="female" onChange={(event) => setGender(event.target.value)} />female
                </div>

                <div>
                    <div> Marital Status</div>
                    <input type='radio' value="single" onChange={(event) => setMaritalStatus(event.target.value)} /> single
                    <input type='radio' value="Married" onChange={(event) => setMaritalStatus(event.target.value)} /> Married
                </div>
                <div>
                    <div>Salary</div>
                    <input type='text' placeholder='Salary' onChange={(event) => setSalary(event.target.value)} />
                    <button onClick={buttonHandle}>click</button>
                </div>
            </div>
           
            <div  className='subcontainer'>
                <div className='details'><h1>profile</h1></div>
                Name:
                {
                    fullname

                }


           
            <div>
                Email:
                {
                    Email
                }
            </div>

            <div>
                Salary:
                {
                    Showsalary
                }
            </div>

        </div>
        </div>
    )
}
export default Calculation