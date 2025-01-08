import { useEffect, useState } from "react"



function UseFetch(url) {
     const [data, setData] = useState(null);
     const[error, setError] = useState(null)
     const [loading, setLoading] = useState(false);
     
     
     const fetchData = async ()=>{
          setLoading(true);
          try {          
                const response = await fetch(url)
                 if (!response.ok) {
                    throw new Error(response.statusText); 
                 }                             
              const result = await response.json();
              if (result) {
                setData(result)
                setLoading(false)
                setError(null)
              }             
          } catch (error) {
             setError(error)
             setLoading(false)
             setError(error)
         
          }finally {
            setLoading(false); 
        }
     }



     useEffect(()=>{
        fetchData()
        
     },[url])


     return {
        data, error, loading
     }

}


export default UseFetch