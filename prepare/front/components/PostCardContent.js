import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({postData}) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((item, i) => {
                if (item.match(/(#[^\s#]+)/g)) {
                    return <Link href={`/hashtag/${item.slice(1)}`} key={item+i}>
                                <a>{item}</a>
                            </Link>
                }
                return item;
            })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
}

export default PostCardContent;