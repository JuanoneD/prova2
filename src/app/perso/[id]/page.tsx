import Image from "next/image";

interface IPerso{
    params:{
        id:string
    }
}


interface IData{
    _id:string,
    name:string,
    imageUrl:string,
    films:string[]
}

const Perso = async({params:{id}}:IPerso)=>{
    const res = await fetch(`https://api.disneyapi.dev/character/${id}`)
    const data:IData = await res.json()
    const item = data.data

    return(
        <div className="flex justify-center">
        <div className="border-4 w-2/3 p-8 mt-5">
            <div className="flex justify-center">
            <p className="flex items-center text-center p-1">
                    {item._id}
                </p>
            </div>
            <div className="flex justify-center bg-gradient-to-r from-blue1 to-purple-500">
                <Image src={item.imageUrl} alt="" width={800} height={800}></Image>
            </div>
            <div className="flex justify-center">
                <p className="flex items-center text-center p-1 text-[32px]">
                    {item.name}
                </p>
            </div>
            <div>
                <p>Filmes:</p>
                {item.films.map((film:string)=>{
                    return(
                        <>
                        <p>{film}</p>
                        </>
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default Perso
