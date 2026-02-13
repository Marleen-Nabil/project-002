import Buttons from "../components/atoms/Buttons"


export default function Header(){
    return(
        <div className='flex gap-2'>
        <Buttons title='Home'/>
        <Buttons className='Products'/>
        <Buttons className='About Us'/>
        <Buttons className='Index'/>
        </div>
    )
}