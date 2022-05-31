import { Route } from 'react-router-dom';
import './App.css';
import FolderList from './components/FolderList';
import ProductCard from './components/ProductCard';

function App() {
  const data = [
    { id: 1, caption: "John Doe",avatar:"E",createDate:"30 Mayıs 2022",productImage:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27133000/elma-granny-smith-kg-0e9183-1650x1650.jpg" },
    { id: 2, caption: "Victor Wayne",avatar:"A",createDate:"30 Haziran 2022",productImage:"https://www.treehugger.com/thmb/YAE47hBm2YvzNxRlkXnx-ODLrvU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/closeupbrightbluewater-61f0f88d81004729a7385484bcd38998.jpg" },
    { id: 3,caption: "Jane Doe",avatar:"H",createDate:"14 Ocak 2042",productImage:"https://images-eu.ssl-images-amazon.com/images/I/61hzuoXwjqL.__AC_SX300_SY300_QL70_ML2_.jpg" },
  ];
  const dizinler = [
    {id: 1, name:"fotoğraflar",date:"12 Temmuz 2022" },
    {id: 1, name:"fotoğraflar",date:"12 Temmuz 2022" },
    {id: 1, name:"fotoğraflar",date:"12 Temmuz 2022" },

  ]
  return (
    <div className="App">
      {data.map((card) => (
        <ProductCard caption={card.caption}createDate={card.createDate}productImage={card.productImage}avatar={card.avatar}/>
        
      ))}
      {dizinler.map((dizin) => (
      <FolderList date={dizin.date}name={dizin.name}/>
       ))};
     </div>
  );
}
export default App;
