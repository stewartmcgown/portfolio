class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>
                    <a href="#">{this.props.title}</a>
                </h1>

                <nav>
                    {this.props.links.map(function (link, index) {
                        return <a key={index} href={link.link}>{link.text}</a>;
                    })}
                </nav>
            </div>
        );
    }
}

