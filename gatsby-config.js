let siteMetadata = {
    title: `Omega Leo Club Waknaghat `,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `Where There's Need, There's a Leo`,
    description: ``,
    author: `@shivesh98`,
    eventsItemsPerPage: 10,
    galleryItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
     /*   {
            name: "MISSION",
            url: "/mission"
        }, */
       /* {
            name: "EVENTS",
            url: "/events"
        }, */
        {
            name: "EVENTS",
            url: "/gallery"
        },
        {
            name: "TEAM",
            url: "/team"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
    /*  {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        }, */
        {
            name: "Omega Leo Handbook",
            url: "https://drive.google.com/open?id=141tYVWJ3pnQWngYKD7w2hXYOE2lBEi5t"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/leowaknaghat"
        },
/*      {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "#"
        },*/
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/omegaleoclubwaknaghat/"
        }
 /*     ,{
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "#"
        } */
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: "Contact us at...",
        mail: "omegaleowakna@gmail.com",
        phone: "+91-8318799610",
        address: "Jaypee University of Information Technology \nWaknaghat, P.O. Waknaghat \nTeh. Kandaghat, Distt. Solan \nPIN-173234 Himachal Pradesh"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
