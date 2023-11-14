import './App.css'
import { Globalcontext } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
   const user = {
    username: "kamto",
   }

  return (
    <div className='App'>
      <Globalcontext.Provider value={user}>
      <RouterProvider router={router}/>
      </Globalcontext.Provider>
    
    </div>
  );
}

export default App;
