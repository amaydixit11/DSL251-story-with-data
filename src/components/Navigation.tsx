import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Tab {
  id: string;
  name: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface NavigationProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

const Navigation = ({ 
  tabs, 
  activeTab, 
  setActiveTab, 
  orientation = 'horizontal' 
}: NavigationProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownWidth, setDropdownWidth] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Update dropdown width on resize
  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setDropdownWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isHorizontal = orientation === 'horizontal';
  
  // Mobile dropdown
  const MobileNav = () => (
    <div className="relative md:hidden" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{tabs.find(tab => tab.id === activeTab)?.name}</span>
        <ChevronDown
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          style={{ width: `${dropdownWidth}px` }}
        >
          <div className="py-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsOpen(false);
                }}
                className={`
                  ${activeTab === tab.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                  } group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50
                  ${tab.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                disabled={tab.disabled}
                role="menuitem"
              >
                {tab.icon && <span className="mr-3">{tab.icon}</span>}
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Desktop navigation
  const DesktopNav = () => (
    <div
      className={`hidden md:flex ${
        isHorizontal ? 'space-x-8' : 'flex-col space-y-2'
      }`}
      role="tablist"
      aria-orientation={orientation}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => !tab.disabled && setActiveTab(tab.id)}
          className={`
            group relative flex items-center px-1 py-2 text-sm font-medium
            ${tab.disabled
              ? 'opacity-50 cursor-not-allowed'
              : 'cursor-pointer'
            }
            ${isHorizontal
              ? 'border-b-2'
              : 'border-l-4'
            }
            ${activeTab === tab.id
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-disabled={tab.disabled}
          disabled={tab.disabled}
          tabIndex={tab.disabled ? -1 : 0}
        >
          {tab.icon && (
            <span className={`${isHorizontal ? 'mr-2' : 'mr-3'}`}>
              {tab.icon}
            </span>
          )}
          {tab.name}
          
          {/* Active tab indicator animation
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className={`absolute ${
                isHorizontal
                  ? 'bottom-0 left-0 right-0 h-0.5'
                  : 'left-0 top-0 bottom-0 w-0.5'
              } bg-indigo-500`}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            />
          )} */}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;