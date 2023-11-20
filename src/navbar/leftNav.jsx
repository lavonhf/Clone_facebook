import { useState } from "react";

const LeftNav = () => {
    // im not using bool because the triger really hard to udfhfsuh/;/J
    const [isFocus, setIsFocus] = useState("false")

    const [sideNav, setSideNav] = useState(false)
    function onfocus() {
        setIsFocus(!isFocus)
        searchbox.focus()
    }
    let searchbox = document.getElementById('searchbox')
    return <div className="flex h-16 overflow-hidden w-auto md:w-96 text-neutral-400">
        <div className=" w-16 relative overflow-hidden justify-center">
            <a href="/">
            <img src="./icons8-facebook.svg" className="w-14 absolute" alt="facebook" />
            </a>
            <div className={isFocus == "true" ? " text-4xl absolute bg-neutral-800 text-center flex p-3 transition-all opacity-100" :
                " translate-x-16 text-4xl absolute bg-neutral-800 text-center flex p-3 transition-all opacity-0"
            }>
                <i className="fi fi-rr-arrow-small-left hover:bg-neutral-700 rounded-full w-10 h-10"></i>
            </div>
        </div>
        <div className="items-center flex">
            <div className={isFocus == "false" ? " translate-y-20 md:translate-y-0" : "translate-y-0"}>
                <div className="search_box w-60 rounded-full bg-neutral-700 flex gap-2"
                    id="searchBar">
                    <i className={isFocus == "true" ? "fi fi-rr-search -translate-x-8 transition-all" :
                        "fi fi-rr-search transition-all"} onClick={onfocus}></i>
                    <input type="text" placeholder="Search Facebook" id="searchbox"
                        onFocus={() => setIsFocus("true")} onBlur={() => setIsFocus("false")}
                        className={isFocus == "true" ?
                            "search_bar outline-none -translate-x-4" :
                            "search_bar outline-none -translate-x-0"} />
                </div>
            </div>
            {/* only display when not focus and witdh < 640px */}
            <div className="absolute flex">
                <i className={isFocus == "false" ?
                    "fi fi-rr-search block sm:hidden rounded-full bg-neutral-700 w-12 h-12 p-3 text-center" :
                    "hidden"}
                    onClick={() => { setIsFocus("true"); searchbox.focus() }}
                ></i>
                <i className={isFocus == "false" ?
                    "fi fi-rr-menu-burger block md:hidden rounded-md p-2  text-center text-lg hover:bg-neutral-700 w-11 h-11" :
                    "hidden"} onClick={()=> setSideNav(!sideNav)}></i>
            </div>
        </div>
        <div className={sideNav?" block" : "hidden"}>
            <Sidebar sideNav={sideNav} />
        </div>
    </div>
}

import sidebar from "../component/sidebar";

function Sidebar() {
    return <div className="fixed bg-neutral-900 h-screen w-screen md:hidden px-7 top-16 left-0">
        {sidebar.map(contacs => <div className="hover:bg-neutral-700 sideBar"
            key={contacs.name}>
            <i className={contacs.icon + " text-blue-500"}></i>
            <p className="flex-1">{contacs.name}</p>
        </div>
        )
        }
    </div>
}

export default LeftNav;