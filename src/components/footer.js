const Footer = () => {
    return (
        <footer className="container">
            <div className="flex-wrapper">
            <div className="flex-item">
                <a href="https://zuri.team">
                <img src={require("../images/zuri.svg").default} alt="zuri" className="zuri-img" />
                </a>
            </div>
            <div className="flex-item">
                <a href="https://internship.zuri.team">HNG Internship 9 Frontend Task</a>
            </div>
            <div className="flex-item">
                <a href="https://ingressive.org">
                <img src={require("../images/i4g.svg").default} alt="ingressive for good" className="zuri-img" />
                </a>
            </div>
            </div>
        </footer>
    )
}

export default Footer;