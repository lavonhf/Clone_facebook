const Notifocation = () => {
    return<div className=" bg-neutral-700 w-80 h-72 text-white"> 
        <div className="flex p-4">
            <h1 className=" font-bold text-2xl flex-1">Notification</h1>
            <i className="fi fi-rr-menu-dots rounded-full hover:bg-neutral-500 w-9 h-9 justify-center items-center flex"></i>
        </div>
        <div className="flex flex-col items-center">
            <i className="fi fi-ss-bell text-6xl"></i>
            <h2>You have no Notification</h2>
        </div>
    </div>
}
export default Notifocation;