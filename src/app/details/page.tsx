import Image from "next/image"
import Link from "next/link"

export default function details(){
    return(
        <div className=" w-[1350px] h-[1850px] bg-[#F6F7F9] ">
            <div className="flex">
                
                <Image src='/navbar2.png' alt="nav" width={360} height={100}/>
            

<div>
    <Image src='/View.png' alt="view" width={450} height={360}  className="rounded-[10px] mt-8 ml-5"/>
  <Link href='/payment'>  <Image src='/Detail Car.png' alt="view" width={450} height={360}  className="rounded-[10px] ml-[500px] -mt-[330px]"/></Link>
    <Image src='/View 1.png' alt="view" width={120} height={110}  className="rounded-[10px] -mt-24 ml-5"/>
    <Image src='/View 2.png' alt="view" width={120} height={108}  className="rounded-[10px] -mt-[102px] ml-[185px]"/>
    <Image src='/View 3.png' alt="view" width={120} height={108}  className="rounded-[10px] -mt-[102px] ml-[350px]"/>

</div>
</div>

<div className="bg-[#FFFFFF] w-[930px] h-[400px]  -mt-[1450px] ml-[380px] rounded-[10px]">
  <div className="flex pt-3">
    <div className="text-[#1A202C] font-semibold pl-10 pt-8">Reviews</div>
    <div className="w-[38px] h-[28px] bg-[#3563E9] text-[#FFFFFF] rounded-[4px] text-center pt-0.5 mt-8 ml-4">13</div>
   </div>
<Image src='/Reviews 1.png' alt="view" width={830} height={124} className="pt-7 pl-12"/>
<Image src='/Reviews 2.png' alt="view" width={830} height={124} className="pl-12 pt-8"/>
<Image src='/Show All.png' alt="all" width={125} height={47} className="mt-4 ml-96 " />
</div>
<div className="w-[930px] h-[410px]  ml-[380px] mt-9 ">
   <div className="flex w-[1000px] h-[44px] gap-[780px]">   <div className="text-[#90A3BF]">Recent Car</div>
           <div className="text-[#3563E9] text-sm">View All</div>     </div>
    <div className="flex  gap-16">
<div>  <Image src='/1a.png' alt="nav" width={270} height={388}/></div>
<div>  <Image src='/2a.png' alt="nav" width={270} height={400}/></div>
<div>  <Image src='/3a.png' alt="nav" width={270} height={388}/></div>
</div>
</div>
  
<div className="w-[930px] h-[400px] ml-[380px] mt-3 ">
   <div className="flex w-[1000px] h-[44px] gap-[700px]">   <div className="text-[#90A3BF]">Recommendation Car</div>
           <div className="text-[#3563E9] text-sm">View All</div>     </div>
    <div className="flex  gap-16">
<div>  <Image src='/1c.png' alt="nav" width={270} height={388}/></div>
<div>  <Image src='/2c.png' alt="nav" width={270} height={400}/></div>
<div>  <Image src='/3c.png' alt="nav" width={270} height={388}/></div>
</div>
</div>

</div>
    )
}