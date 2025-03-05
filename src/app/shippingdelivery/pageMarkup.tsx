
import Link from "next/link";
import Image from "next/image";

export default function PageMarkup({ dataModel }: { dataModel: any }) { 
    return (
    /* Start of NextJs Page Layout */<>
  <div className="w-full px-0 pt-0 pb-0 text-center min-h-screen">
    <div className="w-full px-0 py-16">
      <div className="max-w-full mx-auto" style={{width: '1200px'}}>
        <div className="max-w-full flex flex-wrap mx-auto" style={{width: '1290px'}}>
          <div className="w-full flex-auto p-5 py-10" id="evdbQy9732" style={{minWidth: '320px', textAlign: 'left'}}>
            <div className="text-heading text-2xl font-bold hidden lg:inline-flex pb-1" style={{fontSize: '24px'}}>
              <h1 className="">
                Shipping & Delivery
              </h1>
            </div>
            <div className="pt-3 text-lg sm:text-lg">
                Pease pick-up your purchased material from the location you selected – PickUp ONLY is available, no delivery.
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</>
/* End of NextJs Page Layout */
    );
};

    