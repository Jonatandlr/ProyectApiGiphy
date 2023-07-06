import React,{useState, useEffect} from 'react'
import './Gift.css'


function Gift({search, data}) {
    
    const [urlGifts, setUrlGifts]=useState([])
    const [index, setIndex]=useState(0)

    useEffect(()=>{
        let dataGifts=[]
        for (let element in data){
            if(data.hasOwnProperty(element)){
                let url=data[element].images.original.url;
                if (!dataGifts.includes(url)){
                    dataGifts.push(url)
                }
            }
        }
        setUrlGifts(dataGifts)
    },[])
  

    const nextGift=()=>{
        let newIndex=index+1
        setIndex(newIndex)
    }

    const backGift=()=>{
        let newIndex=index-1
        setIndex(newIndex)
    }



    if(search==false){
        return <div></div>
    }

    return (
        <div className='container_gift'>
            
            {search && <p>Resultados para: {search}</p>}  
            <div  className='carusselGifts'>
                <button onClick={backGift}>{'<'}</button>
                {data.length<1 ? 
                    <p>No hay resultados para {search}</p>:
                    <img  src={urlGifts[index]} alt="" />
                }
                <button onClick={nextGift}>{'>'}</button>
            </div> 
        </div>
    )
}

export default Gift