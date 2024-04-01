import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function UserPrivate() {

    const {customer} = useSelector( (state) => ({...state}) )
    return customer ? <Outlet /> : <Navigate to={'/login'} />
 
}

export default UserPrivate