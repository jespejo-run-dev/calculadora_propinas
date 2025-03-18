import  {menuItems} from './data/db'

const App = () => {

  console.log(menuItems);
  

  return (
    <>
      <div className="bg-stone-950 text-white min-h-screen">
        <header className="border-b border-black/2 dark:border-white/30">
          <h1 className="text-center text-2xl p-5">Calculadora de Propinas</h1>
          
        </header>
      </div>
    </>
  )
}

export default App