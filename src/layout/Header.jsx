import Buttons from "../components/atoms/Buttons"


export default function Header(){




    
    return(
        <div className='flex gap-2'>
        <Buttons title='Home'/>
        <Buttons title='Products'/>
        <Buttons title='About Us'/>
        <Buttons title='Index'/>
        </div>
    )
}