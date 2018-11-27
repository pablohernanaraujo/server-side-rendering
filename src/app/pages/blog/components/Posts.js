import React from 'react';
import timeAgo from 'node-time-ago';

import { isFirstRender } from '../../../../shared/utils/data';

class Posts extends React.Component {
  render () {
    const { posts } = this.props;

    if (isFirstRender(posts)) {
      return null;
    }

    return (
      <div>
        {posts && posts.map( post =>
          <div key={post.id}>
            <p>{posts.id} - {post.title} by {post.author}</p>
            <p>{timeAgo(post.date)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
