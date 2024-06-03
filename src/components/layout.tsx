import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Grommet } from "grommet";
import * as React from "react";
import "./layout.css";
import {
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
import { ExternalLink } from "./link";

interface Props {
  children: React.ReactNode;
}

const AppHeader = () => {
  const actionItems = ["setup-chrome", "setup-firefox", "setup-edge"];
  const extensionItems = ["release-chrome-extension", "release-firefox-addon"];
  const { icon, site } = useStaticQuery(graphql`
    query Icon {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 24, height: 24)
        }
      }
      site {
        siteMetadata {
          title
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
          <Text margin={{ left: "xsmall" }}>{site.siteMetadata.title}</Text>
        </Button>
        <Menu
          label="Open Source"
          items={[
            actionItems.map((action) => ({
              label: action,
              as: React.forwardRef((props, ref) => (
                <Link to={`/${action}`} {...props} ref={ref} />
              )),
            })),
            extensionItems.map((extension) => ({
              label: extension,
              as: React.forwardRef((props, ref) => (
                <Link to={`/${extension}`} {...props} ref={ref} />
              )),
            })),
          ]}
        />
      </Box>
      <Box align="end">
        <ExternalLink
          href="https://github.com/browser-actions"
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
        <ExternalLink href="https://github.com/ueokande">
          @ueokande
        </ExternalLink>{" "}
        and all contributors
      </Text>
      <ExternalLink href="https://github.com/browser-actions">
        GitHub
      </ExternalLink>
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
