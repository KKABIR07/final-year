
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const StateData = () => {
  const params = useParams();
  const {state} = params;
  const[data , setData] = useState({});
  useEffect(()=>{
    const fetchData = async () =>{
       const res = await fetch(`http://localhost:5000/api/auth/cropsByname/${state}`);
       const Data = await res.json();
       setData(Data)
    }

    fetchData();
  },[])

  console.log(data)
  return (
    <div>
      <h1>{data?.District}</h1>
    </div>
  )
}

export default StateData
