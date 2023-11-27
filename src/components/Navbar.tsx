import { NavLink, useNavigate} from "react-router-dom";
import { useRef } from 'react'

export const Navbar = () => {
  const navigate = useNavigate();
  
  function sendSearch(){
    navigate(`/search/${searchRef.current?.value}`)
  }
  const searchRef = useRef<HTMLInputElement>(null)

  function sendSearch2(){
    navigate(`/search/${searchRef2.current?.value}`)
  }
  const searchRef2 = useRef<HTMLInputElement>(null)
  return (
    <>
      <nav className="bg-slate-100">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <h1 className='font-bold font-2xl'>ShowApp</h1>
        </div>
        
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <NavLink to={'/'} className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</NavLink>
            <NavLink to={"/top-rated"} className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Top Rated</NavLink>
            <form onSubmit={() => sendSearch()} className="flex gap-2">
            <input ref={searchRef} type='search' className='block flex-1 border-1 rounded bg-white py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder='Search Movie or TV Show'/>
            <button className="bg-blue-800 text-white py-2 px-4 rounded text-xs" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <NavLink to={'/'} className="block text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</NavLink>
      <NavLink to={"/top-rated"} className="block text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Top Rated</NavLink>
      <form onSubmit={() => sendSearch2()} className="flex gap-2">
        <input ref={searchRef2} type='search' className='block flex-1 border-1 rounded bg-white py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder='Search Movie or TV Show'/>
        <button className="bg-blue-800 text-white py-2 px-4 rounded text-xs" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
};
