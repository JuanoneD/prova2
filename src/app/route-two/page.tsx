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
        <div className="flex flex-wrap justify-evenly p-2 text-white mt-6">
            <div>
                <label>Pagina:</label>
                <input placeholder="1/149" value={page} onChange={(e)=>{setPage(e.target.value)}} className="ml-2 border-2 border-cyan-400 bg-black text-white"/>
            </div>
            <div>
                <label>Nome:</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} className="ml-2 border-2 border-cyan-400 bg-black text-white"/>
            </div>
        </div>
            {err&&<p>Não encontrado!!</p>}
        <div className="flex flex-wrap justify-center mt-4">
        <Suspense fallback={<div className="text-white text-[50px]">Loading..</div>}>
        {!err && data.map((item)=>{
          return(
            <div key={item._id} className="p-1">
              <div className="border-4">
                  <div className="flex justify-center bg-gradient-to-r from-blue1 to-purple-500">
                    <Image className="object-cover h-64 w-64" src={item.imageUrl} alt="" width={300} height={300} priority={true}/>
                  </div>
                  <div className="flex justify-center bg-cyan-400">
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