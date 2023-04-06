import { aviaopapel } from "../common/icons";

export default function CardsHome() {
  return (
    <article className=" bg-[#313131] max-w-[294px] w-full mb-8">
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" ml-4 mt-6 "
      >
        <path
          d="M58 0L0 29L17.0375 34.8L18.125 54.375L27.1875 44.225L36.25 58L58 0ZM27.1875 37.7L42.775 16.3125L20.3 31.9L9.425 28.275L51.475 7.25L35.1625 50.025L27.1875 37.7Z"
          fill="#098A5B"
        />
      </svg>
      <div className=" border-b border-[#098A5B] pb-3 pl-4  mt-6">
        <strong className=" text-xl">Future Concept</strong>
      </div>

      <p className=" mt-5 pl-4 pb-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </article>
  );
}
