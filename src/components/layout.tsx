import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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

const AppName = "Browser Actions";

const AppHeader = () => {
  const actionItems = ["setup-chrome", "setup-firefox", "setup-edge"];
  const extensionItems = ["release-chrome-extension", "release-firefox-addon"];
  const { icon } = useStaticQuery(graphql`
    query Icon {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 24, height: 24)
        }
      }
    }
  `);

  return (
    <Header
      background="white"
      fill="horizontal"
      pad={{ horizontal: "large", vertical: "none" }}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
      }}
      sticky="scrollup"
    >
      <Box direction="row" align="center" gap="medium">
        <Button as={Link} {...{ to: "/" }}>
          <GatsbyImage
            image={icon.childImageSharp.gatsbyImageData}
            alt="icon"
          />
          <Text margin={{ left: "xsmall" }}>{AppName}</Text>
        </Button>
        <Menu
          label="Open Source"
          items={[
            actionItems.map((action) => ({
              label: action,
              as: (props) => <Link to={`/${action}`} {...props} />,
            })),
            extensionItems.map((extension) => ({
              label: extension,
              as: (props) => <Link to={`/${extension}`} {...props} />,
            })),
          ]}
        />
      </Box>
      <Box align="end">
        <Anchor
          href="https://github.com/browser-actions"
          target="_blank"
          rel="noopener noreferrer"
          label="GitHub"
          icon={<GithubIcon />}
        />
      </Box>
    </Header>
  );
};

const AppFooter = () => {
  return (
    <Footer background="dark-1" pad="medium" justify="between">
      <Text>
        Copyright by{" "}
        <Anchor
          href="https://github.com/ueokande"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ueokande
        </Anchor>{" "}
        and all contributors
      </Text>
      <Anchor
        href="https://github.com/browser-actions"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Anchor>
    </Footer>
  );
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Grommet theme={grommet} full>
      <Box>
        <AppHeader />
        <Main flex>{children}</Main>
        <AppFooter />
      </Box>
    </Grommet>
  );
};
