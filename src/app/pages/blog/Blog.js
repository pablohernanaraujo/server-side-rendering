import React from 'react';
import { connect } from 'react-redux';

import Posts from './components/Posts';
import { fetchPosts } from './actions';
import { isFirstRender } from '../../../shared/utils/data';

class Blog extends React.Component {
  static initialAction(fetchFrom) {
    return fetchPosts(fetchFrom);
  }

  componentDidMount() {
    if (isFirstRender(this.props.posts)) {
      this.props.dispatch(Blog.initialAction('client'));
    }
  }

  render () {
    const { posts } = this.props;

    return (
      <div>
        <h2>
          BLOG PAGE with redux
        </h2>

        <Posts posts={posts} />
      </div>
    );
  }
}

export default connect(({ blog }) => ({
  posts: blog.posts
}), null)(Blog);
