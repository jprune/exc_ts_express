import { createContext, useState, useEffect } from "react";

export interface ShopStateType {
    isLoggedIn: boolean,
    setIsLoggedIn: Function,
}

export const ShopContext = createContext<ShopStateType | null>(null);

const ShopProvider = ({children, value = {} as ShopStateType}: {children: React.ReactNode; value?: Partial<ShopStateType>}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setIsLoggedIn(false)
    }, [])
    

    return (
        <ShopContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopProvider;