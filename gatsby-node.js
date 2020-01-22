const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `basepages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        {
            events: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/events/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            gallery: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/gallery/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            basepages: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/basepages/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            template
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            limitPost: site {
                siteMetadata {
                    eventsItemsPerPage
                    galleryItemsPerPage
                }
            }
        }
    `).then(result => {
        const eventsPosts = result.data.events.edges;

        const eventsPostsPerPage =
            result.data.limitPost.siteMetadata.eventsItemsPerPage;
        const numEventsPages = Math.ceil(eventsPosts.length / eventsPostsPerPage);

        Array.from({ length: numEventsPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/events` : `/events/${i + 1}`,
                component: path.resolve("./src/templates/events-list.js"),
                context: {
                    limit: eventsPostsPerPage,
                    skip: i * eventsPostsPerPage,
                    numPages: numEventsPages,
                    currentPage: i + 1
                }
            });
        });

        const GalleryItems = result.data.gallery.edges;
        const GalleryItemsPerPage =
            result.data.limitPost.siteMetadata.galleryItemsPerPage;
        const numGalleryItems = Math.ceil(
            GalleryItems.length / GalleryItemsPerPage
        );

        Array.from({ length: numGalleryItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/gallery` : `/gallery/${i + 1}`,
                component: path.resolve("./src/templates/gallery-list.js"),
                context: {
                    limit: eventsPostsPerPage,
                    skip: i * eventsPostsPerPage,
                    numPages: numGalleryItems,
                    currentPage: i + 1
                }
            });
        });

        result.data.events.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "events"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.gallery.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "gallery"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });

        result.data.basepages.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === undefined
                    ? "basepage"
                    : node.frontmatter.template;
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".js"),
                context: {
                    slug: node.fields.slug
                }
            });
        });
    });
};
