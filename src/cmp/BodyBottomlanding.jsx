
export default function(){

    return(
        <div>
            <div className="px-3 grid grid-cols-3 gap-5 md:grid-cols-5 justify-center items-center my-10 md:px-20">
            <div className="row-span-2"> 
                <h1 className="text-xl font-bold text-start md:text-4xl">Our Partners:</h1>
            </div>
            <div>
                <img src="hodaa.png" alt="" />
            </div>
            <div>
                <span className="text-3xl font-bold">Uber</span>
            </div>
            <div>
                <img src="hypo.png" alt="" />
            </div>
            <div>
                <img src="klin.png" alt="" />
            </div>
           </div>
            <div className="text-center space-y-5 px-3 md:py-7">
                <h1><span className="text-2xl font-bold md:text-4xl">Our Projects</span></h1>
                <p className="md:text-xl">You can trust us to make your home shine! Take a peek at the
                    services we offer to all our clients and more.....
                </p>
            </div>
            <div className="grid grid-cols-2 gap-3 py-8 px-3 text-center md:grid-cols-3 md:gap-20">
               <div className="space-y-5">
                    <div className="">
                        <img className="rounded-t-3xl md:w-150 md:h-100" src="chair.png" alt="" />
                    </div>
                    <h1 className="text-md font-semibold md:text-xl">Upholstery cleaning</h1>
               </div>
               <div className="space-y-5">
                    <div className="">
                        <img className="rounded-t-3xl md:w-150 md:h-100" src="oven.jpg" alt="" />
                    </div>
                    <h1 className="text-md font-semibold md:text-xl">Oven cleaning</h1>
               </div>
               <div className="space-y-5">
                    <div className="">
                        <img className="rounded-t-3xl md:w-150 md:h-100" src="bed.jpg" alt="" />
                    </div>
                    <h1 className="text-md font-semibold md:text-xl">Mattress cleaning</h1>
               </div>
               <div className="space-y-5">
                    <div className="">
                        <img className="rounded-t-3xl md:w-150 md:h-100" src="window.jpg" alt="" />
                    </div>
                    <h1 className="text-md font-semibold md:text-xl">Window cleaning</h1>
               </div>
               <div className="space-y-5">
                    <div className="">
                        <img className="rounded-t-3xl md:w-150 md:h-100" src="tenancy.jpg" alt="" />
                    </div>
                    <h1 className="text-md font-semibold md:text-xl">End of tenancy cleaning</h1>
               </div>
               <div className="space-y-5">
                    <div className="">
                        <img className="rounded-t-3xl md:w-150 md:h-100" src="carpet.png" alt="" />
                    </div>
                    <h1 className="text-md font-semibold md:text-xl">Carpet cleaning</h1>
               </div>
            </div>
        </div>
    )
}