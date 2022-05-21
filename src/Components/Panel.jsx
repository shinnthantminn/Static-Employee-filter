import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { Remove, Reset } from '../Data/Slicer/InfoSlicer'

const Panel = () => {
  const info = useSelector((state) => state.Info)
  const dispatch = useDispatch()
  const handelClick = (id) => {
    dispatch(Remove(id))
  }
  const handleClear = () => {
    dispatch(Reset())
  }
  return (
    <div className="w-full bg-primary-300 ">
      {info.length !== 0 && (
        <div className="">
          <div
            className="flex  justify-between items-center w-[85%] px-5 pt-6 pb-3 sm:px-10 sm:py-6 
           translate-y-[-40px]  rounded bg-primary-300 shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] mx-auto "
          >
            <div className="flex overflow-scroll flex-wrap sm:flex-nowrap sm:space-x-5 ">
              {info.map((i) => (
                <div
                  key={i.id}
                  className="flex bg-[#ceedea] text-primary-200 font-bold rounded mr-2 mb-2 sm:mb-0 sm:mr-0"
                >
                  <p className="flex items-center pt-1 pl-2 pr-3">{i.text}</p>
                  <button
                    onClick={() => handelClick(i.id)}
                    className="bg-[#296962] text-white py-2 px-2 rounded-r duration-500 hover:bg-black"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={handleClear}
              className="text-primary-200 font-bold hover:underline mb-[5px] sm:mb-0"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Panel
