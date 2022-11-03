import React, {useContext, useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { ShopContext, ShopStateType } from '../context'
interface formData {
    email: string,
    username: string,
    password: string,
}

type Props = {}


const Signup = (props: Props) => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    } as formData)
    const navigate = useNavigate()
    const {setIsLoggedIn} = useContext(ShopContext) as ShopStateType;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const createUser = async () => {
            const response = await axios.post(
                "/user/register",
                formData
            )
            if(response.data.success) {
                setFormData({
                    email: "",
                    username: "",
                    password: "",
                })
                setIsLoggedIn(true)
                navigate("/")
            }
        }
        createUser()
        
    }
  return (
    <div className='h-screen flex justify-center items-center -mt-20'>
        <form className='flex flex-col items-center justify-center gap-3 w-2/5'>
            <input type="email" value={formData.email} placeholder="please insert your email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="flex w-full text-center py-5 bg-gray-300 text-black placeholder:text-black text-md rounded-md"/>
            <input type="text" value={formData.username} placeholder="please insert your username" onChange={(e) => setFormData({...formData, username: e.target.value})} className="flex w-full text-center py-5 bg-gray-300 text-black placeholder:text-black text-md rounded-md"/>
            <input type="password" value={formData.password} placeholder="please insert your password" onChange={(e) => setFormData({...formData, password: e.target.value})} className="flex w-full text-center py-5 bg-gray-300 text-black placeholder:text-black text-md rounded-md" />
            <button 
                type='submit' 
                onClick={handleClick}
                className="bg-green-600 rounded-full text-2xl px-6 py-3 shadow-lg"
            >Create Profile</button>
        </form>
    </div>
  )
}

export default Signup