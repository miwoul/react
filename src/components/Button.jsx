function Button() {

    function hendleOnClick(event, name){
        console.log(event);
        alert(`Hello ${name}`)
    }

    return(
        <button onClick={() => hendleOnClick('Jun')}>
            Click me !
        </button> 
    )
}

export default Button;