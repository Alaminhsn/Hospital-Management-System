import { useNavigate } from "react-router-dom";
import { doctors } from "../../public/assets";
import Footer from "../Components/Footer";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#5F6FFF] max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden">
        <div className="min-h-[500px] flex flex-col md:flex-row justify-between items-center px-6 md:px-10 lg:px-16 py-10">

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-semibold leading-tight">
              Book appointment
              <br />
              with trusted Doctors
            </h1>

            {/* Profile + Description */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3 mt-6">
              <img
                className="w-32 sm:w-36 object-contain"
                src="/group_profiles.png"
                alt="Trusted doctors"
              />

              <p className="text-white text-sm sm:text-base">
                Simply browse our extensive list of trusted doctors,
                <br className="hidden sm:block" />
                schedule your appointment hassle-free.
              </p>
            </div>

            {/* Button */}
            <a href="#speaciality">
            <button
             
              className="bg-white text-[#5F6FFF] px-7  py-3 rounded-lg text-base sm:text-lg font-medium mt-8 hover:bg-gray-100 transition"
            >
              Book appointment
            </button> </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center items-end mt-8 md:mt-0">
            <img
              className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] max-h-[450px] object-contain"
              src="/1.png"
              alt="Doctor"
            />
          </div>
        </div>
      </div>

      {/* Speciality Section */}
      <div>

        {/* Heading */}
        <div id="speaciality" className="flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl mt-12 sm:mt-20 font-semibold">
            Find By Speciality
          </h1>

          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 opacity-80 max-w-2xl">
            Simply browse our extensive list of trusted doctors, schedule{" "}
            <span className="block">
              your appointment hassle-free
            </span>
          </p>
        </div>

        {/* Specialities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 mt-12 sm:mt-20 px-6 md:px-10 lg:px-16">

          <div className="flex items-center flex-col gap-2">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24"
              src="/Neurologist.svg"
              alt="Neurologist"
            />
            <h2 className="text-sm sm:text-base">
              Neurologist
            </h2>
          </div>

          <div className="flex items-center flex-col gap-2">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24"
              src="/Gynecologist.svg"
              alt="Gynecologist"
            />
            <h2 className="text-sm sm:text-base">
              Gynecologist
            </h2>
          </div>

          <div className="flex items-center flex-col gap-2">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24"
              src="/Dermatologist.svg"
              alt="Dermatologist"
            />
            <h2 className="text-sm sm:text-base">
              Dermatologist
            </h2>
          </div>

          <div className="flex items-center flex-col gap-2">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24"
              src="/General_physician.svg"
              alt="General Physician"
            />
            <h2 className="text-sm sm:text-base">
              General Physician
            </h2>
          </div>

          <div className="flex items-center flex-col gap-2">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24"
              src="/Pediatricians.svg"
              alt="Pediatricians"
            />
            <h2 className="text-sm sm:text-base">
              Pediatricians
            </h2>
          </div>

          <div className="flex items-center flex-col gap-2">
            <img
              className="w-20 h-20 sm:w-24 sm:h-24"
              src="/Gastroenterologist.svg"
              alt="Gastroenterologist"
            />
            <h2 className="text-sm sm:text-base">
              Gastroenterologist
            </h2>
          </div>

        </div>

        {/* Top Doctors */}
        <div className="flex flex-col justify-center items-center text-center px-4">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-16 sm:mt-20">
            Top Doctors to Book
          </h2>

          <p className="text-sm sm:text-base opacity-80 mt-2">
            Simply browse our extensive trusted doctors
          </p>

        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 px-6 md:px-10 lg:px-16">

          {doctors.slice(0, 10).map((item, index) => (
            <div onClick={()=>{navigate("/aponment/${item._id}")}}
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
            >

              {/* Doctor Image */}
              <div className="bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-4">

                {/* Available */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                  <p className="text-sm text-green-600">
                    Available
                  </p>
                </div>

                {/* Name */}
                <p className="text-lg font-semibold mt-2">
                  {item.name}
                </p>

                {/* Speciality */}
                <p className="text-sm text-gray-500 mt-1">
                  {item.speciality}
                </p>

              </div>
            </div>
          ))}

        </div>
        <button  onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className="bg-gray-200 cursor-pointer rounded-2xl w-40 h-10 mt-10 ml-150">More</button>

      </div>
      <div className="container mx-auto mt-10 px-4 sm:mt-16 md:mt-20">
  <div className="bg-[#5F6FFF] rounded-2xl overflow-hidden">

    <div className="flex flex-col lg:flex-row items-center justify-between">

      {/* Content */}
      <div className="w-full lg:w-1/2 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight">
            Book Appointment
          </h2>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight">
            With 100+ Trusted Doctors
          </h2>

          <button
            onClick={() => navigate("/login")}
            className="mt-8 sm:mt-10 lg:mt-12 bg-white rounded-2xl text-base sm:text-lg md:text-xl py-2.5 px-6 opacity-90 hover:opacity-100 active:bg-gray-300 cursor-pointer"
          >
            Create Account
          </button>

        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end">
        <img
          src="appointment_img.png"
          alt="Appointment"
          className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto"
        />
      </div>

    </div>
  </div>
</div>
      <hr className="container m-auto mt-10"/>
      <Footer />
    </>
  );
};

export default Home;