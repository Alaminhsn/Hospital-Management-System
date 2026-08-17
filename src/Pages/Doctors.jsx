import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([]);

  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter()
  },[doctors,speciality]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ================= Specialities ================= */}
        <div className="lg:w-56 mt-12">

          <h2  className="text-lg font-semibold text-gray-800  ">
            Specialities
          </h2>

          <div
            className="
              flex lg:flex-col
              gap-3
              overflow-x-auto
              pb-2
              lg:overflow-visible
              scrollbar-hide mt-4
            "
          >

            <p
              onClick={()=>speciality==='General physician'? navigate("/doctors"):navigate('/doctors/General physician')}
              className="
                border border-gray-200
                rounded-lg
                px-4 py-2
                text-sm
                text-gray-600
                cursor-pointer
                hover:bg-blue-50
                hover:text-blue-600
                transition
              "
            >
              General physician
            </p>

            <p
              onClick={()=>speciality==='Gynecologist'? navigate("/doctors"):navigate('/doctors/Gynecologist')}
              className="
                border border-gray-200
                rounded-lg
                px-4 py-2
                text-sm
                text-gray-600
                cursor-pointer
                hover:bg-blue-50
                hover:text-blue-600
                transition
              "
            >
              Gynecologist
            </p>

            <p
              onClick={()=>speciality==='Dermatologist'? navigate("/doctors"):navigate('/doctors/Dermatologist')}
              className="
                border border-gray-200
                rounded-lg
                px-4 py-2
                text-sm
                text-gray-600
                cursor-pointer
                hover:bg-blue-50
                hover:text-blue-600
                transition
              "
            >
              Dermatologist
            </p>

            <p
              onClick={()=>speciality==='Pediatricial******************'? navigate("/doctors"):navigate('/doctors/Gynecologist')}
              className="
                border border-gray-200
                rounded-lg
                px-4 py-2
                text-sm
                text-gray-600
                cursor-pointer
                hover:bg-blue-50
                hover:text-blue-600
                transition
              "
            >
              Pediatricial
            </p>
            <p
              onClick={()=>speciality==='Neurologist'? navigate("/doctors"):navigate('/doctors/Neurologist')}
              className="
                border border-gray-200
                rounded-lg
                px-4 py-2
                text-sm
                text-gray-600
                cursor-pointer
                hover:bg-blue-50
                hover:text-blue-600
                transition
              "
            >
              Neurologist
            </p>

            <p
              onClick={()=>speciality==='Gastroenterologist'? navigate("/doctors"):navigate('/doctors/Gastroenterologist')}
              className="
                border border-gray-200
                rounded-lg
                px-4 py-2
                text-sm
                text-gray-600
                cursor-pointer
                hover:bg-blue-50
                hover:text-blue-600
                transition
              "
            >
              Gastroenterologist
            </p>

          </div>
        </div>


        {/* ================= Doctors ================= */}
        <div className="flex-1 mt-10 ">

          <div
            className="
              grid
              grid-cols-1
              xs:grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
              sm:gap-6
            "
          >

            {filterDoc.map((item, index) => (

              <div
                key={index}
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
                  scrollTo(0, 0);
                }}
                className="
                  border
                  border-gray-200
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  bg-white
                  hover:shadow-lg
                "
              >

                {/* Doctor Image */}
                <div className="bg-gray-100">

                  <img
                    src={item.image}
                    alt={item.speciality}
                    className="
                      w-full
                      h-80
                      sm:h-56
                      md:h-60
                      object-cover
                    "
                  />

                </div>


                {/* Doctor Info */}
                <div className="p-4">

                  {/* Available */}
                  <div className="flex items-center gap-2 mb-2">

                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                    <span className="text-xs text-green-600">
                      Available
                    </span>

                  </div>


                  {/* Name */}
                  <h2 className="
                    text-base
                    sm:text-lg
                    font-semibold
                    text-gray-800
                    truncate
                  ">
                    {item.name}
                  </h2>


                  {/* Speciality */}
                  <p className="
                    text-xs
                    sm:text-sm
                    text-gray-500
                    mt-1
                  ">
                    {item.speciality}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
        <hr className="border-gray-200 mt-6" />

    </div>
  );
};

export default Doctors;