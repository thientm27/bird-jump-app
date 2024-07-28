import React, { } from "react";
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

const Ton: React.FC = () => {

  return (
    
        <TonConnectUIProvider manifestUrl="#"   actionsConfiguration={{
            twaReturnUrl: 'https://t.me/thientm_denk'
        }}>
            
        <header>
            <span>My App with React UI</span>
            <TonConnectButton className="my-button-class" style={{ float: "right" }}/>
        </header>
        
        <div>My app</div>
         
        </TonConnectUIProvider> 
    );
};

export default Ton;
