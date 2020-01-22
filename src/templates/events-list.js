import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import EventsItems from "../components/items-events";
import SectionTitle from "../components/sectiontitle";
import Pagination from "../components/pagination";
import SEO from "../components/seo";

class EventsList extends React.Component {
    render() {
        const query = this.props.datas;
        if (query.allMarkdownRemark.edges.length > 0) {
            return (
                <section id="events" className="container">
                    <div className="section-title">
                        <SectionTitle title="EVENTS" />
                    </div>
                    <EventsItems data={query} />
                    <Pagination
                        pageContext={this.props.pageContext}
                        type="events"
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
            <SEO lang="en" title="Events" />
            <EventsList datas={data} pageContext={pageContext} />
        </Layout>
    );
}

export const query = graphql`
    query eventsListPage($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/events/" } }
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
