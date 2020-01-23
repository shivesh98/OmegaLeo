import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import "../style/wall.less";
import { Zoom } from "react-reveal";
import SectionTitle from "../components/sectiontitle";
import lions from "../../static/images/lions.png"

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

    setWindowHeight() {
        this.setState({
            winHeight: window.innerHeight
        });
    }

    render() {
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="en"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div
                    className="wall"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="intro container">

                        <div className="main-title text-primary" style={{ fontStyle: 'bold', color: '#f3ab29' }}>
                            <Zoom left cascade>
                                <h1 style={{ display: 'inline-block', font: 'bold', fontSize: '75px' }}>OMEGA </h1>

                            </Zoom>
                            <Zoom cascade>
                                <h1 style={{ display: 'inline-block', font: 'bold', fontSize: '75px' }}>LEO </h1>
                            </Zoom>
                            <Zoom right cascade>

                                <h1 style={{ display: 'inline-block', font: 'bold', fontSize: '75px' }}>CLUB</h1>

                            </Zoom>

                            <Zoom cascade>
                                <h5 style={{ padding: '20px' }}>
                                    Waknaghat
                                </h5>
                            </Zoom>
                        </div>

                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.introTag}
                        </p>
                        <p className="caption text-tertiary">
                            {this.props.data.site.siteMetadata.description}
                        </p>
                        <a href="/gallery" className="btn">
                            OUR WORKS
                        </a>
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>

                <section className="container" style={{ backgroundColor: '#262933', borderRadius: '20px', textAlign: 'center' }}>
                    <div style={{ color: '#b8b7bf' }}>
                        <h5 style={{ padding: '50px' }}>Upcoming Event</h5>
                        <h3 style={{ padding: '20px' }}>Donation Drive</h3>
                        <p>Date: January 26, 2020</p>
                    </div>
                </section>

                <section className="container" style={{ paddingBottom: '100px' }}>
                    <div>
                        <div className="section-title">
                            <SectionTitle title="MISSION" />
                        </div>
                        <p style={{ textAlign: 'center' }}>
                            Our mission is to serve the humanity with the help of
                            empowered young volunteers who endorse peace harmony
                            and devote to make the globe a better place to dwell
                            for existing and the future generations to live.
                        </p>
                    </div>
                </section>

                <section className="container" style={{ backgroundColor: '#262933', borderRadius: '20px' }}>
                    <div style={{ padding: '20px', color: '#b8b7bf' }}>
                        <h1><b>“</b></h1>
                        <p style={{ textAlign: 'center', fontSize: '28px' }}>
                            <i>Only a life lived for others is a life worthwhile.</i>
                        </p>
                    </div>
                </section>

                <section className="container">
                    <div className="section-title">
                        <SectionTitle title="VISION" />
                    </div>
                    <p style={{ textAlign: 'center' }}>
                        <i>“To become the global leader in community and
                        humanitarian service.” &nbsp;</i> With this vision, we strive
                        to provide the youth with an opportunity for development
                        and contribution, individually and collectively, as
                        responsible members of the local, national and international
                        community. Our vision is to create a better everyday life
                        for many people. Bring inspiration and innovation to
                        the young people out there and make them practice
                        leadership, organisation and social skills.
                    </p>
                </section>

                <section className="container" style={{ backgroundColor: '#262933', borderRadius: '20px' }}>
                    <div style={{ padding: '0px', color: '#b8b7bf', textAlign: 'center' }}>
                        <img width="100px" style={{ padding: '10px' }} src={lions} alt="lions logo" />
                        <h5 style={{ fontSize: '25px' }}>To know about Lions Clubs International</h5>
                        <p style={{ textAlign: 'center', paddingTop: '15px' }}>
                            visit - <a href="https://www.lionsclubs.org" target="_blank" rel="noopener noreferrer">www.lionsclubs.org</a>
                        </p>
                    </div>
                </section>

                <section className="container">

                </section>
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                capitalizeTitleOnHome
                titleImage
                introTag
                description
                social {
                    name
                    url
                    icon
                }
            }
        }
    }
`;
