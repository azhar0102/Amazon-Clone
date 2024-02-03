import amazon from "../assets/images/amazon.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <div className="flex bg-amazonclone text-white h-[60px]">
      {/* left */}
      <div className="flex items-center m-4">
        <img
          className="h-[35px] w-[100px] m-2"
          src={amazon}
          alt="amazon-logo"
        />
        <div className="px-4">
          <div className="text-xs xl:text-sm">Deliver to</div>
          <div className="text-sm xl:text-base font-bold">India</div>
        </div>
      </div>
      {/* middle */}
      <div className="flex"></div>
      {/* right */}
      <div className="flex items-center m-4">
        <div className="px-4">
          <div className="text-xs xl:text-sm">Hello, sign in</div>
          <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
        </div>
        <div className="px-4">
          <div className="text-xs xl:text-sm">Returns</div>
          <div className="text-sm xl:text-base font-bold">& Orders</div>
        </div>
        <div className="flex px-3">
          <ShoppingCartIcon className="h-[48px]" />
          <div className="mt-7 text-sm xl:text-sm font-bold">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
