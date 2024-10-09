"use client"

import { useEffect,useState } from "react";
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
    <div className="flex flex-row">
      {data.map((item)=>{
        return(
          <div key={item._id} className="p-1">
            <div className="w-[300px] h-[400px] border-4">
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
    </div>
  );
}

export default RouteOne