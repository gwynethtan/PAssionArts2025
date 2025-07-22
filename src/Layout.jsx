import NavigationBar from "./components/NavigationBar.jsx"
import Footer from "./components/Footer.jsx"
import {Outlet} from "react-router-dom"
import { cn } from "./lib/utils";
import React from "react";
const publicNav = [
  { linkName: "Home", link: "/" },
  { linkName: "Build your ideal SG", link: "/Quiz" },
  { linkName: "See builds", link: "/BuildDisplay" },
];

const Layout=()=>{
    let navDetails;
    navDetails = publicNav;

    return(
        <>
            <NavigationBar navDetails={navDetails}/>
            <main className="">
                <div className="relative flex items-center justify-center bg-white dark:bg-black">
                <div
                    className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    )}
                />
                <div className="z-10">
                    <Outlet/>
                </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;