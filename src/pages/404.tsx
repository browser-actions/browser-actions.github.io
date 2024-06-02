import { type HeadFC, Link, type PageProps } from "gatsby";
import { Heading, Page, PageContent, Paragraph } from "grommet";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Page kind="narrow" margin={{ vertical: "xlarge" }}>
        <PageContent>
          <Heading level="1" margin="none">
            Page not found
          </Heading>
          <Paragraph size="large" fill>
            Sorry 😔, we couldn’t find what you were looking for.{" "}
            <Link to="/">Go home</Link>.
          </Paragraph>
        </PageContent>
      </Page>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="Not Found" />;
