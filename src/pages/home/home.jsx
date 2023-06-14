import Navbar from "../../components/navbar/navbar"
import IctCard from "../../components/navbar/ictcard"
import FmcgCard from "../../components/navbar/fmcgCard"
const Home=()=>{
    return(<div className="px-10 py-5 bg-gray-50">
        <Navbar></Navbar>
        <div className="font-bold text-2xl w-40">Workspace that inspire</div>
        <div className="w-80">We work for people and make their dream come in to their life or in there home</div>
        <div className="flex flex-row justify-evenly py-10">
            <IctCard></IctCard>
            <FmcgCard></FmcgCard>
        </div>
        <div className="flex flex-row justify-evenly py-10">
            <div>
                <img className="rounded-full h-80 w-80" src="https://assets.cdn.thewebconsole.com/S3WEB9735/images/img-ICT-services.png?m=9188ee21989a5fc2cbe441d2153bb669&geometry(1920%3E)" alt="" />
            </div>
            <div className="flex flex-col space-y-10">
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
        <div className="flex flex-row justify-evenly py-10">
            <div className="flex flex-col space-y-10">
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
            <div className="flex flex-col space-y-6 bg-white">
               <div className="flex flex-row space-x-6">
                 <img className="w-1/2" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
                 <img className="w-1/2" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
               </div>
                <div className="flex flex-row space-x-6">
                    <img className="w-1/3" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
                    <img className="w-2/3" src="https://isharp.net/wp-content/uploads/2017/02/ICT-Page.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="fixed right-24 flex flex-col space-y-10 p-10 ">
                <div className="text-2xl font-bold">Fast moving consumer goods</div>
                <div>
                    <li>Augmennted Reality for websites(WebAR)</li>
                    <li>Augmennted Reality filters for Instagram, Facebook and Snapchat</li>
                    <li>Cloud Deployment Services for AWS, Microsoft, Google</li>
                    <li>3D Product modeling</li>
                    <li>Portfolio Designing</li>
                    <li>NFC Tags</li>
                </div>
            </div>
    </div>)
}

export default Home