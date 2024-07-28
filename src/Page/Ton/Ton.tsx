import React, { } from "react";
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

const Ton: React.FC = () => {

  return (
    
        <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/thientm27/bird-jump-app/main/tonconnect-manifest.json" 
        walletsListConfiguration={{
            includeWallets: [
                {
                    appName: "telegram-wallet",
                    name: "Wallet",
                    imageUrl: "https://wallet.tg/images/logo-288.png",
                    aboutUrl: "https://wallet.tg/",
                    universalLink: "https://t.me/wallet/start",
                    bridgeUrl: "https://bridge.tonapi.io/bridge",
                    platforms: ["ios", "android", "macos", "windows", "linux"]
                }
            ]
        }}
        actionsConfiguration={{twaReturnUrl: 'https://t.me/thientm_bot/birdjump'}}
       >
            
        <header>
            <span>My App with React UI</span>
            <TonConnectButton className="my-button-class" style={{ float: "right" }}/>
        </header>
        <div>https://t.me/thientm_bot?start=webapp</div>
        <div>My app</div>
         
        </TonConnectUIProvider> 
    );
};

export default Ton;
