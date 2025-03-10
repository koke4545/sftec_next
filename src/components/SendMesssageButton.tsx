'use client';

import SendMessagePopup from '@/components/SendMessagePopup';
import { useAppContext } from '@/contexts/AppContextProvider';

const SendMesssageButton = ({ 
  children, 
  productid, 
  productname 
}: { 
  children: React.ReactNode; 
  productid: any; 
  productname: any; 
}) => {
  
  const eCommerceModel = useAppContext().eCommerceModel;


  function handleClick() {  
    eCommerceModel.setIsSendMessagePopupVisible(true);

  }

  function handleClose() {
    eCommerceModel.setIsSendMessagePopupVisible(false);
  }

  return (
    <>
      <div onClick={handleClick}>
        {children}
      </div>
      {eCommerceModel.isSendMessagePopupVisible && (        
         
        <SendMessagePopup onClose={handleClose} productid={productid} productname={productname}/>      
        
      )}
    </>


  )
}


export default SendMesssageButton;