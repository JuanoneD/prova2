"use client"

import { useEffect,useState,Suspense } from "react";
import Image from "next/image";

import { api } from "@/app/constants/api";


const RouteTwo=()=>{
    interface IData{
        _id:string,
        name:string,
        imageUrl:string
    }

    const [name,setName] = useState<string>("")
    const [page,setPage] = useState<string>("")
    const [data,setData] = useState<IData[]>([])
    const [err,setErr] = useState<boolean>(false)



    useEffect(()=>{
        api.get(`?name=${name}&page=${page}`).then((res)=>{
            setData(res.data.data)
            if(res.data.data.length===0){
                console.log("AAAAAAAAAA")
                setErr(true)
            }else{
                setErr(false)
            }
        }).catch((error)=>{
            console.log(error)
            if(error.response.status === 404){
                setErr(true)
            }
            setErr(true)
        })
    },[name,page])

    return(
        <>
        <div className="flex flex-wrap justify-evenly p-2">
            <div>
                <label>Pagina:</label>
                <input placeholder="1/149" value={page} onChange={(e)=>{setPage(e.target.value)}} className="border-2"/>
            </div>
            <div>
                <label>Nome:</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} className="border-2"/>
            </div>
        </div>
            {err&&<p>Não encontrado!!</p>}
        <div className="flex flex-wrap justify-center">
        <Suspense fallback={<div>Loading..</div>}>
        {data.map((item)=>{
          return(
            <div key={item._id} className="p-1">
              <div className="border-4">
                  <div className="flex justify-center bg-gradient-to-r from-blue1 to-purple-500">
                      <Image src={item.imageUrl} alt="" width={300} height={300}></Image>
                  </div>
                  <div className="flex justify-center">
                      <p className="flex items-center text-center p-1">
                          {item.name}
                      </p>
                  </div>
              </div>
          </div>
        )})}
        </Suspense>
        </div>
        </>
    )
}

export default RouteTwo;