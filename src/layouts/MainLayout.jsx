import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
const MainLayout = () => {
  return (
    <div className=''>
      {/* <h1>hello</h1> */}
      <Navbar></Navbar>
      {/* <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div> */}
      <div >
        <Outlet />
      </div>
      {/* footer */}
    </div>
  )
}

export default MainLayout
