import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UNITY_PATH = "unity/Build";
const UNITY_NAME = "unity";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: `${UNITY_PATH}/${UNITY_NAME}.loader.js`,
    dataUrl: `${UNITY_PATH}/${UNITY_NAME}.data`,
    frameworkUrl: `${UNITY_PATH}/${UNITY_NAME}.framework.js`,
    codeUrl: `${UNITY_PATH}/${UNITY_NAME}.wasm`,
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  );
}

export default App;
