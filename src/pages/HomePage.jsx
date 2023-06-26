
// import '../search.css'
import '../components/search/search.css';


import { Search } from '../components/search/Search';
import { Results } from '../components/results/Results';
import { DefaultView } from './components/DefaultView';
import { useSelector } from 'react-redux';






export const HomePage = () => {

  const {products} = useSelector((state) => state.listProducts);

  
    


  return (
    <div className='allContainer'>
 
      
      <Search/>
      
      {
        (products.length === 0) ? <DefaultView/>

        :(

          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#e5e5e5',paddingLeft:'10%',paddingRight:'10%',paddingTop:'50px',paddingBottom:'50px'}}>
            <Results products={products}/>
          </div>
        )
      }


    </div>
  )
}

