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
import type { ActionType } from "../types";

interface Props {
  pageContext: {
    name: string;
    action: ActionType;
  };
}

const ActionPage: React.FC<PageProps & Props> = ({ pageContext }) => {
  const { name, action } = pageContext;
  return (
    <Layout>
      <Page kind="narrow" margin={{ vertical: "xlarge" }}>
        <PageContent>
          <Box direction="row" gap="medium" pad={{ bottom: "medium" }}>
            <Anchor
              href={`https://github.com/marketplace/actions/${name}`}
              target="_blank"
              rel="noopener noreferrer"
              as="a"
              label="View action on Marketplace"
              icon={<ActionsIcon />}
              size="small"
            />
            <Anchor
              href={`https://github.com/browser-actions/${name}`}
              target="_blank"
              rel="noopener noreferrer"
              as="a"
              label="View action on GitHub"
              icon={<GithubIcon />}
              size="small"
            />
          </Box>

          <Heading level="1" margin="none">
            {name}
          </Heading>
          <Paragraph size="large">{action.description}</Paragraph>

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

export const Head: HeadFC = () => <title>Home Page</title>;

export default ActionPage;
