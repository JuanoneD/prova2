import { Suspense } from "react"
import Image from "next/image";
import Link from "next/link";

type IData = {
    data:{
        _id:string,
        name:string,
        imageUrl:string
    }[]
}

const ThirdPage=async()=>{
    const res = await fetch("https://api.disneyapi.dev/character");
    const data:IData = await res.json()

    return(
        <div className="flex flex-wrap justify-center">
        <Suspense fallback={<div>Loading..</div>}>
        {data.data.map((item)=>{
        return(
            <div key={item._id} className="p-1">
            <Link href={`/perso/${item._id}`}>
            <div  className="border-4">
                <div className="flex justify-center bg-gradient-to-r from-blue1 to-purple-500">
                    <Image src={item.imageUrl} alt="" width={300} height={300}></Image>
                </div>
                <div className="flex justify-center">
                    <p className="flex items-center text-center p-1">
                        {item.name}
                    </p>
                </div>
            </div>
            </Link>
            </div>
        )})}
        </Suspense>


        </div>
    )
}

export default ThirdPage