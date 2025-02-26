
import Link from "next/link";
import DistributorCurrencyCode from "@/components/DistributorCurrencyCode";

export default function PageMarkup({ dataModel }: { dataModel: any }) { 
    return (
    /* Start of NextJs Page Layout */
        <>
            <div className='p-5'>
                {dataModel.pageName}
            </div>
        </>
    /* End of NextJs Page Layout */
    );
};

    