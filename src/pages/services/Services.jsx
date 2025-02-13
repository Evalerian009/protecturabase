import Header from "../../components/Header"
import ServiceSlides from "./components/ServiceSlides"
import ServicesList from "./components/ServicesList"

const Services = () => {
  return (
    <div>
      <Header title={'Services'} />
      <div>
        <ServicesList />
        <ServiceSlides />
      </div>
    </div>
  )
}

export default Services