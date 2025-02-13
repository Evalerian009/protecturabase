import Button from "../../../components/Button";

const Banner = () => {
  return (
    <div 
      className="py-14 px-7 mt-14 w-screen text-center bg-center relative" 
      style={{ backgroundImage: `url(banner.jpg)`, backgroundSize: "cover" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000b9]" />
      <div className="max-w-[700px] mx-auto relative">
        <h3 className="text-4xl text-white uppercase font-bold">Need Assistance?</h3>
        <p className="mt-4 text-[20px] font-light text-gray-200">
          Have a special request, inquiry, or need expert consultation? Click the link below to get in touch.  
          For immediate assistance, use our live support option to connect with an agent in real time.
        </p>
        <Button color="blue" title="Contact Us" href="contact" custStyles="block w-fit mx-auto mt-8" />
      </div>
    </div>
  );
};

export default Banner;
