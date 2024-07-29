import { Provider as ReduxProvider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react"
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { RouterProvider } from "react-router-dom"

import { router } from "./route"
import { store } from "./redux";

function App() {
  console.log("AAA")
  return (

    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/thientm27/bird-jump-app/main/tonconnect-manifest.json"
      actionsConfiguration={{ twaReturnUrl: 'https://t.me/thientm_bot/birdjump' }}>
      <ReduxProvider store={store}>
        <NextUIProvider>
          <div className="container bg-background text-foreground dark">
            <RouterProvider router={router} />
          </div>
        </NextUIProvider>
      </ReduxProvider>
      {/*       
        <Routes>
          <Route path="/" element={<Ton />} />
          <Route path="/game" element={<Game />} />
        </Routes> */}
    </TonConnectUIProvider>
  );
}

export default App;
