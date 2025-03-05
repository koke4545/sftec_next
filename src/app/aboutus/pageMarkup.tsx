
import Link from "next/link";
import Image from "next/image";

export default function PageMarkup({ dataModel }: { dataModel: any }) { 
    return (
    /* Start of NextJs Page Layout */<>
  <div className="w-full px-0 pt-0 pb-0 text-center min-h-screen">
    <div className="w-full px-0 py-16">
      <div className="max-w-full mx-auto" style={{width: '1200px'}}>
        <div className="max-w-full flex flex-wrap mx-auto" style={{width: '1290px'}}>
          <div className="w-1/2 flex-auto p-5 py-10" id="evdbQy9732" style={{minWidth: '320px', textAlign: 'left'}}>
            <div className="text-heading text-2xl font-bold hidden lg:inline-flex pb-1" style={{fontSize: '24px'}}>
              <h1 className="">
                About Sftec.shop
              </h1>
            </div>
            <div className="pt-3 text-lg sm:text-lg">
              <span className="bold">
                Sftec.shop
              </span>
              is part of the SFTec Group of companies. Established in the USA & Canada
                        and a leader in the GFRP rebar industry, the SFTec Group is specialized in the business of the
                        composite rebar and is committed to R&D and continuous product improvement. SFT-Bar® is a
                        highly thought after alternative to the steel rebar, SFT-Bar® product testing and certification is
                        done in collaboration with leading institutions & universities. #SFT branded products are designed
                        in Canada and manufactured to meet with the latest US & Canadian standards and Codes
                        requirements. Sftec.shop is the ultimate retail location that provides you with your CONCRETE
                        related needs & wants. You can find, order & pick-up the product you’re looking for at the location
                        closest to you, from one of the distributors or points of sales in our growing network.
            </div>
          </div>
          <div className="w-1/2 flex-auto p-5 py-16" style={{minWidth: '320px', paddingTop: '90px'}}>
            <Image width={800} height={600} alt="" src="/img/Who-We-Are_Who-We-Are-600x300.jpg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</>
/* End of NextJs Page Layout */
    );
};

    