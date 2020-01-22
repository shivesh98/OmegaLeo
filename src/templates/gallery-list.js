import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import GalleryItems from "../components/items-gallery";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

class GalleryList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="gallery" className="container">
                    <div className="section-title">
                        <SectionTitle title="EVENTS" />
                    </div>
                    <GalleryItems data={query} />
                    <Pagination
                        pageContext={this.props.pageContext}
                        type="gallery"
                    />
                </section>
            );
        } else {
            return <React.Fragment></React.Fragment>;
        }
    }
}

export default function({ data, pageContext }) {
    return (
        <Layout>
            <SEO lang="en" title="Gallery" />
            <GalleryList datas={data} pageContext={pageContext} />
        </Layout>
    );
}

export const query = graphql`
    query galleryListPage($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/gallery/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        date
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    srcSet
                                    ...GatsbyImageSharpFluid
                                }
                                id
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
