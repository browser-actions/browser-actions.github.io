import { graphql, useStaticQuery } from "gatsby";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Seo: React.FC<Props> = ({
  description,
  title: subTitle,
  children,
}) => {
  const { site, cover } = useStaticQuery(graphql`
query Site {
  site {
    siteMetadata {
      title
      description
      siteUrl
      social {
        twitter
      }
    }
  }
  cover: file(relativePath: { eq: "cover.png" }) {
    childImageSharp {
      gatsbyImageData
    }
  }
}`);

  const metaDescription = description || site.siteMetadata.description;
  const siteTitle = site.siteMetadata?.title;
  const title = subTitle
    ? `${subTitle} | ${siteTitle}`
    : `${siteTitle} | ${metaDescription}`;
  const coverUrl = `${site.siteMetadata.siteUrl}${cover.childImageSharp.gatsbyImageData.images.fallback.src}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={coverUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={coverUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {site.siteMetadata?.social?.twitter && (
        <meta
          name="twitter:creator"
          content={`@${site.siteMetadata.social.twitter}`}
        />
      )}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={coverUrl} />
      {children}
    </>
  );
};
