import React, { } from "react";
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

const Ton: React.FC = () => {

  return (
    
        <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/thientm27/bird-jump-app/main/tonconnect-manifest.json" 
        actionsConfiguration={{twaReturnUrl: 'https://t.me/thientm_bot/birdjump'}}>
            
        <header>
            <span>My App with React UI</span>
            <TonConnectButton className="my-button-class" style={{ float: "right" }}/>
        </header>
        <div>t.me/thientm_bot/birdjump 2</div>
        <div>My app</div>
         
        </TonConnectUIProvider> 
    );
};

export default Ton;
