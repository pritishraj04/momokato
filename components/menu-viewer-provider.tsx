"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { SimpleMenuViewer } from "@/components/simple-menu-viewer";

interface MenuViewerContextType {
  openViewer: (imageUrl: string) => void;
  closeViewer: () => void;
}

const MenuViewerContext = createContext<MenuViewerContextType | undefined>(
  undefined,
);

export function useMenuViewer() {
  const context = useContext(MenuViewerContext);
  if (!context) {
    throw new Error("useMenuViewer must be used within MenuViewerProvider");
  }
  return context;
}

export function MenuViewerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openViewer = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <MenuViewerContext.Provider value={{ openViewer, closeViewer }}>
      {children}
      {/* Viewer rendered at body level - outside all sections */}
      <SimpleMenuViewer
        isOpen={isOpen}
        onClose={closeViewer}
        menuImage={currentImage}
      />
    </MenuViewerContext.Provider>
  );
}
