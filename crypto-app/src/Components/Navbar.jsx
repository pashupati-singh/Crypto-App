import { useNavigate } from "react-router-dom"
import { LogoIcon } from "../Icons/Icons"

export const Navbar = () => {
    const navigate = useNavigate();
  return (
<div className="bg-yellow-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
          <LogoIcon />
          <p className="font-semibold">
            <span className="text-green-500">C</span>ypto<span className="text-green-500">C</span>oin
          </p>
        </div>
      </div>
    </div>
  )
}
