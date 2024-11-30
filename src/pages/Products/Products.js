import React, { useEffect, useState } from 'react'
import Header from '../../components/Shared/Headers/Header'
import ProductsInfo from '../../components/ProductsInfo/ProductsInfo'
import Footer from '../../components/Shared/Footer/Footer'

const Products = () => {

  const [isAdmin, setIsAdmin] = useState(false);  // Check if user is admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    console.log('Stored user info:', user);

    if (user && user.role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  useEffect(() => {
    console.log('isAdmin state after effect:', isAdmin);
  }, [isAdmin]);

  return (
    <>
    <Header />
    <ProductsInfo  isAdmin={isAdmin} />
    <Footer />
    </>
  )
}

export default Products