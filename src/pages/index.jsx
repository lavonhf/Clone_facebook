import { useState } from "react";
import freinds from "../component/friend";
import sidebar from "../component/sidebar";
import { Link } from "react-router-dom";

const Home = () => {
    const [onPost, setOnPost] = useState(false)

    return <div className="bg-neutral-900 py-20 flex justify-center">
        <div className="fixed bg-neutral-900 h-screen hidden md:block px-7 top-20 left-0 overflow-y-auto">
            {sidebar.map(contacs => <Link className="hover:bg-neutral-700 sideBar" to={contacs.link}
                key={contacs.name}>
                <i className={contacs.icon + " text-blue-500"}></i>
                <p className="flex-1">{contacs.name}</p>
            </Link>
            )}
        </div>

        <div className={onPost ? "fixed text-white p-4 flex flex-col  h-96 z-30 rounded-md bg-neutral-800" : "hidden"}>
            <div className="flex py-4">
                <h1 className="w-full flex justify-center text-3xl font-semibold">Create Post</h1>
                <i onClick={() => setOnPost(!onPost)}
                    className="fi fi-sr-cross-circle rounded-full right-5 top-8 absolute hover:text-neutral-400 text-neutral-500 text-3xl items-center justify-center flex"></i>
            </div>
            <div className="flex items-center">
                <i className="fi fi-sr-user h-10 w-10 rounded-full justify-center items-center flex mx-3 bg-neutral-700"></i>
                <p>user 1</p>
            </div>
            <input type="text" placeholder="what's on your mind?" id="input"
                className=" outline-none bg-transparent h-40 items-start" />
            <button className="w-96 h-10 hover:bg-blue-700 bg-blue-800 disabled:bg-neutral-600">Post</button>
        </div>
        <div className={onPost ? "fixed flex justify-center items-center w-full h-full z-10 top-0 bg-black opacity-50" : "hidden"}></div>
        <HomePage setOnPost={setOnPost} onPost={onPost} />
        <div className="bg-neutral-900 text-white fixed right-0 h-screen hidden md:block overflow-y-auto ">
            <div className="flex flex-row m-1" >
                <h1 className="flex-1">Chats</h1>
                <i className="fi fi-rr-search h-8 w-8 justify-center items-center flex hover:bg-neutral-500 rounded-full"></i>
                <i className="fi fi-rr-menu-dots h-8 w-8 justify-center items-center flex hover:bg-neutral-500 rounded-full"></i>
            </div>
            {freinds.map(friends => <div key={friends.id}
                className="flex flex-row hover:bg-neutral-600 rounded-md w-64 items-center h-12"
            >
                <i className="fi fi-sr-user rounded-full w-8 h-8 flex justify-center items-center bg-neutral-700"></i>
                <p>{friends.name}</p>
            </div>)}
        </div>
    </div>
}

function HomePage({ setOnPost, onPost }) {
    let classes = " w-44 h-10 rounded-md hover:bg-neutral-700 items-center justify-center gap-4 flex"
    return <div className="gap-3 flex flex-col justify-center items-center">
        <div className=" m-4 p-2 w-auto rounded-md bg-neutral-800">
            <div className="flex text-neutral-400 items-center">
                <i className="fi fi-sr-user h-10 w-10 rounded-full justify-center items-center flex mx-3 bg-neutral-700"></i>
                <button className=" flex flex-1  h-10 items-center px-4 rounded-full bg-neutral-700 hover:bg-neutral-600"
                    onClick={() => setOnPost(!onPost)}
                >What's on your mind</button>
            </div>
            <span className="m-3 flex h-1 w-auto bg-neutral-600"></span>
            <div className=" flex w-auto">
                <div className={classes}>
                    <i className="fi fi-sr-video-plus text-red-700 text-3xl"></i>
                    <p className=" text-neutral-500 flex items-center">Live video</p>
                </div>
                <div className={classes}>
                    <i className="fi fi-sr-picture text-green-700 text-2xl"></i>
                    <p className=" text-neutral-500 flex items-center">Photos / video</p>
                </div>
                <div className={classes}>
                    <i className="fi fi-sr-grin-alt text-yellow-400 text-2xl"></i>
                    <p className=" text-neutral-500 flex items-center">feeling aactifity</p>
                </div>
            </div>
        </div>
        <PostCard />
    </div>
}

function PostCard() {
    const [like, setLike] = useState(0)
    const [emoji, setEmoji] = useState(false)

    let circle = " hover:bg-neutral-600  rounded-full h-10 w-10 justify-center items-center flex"
    return <div style={{ width: "34rem" }}
        className="flex flex-col text-white bg-neutral-800 rounded-md py-5">
        <div className="flex flex-row justify-between px-4">
            <div className="flex flex-row gap-3">
                <i className={"fi fi-sr-user bg-neutral-500" + circle}></i>
                <h1> user 1</h1>
            </div>
            <div className="flex flex-row">
                <i className={"fi fi-rr-menu-dots" + circle}></i>
                <i className={"fi fi-sr-cross" + circle}></i>
            </div>
        </div>
        <h1 className="w-96 px-4 m-2">
            captions
        </h1>
        <div className="flex flex-row object-none">
            <img src="https://dummyimage.com/270x450/fff/aaa" alt="Dummy Image" />
            <img src="https://dummyimage.com/270x450/fff/aaa" alt="Dummy Image" />
        </div>
        <div className="px-4 gap-0" >
            <div className="h-10 flex items-center">
                <i className="fi fi-sr-thumbs-up text-sky-500 flex flex-1"></i>
                <i className="fi fi-sr-comment-alt-middle"></i>
            </div>
            <span className="flex h-1 m-0 w-auto bg-neutral-600"></span>
            <div className="h-10 flex items-center m-0">
                <div className=" w-1/3 flex justify-center items-center gap-3 hover:bg-neutral-600">
                    <i className="fi fi-rr-social-network"></i>
                    <p>Like</p>
                </div>
                <div className=" w-1/3 flex justify-center items-center gap-3 hover:bg-neutral-600">
                    <i className="fi fi-rs-comment-alt-middle"></i>
                    <p>comment</p>
                </div>
                <div className=" w-1/3 flex justify-center items-center gap-3 hover:bg-neutral-600">
                    <i className="fi fi-rr-redo"></i>
                    <p>share</p>
                </div>
            </div>
            <span className="flex h-1 w-auto bg-neutral-600"></span>

        </div>
    </div>
}

export default Home;