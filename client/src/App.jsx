import { useEffect, useState } from 'react'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Frontend/Home'
import Menu from './Pages/Frontend/Menu'
import Layout from './Pages/Frontend/Layout'
import About from './Pages/Frontend/About'
import Contact from './Pages/Frontend/Contact'
import Blog from './Pages/Frontend/Blog'
import BlogDetails from './Pages/Frontend/BlogDetails'
import Cart from './Pages/Frontend/Cart'
import CheckOut from './Pages/Frontend/CheckOut'
import UserLayout from './Pages/Frontend/user/UserLayout'
import DashboardPage from './Pages/Frontend/user/DashboardPage'
import ProfilePage from './Pages/Frontend/user/ProfilePage'
import AddressPage from './Pages/Frontend/user/AddressPage'
import OrderPage from './Pages/Frontend/user/OrderPage'
import WishlistPage from './Pages/Frontend/user/WishlistPage'
import ChangePasswordPage from './Pages/Frontend/user/ChangePasswordPage'
import Login from './Pages/Frontend/Login'
import AdminLogin from './Pages/Backend/AdminLogin'
import PickUpOrder from './Pages/Backend/order/PickUpOrder'

//frontend css import
import './Pages/Frontend/assets/style.css'
import './Pages/Frontend/assets/bootstrap.css'
import './Pages/Frontend/assets/responsive.css'

import './Pages/Frontend/assets/toastr.css'
import './Pages/Frontend/assets/venobox.css'
import AdminLayout from './Pages/Backend/AdminLayout'
import AdminDashboard from './Pages/Backend/AdminDashboard'
import AllOrder from './Pages/Backend/order/AllOrder'
import OrderDetails from './Pages/Backend/order/OrderDetails'
import DeliveryOrder from './Pages/Backend/order/DeliveryOrder'
import AddProduct from './Pages/Backend/product/AddProduct'
import ProductList from './Pages/Backend/product/ProductList'
import Category from './components/Frontend/Category'
import CategoryList from './Pages/Backend/product/CategoryList'
import AddCategory from './Pages/Backend/product/AddCategory'
import OptionalItem from './Pages/Backend/product/OptionalItem'
import AddOptional from './Pages/Backend/product/AddOptional'
import Coupon from './Pages/Backend/product/Coupon'
import AddCoupon from './Pages/Backend/product/AddCoupon'
import DeliveryArea from './Pages/Backend/product/DeliveryArea'
import AddDelivery from './Pages/Backend/product/AddDelivery'
import Timeslot from './Pages/Backend/product/Timeslot'
import AddTimeSlot from './Pages/Backend/product/AddTimeSlot'
import CustomerList from './Pages/Backend/CustomerList'
import AdminProfile from './Pages/Backend/profile/AdminProfile'
import Blogs from './Pages/Backend/Blog/Blogs'
import AddBlog from './Pages/Backend/Blog/AddBlog'
import BlogCategory from './Pages/Backend/Blog/BlogCategory'
import AddBlogCategory from './Pages/Backend/Blog/AddBlogCategory'
import AdminPrivate from './Pages/Backend/AdminPrivate'
import NotFound from './Pages/NotFound'
import EditCategory from './Pages/Backend/product/EditCategory'
import EditOptional from './Pages/Backend/product/EditOptional'
import EditCoupon from './Pages/Backend/product/EditCoupon'
import EditDelivery from './Pages/Backend/product/EditDelivery'

//backend css import
const currentPath = window.location.pathname;

if (currentPath.startsWith('/admin')) {
  import('./Pages/Backend/admin-assets/style.css');
  import('./Pages/Backend/admin-assets/reset.css');

 /* import('./Pages/Backend/admin-assets/chart.css');
  import('./Pages/Backend/admin-assets/datatable.css');
  import('./Pages/Backend/admin-assets/fontawesome.css');
  import('./Pages/Backend/admin-assets/jquery.css');
  import('./Pages/Backend/admin-assets/map.css');
  import('./Pages/Backend/admin-assets/reset.css');
  import('./Pages/Backend/admin-assets/slickslider.css'); */
 /* import('./Pages/Backend/admin-assets/toast.css'); */

}


function App() {


  return (
    <>

      <Routes>
        {/* Frontend route */}
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:title' element={<BlogDetails />} />
          <Route path='/cartlist' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />


        </Route>
        <Route path='/user/' element={<UserLayout />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='edit-profile' element={<ProfilePage />} />
          <Route path='address' element={<AddressPage />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='wishlist' element={<WishlistPage />} />
          <Route path='change-password' element={<ChangePasswordPage />} />

        </Route>
        <Route path='/login' element={<Login />} />

        <Route path='/admin/login' element={<AdminLogin />} />
        <Route element={<AdminPrivate />}>

          <Route path='/admin/' element={<AdminLayout />}>
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='all-order' element={<AllOrder />} />
            <Route path='order/details' element={<OrderDetails />} />
            <Route path='delivery/order' element={<DeliveryOrder />} />
            <Route path='pickup/order' element={<PickUpOrder />} />
            <Route path='product-create' element={<AddProduct />} />
            <Route path='product-list-show' element={<ProductList />} />

            <Route path='category-list' element={<CategoryList />} />
            <Route path='category-create' element={<AddCategory />} />
            <Route path='edit-category-item/:id' element={<EditCategory />} />



            <Route path='optional-item-list' element={<OptionalItem />} />
            <Route path='optional-item-create' element={<AddOptional />} />
            <Route path='edit-optional-item/:id' element={<EditOptional />} />


            <Route path='coupon' element={<Coupon />} />
            <Route path='coupon/create' element={<AddCoupon />} />
            <Route path='edit-coupon/:id' element={<EditCoupon />} />


            <Route path='delivery-area' element={<DeliveryArea />} />
            <Route path='create/delivery' element={<AddDelivery />} />
            <Route path='edit-delivery-item/:id' element={<EditDelivery />} />



            <Route path='timeslot' element={<Timeslot />} />
            <Route path='timeslot/create' element={<AddTimeSlot />} />
            <Route path='customer-list' element={<CustomerList />} />
            <Route path='profile' element={<AdminProfile />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='blog-create' element={<AddBlog />} />
            <Route path='blog-categories' element={<BlogCategory />} />
            <Route path='blog-category-create' element={<AddBlogCategory />} />

          </Route>


        </Route>

        <Route path='*' element={<NotFound />} />



      </Routes>

    </>
  )
}

export default App
