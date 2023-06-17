const ContactUS=()=>{
    return (
        <>
            <div className="flex h-auto md:h-40 flex-col md:flex-row w-full md:px-16 px-6 py-5">
                <div className="flex flex-col space-y-5 md:space-y-10 w-full md:w-1/2">
                    <div className="pl-16">Contact Us</div>
                    <div className="flex flex-row space-x-2 md:space-x-10">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#1d9bf0" d="M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"/></svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/></svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M19.67 8.14a2 2 0 0 0-1.42-1.43A48.44 48.44 0 0 0 12 6.38a48.44 48.44 0 0 0-6.25.33a2 2 0 0 0-1.42 1.43A21.27 21.27 0 0 0 4 12a21.42 21.42 0 0 0 .33 3.88a2 2 0 0 0 1.42 1.4a48.44 48.44 0 0 0 6.25.33a48.44 48.44 0 0 0 6.25-.33a2 2 0 0 0 1.42-1.4A21.42 21.42 0 0 0 20 12a21.27 21.27 0 0 0-.33-3.86Zm-9.31 6.25V9.63L14.55 12l-4.19 2.38Z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                    <div className=""><input className="w-full bg-gray-200 px-10 py-3" type="text" placeholder="Enter your email id"/></div>
                    <div className=""><input className="w-full bg-gray-200 px-10 py-3" type="text"/></div>
                    <div className="text-right"><button className="bg-gray-500 px-2 py-1" type="submit">SUBMIT</button></div>
                </div>
            </div>
        </>
    )
}


export default ContactUS