import { createContext, useContext, useState } from "react";

const EllipsisContext = createContext();

function EllipsisProvider({ children, activeTab, setActiveTab, articleId }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EllipsisContext
      value={{ activeTab, setActiveTab, articleId, isOpen, setIsOpen }}
    >
      <div className="relative">{children}</div>
    </EllipsisContext>
  );
}

function Button({ children }) {
  const { setActiveTab, articleId, setIsOpen } = useContext(EllipsisContext);

  function handleTab() {
    setActiveTab(articleId);
    setIsOpen((c) => !c);
  }

  return (
    <button
      onClick={handleTab}
      className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      {children}
    </button>
  );
}

function List({ children }) {
  const { activeTab, articleId, isOpen } = useContext(EllipsisContext);

  const isActive = activeTab === articleId;

  console.log(
    "%c🔍 DEBUG: is active ?",
    "color: #8B5CF6; font-weight: bold",
    isActive
  );

  return (
    <>
      {isOpen || isActive && (
        <ul className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48 z-50">
          {children}
        </ul>
      )}
    </>
  );
}

function Item({ children }) {
  const { articleId, activeTab, isOpen } = useContext(EllipsisContext);

  const isActive = activeTab === articleId;

  console.log(
    "%c🔍 DEBUG: is active ?",
    "color: #8B5CF6; font-weight: bold",
    isActive
  );

  return (
    <>
      {isOpen || isActive && (
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
