import Employee from './Components/Employee'
import Header from './Components/Header'
import useFilter from './Components/Helper/useFilter'
import Panel from './Components/Panel'

const App = () => {
  const con = useFilter()
  return (
    <main className="w-full min-h-[100vh] font-['League_Spartan'] relative">
      <Header />
      <Panel />
      <Employee />
    </main>
  )
}

export default App
