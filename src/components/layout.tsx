import { Link } from "gatsby";
import { Grommet } from "grommet";
import type * as React from "react";
import "./layout.css";
import {
  Anchor,
  Box,
  Button,
  Footer,
  Header,
  Main,
  Menu,
  Text,
  grommet,
} from "grommet";
import { Github as GithubIcon } from "grommet-icons";

interface Props {
  children: React.ReactNode;
}

const AppName = "browser-actions";

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Grommet theme={grommet} full>
      <Box>
        <Header
          background="white"
          fill="horizontal"
          pad={{ horizontal: "small", vertical: "none" }}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
          }}
          sticky="scrollup"
        >
          <Box direction="row" align="center">
            <Button margin="small" as={Link} {...{ to: "/" }}>
              {AppName}
            </Button>
            <Menu
              label="setup actions"
              items={[
                [
                  {
                    label: "setup-chrome",
                    as: (props) => <Link to="/setup-chrome" {...props} />,
                  },
                  {
                    label: "setup-firefox",
                    as: (props) => <Link to="/setup-firefox" {...props} />,
                  },
                  {
                    label: "setup-edge",
                    as: (props) => <Link to="/setup-edge" {...props} />,
                  },
                ],
                [
                  {
                    label: "release-chrome-extension",
                    as: (props) => (
                      <Link to="/release-chrome-extension" {...props} />
                    ),
                  },
                  {
                    label: "release-firefox-extension",
                    as: (props) => (
                      <Link to="/release-firefox-extension" {...props} />
                    ),
                  },
                ],
              ]}
            />
          </Box>
          <Box align="end">
            <Anchor
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              as="a"
              label="GitHub"
              icon={<GithubIcon />}
            />
          </Box>
        </Header>
        <Main flex>{children}</Main>
        <Footer background="dark-1" pad="medium" justify="between">
          <Text>© Copyright by {AppName} developers</Text>
          <Anchor href="#">GitHub</Anchor>
        </Footer>
      </Box>
    </Grommet>
  );
};
