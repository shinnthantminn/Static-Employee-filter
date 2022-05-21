import { useDispatch } from 'react-redux'
import { Add } from '../Data/Slicer/InfoSlicer'
import { v4 as uuid } from 'uuid'

const Button = ({ item }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const data = {
      id: uuid(),
      text: item,
    }
    dispatch(Add(data))
  }

  return (
    <button
      onClick={handleClick}
      className="px-[10px] ml-2 sm:ml-0 pt-[5px] text-primary-200 font-bold bg-[#ceedea] rounded duration-300 hover:bg-[#296962] hover:text-white"
    >
      {item}
    </button>
  )
}

export default Button
