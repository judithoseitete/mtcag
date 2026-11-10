interface NavItem {
  id: string;
  label: string;
}

interface LeadershipNavProps {
  items: NavItem[];
  activeSection: string;
}

export default function LeadershipNav({ items, activeSection }: LeadershipNavProps) {
  const getNavLinkClass = (isActive: boolean) => {
    const baseClass = "block py-2 transition-all duration-400 ease-in-out text-lg font-medium";
    
    if (isActive) {
      return `${baseClass} text-brand-neutral bg-brand-blue -ml-4 pl-8 pr-4`;
    }
    
    return `${baseClass} text-brand-blue/50 hover:text-brand-blue hover:bg-brand-neutral/50 rounded-lg px-4`;
  };

  return (
    <nav className="hidden md:block w-48 flex-shrink-0">
      <div className="sticky top-40 space-y-2 border-l-2 border-brand-blue pl-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={getNavLinkClass(activeSection === item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}