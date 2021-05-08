import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Seo title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="page-title">Nice to have you here!</h2>
          <p>
            My name is Huy. I'm a software engineer. My current stack includes
            Python, SQL, Node.js/React.js.
          </p>
          <p>
            That said, I do full stack development with more focus on the
            backend side while managing reasonable duty on frontend (like this
            blog).
          </p>
          <p>
            This blog is not aimed at teaching you software engineering or
            computer science, though you might find it helpful in that respect.
          </p>
          <p>
            This blog is for everyone who would like to know more about tech,
            who heard buzz words over somewhere and wanted to know what they
            meant.
          </p>
          <p>I hope you enjoy reading as much as I enjoy writing!</p>
          <p>Cheers, Huy.</p>
          <figure className="kg-card kg-image-card kg-width-full">
            <GatsbyImage
              image={data.benchAccounting.childImageSharp.gatsbyImageData}
              className="kg-image"
            />
            <figcaption>An image to help relax your eyes.</figcaption>
          </figure>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const About = (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);

export default About;
