import { Link } from "react-router";
import cn from "../../utils/cn";

export interface IAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    to: string;
    className?: string;
}

const Anchor = (props: IAnchorProps) => {
    const { children, to, className = "", ...restProps } = props;
    const baseClasses = "text-muted text-body-small sm:text-body-medium font-medium cursor-pointer";

    return (
        <Link className={cn(baseClasses, className)} to={to} {...restProps}>
            {children}
        </Link>
    );
};

export default Anchor;
