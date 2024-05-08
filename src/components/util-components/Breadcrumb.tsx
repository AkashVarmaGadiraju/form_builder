import { LucideIcon, Slash } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface Item {
  title?: string;
  href: string;
  icon?: LucideIcon;
}

const CustomBreadcrumb = ({ items }: { items: Item[] }) => {
  return (
    <p className="text-[12px] font-normal flex items-center">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.href}>
            {item.icon && <item.icon className="w-5 h-5" />}
            <span
              className={`${
                index === items.length - 1 ? "text-green-600" : ""
              } underline`}
            >
              {item.title && item.title}
            </span>
          </Link>
          {index < items.length - 1 && (
            <Slash className="w-4 h-3 -rotate-[15deg]" />
          )}
        </React.Fragment>
      ))}
    </p>
  );
};

export default CustomBreadcrumb;
