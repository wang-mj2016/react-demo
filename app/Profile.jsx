import React, { PropTypes, Component } from 'react';
import Hobby from './Hobby';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0,
      hobbies: ['like1', 'like2']
    };
    this.likedcallback = this.likedcallback.bind(this);
    this.addHobbyCallback = this.addHobbyCallback.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        liked: 1
      });
    }, 1000);
  }
  likedcallback() {
    let liked = this.state.liked;
    liked++;
    this.setState({
      liked
    });
  }
  addHobbyCallback() {
    const hobbyInput = this.refs.hobby;
    const val = hobbyInput.value;
    if (val) {
      let hobbies = this.state.hobbies;
      hobbies = [...hobbies, val];
      this.setState({
        hobbies
      }, () => {
        hobbyInput.value = '';
      });
    }
  }
  render() {
    return (
      <div className="profile-component">
        <h1>我的名字 {this.props.name}</h1>
        <h2>我的年龄 {this.props.age}</h2>
        <button onClick={this.likedcallback}>点我增加点赞次数</button>
        <div>点赞总数：{this.state.liked}</div>
        <ul>
          {
            this.state.hobbies.map((hobby, i) => <Hobby hobby={hobby} key={i} />)
          }
        </ul>
        <input type="text" ref="hobby" />
        <button onClick={this.addHobbyCallback}>添加爱好</button>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Profile;
