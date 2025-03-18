import  {menuItems} from './data/db'
import  MenuItem from './components/MenuItem'

const App = () => {

  return (
    <>
      <div className="bg-stone-950 text-white min-h-screen">
        <header className="border-b border-black/2 dark:border-white/30">
          <h1 className="text-center text-2xl p-5">Calculadora de Propinas y Consumo</h1>
        </header>

        <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
          <div className='p-5'>
            <h3 className='text-2xl font-semibold'>Menu</h3> 

            <div className='space-y-3 mt-10'>
              {
                menuItems.map(item => (
                  <MenuItem 
                    key={item.id}
                    item={item}
                  />
                )) 
              }
            </div>

          </div>

          <div>
            <h3>Consumo</h3>        
          </div>
        </main>
      </div>
    </>
  )
}

export default App