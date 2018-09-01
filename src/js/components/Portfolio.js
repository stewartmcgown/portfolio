class PortfolioContainer extends React.Component {
    render() {

    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolio-items">
                {this.props.items.map(function (item, index) {
                    return <a key={index} href={item.link}>
                        <div className="portfolio">
                            <img src={"img/portfolio/" + item.image + ".jpg"} className="img-responsive" />
                            <div className="text">
                                <div className="text-inner">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                })}
            </div>


        );
    }
}

