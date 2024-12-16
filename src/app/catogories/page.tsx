import Image from "next/image";
import Link from "next/link";

export default function catogories(){
    return(
        <div className="w-[1350px]h-[1000px] flex bg-[#F6F7F9]">
            <div>
                <Image src='/Nav Bar Side.png' alt="nav" width={360} height={1000}/>
            </div>
           
              <div className="rounded-[10px] mt-10 ml-8"><Image src='/Pick - Up.png' alt="pickup" width={440} height={136}/></div>
             <div  className="mt-12 -ml-8 -mr-7  "><Image src='/Switch.png' alt="switch" width={100} height={100}/></div>
              <div  className="rounded-[10px] mt-10"><Image src='/Pick - Up.png' alt="pickup" width={440} height={136}/></div>
            
             
                <div>
                <div className="mt-48 -ml-[920px] flex gap-14">
               
                <Link href='/details'>  <div>  <Image src='/1a.png' alt="nav" width={270} height={388}/></div></Link>
                <Link href='/details'>   <div><Image src='/2a.png' alt="nav" width={270} height={388}/></div></Link>
                <Link href='/details'>   <div><Image src='/3a.png' alt="nav" width={270} height={388}/></div></Link>
                   
                    </div>
                    </div>
                   

                    <div>
                <div className="mt-[600px] -ml-[920px] flex gap-14">
                <Link href='/details'>     <div>  <Image src='/1b.png' alt="nav" width={270} height={388}/></div> </Link> 
                <Link href='/details'>   <div><Image src='/2b.png' alt="nav" width={270} height={388}/></div> </Link>
                <Link href='/details'>   <div><Image src='/3b.png' alt="nav" width={270} height={388}/></div> </Link>
                    </div>
                    </div>

                    <div>
                <div className="mt-[1000px] -ml-[920px] flex gap-14">
                <Link href='/details'> <div>  <Image src='/1c.png' alt="nav" width={270} height={388}/></div></Link>
                <Link href='/details'>   <div><Image src='/2c.png' alt="nav" width={270} height={388}/></div></Link>
                <Link href='/details'>  <div><Image src='/3c.png' alt="nav" width={270} height={388}/></div></Link>
                    </div>
                    </div>
                   

                    <div className="-ml-[590px] mt-[1450px]">
                        <Image src='/Show More.png' alt="" width={586} height={44} />
                    </div>
            
            
            
        </div>
    )
}