import play from "../assets/images/play-circle.png"
import bgImage from "../assets/images/navBg.png"

const HomePage = () => {

    return (
        
           <div className="home relative  flex items-center  ">
                <div className="content  ml-7 sm:ml-24 ">
                    <h3>Workspace that inspire</h3>
                    <p>We work for people and make their dream come in to there life or in there home.</p>
                    <div className="play flex items-center justify-between">
                        <img className="cursor-pointer" src={play} alt="play"/>
                        <div className="line"></div>
                        <p>DISCOVER</p>
                    </div>
                </div>
                <div className="bg-image ml-auto flex items-end justify-end">
                    <img src={bgImage} alt="backgroundImage"/>
                </div>
           </div>
        
    )
}
export default HomePage;