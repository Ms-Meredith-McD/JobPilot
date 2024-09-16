import { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileContextProvider = (props) => {
  const [userProfile, setUserProfile] = useState({});

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};
