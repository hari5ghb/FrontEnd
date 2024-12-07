import '@fontsource/roboto-flex';

const Navbar = () => {

    return (
        <>
            <div className="bg-white w-full flex align-middle font-roboto justify-center border border-gray-300 shadow-md p-7">
                <div>
                    <h3 className="text-3xl font-bold font-roboto">DIGI-<span className="text-blue-600">FYNIX</span></h3>
                </div>
                <div className="ml-96 my-auto">
                    <ul className="flex font-thin text-gray-500 hover:cursor-pointer ">
                        <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110 ">Our Services</li>
                        <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110  ">Vist Our Blog</li>
                        <li className="mx-5 hover:text-black transition duration-300 ease-in-out transform hover:scale-110  ">About Us</li>
                    </ul>
                </div>
                
                <button className="ml-auto p-2 bg-blue-600 rounded-lg text-white font-normal  hover:bg-blue-700">
                    Contact Us
                </button>
            </div>
        </>
    )

}

export default Navbar;