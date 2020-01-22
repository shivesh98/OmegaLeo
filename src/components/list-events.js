import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import EventsItems from "./items-events";
import SectionTitle from "./sectiontitle";

export default function() {
    const query = useStaticQuery(graphql`
        query eventsList {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/events/" } }
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
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
    `);

    if (query.allMarkdownRemark.edges.length > 0) {
        return (
            <section id="events" className="container">
                <div className="section-title">
                    <SectionTitle title="EVENTS" />
                </div>
                <EventsItems data={query} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
