import amazon from "../assets/images/amazon.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./Search";

const NavBar = () => {
  return (
    <>
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* left */}
        <div className="flex items-center m-4">
          <img
            className="h-[35px] w-[100px] m-2"
            src={amazon}
            alt="amazon-logo"
          />
          <div className="px-4">
            <div className="text-xs lg:text-sm">Deliver to</div>
            <div className="text-sm lg:text-base font-bold">India</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* right */}
        <div className="flex items-center m-4">
          <div className="px-4">
            <div className="text-xs lg:text-sm">Hello, sign in</div>
            <div className="text-sm lg:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="px-4">
            <div className="text-xs lg:text-sm">Returns</div>
            <div className="text-sm lg:text-base font-bold">& Orders</div>
          </div>
          <div className="flex px-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="mt-7 text-xs lg:text-sm font-bold">Cart</div>
          </div>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs lg:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </>
  );
};

export default NavBar;
