import { createContext, useState } from "react";

export const ToggleContext = createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const showModal = () => {
    setToggle(!toggle);
  };
  return (
    <ToggleContext.Provider value={{ toggle, showModal }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
