import { AccountBar } from "../navbar/navComponent/account";
import { Video } from "./video";

const Group = () => {
    let classes = " h-8 w-8 rounded-full bg-neutral-600 flex justify-center items-center";

    return <div className="bg-neutral-900">
        <div className=" w-80 overflow-hidden p-3 bg-neutral-800 h-screen fixed top-16 text-white">
            <div className="flex flex-row p-2 w-72">
                <h1 className="flex-1 text-2xl font-bold">Group</h1>
                <i className={"fi fi-ss-settings" + classes}></i>
            </div>
            <div className="search_box w-60 rounded-full bg-neutral-700 flex gap-2">
                <i className="fi fi-rr-search transition-all"></i>
                <input placeholder="Search Groups"
                    type="text" className="search_bar outline-none" />
            </div>
            <div className="flex p-2 w-72 flex-col">
                <AccountBar icons="fi fi-ss-settings" title="Friend Reques" />
                <AccountBar icons="fi fi-sr-chalkboard-user" title="Sugestions" />
                <AccountBar icons="fi fi-sr-user-add" title="All Friend" />
                <div className="">

                </div>
            </div>
        </div>
        <div className="pl-80 pt-20 flex items-center flex-col gap-3 ">
            <Video name="Group User" caption="daily videos"/>
            <Video name="Group User" caption="tips video"/>
            <Video name="Group User" caption="new"/>
            <Video name="Group User" caption="movie video"/>
        </div>
    </div>
}

export default Group;