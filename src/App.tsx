import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';
import logo from "./Assets/logo.png"; 

const UNITY_PATH = "unity/Build";
const UNITY_NAME = "flying-baby-dragon-webgl-deploy-test";

function App() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: `${UNITY_PATH}/${UNITY_NAME}.loader.js`,
    dataUrl: `${UNITY_PATH}/${UNITY_NAME}.data`,
    frameworkUrl: `${UNITY_PATH}/${UNITY_NAME}.framework.js`,
    codeUrl: `${UNITY_PATH}/${UNITY_NAME}.wasm`,
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

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
    </div>
  );
}

export default App;
