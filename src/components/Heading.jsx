
const Heading = ({title, txt, custStyle}) => {
  return (
    <div className={`${custStyle} text-center md:w-[550px] mx-auto px-7`}>
        {title && <h2 className="text-3xl md:text-4xl font-semibold capitalize text-mainTxt">{title}</h2>}
        <p className={`text-grayTxt md:w-[550px] mx-auto  mt-4 font-semibold`}>{txt}</p>
    </div>
  )
}

export default Heading