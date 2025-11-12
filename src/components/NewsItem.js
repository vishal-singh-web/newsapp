import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        const { title, desc, imageUrl, newsurl, author, date, source} = this.props;
        return (
            <div className="card">
                <img src={imageUrl == null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVfgOr0ZnlXn885xtPkDxmiZ_DJAO4VABGA&s' : imageUrl} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-dark">Read more...</a>
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%'}}>
                            {source}
                        </span>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">By {author} on {date}</small>
                </div>
            </div>
        )
    }
}
