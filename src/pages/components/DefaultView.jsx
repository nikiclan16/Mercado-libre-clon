import '../../components/results/Results.css';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
// import { Divider } from '@material-ui/core';


// eslint-disable-next-line react/prop-types
export const DefaultView = () => {
    
    const [products, setProducts] = useState([]);

    const handledProducts = async() => {
        const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=xbox`)
        const data = await resp.json();
        const {results} = data;
    
        // console.log(results)
        setProducts(results);
      }
    
      // const navigateToHomePage = () => {
      //   if()
      // }
    
      
      
      useEffect(() => {
        handledProducts()
      }, [products])
 

  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`items/:${id}`) 
  }

  const four = products?.filter((item,indexItem) => indexItem <= 10);

    
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#e5e5e5',paddingLeft:'10%',paddingRight:'10%',paddingTop:'50px',paddingBottom:'50px'}}>
    <div className='contenedor'> 

    {
      four?.map((product,index) => {

        return (
          <div key={product?.id}>
            <div  className='results'>
              <img className='pointer' onClick={()=> navigateToDetails(product?.id)} src={product?.thumbnail}/>
              <div className='details'>
                <h2 className='price pointer' onClick={()=> navigateToDetails(product?.id)}>{Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(product?.price)}</h2>
                <h3 className='pointer' onClick={()=> navigateToDetails(product?.id)}>{product?.title}</h3>
              </div>  
              <h5 style={{marginLeft:'10px'}}>En {product?.installments.quantity}x {Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(product?.installments.amount)}</h5>
            </div>
            {
              index !== 10 && 
              <Divider variant='middle'/>
            }
          </div>
        )
      })
    }
    </div>
    </div>
  )
}


