import React from "react";
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { Navigate} from "react-router-dom";
const Ton: React.FC = () => {
    const wallet = useTonWallet();

    if (wallet) {
        return (
            <Navigate to="/game" />
       
        );
    }
    
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <TonConnectButton className="my-button-class" />
        </div>
    );
};

export default Ton;
