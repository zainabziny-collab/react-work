const Chiltwo = ({object}) => {
    return (
        <div className="w-100 h-60 bg-green-700 flex gap-5 items-center justify-center ">
            <h2>Name: {object.firstname}</h2>
            <h2>Last Name: {object.lastname}</h2>
            <h2>Age: {object.age}</h2>
        </div>
     );
}

export default Chiltwo;