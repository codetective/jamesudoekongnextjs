import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ href,style,linkClass, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return (
    <Link href={href}>
      <a
      className={linkClass?linkClass:''}
        style={style?style:''}
      >
        {React.cloneElement(children, { className })}
      </a>
    </Link>
  );
}
