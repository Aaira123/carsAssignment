import Image from "next/image"
import Link from "next/link"

export default function payment(){
    return(
        <div className="w-[1350px] h-[2300px] bg-[#F6F7F9]">
         <div className="flex gap-6 pt-6">
            <div className=" rounded-[10px] w-[760px] h-[1700px]  gap-5 ml-8">
                 <div className="rounded-[10px] bg-[#FFFFFF] h-[356px] w-[760px]">
                    <div className="w-[192px] h-[48px] gap-[4px] pt-[24px] pl-[24px]">
                        <div className="text-[#1A202C] w-[192px] h-[24px] -3% font-bold text-xl">Billing Info</div>
                        <div className="text-[#90A3BF] w-[192px] h-[20px] -2% font-medium text-[14px]">Please enter your billing info</div>
                   </div>
                   <div className="w-[102px] h-[20px] pl-[650px] text-[#90A3BF] text-nowrap font-medium text-[14px] -2%">
                        Step 1 of 4
                   </div>

                   <div className="w-[320px] h-[92px] pt-[60px] pl-[24px] gap-[16px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="name">Name</label>
                     <input  type="text" placeholder="Your name " className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6" />
                   </div>

                   <div className="w-[320px] h-[92px] -mt-8 pl-[424px] gap-[14px]">
                     <label className="w-[118px] h-[20px] font-semibold text-[16px] text-[#1A202C] text-nowrap -2%" htmlFor="Phone number">Phone Number</label>
                     <input  type="no." placeholder="Phone number " className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6" />
                   </div>

                   <div className="w-[320px] h-[92px] pt-[20px] pl-[24px] gap-[16px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="address">Address</label>
                     <input  type="text" placeholder="Address " className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6" />
                   </div>

                   <div className="w-[320px] h-[92px] mt-[-71px] pl-[424px] gap-[14px]">
                     <label className="w-[118px] h-[20px] font-semibold text-[16px] text-[#1A202C] text-nowrap -2%" htmlFor="town/city">Town/City</label>
                     <input  type="text" placeholder="Town or City " className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6" />
                   </div>

                 </div>


 



    <div className="rounded-[10px] bg-[#FFFFFF] h-[684px] w-[760px] mt-8">
                <div className="w-[200px] h-[48px] gap-[4px] pt-[24px] pl-[24px]">
                        <div className="text-[#1A202C] w-[192px] h-[24px] -3% font-bold text-xl">Rental Info</div>
                        <div className="text-[#90A3BF] w-[200px] h-[20px] -2% font-medium text-[14px]">Please enter your rental date</div>
                </div>
                <div className="w-[102px] h-[20px] pl-[650px] text-[#90A3BF] text-nowrap font-medium text-[14px] -2%">
                        Step 2 of 4
                </div>

                <div className="w-[120px] h-[20px] pt-10 pl-6 gap-2 flex">
                    <div className="bg-[#3563E94D] w-[16px] h-[16px] rounded-[70px] p-1">
                            <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-[70px]"></div>
                    </div>
                    <div className="w-[92px] h-[20px] font-semibold text-[16px] -mt-1 -2% ">Pick - Up</div>
                </div>

                <div className="w-[320px] h-[92px] pt-[60px] pl-[24px] gap-[16px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="locations">Locations</label>
                     <select title="Select your name" className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6">
                        <option value='' className="">Select your City</option>
                      </select>
                   </div>

                   <div className="w-[320px] h-[92px] -mt-8 pl-[424px] gap-[14px]">
                     <label className="w-[118px] h-[20px] font-semibold text-[16px] text-[#1A202C] text-nowrap -2%" htmlFor="date">Date</label>
                     <select title="Select your name" className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6">
                        <option value='' className="">Select your Date</option>
                      </select>
                   </div>

                   <div className="w-[320px] h-[92px] pt-[20px] pl-[24px] gap-[14px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="time">Time</label>
                     <select title="Select your name" className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6 ">
                        <option value='1-30' >Select your Time</option>
                      </select>
                </div>

                <div className="w-[130px] h-[20px] pt-16 pl-6 gap-2 flex">
                    <div className="bg-[#5CAFFC4D] w-[16px] h-[16px] rounded-[70px]  p-1">
                            <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-[70px]"></div>
                    </div>
                    <div className="w-[92px] h-[20px] font-semibold text-[16px] -mt-1 -2% ">Drop - Off</div>
                </div>

                <div className="w-[320px] h-[92px] pt-[40px] pl-[24px] gap-[16px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="locations">Locations</label>
                     <select title="Select your name" className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6">
                        <option value='' className="">Select your City</option>
                      </select>
                   </div>

                   <div className="w-[320px] h-[92px] -mt-[52px] pl-[424px] gap-[14px]">
                     <label className="w-[118px] h-[20px] font-semibold text-[16px] text-[#1A202C] text-nowrap -2%" htmlFor="date">Date</label>
                     <select title="Select your name" className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6">
                        <option value='' className="">Select your Date</option>
                      </select>
                   </div>

                   <div className="w-[320px] h-[92px] pt-[20px] pl-[24px] gap-[14px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="time">Time</label>
                     <select title="Select your name" className="mt-2 w-[320px] h-[56px] rounded-[10px] bg-[#F6F7F9] text-[#90A3BF] text-[14px] pl-6 ">
                        <option value='1-30' >Select your Time</option>
                      </select>
                </div>

    </div>




                 <div className="rounded-[10px] bg-[#FFFFFF] h-[640px] w-[760px] mt-8">
                 <div className="w-[192px] h-[48px] gap-[4px] pt-[24px] pl-[24px]">
                        <div className="text-[#1A202C] w-[192px] h-[24px] -3% font-bold text-xl">Billing Info</div>
                        <div className="text-[#90A3BF] w-[192px] h-[20px] -2% font-medium text-[14px]">Please enter your billing info</div>
                   </div>
                   <div className="w-[102px] h-[20px] pl-[650px] text-[#90A3BF] text-nowrap font-medium text-[14px] -2%">
                        Step 1 of 4
                   </div>

           <div className="bg-[#F6F7F9] w-[720px] mt-4 h-[368px] ml-5 pl-[2px] pt-2 rounded-[10px]">

                   <div className="w-[140px] h-[20px] pt-10 pl-6 gap-2 flex">
                    <div className="bg-[#5CAFFC4D] w-[16px] h-[16px] rounded-[70px] p-1">
                            <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-[70px]"></div>
                    </div>
                    <div className="w-[92px] h-[20px] font-semibold text-[16px] -mt-1 -2% ">Credit Card</div>
                </div>

                <div className="w-[92px] h-[20px]"></div>


                   <div className="w-[290px] h-[92px] pt-[60px] pl-[24px] gap-[16px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="name">Card Number</label>
                     <input  type="text" placeholder="card number " className="mt-2 w-[290px] h-[56px] rounded-[10px] bg-[#FFFFFF] text-[#90A3BF] text-[14px] pl-6" />
                   </div>

                   <div className="w-[290px] h-[92px] -mt-8 pl-[400px] gap-[14px]">
                     <label className="w-[118px] h-[20px] font-semibold text-[16px] text-[#1A202C] text-nowrap -2%" htmlFor="Phone number">Expration Date</label>
                     <input  type="no." placeholder="DD/MM/YY " className=" mt-2 w-[290px] h-[56px] rounded-[10px] bg-[#FFFFFF] text-[#90A3BF] text-[14px] pl-6" />
                   </div>

                   <div className="w-[290px] h-[92px] pt-[20px] pl-[24px] gap-[16px]">
                     <label className="w-[48px] h-[20px] font-semibold text-[16px] text-[#1A202C] -2%" htmlFor="address">Card Holder</label>
                     <input  type="text" placeholder="card holder " className=" mt-2 w-[290px] h-[56px] rounded-[10px] bg-[#FFFFFF] text-[#90A3BF] text-[14px] pl-6" />
                   </div>

                   <div className="w-[290px] h-[92px] mt-[-71px] pl-[400px] gap-[14px]">
                     <label className="w-[118px] h-[20px] font-semibold text-[16px] text-[#1A202C] text-nowrap -2%" htmlFor="town/city">CVC</label>
                     <input  type="text" placeholder="CVC " className="mt-2 w-[290px] h-[56px] rounded-[10px] bg-[#FFFFFF] text-[#90A3BF] text-[14px] pl-6" />
                   </div>
                   </div>
                   
                   <div className="w-[720px] h-[56px] bg-[#F6F7F9] ml-[20px] mt-6 rounded-[10px] ">
                    <div className="pt-4 pl-6"><Image src='/Vector.png' alt="" width={20} height={20} /> </div>
                    <div className="text-[#1A202C] w-[52px] h-[24px] font-semibold text-[16px] pl-16 -mt-5">PayPal</div>
                    <div className=" pl-[560px] -mt-6"><Image src='/PayPal.png' alt="" width={100} height={24} /> </div>
                   </div>
                   <div className="w-[720px] h-[56px] bg-[#F6F7F9] ml-[20px] mt-6 rounded-[10px]">
                   <div className="pt-4 pl-6"><Image src='/Vector.png' alt="" width={20} height={20} /> </div>
                    <div className="text-[#1A202C] w-[52px] h-[24px] font-semibold text-[16px] pl-16 -mt-5">Bitcoin</div>
                    <div className=" pl-[560px] -mt-6"><Image src='/Bitcoin.png' alt="" width={100} height={24} /> </div>
                   </div>
                 </div>





                 <div className="rounded-[10px] bg-[#FFFFFF] h-[460px] w-[760px] mt-8">
                 <div className="w-[480px] h-[48px] gap-[4px] pt-[24px] pl-[24px]">
                        <div className="text-[#1A202C] w-[192px] h-[24px] -3% font-bold text-xl">Confirmation</div>
                        <div className="text-[#90A3BF] w-[480px] h-[20px] -2% font-medium text-[14px]">We are getting to the end. Just few clicks and your rental is ready!</div>
                   </div>
                   <div className="w-[102px] h-[20px] pl-[650px] text-[#90A3BF] text-nowrap font-medium text-[14px] -2%">
                        Step 4 of 4
                   </div>
                
                   <div className="w-[720px] h-[56px] bg-[#F6F7F9] ml-[20px] mt-6 rounded-[10px] ">
                    <div className="pt-4 pl-6"><Image src='/Vector.png' alt="" width={20} height={20} /> </div>
                    <div className="text-[#1A202C] w-[682px] h-[24px] font-semibold text-[16px] pl-16 -mt-5">I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
                    
                   </div>
                   <div className="w-[720px] h-[56px] bg-[#F6F7F9] ml-[20px] mt-6 rounded-[10px]">
                   <div className="pt-4 pl-6"><Image src='/Vector.png' alt="" width={20} height={20} /> </div>
                    <div className="text-[#1A202C] w-[652px] h-[24px] font-semibold text-[16px] pl-16 -mt-5">I agree with our terms and conditions and privacy policy.</div>
                   
                   </div>

               <Link href={'/admin'}>   <div className="w-[140px] h-[56px] rounded-[10px] mt-6 ml-[24px] bg-[#3563E9] pt-[16px] pl-[24px] text-[#FFFFFF] font-bold text-[16px]">Rent Now</div></Link> 
                    
                    <div className="w-[548px] h-[100px] mt-6 ml-6">
                        <Image src={'/Layer.png'} alt="layer" width={26} height={28} className=""/>
                        <div className="mt-4">
                        <div className="text-[#1A202C] font-semibold text-[16px]">All your data are safe</div>
                        <div className="text-[#90A3BF] text-nowrap font-medium text-[14px]">We are using the most advanced security to provide you the best experience ever.</div>
                        </div>
                    </div>



                 </div>
            </div>

            <div className="rounded-[10px]">
                <Image src={'/Rental Summary.png'} alt="summary" width={492} height={560} />
            </div>

         </div>
        </div>
    )
}