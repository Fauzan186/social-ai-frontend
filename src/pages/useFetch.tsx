import React,{useState,useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData]=useState(null)
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch(url)
            const result = await response.json()
            setData(result)
            setLoading(false)
        }
        fetchData()
    },[url])

  return {data, loading}
}
