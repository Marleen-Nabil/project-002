import Buttons from "../components/atoms/Buttons"
import SiteLogo from "../components/atoms/SiteLogo"

export default function Header(){




    
    return(
    
        <div className='flex gap-2'>
       <SiteLogo img/>
        <Buttons title='Home'/>
        <Buttons title='Products'/>
        <Buttons title='About Us'/>
        <Buttons title='Index'/>
        </div>
    )
}