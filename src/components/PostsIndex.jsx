import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => (
      <Link to={`/posts/${post.id}`} key={post.id}>
        <li className="list-group-item">
          {post.title}
        </li>
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

PostsIndex.propTypes = {
  fetchPosts: React.PropTypes.func.isRequired,
  posts: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
