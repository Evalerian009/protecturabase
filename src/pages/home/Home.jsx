import Hero from './components/Hero'
import Offers from './components/Offers'
import Services from './components/Services'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Reviews from '../../components/Reviews'

const Home = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <Services />
      <Banner />
      <Stats />
      <Reviews />
    </div>
  )
}

export default Home