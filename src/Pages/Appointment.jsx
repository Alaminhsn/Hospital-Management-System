import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  // Find doctor
  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // Appointment dates
  const dates = [
    {
      day: "SUN",
      date: "16",
    },
    {
      day: "MON",
      date: "17",
    },
    {
      day: "TUE",
      date: "18",
    },
    {
      day: "WED",
      date: "19",
    },
    {
      day: "THU",
      date: "20",
    },
    {
      day: "FRI",
      date: "21",
    },
  ];

  // Appointment time
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  // Loading / doctor not found
  if (!docInfo) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <p className="text-gray-500 text-lg">
          Doctor information not found.
        </p>
      </div>
    );
  }

  // Related doctors
  const relatedDoctors = doctors
    .filter(
      (doc) =>
        doc.speciality === docInfo.speciality &&
        doc._id !== docInfo._id
    )
    .slice(0, 5);

  // Book appointment
  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select an appointment time.");
      return;
    }

    alert(
      `Appointment booked with ${docInfo.name} at ${selectedTime}`
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">

      {/* =====================================================
          DOCTOR INFORMATION
      ====================================================== */}

      <div className="flex flex-col md:flex-row gap-6">

        {/* Doctor Image */}
        <div className="w-full md:w-[350px]">

          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-full h-[350px] object-cover bg-[#5F6FFF] rounded-xl"
          />

        </div>


        {/* Doctor Details */}
        <div className="flex-1 border border-gray-200 rounded-xl p-5 sm:p-7">

          {/* Name */}
          <div className="flex items-center gap-2">

            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              {docInfo.name}
            </h1>

            <span className="text-[#5F6FFF] text-xl">
              ✓
            </span>

          </div>


          {/* Degree + Speciality */}
          <div className="flex flex-wrap items-center gap-3 mt-3">

            <p className="text-gray-600">
              {docInfo.degree}
            </p>

            <span className="px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-600">
              {docInfo.speciality}
            </span>

          </div>


          {/* Experience */}
          <p className="mt-5 text-gray-700">

            <span className="font-semibold">
              Experience:
            </span>{" "}

            {docInfo.experience}

          </p>


          {/* About */}
          <div className="mt-5">

            <h2 className="font-semibold text-lg text-gray-800">
              About Doctor
            </h2>

            <p className="text-gray-500 mt-2 leading-7">
              {docInfo.about}
            </p>

          </div>


          {/* Fee */}
          <p className="mt-5 text-gray-700">

            <span className="font-semibold">
              Appointment Fee:
            </span>{" "}

            ${docInfo.fees}

          </p>

        </div>

      </div>


      {/* =====================================================
          BOOK APPOINTMENT
      ====================================================== */}

      <div className="mt-12">

        <h2 className="text-2xl font-semibold text-gray-800">
          Book Appointment
        </h2>

        <p className="text-gray-500 mt-2">
          Select your preferred date and time
        </p>


        {/* ================= DATE ================= */}

        <div className="mt-7">

          <h3 className="font-semibold text-gray-700 mb-4">
            Select Date
          </h3>

          <div className="flex gap-3 overflow-x-auto pb-3">

            {dates.map((item, index) => (

              <div
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`
                  min-w-[70px]
                  h-[85px]
                  rounded-full
                  flex
                  flex-col
                  justify-center
                  items-center
                  cursor-pointer
                  transition
                  ${
                    selectedDate === index
                      ? "bg-[#5F6FFF] text-white"
                      : "border border-gray-200 text-gray-600 hover:border-[#5F6FFF]"
                  }
                `}
              >

                <p className="text-xs">
                  {item.day}
                </p>

                <p className="text-lg font-semibold mt-1">
                  {item.date}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* ================= TIME ================= */}

        <div className="mt-8">

          <h3 className="font-semibold text-gray-700 mb-4">
            Select Time
          </h3>

          <div className="flex flex-wrap gap-3">

            {timeSlots.map((time, index) => (

              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  border
                  transition
                  ${
                    selectedTime === time
                      ? "bg-[#5F6FFF] text-white border-[#5F6FFF]"
                      : "border-gray-300 text-gray-600 hover:border-[#5F6FFF]"
                  }
                `}
              >
                {time}
              </button>

            ))}

          </div>

        </div>


        {/* ================= BOOK BUTTON ================= */}

        <button
          onClick={handleBooking}
          className="
            mt-10
            bg-[#5F6FFF]
            text-white
            px-8
            py-3
            rounded-full
            hover:bg-[#4f5fe8]
            transition
            font-medium
          "
        >
          Book Appointment
        </button>

      </div>


      {/* =====================================================
          RELATED DOCTORS
      ====================================================== */}

      <div className="mt-20">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Related Doctors
          </h2>

          <p className="text-gray-500 mt-2">
            Doctors from the same speciality
          </p>

        </div>


        {/* Doctor Grid */}

        {relatedDoctors.length > 0 ? (

          <div className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-4
            sm:gap-5
            mt-8
          ">

            {relatedDoctors.map((item, index) => (

              <div
                key={index}
                onClick={() =>
                  navigate(`/appointment/${item._id}`)
                }
                className="
                  border
                  border-gray-200
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >

                {/* Doctor Image */}

                <div className="bg-gray-100">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      h-44
                      sm:h-48
                      object-cover
                    "
                  />

                </div>


                {/* Doctor Info */}

                <div className="p-3 sm:p-4">

                  {/* Available */}

                  <div className="flex items-center gap-2 mb-2">

                    <span className="
                      w-2
                      h-2
                      bg-green-500
                      rounded-full
                    "></span>

                    <p className="text-xs text-green-500">
                      Available
                    </p>

                  </div>


                  {/* Name */}

                  <h3 className="
                    font-semibold
                    text-gray-800
                    truncate
                  ">
                    {item.name}
                  </h3>


                  {/* Speciality */}

                  <p className="text-sm text-gray-500 mt-1">
                    {item.speciality}
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <p className="text-center text-gray-500 mt-8">
            No related doctors found.
          </p>

        )}

      </div>
<hr className="border-gray-200 mt-6" />
    </div>
  );
};

export default Appointment;