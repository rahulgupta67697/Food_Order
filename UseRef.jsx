
import { useRef ,useState} from 'react'

export const UseRef = () => {
    const [counterImp,SetCounterImp]=useState(0);
    const counterNotImp=useRef(0) 
    function  fun() {
        counterNotImp.current=counterNotImp.current+1;
        console.log(counterNotImp.current)
    }

  return (
   <>
   <button onClick={()=>(SetCounterImp(counterImp+1))}>Important</button>
   <h1>{counterImp}</h1>
   <button onClick={fun}>Not Important</button>
   <h1>{counterNotImp.current}</h1>
   </>
  )
}
