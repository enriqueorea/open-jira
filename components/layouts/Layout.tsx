import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import { Navbar, SideBar } from "../ui";

interface IProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ title = "Open Jira App", children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <SideBar />
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
