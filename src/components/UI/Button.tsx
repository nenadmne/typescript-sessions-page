import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

const buttonClass =
  "text-inherit leading-4 text-btn-txt bg-btn-bg rounded py-2 px-6 cursor-pointer decoration-none hover:bg-btn-act active:bg-btn-act";

const buttonClassTextOnly =
  "bg-transparent text-txt-only hover:text-txt-only-act active:text-txt-only-act hover:bg-transparent active:bg-transparent";

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`${buttonClass} ${textOnly ? `${buttonClassTextOnly}` : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`${buttonClass} ${textOnly ? `${buttonClassTextOnly}` : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
