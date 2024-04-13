import './App.css';
import Product from './components/Product';
import products from './data/index'
const TOKEN = '7000242911:AAFID_HmudqFWo3HQFo9B3W6nNGQdAnhHqA'
function App() {
  console.log(products)
  return (
    <div class="products flex" style={{width:'100%', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
       {products.map((data,i)=>(
         <Product key={i} product = {data} />
       ))}
    </div>
  );
}

export default App;
