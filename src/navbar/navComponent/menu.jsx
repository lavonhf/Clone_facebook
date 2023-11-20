const Menu = () => {
    return <div className="container bg-neutral-700 text-white">
         <h1>Menu</h1>
         <div className="bg-neutral-800 create-sec p-3">
                <h2 className=" font-semibold">Create</h2>
                <MenuBtn icons="fi fi-br-edit" title="Post" />
                <MenuBtn icons="fi fi-ss-book-alt" title="Story" />
                <MenuBtn icons="fi fi-br-film" title="reel" />
                <MenuBtn icons="fi fi-ss-calendar-star" title="Life event" />
                <span></span>
                <MenuBtn icons="fi fi-ss-flag-alt" title="Page" />
                <MenuBtn icons="fi fi-ss-megaphone" title="Ad" />
                <MenuBtn icons="fi fi-ss-users" title="Group" />
                <MenuBtn icons="fi fi-ss-square-plus" title="Event" />
                <MenuBtn icons="fi fi-sr-shopping-bag" title="Marketplace" />
        </div>
    </div>
}
function MenuBtn({ icons, title }) {
    return <div className="create-sec-btn hover:bg-neutral-600 rounded-md gap-2">
        <i className={icons + " bg-neutral-700"}></i>
        <p>{title}</p>
    </div>
}

export default Menu;