import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-[22px] font-semibold text-fuchsia-500 py-2 uppercase">Tanvir.dev</span>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quasi ullam iste provident, veniam non minus? Debitis tenetur blanditiis perferendis.</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold text-fuchsia-500 py-2 uppercase">Services:</h2>
                    <ul className="my-4">
                        <li className="my-2">Web Development</li>
                        <li className="my-2">React</li>
                        <li className="my-2">Firebase</li>
                        <li className="my-2">Express</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-3xl font-semibold text-fuchsia-500 py-2 uppercase">Contact</h3>
                    <p className="my-4">Email: tanvirahmed18.ta@gmail.com</p>
                    <p className="my-4">Phone: +880 1********</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold text-fuchsia-500 py-2 uppercase">Follow Me</h2>
                    <div className="flex space-x-4">
                        <a className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out" href="">
                            <FaGithub></FaGithub>
                        </a>
                        <a className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out" href="">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out" href="">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out" href="">
                            <FaInstagram></FaInstagram>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;