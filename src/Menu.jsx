import Link from "next/link";
import clsx from "clsx";

export const Menu = ({current = "", items = []}) => {
  return (
    <aside className="flex w-full gap-4 lg:max-w-[200px] lg:flex-col">
      <nav className="flex gap-4 lg:max-w-[200px] lg:flex-col">
        <MenuItem category={""} current={current}>All</MenuItem>
        { items.map((item) => {
          return <MenuItem key={item} category={item} current={current}>{item}</MenuItem>
        }) }
      </nav>
    </aside>
  )
}

const MenuItem = ( { category, current, children } ) => {
  return (
    <Link 
    className={clsx(
      "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
      {
        "font-bold": category === current,
      }
    )}
      href={{
        pathname: "/",
        query: { category: category }
      }}>
      {children}  
    </Link>
  )
};