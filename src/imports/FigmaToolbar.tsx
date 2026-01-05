import svgPaths from "./svg-1wmpkp6gcs";
import { useState, useRef, useEffect } from "react";

function MaskGroup() {
  return (
    <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Mask group">
          <mask height="17" id="mask0_1_81" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="17" x="0" y="0">
            <g id="Group">
              <path d="M0 0H17V17H0V0Z" fill="var(--fill-0, white)" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p35067180} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
            </g>
          </mask>
          <g mask="url(#mask0_1_81)">
            <path d={svgPaths.p2327a580} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconMove() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-move">
      <MaskGroup />
    </div>
  );
}

function Selected() {
  return (
    <div className="bg-[#0c8ce9] content-stretch flex items-center p-[3px] relative rounded-[4px] shrink-0" data-name="selected">
      <IconMove />
    </div>
  );
}

function IconChevronDown() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[12px]" data-name="icon-chevron-down">
      <div className="absolute h-[3.002px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[5.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00152 3.00179">
          <path clipRule="evenodd" d={svgPaths.p3236ed00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center relative shrink-0" data-name="select">
      <Selected />
      <IconChevronDown />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-frame">
          <path clipRule="evenodd" d={svgPaths.p28900b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Selected1() {
  return (
    <div className="content-stretch flex items-center p-[3px] relative rounded-[4px] shrink-0" data-name="selected">
      <IconFrame />
    </div>
  );
}

function IconChevronDown1() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[12px]" data-name="icon-chevron-down">
      <div className="absolute h-[3.002px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[5.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00152 3.00179">
          <path clipRule="evenodd" d={svgPaths.p3236ed00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frames() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center relative shrink-0" data-name="frames">
      <Selected1 />
      <IconChevronDown1 />
    </div>
  );
}

function IconRectangle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-rectangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-rectangle">
          <path clipRule="evenodd" d={svgPaths.p1f557300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Selected2() {
  return (
    <div className="content-stretch flex items-center p-[3px] relative rounded-[4px] shrink-0" data-name="selected">
      <IconRectangle />
    </div>
  );
}

function IconChevronDown2() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[12px]" data-name="icon-chevron-down">
      <div className="absolute h-[3.002px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[5.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00152 3.00179">
          <path clipRule="evenodd" d={svgPaths.p3236ed00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Shapes() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center relative shrink-0" data-name="shapes">
      <Selected2 />
      <IconChevronDown2 />
    </div>
  );
}

function IconPen() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-pen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-pen">
          <path clipRule="evenodd" d={svgPaths.p290abf80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Selected3() {
  return (
    <div className="content-stretch flex items-center p-[3px] relative rounded-[4px] shrink-0" data-name="selected">
      <IconPen />
    </div>
  );
}

function IconChevronDown3() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[12px]" data-name="icon-chevron-down">
      <div className="absolute h-[3.002px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[5.002px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00152 3.00179">
          <path clipRule="evenodd" d={svgPaths.p3236ed00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Shapes1() {
  return (
    <div className="content-stretch flex gap-[2px] h-full items-center relative shrink-0" data-name="shapes">
      <Selected3 />
      <IconChevronDown3 />
    </div>
  );
}

function IconText() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-text">
          <path clipRule="evenodd" d={svgPaths.pb7bc600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Selected4() {
  return (
    <div className="content-stretch flex items-center p-[3px] relative rounded-[4px] shrink-0" data-name="selected">
      <IconText />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <Selected4 />
    </div>
  );
}

function IconComments() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-comments">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-comments">
          <path clipRule="evenodd" d={svgPaths.p2cce9700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Selected5() {
  return (
    <div className="content-stretch flex items-center p-[3px] relative rounded-[4px] shrink-0" data-name="selected">
      <IconComments />
    </div>
  );
}

function Comments() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="comments">
      <Selected5 />
    </div>
  );
}

function IconPluggins() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-pluggins">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-pluggins">
          <path clipRule="evenodd" d={svgPaths.p25dff000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Selected6() {
  return (
    <div className="content-stretch flex items-center p-[3px] relative rounded-[4px] shrink-0" data-name="selected">
      <IconPluggins />
    </div>
  );
}

function Pluggins() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="pluggins">
      <Selected6 />
    </div>
  );
}

interface PluginItem {
  name: string;
  icon: string;
  color: string;
}

interface PluginsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  position: { top: number; left: number };
}

function PluginsMenu({ isOpen, onClose, position }: PluginsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'assets' | 'plugins'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const recentPlugins: PluginItem[] = [
    { name: "TeleportHQ - Figma to Code - Export HTML, CSS, React & Vue", icon: "🎯", color: "#FF6B6B" },
    { name: "Figma to React from Quest", icon: "⚛️", color: "#61DAFB" },
    { name: "Figma to Flutter, HTML, Next.js, and React | DhiWise Design (no...", icon: "🎨", color: "#0468D7" },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute bg-[#2c2c2c] rounded-[12px] shadow-[0px_8px_24px_rgba(0,0,0,0.5)] border border-[#3d3d3d] w-[460px] z-50"
      style={{ top: position.top, left: position.left }}
    >
      {/* Search Bar */}
      <div className="p-[16px] pb-[12px]">
        <div className="relative">
          <svg
            className="absolute left-[12px] top-[50%] translate-y-[-50%]"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="7" cy="7" r="5" stroke="#999" strokeWidth="1.5" />
            <line x1="11" y1="11" x2="14" y2="14" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1e1e1e] text-white text-[13px] px-[36px] py-[8px] rounded-[6px] border border-[#3d3d3d] focus:outline-none focus:border-[#0c8ce9]"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-[16px] px-[16px] border-b border-[#3d3d3d]">
        <button
          onClick={() => setActiveTab('all')}
          className={`pb-[8px] text-[13px] ${
            activeTab === 'all'
              ? 'text-white border-b-2 border-[#0c8ce9]'
              : 'text-[#999] hover:text-white'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('assets')}
          className={`pb-[8px] text-[13px] ${
            activeTab === 'assets'
              ? 'text-white border-b-2 border-[#0c8ce9]'
              : 'text-[#999] hover:text-white'
          }`}
        >
          Assets
        </button>
        <button
          onClick={() => setActiveTab('plugins')}
          className={`pb-[8px] text-[13px] ${
            activeTab === 'plugins'
              ? 'text-white border-b-2 border-[#0c8ce9]'
              : 'text-[#999] hover:text-white'
          }`}
        >
          Plugins & widgets
        </button>
      </div>

      {/* Content */}
      <div className="max-h-[400px] overflow-y-auto">
        {/* Recents */}
        <div className="p-[16px]">
          <h3 className="text-[#999] text-[11px] uppercase tracking-wider mb-[8px]">Recents</h3>
          {recentPlugins.map((plugin, index) => (
            <div
              key={index}
              className="flex items-center gap-[12px] px-[8px] py-[8px] rounded-[6px] hover:bg-[#383838] cursor-pointer"
            >
              <div
                className="w-[24px] h-[24px] rounded-[4px] flex items-center justify-center text-[14px]"
                style={{ backgroundColor: plugin.color }}
              >
                {plugin.icon}
              </div>
              <span className="text-white text-[13px] flex-1 truncate">{plugin.name}</span>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="px-[16px] pb-[16px]">
          <h3 className="text-[#999] text-[11px] uppercase tracking-wider mb-[8px]">Suggestions</h3>
          <div className="space-y-[2px]">
            <div className="flex items-center justify-between px-[8px] py-[8px] rounded-[6px] hover:bg-[#383838] cursor-pointer">
              <div className="flex items-center gap-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#999" strokeWidth="1.5" />
                  <line x1="8" y1="5" x2="8" y2="9" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-white text-[13px]">Find and replace...</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-[8px] py-[8px] rounded-[6px] hover:bg-[#383838] cursor-pointer">
              <div className="flex items-center gap-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#999" strokeWidth="1.5" />
                </svg>
                <span className="text-white text-[13px]">Select all</span>
              </div>
              <span className="text-[#999] text-[12px]">Ctrl+A</span>
            </div>
            <div className="flex items-center justify-between px-[8px] py-[8px] rounded-[6px] hover:bg-[#383838] cursor-pointer">
              <div className="flex items-center gap-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 4L8 12M5 9L8 12L11 9" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white text-[13px]">Undo</span>
              </div>
              <span className="text-[#999] text-[12px]">Ctrl+Z</span>
            </div>
          </div>
        </div>

        {/* Common settings */}
        <div className="px-[16px] pb-[16px]">
          <h3 className="text-[#999] text-[11px] uppercase tracking-wider mb-[8px]">Common settings</h3>
        </div>
      </div>
    </div>
  );
}

interface DropdownItem {
  label: string;
  shortcut?: string;
  icon?: React.ReactNode;
  selected?: boolean;
}

interface DropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
  position: { top: number; left: number };
}

function Dropdown({ items, isOpen, onClose, position }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute bg-[#2c2c2c] rounded-[8px] shadow-[0px_4px_16px_rgba(0,0,0,0.4)] border border-[#3d3d3d] py-[4px] min-w-[200px] z-50"
      style={{ top: position.top, left: position.left }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between px-[12px] py-[6px] cursor-pointer hover:bg-[#383838] ${
            item.selected ? "bg-[#0c8ce9]" : ""
          }`}
        >
          <div className="flex items-center gap-[8px]">
            {item.selected && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {!item.selected && <div className="w-[12px]" />}
            {item.icon && <div className="w-[16px] h-[16px]">{item.icon}</div>}
            <span className="text-white text-[13px]">{item.label}</span>
          </div>
          {item.shortcut && (
            <span className="text-[#999] text-[12px] ml-[24px]">{item.shortcut}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function Tools() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isPluginsMenuOpen, setIsPluginsMenuOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const penRef = useRef<HTMLDivElement>(null);
  const pluginsRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdownName: string, ref: React.RefObject<HTMLDivElement>) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
      }
      setOpenDropdown(dropdownName);
    }
  };

  const handlePluginsToggle = () => {
    setIsPluginsMenuOpen(!isPluginsMenuOpen);
    if (pluginsRef.current) {
      const rect = pluginsRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  };

  const moveDropdownItems: DropdownItem[] = [
    { label: "Move", shortcut: "V", selected: true },
    { label: "Hand tool", shortcut: "H" },
    { label: "Scale", shortcut: "K" },
  ];

  const frameDropdownItems: DropdownItem[] = [
    { label: "Frame", shortcut: "F", selected: true },
    { label: "Section", shortcut: "Shift+S" },
    { label: "Slice", shortcut: "S" },
  ];

  const shapeDropdownItems: DropdownItem[] = [
    { label: "Rectangle", shortcut: "R", selected: true },
    { label: "Line", shortcut: "L" },
    { label: "Arrow", shortcut: "Shift+L" },
    { label: "Ellipse", shortcut: "O" },
    { label: "Polygon", shortcut: "" },
    { label: "Star", shortcut: "" },
    { label: "Image/Video...", shortcut: "Ctrl+Shift+K" },
  ];

  const penDropdownItems: DropdownItem[] = [
    { label: "Pen", shortcut: "P", selected: true },
    { label: "Pencil", shortcut: "Shift+P" },
  ];

  return (
    <>
      <div className="content-stretch flex gap-[12px] items-center p-[8px] relative shrink-0" data-name="tools">
        <div
          ref={selectRef}
          className="flex flex-row items-center self-stretch cursor-pointer"
          onClick={() => handleDropdownToggle("move", selectRef)}
        >
          <Select />
        </div>
        <div
          ref={framesRef}
          className="flex flex-row items-center self-stretch cursor-pointer"
          onClick={() => handleDropdownToggle("frames", framesRef)}
        >
          <Frames />
        </div>
        <div
          ref={shapesRef}
          className="flex flex-row items-center self-stretch cursor-pointer"
          onClick={() => handleDropdownToggle("shapes", shapesRef)}
        >
          <Shapes />
        </div>
        <div
          ref={penRef}
          className="flex flex-row items-center self-stretch cursor-pointer"
          onClick={() => handleDropdownToggle("pen", penRef)}
        >
          <Shapes1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Text />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Comments />
        </div>
        <div
          ref={pluginsRef}
          className="flex flex-row items-center self-stretch cursor-pointer"
          onClick={handlePluginsToggle}
        >
          <Pluggins />
        </div>
      </div>
      <Dropdown
        items={moveDropdownItems}
        isOpen={openDropdown === "move"}
        onClose={() => setOpenDropdown(null)}
        position={dropdownPosition}
      />
      <Dropdown
        items={frameDropdownItems}
        isOpen={openDropdown === "frames"}
        onClose={() => setOpenDropdown(null)}
        position={dropdownPosition}
      />
      <Dropdown
        items={shapeDropdownItems}
        isOpen={openDropdown === "shapes"}
        onClose={() => setOpenDropdown(null)}
        position={dropdownPosition}
      />
      <Dropdown
        items={penDropdownItems}
        isOpen={openDropdown === "pen"}
        onClose={() => setOpenDropdown(null)}
        position={dropdownPosition}
      />
      <PluginsMenu
        isOpen={isPluginsMenuOpen}
        onClose={() => setIsPluginsMenuOpen(false)}
        position={dropdownPosition}
      />
    </>
  );
}

function IconToolbelt() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="icon-toolbelt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="icon-toolbelt">
          <path clipRule="evenodd" d={svgPaths.p1599ac00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Selected7() {
  return (
    <div className="bg-[#2c2c2c] content-stretch flex items-center p-[2px] relative rounded-[4px] shrink-0" data-name="selected">
      <div aria-hidden="true" className="absolute border border-[#474747] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25),0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
      <IconToolbelt />
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-[#383838] content-stretch flex h-full items-center relative rounded-[4px] shrink-0 w-[39px]" data-name="switch">
      <Selected7 />
    </div>
  );
}

function DeveloperTools() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="developer-tools">
      <div className="flex flex-row items-center self-stretch">
        <Switch />
      </div>
    </div>
  );
}

export default function FigmaToolbar() {
  return (
    <div className="bg-[#2c2c2c] relative rounded-[12px] size-full" data-name="figma-toolbar">
      <div className="content-stretch flex gap-[5px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Tools />
        <div className="flex flex-row items-center self-stretch">
          <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none h-full rotate-[90deg]">
              <div className="h-full relative w-[46px]">
                {/* // ... remove this code ... */}
              </div>
            </div>
          </div>
        </div>
        <DeveloperTools />
      </div>
      <div aria-hidden="true" className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25),0px_4px_6px_3px_rgba(0,0,0,0.25)]" />
    </div>
  );
}