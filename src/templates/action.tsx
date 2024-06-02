import type { HeadFC, PageProps } from "gatsby";
import {
  Anchor,
  Box,
  Heading,
  NameValueList,
  NameValuePair,
  Page,
  PageContent,
  Paragraph,
} from "grommet";
import { Actions as ActionsIcon, Github as GithubIcon } from "grommet-icons";
import { Layout } from "../components/layout";
import { ExternalLink } from "../components/link";
import { Seo } from "../components/seo";
import type { ActionType } from "../types";

type PageContext = {
  name: string;
  action: ActionType;
};

interface Props {
  pageContext: PageContext;
}

const ActionPage: React.FC<PageProps & Props> = ({ pageContext }) => {
  const { name, action } = pageContext;
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
