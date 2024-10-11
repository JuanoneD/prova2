"use client"

import { Suspense, useEffect,useState } from "react";
import Image from "next/image";


const RouteOne=()=>{
  interface IData{
    _id:string,
    name:string,
    imageUrl:string
  }

  const [data,setData] = useState<IData[]>([]);

  useEffect(()=>{
    const load = async()=>{
      const res=(await fetch("https://api.disneyapi.dev/character"))
      const data = await res.json()
      setData(data.data)
    }
    load()
  },[])
  
  return (
    <div className="flex flex-wrap justify-center mt-6">
      <Suspense fallback={<div className="text-white text-[50px]">Loading..</div>}>
        {data.map((item)=>{
          return(
            <div key={item._id} className="p-1">
              <div className="border-4 shadow">
                  <div className="flex justify-center bg-gradient-to-r from-blue1 to-purple-500">
                      <Image className="object-cover h-64 w-64" src={item.imageUrl} alt="" width={300} height={300} priority={true}/>
                  </div>
                  <div className="flex justify-center bg-cyan-400">
                      <p className="flex items-center text-center p-1 text-[18px]">
                          {item.name}
                      </p>
                  </div>
              </div>
          </div>
        )})}
      </Suspense>
    </div>
  );
}

export default RouteOne