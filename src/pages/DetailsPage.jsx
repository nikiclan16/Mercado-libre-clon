import { Search } from '../components/search/Search';
import '../components/search/search.css';

import { Detalles } from '../components/detalles/detalles';
import { useState } from 'react';

export const DetailsPage = () => {

    const [products, setProducts] = useState([]);

  


  return (
    <div className='allContainer'>

        <Search products={products} setProducts={setProducts}/>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#e5e5e5',paddingLeft:'10%',paddingRight:'10%',paddingTop:'50px',paddingBottom:'30%'}}>
            <Detalles/>
        </div>
    </div>
  )
}
