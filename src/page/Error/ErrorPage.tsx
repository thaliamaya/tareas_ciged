import { Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white mb-4">Error 404</h1>
      <div className="flex items-center">

      <Link to={"/"} className="text-white underline m-1 flex">
      <IoArrowBack className="text-white m-1" />
      Volver</Link>
      </div>
    </div>
  )
}

export default ErrorPage
