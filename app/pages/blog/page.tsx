import Cursor from "@/app/components/cursor"
import HambMenu from "@/app/components/hambMenu"
import NavBar from "@/app/components/navBar"

export default function Blog() { 
    return (
        <>
            <Cursor/>
                <div className="mouse-cursor">
                    <div className="cursor-inner"></div>
                    <div className="cursor-outer"></div>
                </div>
            <NavBar/>
            <HambMenu/>
            <h1>Blog Page</h1>
        </>
    )
}