import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import EventsItems from "./items-events";

export default function(props) {
    const query = useStaticQuery(graphql`
        query latestEventsList {
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
            <section id="latest-eventsposts" className="container">
                <div className="section-title">
                    <h2>Latest Eventsposts</h2>
                </div>
                <EventsItems data={query} remove={props.id} />
            </section>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
}
