import { createContext, useContext, useState } from "react";

const EllipsisContext = createContext();

function EllipsisProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EllipsisContext value={{ isOpen, setIsOpen }}>
      <div className="relative">{children}</div>
    </EllipsisContext>
  );
}

function Button({ children }) {
  const { setIsOpen } = useContext(EllipsisContext);
  return (
    <button
      onClick={() => setIsOpen((c) => !c)}
      className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      {children}
    </button>
  );
}

function List({ children }) {
  const { isOpen } = useContext(EllipsisContext);

  return (
    <>
      {isOpen && (
        <ul className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48 z-50">
          {children}
        </ul>
      )}
    </>
  );
}

function Item({ children }) {
  const { isOpen } = useContext(EllipsisContext);

  return (
    <>
      {isOpen && (
        <li className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
          {children}
        </li>
      )}
    </>
  );
}

EllipsisProvider.Button = Button;
EllipsisProvider.List = List;
EllipsisProvider.Item = Item;

export default EllipsisProvider;
