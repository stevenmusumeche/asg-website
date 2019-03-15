import React, { useState } from "react";

interface StateContext {
  showSlackModal: boolean;
  toggleSlackModal: () => void;
}

export const StateContext = React.createContext(({} as any) as StateContext);

const StateProvider: React.FC = ({ children }) => {
  const [showSlackModal, setShowSlackModal] = useState(false);

  return (
    <StateContext.Provider
      value={{
        showSlackModal,
        toggleSlackModal: () => setShowSlackModal(oldVal => !oldVal),
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
