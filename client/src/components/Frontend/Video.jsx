import React from 'react'

function Video({handleVideo}) {
    return (
        <>

            <div className="vbox-overlay" style={{ "opacity": "1", "--sk-color": "#d2d2d2", "--vbox-title-width": "100%", "--vbox-title-radius": "0", "--vbox-share-width": "auto", "--vbox-share-radius": "5em", "--vbox-tools-color": "#d2d2d2", "--vbox-title-background": "#1C1C1C", "--vbox-share-background": "#1C1C1C", "--vbox-padding": "0" }}>
                <div className="vbox-backdrop" style={{ "background-color": "rgba(23, 23, 23, 0.95)" }}>
                </div>
                <div className="vbox-preloader vbox-hidden">
                    <div className="vbox-preloader-inner">
                        <div className="sk-center sk-bounce">
                            <div className="sk-bounce-dot">
                            </div>
                            <div className="sk-bounce-dot">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vbox-container">
                    <div className="vbox-content" style={{ "opacity": "1" }}>
                        <div className="venoratio venoratio-16x9 vbox-child" style={{ "background-color": "rgb(255, 255, 255)", "max-width": "100%", "-webkit-transform": "scale(1)", "-ms-transform": "scale(1)", "transform": "scale(1)", "-webkit-transition": "transform 200ms ease 0s", "transition": "transform 200ms ease 0s" }}>
                            <iframe webkitallowfullscreen mozallowfullscreen allowFullScreen allow="autoplay" frameBorder={0} src="https://www.youtube.com/embed/kRCH8kD1GD0?rel=0&autoplay=1">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="vbox-title vbox-top vbox-hidden">
                </div>
                <div className="vbox-left-corner">
                    <div className="vbox-num vbox-hidden">
                        0/0
                    </div>
                </div>
                <div className="vbox-close" onClick={handleVideo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="vbox-close-icon" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z">
                        </path>
                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z">
                        </path>
                    </svg>
                </div>
                <a className="vbox-next vbox-hidden">
                    <span>
                        Next
                    </span>
                </a>
                <a className="vbox-prev vbox-hidden">
                    <span>
                        Prev
                    </span>
                </a>
                <div className="vbox-share vbox-bottom">
                </div>
            </div>

        </>
    )
}

export default Video