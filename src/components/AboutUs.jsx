const AboutUs=()=>{
    return (
        <>
        <div className="flex flex-col md:px-16 px-6 py-5 h-auto md:h-80">
                <div className="text-lg md:text-2xl font-semibold py-5 text-center">WHy Us?</div>
                <div className="grid grid-rows-4 md:grid-cols-4 gap-3 md:gap-6 space-x-3 md:space-x-6">
                    {/* Reliable Card */}
                    <div className="flex flex-col px-3 md:px-6 py-2 md:py-4 bg-white shadow-2xl relative ">
                        <div className="text-xl font-semibold pb-5">Reliable</div>
                        <div className=" font-serif">We believe in building and maintaining long term relationships  with all our clients</div>
                        <div className="absolute right-6 bottom-4"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M27 4v6.49c0 3.15-1.426 6.14-3.896 8.101l-.002.002l-.965.776l2.506 9.182c.352 1.24-.595 2.449-1.863 2.449H10.23a1.94 1.94 0 0 1-1.875-2.442l2.508-9.19l-.967-.776l-.001-.002A10.355 10.355 0 0 1 6 10.49V4c-.55 0-1-.45-1-1s.45-1 1-1h21c.55 0 1 .45 1 1s-.45 1-1 1ZM12.764 20l-2.457 9h12.386l-2.457-9h-7.472Zm9.09-2.97l.004-.003A8.34 8.34 0 0 0 25 10.49V5h-1.88v5.28c0 2.52-.92 4.96-2.58 6.85l-.764.87h.872l1.205-.97ZM17 18h1.447l1.343-1.53a9.388 9.388 0 0 0 2.33-6.19V5H17v13Zm-2.447 0H16V5h-5.12v5.28c0 2.28.83 4.48 2.33 6.19L14.553 18Zm-2.093-.87c-1.66-1.9-2.58-4.33-2.58-6.85V5H8v5.49a8.355 8.355 0 0 0 3.144 6.538l.003.003l1.205.969h.872l-.764-.87Z"/></svg></div>
                    </div>
                    {/* Solutions Card */}
                    <div className="flex flex-col px-3 md:px-6 py-2 md:py-4 bg-white shadow-2xl relative">
                        <div className="text-xl font-semibold pb-5">Solutions</div>
                        <div className=" font-serif">We believe in building and maintaining long term relationships  with all our clients</div>
                        <div className="absolute right-6 bottom-4"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 72 72"><path fill="#92D3F5" d="M17 61v-4c0-4.994 5.008-9 10-9c6 5 12 5 18 0c4.994 0 10 4.006 10 9v4"/><path fill="#F1B31C" d="M26 39c-4 0-4-6-4-13s4-14 14-14s14 7 14 14s0 13-4 13"/><path fill="#FCEA2B" d="M24.936 31c0 9 4.937 14 11 14C41.873 45 47 40 47 31c0-3-1-5-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.064 1-1.064 6z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26 39c-4 0-4-6-4-13s4-14 14-14s14 7 14 14s0 13-4 13M17 60v-3c0-4.994 5.008-9 10-9c6 5 12 5 18 0c4.994 0 10 4.006 10 9v3"/><path d="M41.873 30a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M24.936 31c0 9 4.937 14 11 14C41.873 45 47 40 47 31c0-3-1-5-1-5c-3-3-7-8-7-8c-4 3-7 6-13 7c0 0-1.064 1-1.064 6z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M33 38c1.938.939 4 1 6 0"/></svg></div>
                    </div>
                    {/* Affordable Card */}
                    <div className="flex flex-col px-3 md:px-6 py-2 md:py-4 bg-white shadow-2xl relative">
                        <div className="text-xl font-semibold pb-5">Affordable</div>
                        <div className=" font-serif">We believe in building and maintaining long term relationships  with all our clients</div>
                        <div className="absolute right-6 bottom-4"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="currentColor" d="M27 4v6.49c0 3.15-1.426 6.14-3.896 8.101l-.002.002l-.965.776l2.506 9.182c.352 1.24-.595 2.449-1.863 2.449H10.23a1.94 1.94 0 0 1-1.875-2.442l2.508-9.19l-.967-.776l-.001-.002A10.355 10.355 0 0 1 6 10.49V4c-.55 0-1-.45-1-1s.45-1 1-1h21c.55 0 1 .45 1 1s-.45 1-1 1ZM12.764 20l-2.457 9h12.386l-2.457-9h-7.472Zm9.09-2.97l.004-.003A8.34 8.34 0 0 0 25 10.49V5h-1.88v5.28c0 2.52-.92 4.96-2.58 6.85l-.764.87h.872l1.205-.97ZM17 18h1.447l1.343-1.53a9.388 9.388 0 0 0 2.33-6.19V5H17v13Zm-2.447 0H16V5h-5.12v5.28c0 2.28.83 4.48 2.33 6.19L14.553 18Zm-2.093-.87c-1.66-1.9-2.58-4.33-2.58-6.85V5H8v5.49a8.355 8.355 0 0 0 3.144 6.538l.003.003l1.205.969h.872l-.764-.87Z"/></svg></div>
                    </div>
                    {/* Experience Card */}
                    <div className="flex flex-col px-3 md:px-6 py-2 md:py-4 bg-white shadow-2xl relative">
                        <div className="text-xl font-semibold pb-5">Experience<span className="absolute top-8"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84Zm68-84a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12V72a12 12 0 0 1 24 0v44h44a12 12 0 0 1 12 12Z"/></svg></span></div>
                        <div className=" font-serif">We believe in building and maintaining long term relationships  with all our clients</div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default AboutUs