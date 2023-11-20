import { useState } from "react"

const Account = ({ isheight , setheight }) => {
   //if else as a funtion for heigt
    function profileHeight(item) {
        const objHeight = {
            account: "26rem",
            settings: "20rem",
            help: "15rem",
            display: "40rem",
            profile: "10rem"
        }
        return objHeight[item]
    }

    let isHeight = profileHeight(isheight)
    let cusClass = "absolute transition-all flex flex-col"
    return <div style={{height: isHeight}}
    className="bg-neutral-800 rounded-md text-white w-96  p-2 items-center flex flex-col overflow-hidden relative top-0 transition-all"  >
        <div className={isheight == "account" ? "absolute transition-all" : "absolute transition-all -translate-x-96"}>
            <div className="p-3 grid gap-1 shadow-md shadow-neutral-900 w-80 my-2">
                <div className="  h-10 items-center flex rounded-md hover:bg-neutral-700 gap-2 ">
                    <i className="fi fi-ss-user flex justify-center items-center rounded-full bg-slate-600 h-8 w-8"></i>
                    <h3>user</h3>
                </div>
                <span className="h-1 bg-neutral-700 mx-4 flex"></span>
                <div onClick={() =>setheight("profile")}
                className="rounded-md text-blue-600 hover:bg-neutral-700 h-8">
                    {isheight}see all profile
                </div>
            </div>
            <AccountBar icons="fi fi-ss-settings" title="Settings" action={() => setheight("settings")} />
            <AccountBar icons="fi fi-sr-interrogation" title="Help & Support" action={() => setheight("help")} />
            <AccountBar icons="fi fi-ss-moon" title="Display" action={() => setheight("display")} />
            <AccountBar icons="fi fi-ss-comment-info" title="Feed back" />
            <AccountBar icons="fi fi-br-exit" title="Log Out" />
        </div>
        
        <div className={isheight == "settings" ? cusClass : cusClass + " translate-x-96"}>
            <div className="flex flex-row w-80 gap-4">
                <i onClick={() =>setheight("account")}
                className="fi fi-sr-arrow-left h-8 w-8 rounded-full hover:bg-neutral-600 flex justify-center items-center"
                ></i>
                <b>Settings</b>
            </div>
            <AccountBar icons="fi fi-ss-settings" title="setting"/>
            <AccountBar icons="fi fi-rs-globe" title="Language" />
            <AccountBar icons="fi fi-sr-lock" title="Privacy Checkup" />
            <AccountBar icons="fi fi-sr-lock-alt" title="Privacy Center" />
            <AccountBar icons="fi fi-rr-list"  title="Activity Log" />
        </div>
        <div className={isheight == "help" ? cusClass : cusClass + " translate-x-96"}>
            <div className="flex flex-row w-80 gap-4">
                <i onClick={() =>setheight("account")}
                 className="fi fi-sr-arrow-left h-8 w-8 rounded-full hover:bg-neutral-600 flex justify-center items-center"></i>
                <b>help</b>
            </div>
            <AccountBar icons="fi fi-sr-envelope" title="Support Inbox" />
            <AccountBar icons="fi fi-sr-interrogation" title="Help Center" />
            <AccountBar icons="fi fi-ss-square-info" title="Report Problem" />

        </div>
        <div className={isheight == "display" ? cusClass : cusClass + " translate-x-96"}>
            <div className="flex flex-row w-80 gap-4">
                <i onClick={() =>setheight("account")} 
                className="fi fi-sr-arrow-left h-8 w-8 rounded-full hover:bg-neutral-600 flex justify-center items-center"></i>
                <b>display</b>
            </div>
            <AccountBar />
        </div>
       
        <div className={isheight == "profile" ? "absolute transition-all flex flex-col" : " translate-x-96"}>
            <div className="flex flex-row w-80 gap-4">
                <i onClick={() =>setheight("account")} 
                className="fi fi-sr-arrow-left h-8 w-8 rounded-full hover:bg-neutral-600 flex justify-center items-center"></i>
                <b className="flex items-center">Sellect Profile</b>
            </div>
            <AccountBar icons="fi fi-ss-user" title="user 1"/>
        </div>
    </div>
}
export function AccountBar({ icons, title, action }) {
    let classes = " h-8 w-8 rounded-full bg-neutral-600 flex justify-center items-center"
    return <div className="account-bar hover:bg-neutral-700" onClick={action}>
        <i className={icons + classes}></i>
        <p className="flex-1">{title}</p>
        <i className="fi fi-sr-angle-right"></i>
    </div>
}
export default Account;