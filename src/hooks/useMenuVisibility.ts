"use client"

import { useAuth } from "@/context/AuthContext"
import { checkIsAdmin } from "@/lib/userService";
import { useMemo } from "react"

export type MenuItem = {
  idml: string;
  defaultText: string;
  href?: string;
  visible?: boolean; 
  children?: MenuItemWithFlags[];
};

export type MenuItemWithFlags = MenuItem & {
  children?: MenuItemWithFlags[];
  forcedVisible?: boolean;
};

export function useMenuVisibility(menu: MenuItemWithFlags[]) {
  const { user } = useAuth();
  const isAdmin = checkIsAdmin(user);

  return useMemo(() => {
    const mapForAdmin = (items: MenuItemWithFlags[]): MenuItemWithFlags[] =>
        
      items.map((item) => ({
        ...item,
        forcedVisible: item.forcedVisible === true ? true : undefined,
        children: item.children ? mapForAdmin(item.children) : undefined,
      }));

    const filterForUser = (items: MenuItemWithFlags[]): MenuItemWithFlags[] =>
      items
        .filter((item) => item.visible === true) // solo i TRUE
        .map((item) => ({
          ...item,
          children: item.children ? filterForUser(item.children) : undefined,
    }));

    const items = isAdmin ? mapForAdmin(menu) : filterForUser(menu);

    return items;
  }, [menu, isAdmin]);
}