import React, { useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';
import logo from "./Assets/logo.png";

const UNITY_PATH = "unity/Build";
const UNITY_NAME = "unity";

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [score, setScore] = useState<number | undefined>(undefined);

  const { unityProvider, sendMessage, isLoaded, loadingProgression, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: `${UNITY_PATH}/${UNITY_NAME}.loader.js`,
    dataUrl: `${UNITY_PATH}/${UNITY_NAME}.data`,
    frameworkUrl: `${UNITY_PATH}/${UNITY_NAME}.framework.js`,
    codeUrl: `${UNITY_PATH}/${UNITY_NAME}.wasm`,
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  const handleClickRed = () => {
    console.log("Clicked");
    sendMessage("@Controller", "ChangeColorRed");
  };

  const handleClickWhite = () => {
    console.log("Clicked");
    sendMessage("@Controller", "ChangeColorWhite");
  };

  const handleAction = useCallback((...parameters: any[]) => {
    const [userName, score] = parameters;
    setUserName(userName);
    setScore(score);
  }, []);

  useEffect(() => {
    addEventListener("AddScore", handleAction);
    return () => {
      
    };
  }, [addEventListener, removeEventListener, handleAction]);

  return (
    <div id="unity-container" className="unity-desktop">
      {!isLoaded && (
        <div id="loading-cover">
          <div id="unity-loading-bar">
            <div id="unity-logo">
              <img src={logo} alt="Unity Logo" />
            </div>
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
      <p>Username: {userName}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default App;
