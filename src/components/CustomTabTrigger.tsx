import { Link, LinkProps } from "react-router-dom";
import { TabsTrigger } from "./ui/tabs";

export default function CustomTabTrigger({
  children,
  to,
  value,
  ...props
}: LinkProps & { value: string }) {
  // const resolved = useResolvedPath(to);
  // const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link to={to} {...props}>
      <TabsTrigger value={value} className="w-full">
        {children}
      </TabsTrigger>
    </Link>
  );
}
