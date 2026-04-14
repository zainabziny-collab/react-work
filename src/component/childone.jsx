import Chiltwo from "./child-two-box/childTow";

const Childone = ({obj}) => {

    return (
        <div className="w-100 h-60 bg-gray-900 flex gap-5 items-center justify-center text-white ">
            <h2>Name: {obj.firstname}</h2>
            <h2>Last Name: {obj.lastname}</h2>
            <h2>Age: {obj.age}</h2>
            <button className="px-6 py-3 bg-red-500 rounded-md cursor-pointer">Button</button>
            <Chiltwo object={obj}/>
        </div>);
}

export default Childone;