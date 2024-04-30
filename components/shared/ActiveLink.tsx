'use client';

import { usePathname } from 'next/navigation';
import Link from './Link';
import React, { useState, useEffect, Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const routePathname = usePathname();

  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    // Check if the router fields are updated client-side
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = new URL(props.as || props.href, location.href)
      .pathname;

    // Using URL().pathname to get rid of query and hash
    const activePathname = new URL(routePathname, location.href).pathname;

    const newClassName =
      linkPathname === activePathname
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName;

    if (newClassName !== className) {
      setClassName(newClassName);
    }
  }, [
    routePathname,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ]);

  return (
    <Link {...props} href={props.href}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
