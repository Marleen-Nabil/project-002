export default function Buttons(props){
    
    
    
    return(
        <div>
            <button className={`bg-amber-500 hover:bg-blue-500 m-2 border-2 border-brown-300 border-solid rounded-xl p-2 font-medium`}>{props.title}</button>
        </div>
    )
}