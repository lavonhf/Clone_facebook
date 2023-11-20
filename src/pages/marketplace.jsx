import { AccountBar } from "../navbar/navComponent/account";

const Market = () => {
    let classes = " h-8 w-8 rounded-full bg-neutral-600 flex justify-center items-center";

    return <div className="bg-neutral-900">
        <div className=" w-80 overflow-hidden p-3 bg-neutral-800 h-screen fixed top-16 text-white">
            <div className="flex flex-row p-2 w-72">
                <h1 className="flex-1 text-2xl font-bold">Marketplace</h1>
                <i className={"fi fi-ss-settings" + classes}></i>
            </div>
            <div className="search_box w-60 rounded-full bg-neutral-700 flex gap-2">
                <i className="fi fi-rr-search transition-all"></i>
                <input placeholder="Search marketplace" 
                type="text" className="search_bar outline-none" />
            </div>
            <div className="flex p-2 w-72 flex-col">
                <AccountBar icons="fi fi-ss-box" title="Catergory" />
                <AccountBar icons="fi fi-sr-bags-shopping" title="Buying" />
                <AccountBar icons="fi fi-ss-tags" title="Selling" />
                <AccountBar icons="fi fi-ss-cowbell" title="Notification" />
            </div>
        </div>
        <div className="pl-80 pt-20 text-white">
                <p className="mx-5">Market Place</p>
            <div className="grid grid-cols-3 m-5 ">
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>
            <ProductItem price="1500" item="IPhone 11 125 Gb"/>

            </div>
        </div>
    </div>
}

function ProductItem({price, item}){
    return<div className="flex flex-col w-96 my-6">
        <div className="bg-neutral-700 w-72 h-72 rounded-md"></div>
        <b>Rp{price}</b>
        <p>{item}</p>
    </div>
}
export default Market;