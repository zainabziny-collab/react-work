import img from "./41EvbQ64I2L._SR420,420_.jpg";
const Box = () => {
  return (
    <div className="py-15 w-full flex justify-center gap-10 flex-wrap ">
      <div className="w-80 h-100 bg-neutral-900 overflow-hidden rounded-lg shadow-[0_0_6px_white]/60 hover:scale-[1.05] duration-300 ">
        <div className="ml-3 mt-3 w-74 h-50 overflow-hidden rounded-[10px]">
          <img src={img} alt="" />
        </div>
        <div className="w-full px-4 py-3 flex flex-col gap-2">
          <h2 className="text-2xl text-red-400">Title</h2>
          <h3>Category</h3>
          <p className="text-white/40">Description</p>
          <h3 className="text-[18px] text-yellow-400 ">Price:</h3>
        </div>
      </div>
    </div>
  );
};

export default Box;
