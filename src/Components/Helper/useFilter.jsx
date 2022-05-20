import { useSelector } from 'react-redux'

const useFilter = () => {
  const info = useSelector((state) => state.Info)
  const data = useSelector((state) => state.Data)

  const text = info.map((i) => i.text)

  const filter = data.map((i) => {
    const con = i.skill.map((x) => text.includes(x)).some((i) => i === true)
    if (con) {
      return {
        ...i,
        filter: true,
      }
    } else {
      return {
        ...i,
      }
    }
  })
  console.log(filter)

  const item = filter.filter((i) => i.filter === true)
  return item
}

export default useFilter
