import { createContext, useContext, useState } from "react";

const AppContext = createContext({});
export const useAppCtx = () => useContext(AppContext);

export default function AppProvider({ children }) {
  /*  
    This is a pretty useless example of context in React. But you can see
    below we are creating a variable called welcomeMsg and making it's value 
    accessible throughout the entire app.

    Take a look at the Header component to see how this value is pulled in.
  */

  const [sampleAppData, setSampleAppData] = useState({
    welcomeMsg: "Welcome!",
  });

  return (
    <AppContext.Provider value={sampleAppData}>{children}</AppContext.Provider>
  );
}
