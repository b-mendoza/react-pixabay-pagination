import React from 'react';

const Image = ({ largeImageURL, likes, tags, views }) => {
    return (
        <div className="card">
            <img
                src={largeImageURL}
                alt={tags}
                className="card-img-top"
                loading="lazy"
            />

            <div className="card-body">
                <p className="card-text">
                    <strong>{likes}</strong> Likes
                </p>
                <p className="card-text">
                    <strong>{views}</strong> Views
                </p>
            </div>

            <div className="card-footer">
                <a
                    className="btn btn-outline-primary btn-block "
                    href={largeImageURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See full image
                </a>
            </div>
        </div>
    );
};

export default Image;
