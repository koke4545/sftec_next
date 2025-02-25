"use client";

import { useState } from "react";
import { useAppContext } from "@/contexts/AppContextProvider";

const DistributorCurrencyCode = () => {
    const appContext = useAppContext();
    const eCommerceModel = appContext.eCommerceModel;
    const { currentDistributor } = eCommerceModel;

    return (        
        <span>{currentDistributor.CurrencyCode || ''}</span>
    );
};

export default DistributorCurrencyCode;
