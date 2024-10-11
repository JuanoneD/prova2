"use server"
import { redirect } from 'next/navigation'
import { ROUTES } from './constants/routes'


const home = async()=>{
    
    redirect(ROUTES.routeOne)
    return(
        <>
        </>
    )
}

export default home;