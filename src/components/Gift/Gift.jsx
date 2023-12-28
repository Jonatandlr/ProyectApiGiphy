import React, { useState, useEffect } from 'react'
import './Gift.css'


function Gift({ search, data }) {

    const [urlGifts, setUrlGifts] = useState([])
    const [index, setIndex] = useState(0)
    const [img, setImg] = useState(false)

    useEffect(() => {
        let dataGifts = []
        for (let element in data) {
            if (data.hasOwnProperty(element)) {
                let url = data[element].images.original.url;
                if (!dataGifts.includes(url)) {
                    dataGifts.push(url)
                }
            }
        }
        setUrlGifts(dataGifts)
        // setImg(urlGifts[index])
        // console.log(dataGifts)
    }, [])


    const nextGift = () => {
        let newIndex = index + 1
        setIndex(newIndex)
        // setImg(urlGifts[index])
    }

    const backGift = () => {
        let newIndex = index - 1
        setIndex(newIndex)
        // setImg(urlGifts[index])
    }



    if (search == false) {
        return <div></div>
    }

    return (
        <div className='container_gift'>
            {search && <p>Resultados para: {search}</p>}
            <div className='carusselGifts'>
                <button onClick={backGift}>{'<'}</button>

                {data.length < 1 ?
                    <p>No hay resultados para {search}</p> :
                    
                    <div className='cointainer__img'>
                        <img src={urlGifts[index]} alt="" />
                    </div>
                }

                <button onClick={nextGift}>{'>'}</button>
            </div>
        </div>
    )
}

export default Gift