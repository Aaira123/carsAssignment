import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return(
    
        <div className="w-1350px h-[2000px] bg-[#F6F7F9]">
            <div className="flex">
        <div className=" rounded-[10px] ml-[65px] mt-[32px]">
          <Image src='/Ads 1.png' alt="gallary" width={580} height={460} />
          </div>
        <div className=" rounded-[10px] ml-[65px] mt-[32px]">
        <Image src='/Ads 2.png' alt="gallary" width={580} height={460}/>
        </div>
        </div>


    <div className="flex ">
        <div className="mt-[24px] ml-[60px]"> <Image src='/Pick - Up.png' alt="gallary" width={480} height={132}/></div>
        
          <div>  <Image src='/Switch.png' alt="swith" width={100} height={100} className="mt-[40px] ml-[90px]"/></div>
          <div className="mt-[24px] ml-[80px]"> <Image src='/Pick - Up.png' alt="gallary" width={480} height={132}/></div>
       
        
        </div>
      <div>
         <div className="w-[1000px] h-[452px] mt-[50px] gap-[20px]">
            <div className="w-[900px] h-[44px] gap-[976px] flex">
                 <div className="w-[132px] h-[44px] rounded-[4px] pl-20 pr-24 gap-8">
                    <div className="w-[92px] h-[24px] text-center text-[16px] font-semibold text-[#90A3BF]">Papular Car</div>
                 </div>
                 <div>
                    <div className="w-[64px] h-[24px] text-center text-[16px] font-semibold text-[#3563E9]">view all</div>
                 </div>

            </div>
       <div className="flex gap-8 ml-20 mr-[-268px]">
          <div className="">
          <Image src='/Catalog 1.png' alt="gallary" width={404} height={488}/>
          </div>
          <div className="">
          <Image src='/Catalog 1.png' alt="gallary" width={404} height={488}/>
          </div>
          <div className="ml-15">
          <Image src='/Catalog 1.png' alt="gallary" width={404} height={488}/>
          </div>
          <div className="l-16">
          <Image src='/Catalog 1.png' alt="gallary" width={404} height={488}/>
          </div>
          </div>
         </div>
        </div>
      
         
         <div className="w-[1000px] h-[452px] mt-[50px] gap-[20px]">
            <div className="w-[1000px] h-[44px] gap-[976px] flex">
                 <div className="w-[282px] h-[44px] rounded-[4px] pl-20 pr-20 gap-">
                    <div className="w-[250px] h-[24px]  text-[16px] font-semibold text-[#90A3BF]">Recommendation Car</div>
                 </div>
                

            </div>
       <div className="flex gap-8 ml-20 -mr-[268px]">
          <div className="">
          <Image src='/Catalog 1 (1).png' alt="gallary" width={450} height={488}/>
          </div>
          <div className="">
          <Image src='/Catalog 2 (1).png' alt="gallary" width={450} height={488}/>
          </div>
          <div className="ml-15">
          <Image src='/Catalog 3 (1).png' alt="gallary" width={450} height={488}/>
          </div>
          <div className="l-16">
          <Image src='/Catalog 4 (1).png' alt="gallary" width={450} height={488}/>
          </div>
          </div>
         </div>
        
         
       <div className="flex gap-8 ml-20 -mr-48">
          <div className="">
          <Image src='/Catalog 1 (1).png' alt="gallary" width={275} height={488}/>
          </div>
          <div className="">
          <Image src='/Catalog 2 (2).png' alt="gallary" width={275} height={488}/>
          </div>
          <div className="ml-15">
          <Image src='/Catalog 3 (2).png' alt="gallary" width={275} height={488}/>
          </div>
          <div className="ml-15">
          <Image src='/Catalog 4 (2).png' alt="gallary" width={275} height={488}/>
          </div>
          </div>
<Link href='/catogories'>
          <div className="ml-[660px] mt-16">
          <Image src='/Show More.png' alt="gallary" width={586} height={88}/>
          </div>
          </Link>
         </div>
         

        
      

         
        
         
        
        
        
         

         
         )}