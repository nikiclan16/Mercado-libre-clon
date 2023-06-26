import './search.css'
import mercadoLogo from '../../img/mercadoLogo.png';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onProducts } from '../../store/listProducts/listProductsSlice';






// eslint-disable-next-line react/prop-types
export const Search = () => {


  const {products} = useSelector((state) => state.listProducts);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  
  const {formState, onInputChange} = useForm({
    buscador : ''
  });
  const {buscador} = formState;

 
  const handledProducts = async(event) => {
    await event.preventDefault();
    const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador}`)
    const data = await resp.json();
    const {results} = data;

    dispatch(onProducts(results))
    // console.log(results)
    
    navigate('/')
  }

  // const navigateToHomePage = () => {
  //   if()
  // }

  
  
  useEffect(() => {
    (event)=> handledProducts(event)
  }, [products])


  return (
    

      <div className='buscador'>
        <img onClick={()=> navigate('/')} className='pointer' src={mercadoLogo} alt='logo'/>
        <form onSubmit={(event)=> handledProducts(event)}>
          <input 
            type='text' 
            placeholder="Nunca dejes de buscar"
            value={buscador}
            name='buscador'
            onChange={onInputChange}
          />
        </form>

        <svg  onClick={(event)=> handledProducts(event)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>

        {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#e5e5e5',paddingLeft:'10%',paddingRight:'10%',paddingTop:'50px',paddingBottom:'30%'}}>
          <Results products={products}/>
        </div> */}
      </div>
      

  )
}


