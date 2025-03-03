
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <>

      <div className='w-11/12 mx-auto '>
        <h1 className='text-6xl font-bold text-center  text-purple-400'>Coffee Store {coffees.length}</h1>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
          {
            coffees.map(coffee =>
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
              ></CoffeeCard>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
