import { type HeadFC, Link, type PageProps, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Heading, Page, PageContent, Paragraph } from "grommet";
import type * as React from "react";
import { Layout } from "../components/layout";
import { ToolList, ToolListItem } from "../components/toolList";

const setupActions = [
  {
    title: "setup-chrome",
    link: "setup-chrome",
  },
  {
    title: "setup-firefox",
    link: "setup-firefox",
  },
  {
    title: "setup-edge",
    link: "setup-edge",
  },
];

const extensionActions = [
  {
    title: "release-chrome-extension",
    link: "release-chrome-extension",
  },
  {
    title: "release-firefox-extension",
    link: "release-firefox-extension",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  const logo = (
    <StaticImage
      src="https://picsum.photos/128"
      alt="Lolem ipsum"
      width={128}
      height={128}
      objectFit="none"
    />
  );

  return (
    <Layout>
      <Page kind="narrow">
        <Box
          pad={{ vertical: "xlarge", horizontal: "large" }}
          background="neutral-2"
          fill="horizontal"
        >
          <Heading level="1" margin="none" fill>
            GitHub Actions for browsers
          </Heading>
          <Paragraph fill>
            Browser development tools for GitHub Actions workflows.
          </Paragraph>
        </Box>

        <PageContent>
          <Heading level="2" textAlign="center" size="xlarge">
            Setup browser
          </Heading>
          <Paragraph fill>
            GitHub Actions for setting up browsers in the workflow.
          </Paragraph>
          <ToolList>
            {setupActions.map((action) => (
              <ToolListItem
                key={action.title}
                title={action.title}
                linkTo={action.link}
                logo={logo}
              />
            ))}
          </ToolList>

          <Heading level="2" textAlign="center" size="xlarge">
            Release extension
          </Heading>
          <Paragraph fill>
            GitHub Actions for releasing Chrome extensions and Firefox add-ons
            in the workflow.
          </Paragraph>
          <ToolList>
            {extensionActions.map((action) => (
              <ToolListItem
                key={action.title}
                title={action.title}
                linkTo={action.link}
                logo={logo}
              />
            ))}
          </ToolList>
        </PageContent>
      </Page>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
