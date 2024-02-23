import {useEffect, useState} from 'react'

function useCurrencyInf0() {
    const [ data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(() => res.json())  
        .then((res) => setData(res) )                 // it is call back function

    })
}