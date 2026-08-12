const Footer = () => {
  return (
    <footer className="mt-10">
      {/* Footer Main */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 py-10">

          {/* Logo & Description */}
          <div>
            <img
              className="w-[180px] sm:w-[200px] lg:w-[217px] h-auto"
              src="logo.svg"
              alt="Logo"
            />

            <p className="mt-5 text-gray-600 leading-7 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia voluptas itaque, rem accusamus corporis illo, tempora
              quaerat inventore explicabo quo dignissimos voluptates est
              ipsum facilis dolore enim consequatur assumenda consequuntur!
            </p>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-bold opacity-80 text-xl mb-4">
              Company
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h2 className="font-bold opacity-80 text-xl mb-4">
              Get In Touch
            </h2>

            <div className="space-y-3 text-gray-600">
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