import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function AdminPrivate() {

    const {user} = useSelector( (state) => ({...state}) )
    return user ? <Outlet /> : <Navigate to={'/admin/login'} />
 
}

export default AdminPrivate