const Header = () => {
  return (
    <header className="w-ful h-18 bg-neutral-900 flex items-center justify-between px-10 shadow-[0_0_10px_1px_white]/30 ">
      <ul className="flex gap-8 ">
        <li className="cursor-pointer hover:text-yellow-400 duration-100 hover:scale-115 hover:text-shadow-[0_0_12px_white]/60  ">Home</li>
        <li className="cursor-pointer hover:text-yellow-400 duration-100 hover:scale-115 hover:text-shadow-[0_0_12px_white]/60  ">Shop</li>
        <li className="cursor-pointer hover:text-yellow-400 duration-100 hover:scale-115 hover:text-shadow-[0_0_12px_white]/60  ">Categories</li>
        <li className="cursor-pointer hover:text-yellow-400 duration-100 hover:scale-115 hover:text-shadow-[0_0_12px_white]/60  ">Orders</li>
        <li className="cursor-pointer hover:text-yellow-400 duration-100 hover:scale-115 hover:text-shadow-[0_0_12px_white]/60  ">Contact</li>
      </ul>
      <h1 className="text-3xl text-yellow-400 font-bold">Online Shopping</h1>

    </header>
  );
};

export default Header;
