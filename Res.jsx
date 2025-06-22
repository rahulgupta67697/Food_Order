import React from 'react'

export const Res = () => {
    const [ResList,SetResList]=useState({})
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData() {
        try{
            const data= await fetch("Fake url");
            const json= await data.json();
            if(json)
            {
                SetResList(json)
            }
            else{
                console.log("Error");
            }
        }
        catch(err){
            console.warn("Failed",err)

        }
    }


  return (
    <div>Res</div>
  )
}
