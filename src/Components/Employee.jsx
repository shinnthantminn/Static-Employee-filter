import { useSelector } from 'react-redux'
import Data from './Data'
import useFilter from './Helper/useFilter'

const Employee = () => {
  const Employee = useSelector((state) => state.Data)
  const filter = useFilter()
  const info = useSelector((state) => state.Info)

  return (
    <div
      className={
        info.length !== 0
          ? 'w-full bg-primary-300 '
          : 'w-full bg-primary-300 pt-20'
      }
    >
      <div className="w-[85%] mx-auto space-y-10 sm:space-y-8 pb-10">
        {filter.length === 0
          ? Employee.map((i) => <Data data={i} key={i.id} />)
          : filter.map((i) => <Data data={i} key={i.id} />)}
        {}
        <div className="text-center mt-5">
          Challang by{' '}
          <a
            href="https://www.frontendmentor.io/"
            className="text-red-400 block hover:underline"
          >
            FrontEnd Mentor,
          </a>
          Code by{' '}
          <a
            className="text-red-400 hover:underline"
            href="https://github.com/shinnthantminn"
          >
            Terry
          </a>
        </div>
      </div>
    </div>
  )
}

export default Employee
