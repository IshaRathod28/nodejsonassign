import axios from "axios";
import {useEffect,useState} from "react";
function App(){
  const[employees, setemployees ]=useState();
  useEffect(()=>{
    const fetchemployeedata=async()=>{
      const result=await axios.get(
        "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees"
      );
      setemployees(result.data);
   
  };
  fetchemployeedata();
  
},[]
  );
 
  return(
<>
<div>
  <h1>Employee Data</h1>
  {employees&&employees.map((items)=>(<>
    <div><h1>Name:</h1><h4>{items.name}</h4></div>
    <br />
    <div><h1>Id:</h1><h4>{items.id}</h4></div>
    <br />
    <div><h1>Created At:</h1> <h4>{items.createdAt}</h4></div>
</>
  ))}
</div>
</>
  )
}
export default App;


