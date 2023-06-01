"use client";

import Link from "next/link";

interface NavigationItemType {
  id: number;
  text: string;
  link: string;
}

const NavigationItems: NavigationItemType[] = [
  {
    id: 0,
    text: "About",
    link: "/about",
  },
  {
    id: 1,
    text: "Contact",
    link: "/contact",
  },
  {
    id: 2,
    text: "Item",
    link: "/item",
  },
];

// styles
enum STYLES {
  NAV = "sticky top-0 backdrop-blur-xl",
  CONTAINER = "container flex items-center justify-between gap-5 mx-auto my-1",
  BRAND = "text-xl lg:text-2xl font-bold",
  ITEMS = "flex items-center justify-center",
  ITEM = "py-2 px-4 font-medium hover:bg-gray-100 rounded-lg cursor-pointer transition ease-in-out duration-300",
  ACTIONS = "flex items-center justify-end gap-3",
}

const Navigation = () => {
  return (
    <nav className={STYLES.NAV}>
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.BRAND}>
          <Link href="/">Brand</Link>
        </div>
        <ul className={STYLES.ITEMS}>
          {NavigationItems.map((item: NavigationItemType) => {
            const { id, text, link } = item;
            return (
              <li key={id} className={STYLES.ITEM}>
                <Link href={link}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <div className={STYLES.ACTIONS}>
          <button className="btn-primary">Account</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
