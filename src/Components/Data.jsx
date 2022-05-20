import Button from './Button'
import useImage from './Helper/useImage'

const Data = ({ data }) => {
  const img = useImage(data.logo)
  return (
    <div
      key={data.id}
      className="px-10 py-10 bg-primary-300 shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px]"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="flex items-center space-x-7">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex items-center text-primary-200 font-bold">
                  <p className="mr-5">{data.company}</p>
                  <div className="flex space-x-3">
                    {data.new && (
                      <div className="text-sm text-white bg-primary-200 font-bold h-fit rounded-[15px] pt-[5px] px-2">
                        <p>NEW!</p>
                      </div>
                    )}
                    {data.featured && (
                      <div className="text-sm text-white uppercase bg-primary-500 font-bold h-fit rounded-[15px] pt-[5px] px-2">
                        <p>featured</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xl font-bold text-primary-500">
                  {data.position}
                </p>
              </div>
              <div>
                <p className="text-primary-400 space-x-4 flex">
                  <span>{data.postedAt}</span> <span>.</span>
                  <span>{data.contract}</span> <span>.</span>
                  <span>{data.location}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-6">
          <div className="flex justify-end items-center h-full space-x-5">
            {data.skill.map((i, inx) => (
              <Button key={inx} item={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
