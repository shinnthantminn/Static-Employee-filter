import { useEffect, useState } from 'react'

const useImage = (fileName) => {
  const [img, setImg] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      const res = await import(`../${fileName}.svg`)
      setImg(res.default)
    }
    fetchImage()
  }, [fileName])

  return img
}

export default useImage
