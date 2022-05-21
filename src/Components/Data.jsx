import Button from './Button'
import useImage from './Helper/useImage'

const Data = ({ data }) => {
  const img = useImage(data.logo)
  return (
    <div
      key={data.id}
      className={data.id < 3 ? 'card border-l-[5px] rounded-l' : 'card'}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex items-center space-x-2 sm:space-x-7 ">
            <div className=" absolute top-0 left-0 w-[50px] translate-y-[-20px] translate-x-[15px] sm:translate-x-0 sm:translate-y-0 sm:w-fit sm:static">
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
        <div className="col-span-12 lg:col-span-6">
          <div className="w-[95%] mx-auto border-b-[1px] border-primary-400 my-3 block lg:hidden" />
          <div className="flex flex-wrap lg:justify-end items-center h-full sm:space-x-5">
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
