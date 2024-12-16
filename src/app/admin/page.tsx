import Image from "next/image"

export default function admin(){
    return(
        <div className="w-[1350px] h-[900px] bg-[#F6F7F9]">
            
                  <Image src={'/Nav Bar.png'} alt="nav" width={286} height={500} className=""/>
                  <Image src={'/Details Rental.png'} alt="nav" width={350} height={736} className="ml-80 -mt-[846px] h-[820px]"/>
                  <Image src={'/Top 5 Car Rental.png'} alt="nav" width={600} height={115} className="ml-[710px] -mt-[820px]"/>
                  <Image src={'/Recent Transaction.png'} alt="nav" width={600} height={15} className="ml-[710px] mt-4 h-[430px]"/>

        </div>
    )
}