import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products';

function App() {

  const products=[
  {
    id:'p1',
    title:'Nirma',
    amount:100,
    date:new Date(2021, 8, 10),
  },
  {
    id:'p2',
    title:'tide',
    amount:95,
    date:new Date(2020, 6, 12),
  },
  {
    id:'p3',
    title:'Surf excel',
    amount:140,
    date:new Date(2022, 3, 6),
  },
  {
    id:'p4',
    title:'Maggi',
    amount:45,
    date:new Date(2022, 9, 18),
  }
  ]

  const people=[
    {name:'ashok', age:24},
    {name:'ayfaj', age:19},
    {name:'prashant', age:30},
  ]

  // usage of filter and map functions
  const name=people.filter(person=>person.age>20).map(person=>person.name);
  console.log('after filter and map of age greater than 20 we got :' , name);

  return (
    <div className="App">
      <NewProduct/>
      <Products products={products}/>
      
    </div>
  );
}

export default App;
