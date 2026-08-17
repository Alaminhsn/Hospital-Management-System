const Footer = () => {
  return (
    <footer className="">
      {/* Footer Main */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-16 mt-20 mb-6 ">

          {/* Logo & Description */}
          <div>
            <img className="w-[180px] sm:w-[200px] lg:w-[217px] h-auto" src="logo.svg" alt="Logo" />

            <p className="mt-5 text-gray-600  max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia voluptas itaque, rem accusamus corporis illo
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="font-bold  text-xl mb-4">
              Company
            </p>

            <ul className=" text-gray-600 inline-block">
              <li className="hover:text-blue-500 cursor-pointer ">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer ">Contact</li>
              <li className="hover:text-blue-500 cursor-pointer ">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h2 className="font-bold text-xl mb-4">
              Get In Touch
            </h2>

            <div className=" text-gray-600">
              <p>+88017xxxxxxxx</p>
              <p className="break-all">prescripto@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Line */}
        <hr className="border-gray-200" />

        {/* Copyright */}
        <div className="py-5 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Copyright © 2026 - All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;