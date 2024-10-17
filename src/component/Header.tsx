import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
    <h1 className="text-4xl uppercase font-bold text-center">Header</h1>
      <nav className='flex my-5'>
        <Link className='m-4 bg-blue-700 hover:bg-blue-500 text-lg text-white px-3 py-1 rounded-xl' to="/">Home</Link>
        <Link className='m-4 bg-blue-700 hover:bg-blue-500 text-lg text-white px-3 py-1 rounded-xl' to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Header
