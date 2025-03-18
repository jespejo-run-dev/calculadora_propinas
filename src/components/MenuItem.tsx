import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem({item} :MenuItemProps) {
  return (
    <button
    className="border-1 border-black/2 dark:border-white/30 hover:bg-stone-800 w-full p-3 flex justify-between cursor-pointer"
    >
      <p>{item.name}</p>
      <p className="font-black text-stone-500">${item.price}</p>
    </button>
  )
}
