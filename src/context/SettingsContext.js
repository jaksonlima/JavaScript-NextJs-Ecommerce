// import { createContext, useEffect, useState } from "react";
// import { THEMES } from "../utils/constants";

// const defaultSettings = {
//   theme: THEMES.LIGHT,
// };

// export const SettingsContext = createContext({
//   settings: defaultSettings,
//   saveSettings: () => {},
// });

// export const restoreSettings = () => {
//   let settings = null;

//   try {
//     const storedData = window.localStorage.getItem("settings");

//     if (storedData) {
//       settings = JSON.parse(storedData);
//     }

//     return settings;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const storeSettings = (settings) => {
//   window.localStorage.setItem("settings", JSON.stringify(settings));
// };

// export const SettingsProvider = ({ settings, children }) => {
//   const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings);

//   const handleSaveSettings = (update = {}) => {
//     const mergedSettings = update;

//     setCurrentSettings(mergedSettings);
//     storeSettings(mergedSettings);
//   };

//   useEffect(() => {
//     const restoredSettings = restoreSettings();

//     if (restoredSettings) {
//       setCurrentSettings(restoredSettings);
//     }
//   }, []);

//   return (
//     <SettingsContext value={{ settings: currentSettings, saveSettings: handleSaveSettings }}>
//       {children}
//     </SettingsContext>
//   );
// };

// export const SettingsConsumer = SettingsContext.Consumer;
