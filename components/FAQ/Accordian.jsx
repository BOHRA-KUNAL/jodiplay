import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaChevronDown } from "react-icons/fa6";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);
  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;
  const ref = useRef(null);

  return (
    <li
      className=" my-4 rounded-md shadow-sm shadow-ternary bg-[#F6F5FF]"
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="d-flex justify-content-between gap-4 p-2 md:p-4 font-medium text-sm xl:text-base"
      >
        {/* <div className="hidden md:block relative w-10 h-10 rounded-full bg-[#DCDBEC]">
          <p className="absolute top-2 left-4">{value}</p>
        </div> */}
        <div style={{fontWeight: "800"}}>
        {trigger}
        </div>

        <div>
        <FaChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
        </div>
      </header>

      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-2" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
