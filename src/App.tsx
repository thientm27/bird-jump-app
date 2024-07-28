import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';
import logo from "./Assets/logo.png"; 
import { Console } from "console";

const UNITY_PATH = "unity/Build";
const UNITY_NAME = "unity";

function App() {
  const { unityProvider, sendMessage ,isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: `${UNITY_PATH}/${UNITY_NAME}.loader.js`,
    dataUrl: `${UNITY_PATH}/${UNITY_NAME}.data`,
    frameworkUrl: `${UNITY_PATH}/${UNITY_NAME}.framework.js`,
    codeUrl: `${UNITY_PATH}/${UNITY_NAME}.wasm`,
  });

  const loadingPercentage = Math.round(loadingProgression * 100);
  function handleClickRed() {
    console.log("Clicked")
    sendMessage("@Controller", "ChangeColorRed");
  }
  function handleClickWhite() {
    console.log("Clicked")
    sendMessage("@Controller", "ChangeColorWhite");
  }

  return (
    <div id="unity-container" className="unity-desktop">
      {!isLoaded && (
        <div id="loading-cover">
          <div id="unity-loading-bar">
            <div id="unity-logo"><img src={logo} alt="Unity Logo" /></div>
            <div id="unity-progress-bar-empty">
              <div id="unity-progress-bar-full" style={{ width: `${loadingPercentage}%` }}></div>
            </div>
            <div className="spinner"></div>
          </div>
        </div>
      )}
      <Unity className="unity" unityProvider={unityProvider} />
      <button onClick={handleClickRed}>Red</button>
      <button onClick={handleClickWhite}>White</button>
    </div>
  );
}

export default App;
