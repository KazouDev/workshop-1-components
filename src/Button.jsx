import { cva } from "cva"

export const buttonVariants = cva("inline-flex items-center justify-center cursor rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus-visible:outline-none focus-visible:ring", {
  variants: {
    variant: {
      ghost: "bg-transparent text-grey-50 hover:bg-gray-200",
      secondary: "bg-gray-200 text-black shadow hover:bg-gray-300"
    }
  }
});

export const Button = ( { variant, children} ) => {
  return <button className={ buttonVariants({variant})}>{children}</button>
}