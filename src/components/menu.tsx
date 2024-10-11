import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";


export const Menu:React.FC=()=>{
    return(
        <>
            <nav className="text-[25px] flex flex-wrap justify-evenly aling-center bg-cyan-500 p-1 ">
                <div className="p-2">
                    <Link href={ROUTES.routeOne}><p className=" px-2 py-1 w-18 text-white">Rota 1</p></Link>
                </div>
                <div className="p-2">
                    <Link href={ROUTES.routeTwo}><p className=" px-2 py-1 w-18 text-white">Rota 2</p></Link>
                </div>
                <div className="p-2">
                    <Link href={ROUTES.routeThird}><p className=" px-2 py-1 w-18 text-white">Rota 3</p></Link>
                </div>
            </nav>
        </>
    )
}