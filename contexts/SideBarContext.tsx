"use client"
import React, { useState, createContext, ReactNode } from "react";
interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  HandleClose: () => void;
}

// Create the context with a proper type
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, HandleClose }}>
      {children} 
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
