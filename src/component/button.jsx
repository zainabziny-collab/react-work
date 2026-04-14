const button = () => {
    let age = 20
    return (
        <div className="w-100 h-70 bg-gray-900 flex items-center justify-center flex-col gap-3">
            <input className="bg-gray-300 px-4 py-1 rounded-md" type="number" name="" id="" placeholder="write your name." />
            <button className= {age >= 20 ?"px-6 py-3 text-white rounded-md cursor-pointer bg-red-500 hover:bg-red-700 " : "px-6 py-3 text-white rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-600 "}  >Click Me</button>
            <h2 className="text-white">{age>= 20 ? "you are not allowed" : "successfully"}</h2>
        </div >
    );
}

export default button;