import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

const apiValue = createContext();

function AllData({children}) {

    const [api, setApi] = useState([]);
 
    useEffect(() =>{

        axios.get ("/assets/js/Api.json")
        .then((item)=>{
            setApi(item.data.properties)
        })

    },[])
    

  return (
    <apiValue.Provider value={api}>
          {children}
    </apiValue.Provider>
  )
}

export {apiValue,AllData}