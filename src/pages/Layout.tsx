import { Box, Link } from "@mui/joy";
import Header from "../components/Header";
import Name from "../Name";
import { Outlet } from "react-router-dom";
import Main from "../components/Main";

function Layout() {
  return (
    <>
      <Header>
        <Box sx={[{ display: "flex", flexDirection: "row", gap: 1 }]}>
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
        </Box>
        <Box>
          <Name />
        </Box>
        <Box sx={[{ display: "flex", flexDirection: "row", gap: 1 }]}>
          <Link href="https://www.linkedin.com/in/sammleonard/">linkedin</Link>
          <Link href="https://github.com/samleonard">github</Link>
        </Box>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
