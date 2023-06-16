import Person from "../assets/Person.PNG"
const Mission=()=>{
    return(<>
        <div className="grid grid-cols-2 px-10">
            <div className="bg-red-200 p-20">
                <div className="text-white text-2xl">Our Mission</div>
                <div className="text-white">Assisting our customers in achieving their goals by offering differentiated products and services.Helping e-commerce bussinesses to give their customers the most compeling shoping experiences possible</div>
            </div>
            <div className="relative">
                <img src={Person} alt=""/>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7 0V3h1v4.293l2.854 2.853l-.708.708l-3-3A.499.499 0 0 1 7 7.5Z" clip-rule="evenodd"/></svg>
                </div>
            </div>
        </div>
    </>)
}

export default Mission