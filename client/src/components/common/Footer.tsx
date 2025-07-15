const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-100 to-teal-600 text-gray-800 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-teal-800 mb-4 md:mb-0">Healthcare.com</h2>
          <p className="text-sm text-gray-600 max-w-md text-center md:text-left">
            Providing trusted healthcare solutions with compassion and innovation. Connect with us for personalized care and wellness resources.
          </p>
        </div>
        <hr className="my-8 border-teal-300" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-teal-800 uppercase">Company</h3>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">About Us</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Contact</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-teal-800 uppercase">Shop</h3>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Medicines</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Book an Appointment</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Checkups</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-teal-800 uppercase">Categories</h3>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Fitness</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Family</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Supplements</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Healthcare</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Multivitamins</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-teal-800 uppercase">Social</h3>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors duration-200">Facebook</a>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Healthcare.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;