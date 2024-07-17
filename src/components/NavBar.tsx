import logo from '../assets/Images/ParkZeus-8d68de2f.png'
import searchIcon from '../assets/Images/search.svg'
import alertIcon from '../assets/Images/alert.svg'
import accountIcon from '../assets/Images/account.svg'
import { FaAngleDown } from 'react-icons/fa'
import { usePark } from '../contexts'


export const NavBar = () => {
    const {userName,alerts} = usePark()
    const alertCount = alerts?.length
  return (
    <div className='bg-white '>

    <div className="max-w-screen-2xl mx-auto w-full px-16">
        <div className='py-5 flex items-center justify-between'>

        <div className="flex items-center">
            <div className='mr-24'>
                <img src={logo} alt='park-Zeus' className='w-24 h-10'/>
            </div>
            <span>Entry Dashboard</span>
            <div className='ml-10 mr-5 bg-green-30 rounded-full text-sm text-green-500 px-2 '>Connected</div>
        </div>


        <div className='flex'>
            <div className='flex items-center justify-between shadow-lg rounded-lg'>
                <input
                 type="search"
                 className='py-2.5 px-4 w-full h-full rounded-lg '
                 />
                <button className='bg-btn-blue flex items-center -ml-2 justify-center rounded-lg w-10 h-10'>
                    <img src={searchIcon}/>
                </button>
            </div>

            <div className='ml-8 relative flex'>
                <button className='flex items-center justify-center'>
                    <img src={alertIcon}/>
                    <div className='absolute top-0 left-5 bg-red-300 rounded-xl px-2'>{alertCount > 10 ? '10+' : alertCount}</div>
                </button>
            </div>

            <div className='flex ml-8 items-center gap-3'>
            <img src={accountIcon}/>
                <button className='flex items-center'>
                    <span>{userName}</span>
                    <FaAngleDown/>
                </button>
            </div>
        </div>
        </div>
    </div>
    </div>

  )
}