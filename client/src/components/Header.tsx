import { useContext } from "react"
import { Link } from "react-router-dom"
import {IconContext} from "react-icons"
import {FcShop} from "react-icons/fc"
import { FiSearch } from "react-icons/fi"

import { ShopContext, ShopStateType } from "../context"

type Props = {}

const Header = (props: Props) => {
    const { isLoggedIn } = useContext(ShopContext) as ShopStateType;
  return (
    <div className='flex flex-between items-center justify-center px-24 py-5 bg-gray-400 w-full shadow-lg'>
        <div className="flex items-center justify-start w-1/3 gap-5">
            <IconContext.Provider value={{ size: "4rem" }}>
                <FcShop />
            </IconContext.Provider>
            <h1 className="text-3xl font-bold">TypescriptShop</h1>
        </div>
        <div className="flex gap-3 items-center justify-center w-1/3">
            <IconContext.Provider value={{ size: "2rem" }}>
                <FiSearch />
            </IconContext.Provider>
            <input className="py-2 w-80" />
        </div>
        <div className="flex w-1/3 justify-end gap-3">
            <Link to="/signup"><button type="button" className="bg-yellow-500 rounded-full cursor-pointer py-2 px-5" onClick={() => {}}>{isLoggedIn ? "Profile" : "Sign up"}</button></Link>
            {
                isLoggedIn
                ? (
                    <Link to="/cart"><button type="button" className="bg-red-700 rounded-full cursor-pointer py-2 px-5">Cart</button></Link>
                ) : undefined
            }
        </div>
    </div>
  )
}

export default Header