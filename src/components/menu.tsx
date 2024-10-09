import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";


export const Menu:React.FC=()=>{
    return(
        <>
            <nav className="text-[50px] flex flex-row justify-center aling-center bg-cyan-500 p-1 ">
                <div className="p-2">
                    <Link href={ROUTES.routeOne}><p className="bg-cyan-700 px-2 py-1 w-18 text-white">rota 1</p></Link>
                </div>
                <div className="p-2">
                    <Link href={ROUTES.routeTwo}><p className="bg-cyan-700 px-2 py-1 w-18 text-white">rota 2</p></Link>
                </div>
                <div className="p-2">
                    <Link href={ROUTES.routeThird}><p className="bg-cyan-700 px-2 py-1 w-18 text-white">rota 3</p></Link>
                </div>
            </nav>
        </>
    )
}