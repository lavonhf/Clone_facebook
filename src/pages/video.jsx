import { AccountBar } from "../navbar/navComponent/account";

let classes = " h-8 w-8 rounded-full flex justify-center items-center";
const video = () => {

    return <div className="bg-neutral-900">
        <div className=" w-80 overflow-hidden p-3 bg-neutral-800 h-screen fixed top-16 text-white">
            <div className="flex flex-row p-2 w-72">
                <h1 className="flex-1 text-2xl font-bold">Video</h1>
                <i className={"fi fi-ss-settings" + classes}></i>
            </div>
            <div className="flex p-2 w-72 flex-col">
                <AccountBar icons="fi fi-ss-circle-video" title="Live" />
                <AccountBar icons="fi fi-sr-clapperboard-play" title="Reels" />
                <AccountBar icons="fi fi-ss-films" title="Show" />
                <AccountBar icons="fi fi-ss-cupcake" title="Save video" />
            </div>
        </div>
        <div className="pl-80 pt-20 flex items-center flex-col gap-3 ">
            <Video name="agus" caption="Facebook video" />
            <Video name="luciver" caption="Facebook video" />
            <Video name="green company" caption="Facebook video" />
            <Video name="user" caption="Facebook video" />
        </div>
    </div>
}

export function Video({ name, caption }) {
    return <div className="videos bg-neutral-800 rounded-md text-white">
        <div className="flex-row flex p-3 gap-2">
            <i className={classes + " fi fi-sr-user text-neutral-400 bg-neutral-600"}></i>
            <p className="">{name}</p>
            <p className="text-blue-700 flex-1 hover:text-blue-600">Follow</p>
            <i className={classes + " fi fi-rr-menu-dots"}></i>
        </div>
        <div className="px-3">
            <p>{caption}</p>
        </div>
        <div className=" bg-neutral-950">
            <i className="fi fi-rr-play-circle cursor-pointer"></i>
        </div>
        <div className="h-10 flex justify-around items-center px-5">
            <div className=" w-1/3 flex justify-center items-center gap-3 hover:bg-neutral-600 rounded-md cursor-pointer">
                <i className="fi fi-rr-social-network"></i>
            </div>
            <div className=" w-1/3 flex justify-center items-center gap-3 hover:bg-neutral-600 rounded-md cursor-pointer">
                <i className="fi fi-rs-comment-alt-middle"></i>
            </div>
            <div className=" w-1/3 flex justify-center items-center gap-3 hover:bg-neutral-600 rounded-md cursor-pointer">
                <i className="fi fi-rr-redo"></i>
            </div>
        </div>
    </div>
}
export default video;