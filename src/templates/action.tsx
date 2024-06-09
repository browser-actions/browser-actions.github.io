import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Heading,
  NameValueList,
  NameValuePair,
  Page,
  PageContent,
  Paragraph,
} from "grommet";
import { Actions as ActionsIcon, Github as GithubIcon } from "grommet-icons";
import React from "react";
import { CodeBlock } from "../components/code";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/link";
import { Seo } from "../components/seo";
import type { ActionType, VersionType } from "../types";

type PageContext = {
  name: string;
  action: ActionType;
  version: VersionType;
};

interface Props {
  pageContext: PageContext;
}

const MAX_LINE_LENGTH = 54;

const generateUsage = (
  name: string,
  action: ActionType,
  version: VersionType,
): string => {
  let line = `- uses: browser-actions/${name}@${version.major}\n`;
  if (action.inputs) {
    line += "  with:\n";
    for (const [key, input] of Object.entries(action.inputs)) {
      const segmenter = new Intl.Segmenter("en", { granularity: "word" });
      let commentLine = "";
      for (const { segment } of segmenter.segment(input.description)) {
        commentLine += `${segment}`;
        if (commentLine.length > MAX_LINE_LENGTH) {
          line += `    # ${commentLine.trim()}\n`;
          commentLine = "";
        }
      }
      if (commentLine !== "") {
        line += `    # ${commentLine.trim()}\n`;
      }

      const value = input.default ?? `<your ${key.replace(/[-_]/g, " ")}>`;
      line += `    ${key}: "${value}"\n`;
    }
  }

  return line.trim();
};

const ActionPage: React.FC<PageProps & Props> = ({ pageContext }) => {
  const { name, action, version } = pageContext;
  const usage: string = React.useMemo(
    () => generateUsage(name, action, version),
    [name, action, version],
  );

  return (
    <Layout>
      <Page kind="narrow" margin={{ vertical: "xlarge" }}>
        <PageContent>
          <Box direction="row" gap="medium" pad={{ bottom: "medium" }}>
            <ExternalLink
              href={`https://github.com/marketplace/actions/${name}`}
              label="View action on Marketplace"
              icon={<ActionsIcon />}
              size="small"
            />
            <ExternalLink
              href={`https://github.com/browser-actions/${name}`}
              label="View action on GitHub"
              icon={<GithubIcon />}
              size="small"
            />
          </Box>

          <Heading level="1" margin="none">
            {name}
          </Heading>
          <Paragraph size="large" fill>
            {action.description}
          </Paragraph>

          <Heading level="2">Usage</Heading>
          <CodeBlock>{usage}</CodeBlock>

          <Heading level="2">Inputs</Heading>
          {action.inputs ? (
            <NameValueList>
              {Object.entries(action.inputs).map(([key, { description }]) => (
                <NameValuePair key={key} name={key}>
                  {description}
                </NameValuePair>
              ))}
            </NameValueList>
          ) : (
            <Paragraph>No inputs</Paragraph>
          )}

          <Heading level="2">Outputs</Heading>
          {action.outputs ? (
            <NameValueList>
              {Object.entries(action.outputs).map(([key, { description }]) => (
                <NameValuePair key={key} name={key}>
                  {description}
                </NameValuePair>
              ))}
            </NameValueList>
          ) : (
            <Paragraph>No outputs</Paragraph>
          )}
        </PageContent>
      </Page>
    </Layout>
  );
};

export const Head: HeadFC<unknown, PageContext> = ({ pageContext }) => {
  const { name } = pageContext;
  return <Seo title={name} />;
};

export default ActionPage;
