import { useState } from "react";

const Chat = () => {
    const [isFocus, setIsFocus] = useState("false")

    return<div className="container bg-neutral-700 text-white">
        <div className="flex flex-row m-1" >
            <h1 className="flex-1">Chats</h1>
            <i className="fi fi-rr-menu-dots h-8 w-8 justify-center items-center flex hover:bg-neutral-500 rounded-full"></i>
            <i className="fi fi-rr-expand-arrows h-8 w-8 justify-center items-center flex hover:bg-neutral-500 rounded-full"></i>
            <i className="fi fi-br-edit h-8 w-8 justify-center items-center flex hover:bg-neutral-500 rounded-full"></i>
        </div>
        <div className=" w-60 p-2">
            <div className={isFocus == "false" ?"bg-neutral-500 chat-search w-60 right-4": 
            "bg-neutral-500 chat-search w-48 right-4"}>
                <i className="fi fi-rr-search text-lg p-2" ></i>
                <input type="text" placeholder="Search Messenger"
                onFocus={()=> setIsFocus("true")} onBlur={()=> setIsFocus("false")}
                className=" bg-transparent outline-none"  />
            </div>
            <i className="fi fi-rr-arrow-small-left flex w-8 h-8 justify-center items-center text-2xl hover:bg-neutral-500 rounded-full"></i>
        </div>
        <div>
            <div className="flex items-center h-14 hover:bg-neutral-600 rounded-md">
            <i className="fi fi-ss-user flex w-11 h-11 justify-center items-center text-2xl bg-neutral-500 rounded-full"></i>
            <h1>User 1</h1>
            </div>
            <div className="flex items-center h-14 hover:bg-neutral-600 rounded-md">
            <i className="fi fi-ss-user flex w-11 h-11 justify-center items-center text-2xl bg-neutral-500 rounded-full"></i>
            <h1>User 2</h1>
            </div>            <div className="flex items-center h-14 hover:bg-neutral-600 rounded-md">
            <i className="fi fi-ss-user flex w-11 h-11 justify-center items-center text-2xl bg-neutral-500 rounded-full"></i>
            <h1>User 3</h1>
            </div>            <div className="flex items-center h-14 hover:bg-neutral-600 rounded-md">
            <i className="fi fi-ss-user flex w-11 h-11 justify-center items-center text-2xl bg-neutral-500 rounded-full"></i>
            <h1>User 4</h1>
            </div>

        </div>
    </div>
}
export default Chat;