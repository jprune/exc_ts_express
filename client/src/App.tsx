import {useEffect, useState} from "react"
import axios from "axios"

type User = {
  _id: string | any,
  email: string,
  username: string,
  password: string,
  __v: number
}

function App() {
  const [userList, setUserList] = useState([] as User[])
  useEffect(() => {
    
    const getUserList = async () => {
      const response = await axios.get("/user/list")
      if(response.data.success) setUserList(response.data.users)
    }
    getUserList()
  }, [])
  
  return (
    <div className='flex flex-wrap'>
      {
        userList.map(user => (
          <div key={user._id} className="flex flex-col bg-yellow-200 p-10 m-10 rounded-lg max-w-80 justify-center items-center">
            <h3>Username: {user?.username}</h3>
            <h2>Email: {user?.email}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
