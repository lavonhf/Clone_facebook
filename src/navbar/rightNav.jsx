import { useState } from "react";
import Account from "./navComponent/account";
import Menu from "./navComponent/menu";
import Chat from "./navComponent/chat"
import Notification from "./navComponent/notification"

const RightNav = () => {
    const [isOpen, setIsOpen] = useState("");
    const [height, setHeight] = useState("account")

    let iconsNotActive = " left-nav-icon bg-neutral-700 hover:bg-neutral-600"
    let iconsIsActive = " left-nav-icon bg-blue-900 opacity-80 hover:bg-neutral-600"

    function handleHeigt(heightProps){
        setHeight(heightProps)
    }

    function handleclick(props) {
        if (isOpen != props) {
            setIsOpen(props)
        } else {
            setIsOpen("")
        }
    }

    return <div className=" w-64 flex flex-row justify-end gap-3">

        <i onClick={() => handleclick("menu")}
            className={isOpen == "menu" ? "fi fi-sr-grid text-cyan-600" + iconsIsActive : "fi fi-sr-grid" + iconsNotActive}></i>
        <i onClick={() => handleclick("chat")}
            className={isOpen == "chat" ? "fi fi-sr-comment-alt-dots text-cyan-600" + iconsIsActive : "fi fi-sr-comment-alt-dots" + iconsNotActive}></i>
        <i onClick={() => handleclick("notification")}
            className={isOpen == "notification" ? "fi fi-ss-bell text-cyan-600" + iconsIsActive :"fi fi-ss-bell" + iconsNotActive}></i>
        <i onClick={() =>{ handleclick("account"),handleHeigt("account")}}
            className={isOpen == "account" ? "fi fi-ss-user text-cyan-600" + iconsIsActive : "fi fi-ss-user" + iconsNotActive}></i>
        <SettingsBox onOpen={isOpen} height={height} setheight={handleHeigt}/>
    </div>
}
function SettingsBox({ onOpen, height, setheight }) {
    return <div className="absolute my-12 ">
        <div className={onOpen == "menu" ? "block" : "hidden"}>
            <Menu />
        </div>
        <div className={onOpen == "chat" ? "block " : "hidden"}>
            <Chat />
        </div>
        <div className={onOpen == "notification" ? "block" : "hidden"}>
            <Notification />
        </div>
        <div className={onOpen == "account" ? "block" : "hidden"}>
            <Account isheight={height} setheight={setheight}/>
        </div>
    </div>
}
export default RightNav;