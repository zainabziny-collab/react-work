const TodoList = () => {
    function getTask() {
        // let list = {
        //     task: input.value
        // }
    }
    return (
        <div className="w-100 h-60 bg-gray-900 flex flex-col items-center justify-center gap-4 ">
            <input type="text" placeholder="Enter you task." className="px-8 py-2 bg-gray-300" />
            <button onClick={getTask} className="px-6 py-3 bg-red-500 rounded-md cursor-pointer">Add</button>
            {/* {list.map(item) => {
                <div>{item}</div>
            }} */}
        </div>
    );
}

export default TodoList;