import { lazy } from "react"

const Navbar = lazy(()=>import("../Layout/Navbar"));
const Home = lazy(()=>import("../Pages/Home"))



export {Navbar,Home}