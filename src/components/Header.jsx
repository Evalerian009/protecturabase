
const Header = ({title}) => {
  return (
    <div className="w-screen pt-14 flex flex-col justify-center bg-bgTet" style={{backgroundImage: `url('')`, backgroundSize: 'cover', backgroundPosition: 'top'}}>
      <div className='border-b border-tet w-full lg:py-14 px-[20px] md:p-[50px] lg:px-[100px] text-center flex flex-col justify-center py-7'>
        <h1 className='text-4xl text-white'>{title}</h1>
      </div>
    </div>
  )
}

export default Header