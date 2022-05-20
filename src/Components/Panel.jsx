import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { Remove } from '../Data/Slicer/InfoSlicer'

const Panel = () => {
  const info = useSelector((state) => state.Info)
  const dispatch = useDispatch()
  const handelClick = (id) => {
    dispatch(Remove(id))
  }
  return (
    <div className="w-full bg-primary-300 ">
      {info.length !== 0 && (
        <div className="pb-5">
          <div className="flex w-[85%] px-10 py-6 absolute left-[7.5%] translate-y-[-35px] rounded bg-primary-300 shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] mx-auto space-x-5">
            {info.map((i) => (
              <div
                key={i.id}
                className="flex bg-[#ceedea] text-primary-200 font-bold rounded"
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
        </div>
      )}
    </div>
  )
}

export default Panel
