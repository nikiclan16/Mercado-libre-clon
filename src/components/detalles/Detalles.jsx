import './detalles.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';






// eslint-disable-next-line no-empty-pattern, react/prop-types
export const Detalles = () => {

    const {id} = useParams();

    const newStr = id.slice(1)
    

    const [productItem, setProductItem] = useState([])
    const [description, setDescription] = useState({})


    const getProductsDetails = async () => {

        const resp = await fetch(`https://api.mercadolibre.com/items/${newStr}`);
        const data = await resp.json();
        
        setProductItem(data);
    }

    const getProductsDescriptions = async () => {
        
        const resp = await fetch(`https://api.mercadolibre.com/items/${newStr}/description`);
        const data = await resp.json();
        
        setDescription(data);
    }

    useEffect(() => {
        getProductsDetails()
        getProductsDescriptions()
    }, [])

    if(productItem.length === 0) return <h1>Loading...</h1>
    
  return (
    <div className='contenedorDetalles'> 
          <div style={{display:'flex', justifyContent:'space-around', flexDirection:'row'}}>
            
            <img style={{marginRight:'10px'}} className='pointer' src={productItem?.pictures[0].url}/>
            <div className='details2'>
              <h4 style={{fontSize:'15px',fontWeight:'500',marginBottom:'10px'}}>{productItem?.condition} - cantidad {productItem?.available_quantity}</h4>
              <h3 style={{width:'85%'}} className='pointer'>{productItem?.title}</h3>
              <h2 className='priceDetalles pointer'>{Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(productItem?.price)}</h2>
                <a href={productItem?.permalink} target="_blank" rel="noopener noreferrer">
                <div style={{marginTop:'20px'}}>
                    <button className='pointer'>Comprar</button>
                </div>
                </a>
            </div>

          </div>

          <h1 style={{fontSize:'30px',marginBottom:'25px',marginLeft:'20px'}}>Descripción del producto</h1>

          <p style={{fontSize:'15px',lineHeight:'17px',width:'80%',color:'gray',marginBottom:'20px',marginLeft:'20px'}}>{description.plain_text}</p>

    </div>
  )
}

