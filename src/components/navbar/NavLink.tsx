import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// we can use interface or type
type Props = {
  href: string;
  label: string;
};
// interface Props {
//   href: string;
//   label: string;
// }

export default function NavLink({ href, label }: Props) {
  // to specify path
  const pathname = usePathname();
  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      {label}
    </NavbarItem>
  );
}
