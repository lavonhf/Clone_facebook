import { AccountBar } from "../navbar/navComponent/account";
import freinds from "../component/friend";

let classes = " h-8 w-8 rounded-full bg-neutral-600 flex justify-center items-center";

const Friend = () => {
    return <div className="bg-neutral-900">
        <div className=" w-80 overflow-hidden p-3 bg-neutral-800 h-screen fixed top-16 text-white">
            <div className="flex flex-row p-2 w-72">
                <h1 className="flex-1 text-2xl font-bold">Friend</h1>
                <i className={"fi fi-ss-settings" + classes}></i>
            </div>
            <div className="flex p-2 w-72 flex-col">
                <AccountBar icons="fi fi-ss-settings" title="Friend Reques" />
                <AccountBar icons="fi fi-sr-chalkboard-user" title="Sugestions" />
                <AccountBar icons="fi fi-sr-user-add" title="All Friend" />
                <AccountBar icons="fi fi-ss-cupcake" title="Birthdays" />
                <AccountBar icons="fi fi-sr-users-alt" title="Custom List" />
            </div>
        </div>
        <div className="pl-80 pt-16 ">
            <div className="grid px-20 grid-cols-4">
                {
                    freinds.map((pal) => <div key={pal.id} className="friend-card border-neutral-500 bg-neutral-800">
                        <div className="friend-card-img bg-neutral-700">
                            <i className="fi fi-sr-user text-9xl text-neutral-400 pt-24 justify-center flex"></i>
                        </div>
                        <p className="text-white px-5">{pal.name}</p>
                        <div className="friend-cardbtn bg-blue-800 hover:bg-blue-700">Confirm</div>
                        <div className="friend-cardbtn bg-neutral-600 hover:bg-neutral-500">Delete</div>
                    </div>)
                }
            </div>
        </div>
    </div>

}

export default Friend;