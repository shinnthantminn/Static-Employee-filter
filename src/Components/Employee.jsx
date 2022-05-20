import { useSelector } from 'react-redux'
import Data from './Data'
import useFilter from './Helper/useFilter'

const Employee = () => {
  const Employee = useSelector((state) => state.Data)
  const filter = useFilter()

  return (
    <div className="w-full bg-primary-300 pt-20">
      <div className="w-[85%] mx-auto space-y-8">
        {filter.length === 0
          ? Employee.map((i) => <Data data={i} key={i.id} />)
          : filter.map((i) => <Data data={i} key={i.id} />)}
        {}
      </div>
    </div>
  )
}

export default Employee
