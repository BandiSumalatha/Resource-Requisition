import React,{useState} from 'react'

const Home = () => {
  const [dropdown,setDropdown]=useState("")
  const [check,setCheck]=useState(false)
  const [radio,setRadio]=useState("")
  return (
    <div>
    <h1>{dropdown}</h1>
    <h1>Radio button is {radio}</h1>
    <h1>checkbox {check ? "true":"false"}</h1>
      <select value={dropdown} onChange={(e)=>setDropdown(e.target.value)}>
        <option value="aplle">aplle</option>
          <option value="banda">banda</option>
        <option value="orange">orange</option>
          <option value="mango">mango</option>
      </select>
      <label>do you have lap {check}</label>
      <input type="checkbox"
      cheked={check}
        
      onChange={(e)=>setCheck(e.target.checked)}/>
      <label>your gender </label>
     male: <input type="radio"checked={radio==="male"} value="male" onChange={(e)=>setRadio(e.target.value)}/>
 female:<input type="radio" checked={radio==="female"}  value="female" onChange={(e)=>setRadio(e.target.value)}></input>
    
    </div>
  )
}

export default Home