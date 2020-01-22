import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GalleryItems from "./items-gallery";

export default function() {
    const query = useStaticQuery(graphql`
        query galleryList {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/gallery/" } }
                limit: 6
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            description
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

    return (
        <section id="gallery" className="container">
            <GalleryItems data={query} />
        </section>
    );
}
