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
          <Heading level="1" margin="none">
            {name}
          </Heading>
          <Paragraph>{action.description}</Paragraph>

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
