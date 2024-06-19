function Student ({name, age, major}){
    const textStyle = {
        textDecoration: age >= 20 ? 'underline' : 'none'
      };
    return (
        <div style={textStyle}>
            <h1>
                {name}  : {age} : {major}
            </h1>
        </div>
    );
}

export default Student;