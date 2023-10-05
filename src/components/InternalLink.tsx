import { Link, LinkProps } from "@mui/joy";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

type InternalLinkProps = Omit<LinkProps, "href"> & RouterLinkProps;

function InternalLink(props: InternalLinkProps) {
  return <Link component={RouterLink} {...props} />;
}

export default InternalLink;
