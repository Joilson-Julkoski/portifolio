import React, { createContext, useContext, useEffect, useState } from "react";

const MobileContext = createContext()

export const MobileProvider = ({children}) => {
    const [isMobile, setIsMobile] = useState(false);

    // Função para verificar se é mobile
    const checkIfMobile = () => {
      const mobileWidth = 768; // Limite de largura para dispositivos móveis
      setIsMobile(window.innerWidth <= mobileWidth);
    };
  
    useEffect(() => {
      // Verifica inicialmente
      checkIfMobile();
  
      // Adiciona um listener para mudanças de tamanho da janela
      window.addEventListener("resize", checkIfMobile);
  
      // Limpa o listener ao desmontar
      return () => {
        window.removeEventListener("resize", checkIfMobile);
      };
    }, []);

    
    return (
        <MobileContext.Provider value={{ isMobile }}>
          {children}
        </MobileContext.Provider>
      );
}

export const useMobile = () => {
    return useContext(MobileContext);
  };