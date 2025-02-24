import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const botonLeftRight = ({ direction, onClick }) => {
  return (
    <div
      className={`absolute top-[50%] -translate-y-1/2 ${
        direction === "left" ? "left-2 md:left-5" : "right-2 md:right-5"
      } text-xl md:text-2xl rounded-full p-2 bg-white/50 text-black cursor-pointer`}
      onClick={onClick}
    >
      {direction === "left" ? <BiSolidLeftArrow size={30} /> : <BiSolidRightArrow size={30} />}
    </div>
  );
};

export default botonLeftRight;
