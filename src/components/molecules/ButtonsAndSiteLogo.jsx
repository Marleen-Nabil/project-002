import SiteLogo from "../atoms/SiteLogo"
import Buttons from "../atoms/Buttons"
export default function ButtonsAndSiteLogo(){
    return(
        <div className="flex my-2">
            <SiteLogo/>
            <Buttons/>
        </div>
    )
}