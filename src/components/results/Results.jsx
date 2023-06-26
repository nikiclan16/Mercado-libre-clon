
import './Results.css';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';
// import { Divider } from '@material-ui/core';


// eslint-disable-next-line react/prop-types
export const Results = () => {

  const {products} = useSelector((state) => state.listProducts);

  const navigate = useNavigate();

  console.log(products)


  const navigateToDetails = (id) => {
    navigate(`items/:${id}`) 
  }

  const four = products?.filter((item,indexItem) => indexItem <= 10);
    
  return (

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
              {
                (product.installments === null) 
                  ? <h5 style={{marginLeft:'10px'}}>Disponible</h5>
                  : <h5 style={{marginLeft:'10px'}}>En {product?.installments?.quantity} x {Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(product?.installments?.amount)}</h5>
              }  
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
  )
}


