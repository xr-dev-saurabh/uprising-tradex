import IctCard from "../../components/cards/ictcard"
import FmcgCard from "../../components/cards/fmcgCard"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar/navbar"
import AboutUs from "../../components/AboutUs"
import ContactUS from "../../components/contactus"
import Mission from "../../components/mission"
const Home=()=>{
    return(
    <div className="bg-gray-50 flex flex-col h-fit overflow-hidden">
        <div className="md:px-16 px-6 py-5">
        <Navbar></Navbar>
        <div className="">
            <div className="font-bold text-2xl w-40 pt-10 md:pt-20">Workspace that inspire</div>
            <div className="w-80 py-5">We work for people and make their dream come in to their life or in there home</div>
            <div className="flex flex-row py-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16l13-8z"/></svg>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M.5 10a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"/></svg></span>
                <span className="font-semibold text-lg">DISCOVER</span>
            </div>
            <div className="flex flex-col space-y-5 md:flex-row py-5 md:py-10 justify-evenly">
                <IctCard></IctCard>
                <FmcgCard></FmcgCard>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly py-10">
                <div>
                    <img className="rounded-full h-80 w-80" src="https://assets.cdn.thewebconsole.com/S3WEB9735/images/img-ICT-services.png?m=9188ee21989a5fc2cbe441d2153bb669&geometry(1920%3E)" alt="" />
                </div>
                <div className="flex flex-col space-y-10 w-full md:w-1/5">
                    <div className="text-2xl font-bold">ICT Services</div>
                    <div>
                        <li>Augmennted Reality for websites(WebAR)</li>
                        <li>Augmennted Reality filters for Instagram, Facebook and Snapchat</li>
                        <li>Cloud Deployment Services for AWS, Microsoft, Google</li>
                        <li>3D Product modeling</li>
                        <li>Portfolio Designing</li>
                        <li>NFC Tags</li>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-evenly  md:flex-row py-5 md:py-10">
                <div className="flex flex-col space-y-10 w-full md:w-1/4">
                    <div className="text-2xl font-bold">Our Advantages</div>
                    <div>
                        <li>Augmennted Reality for websites(WebAR)</li>
                        <li>Augmennted Reality filters for Instagram, Facebook and Snapchat</li>
                        <li>Cloud Deployment Services for AWS, Microsoft, Google</li>
                        <li>3D Product modeling</li>
                        <li>Portfolio Designing</li>
                        <li>NFC Tags</li>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 md:space-y-10 w-1/2 h-auto">
                    <div className="grid grid-cols-2 gap-5 md:gap-10">
                        <img className="" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
                        <img className="" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-3 gap-5 md:gap-10">
                        <img className="col-span-1" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
                        <img className="col-span-2" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
                    </div>
                </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-white shadow-2xl px-5 md:px-10">
                    <div className="flex flex-col space-y-10 text-xl md:text-2xl font-bold w-full md:w-1/2 "> Fast moving consumer goods</div>
                    <div className="py-5">
                        <li>Uprising provides import and export services for fast moving consumer goods</li>
                        <li>Export packaged foods including, Indian Sweets, Indian namkeens, wafers, Commadities, etc.</li>
                        <li>Import and export of dry fruits, resins and peanuts.</li>
                        <li>We also export suits and sarees.</li>
                    </div>
            </div>
        </div>
        </div>
        <Mission></Mission>
        <AboutUs></AboutUs>
        <ContactUS></ContactUS>
        <Footer></Footer>
    </div>)
}

export default Home