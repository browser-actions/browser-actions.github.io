import type { HeadFC, PageProps } from "gatsby";
import { Box, Heading, Page, PageContent, Paragraph } from "grommet";
import {
  Chrome as ChromeIcon,
  Edge as EdgeIcon,
  Firefox as FirefoxIcon,
} from "grommet-icons";
import type * as React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { ToolList, ToolListItem } from "../components/toolList";

type SetupActionName = "setup-chrome" | "setup-firefox" | "setup-edge";
type ExtensionActionName = "release-chrome-extension" | "release-firefox-addon";

const setupActions: SetupActionName[] = [
  "setup-chrome",
  "setup-firefox",
  "setup-edge",
];
const extensionActions: ExtensionActionName[] = [
  "release-chrome-extension",
  "release-firefox-addon",
];

const IndexPage: React.FC<PageProps> = () => {
  const logos = {
    "setup-chrome": <ChromeIcon color="plain" size="xlarge" />,
    "setup-firefox": <FirefoxIcon color="plain" size="xlarge" />,
    "setup-edge": <EdgeIcon color="plain" size="xlarge" />,
    "release-chrome-extension": <ChromeIcon color="plain" size="xlarge" />,
    "release-firefox-addon": <FirefoxIcon color="plain" size="xlarge" />,
  };

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
          <Paragraph textAlign="center" size="large" fill>
            GitHub Actions for setting up browsers in the workflow.
          </Paragraph>
          <ToolList>
            {setupActions.map((name) => (
              <ToolListItem
                key={name}
                title={name}
                linkTo={name}
                logo={logos[name]}
              />
            ))}
          </ToolList>

          <Heading level="2" textAlign="center" size="xlarge">
            Release extension
          </Heading>
          <Paragraph textAlign="center" size="large" fill>
            GitHub Actions for releasing Chrome extensions and Firefox add-ons
            in the workflow.
          </Paragraph>
          <ToolList>
            {extensionActions.map((name) => (
              <ToolListItem
                key={name}
                title={name}
                linkTo={name}
                logo={logos[name]}
              />
            ))}
          </ToolList>
        </PageContent>
      </Page>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
