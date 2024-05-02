'use client';

import { usePathname } from 'next/navigation';
import Link from './Link';
import React, { useState, useEffect, Children } from 'react';

interface ActiveLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  activeClassName: string;
  activeChildren?: React.ReactNode;
  alwaysShowChildren?: boolean;
  children: React.ReactElement;
  as?: string | undefined;
  exact?: boolean;
}

const ActiveLink = ({
  children,
  activeClassName,
  activeChildren,
  alwaysShowChildren = false,
  exact = true,
  ...props
}: ActiveLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  const routePathname = usePathname();

  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    // Check if the router fields are updated client-side
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = new URL(props.as || props.href || '#', location.href)
      .pathname;

    // Using URL().pathname to get rid of query and hash
    const activePathname = new URL(routePathname, location.href).pathname;

    let active = false;

    if (exact) {
      active = linkPathname === activePathname;
    } else {
      active = activePathname.startsWith(linkPathname);
    }

    const newClassName = active
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

    if (newClassName !== className) {
      setClassName(newClassName);
    }

    setIsActive(active);
  }, [
    routePathname,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className,
    exact,
  ]);

  return (
    <>
      <Link {...props} href={props.href || '#'}>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>

      {isActive || alwaysShowChildren ? activeChildren : null}
    </>
  );
};

export default ActiveLink;
