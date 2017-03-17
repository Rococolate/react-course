import React , { Component , PropTypes } from 'react';

class Profile extends Component {

  render(){
    let { name, id, url } = this.props;
    console.log(this.props);
    return (

      <div>
        <h1>name:{name}</h1>
        <h2>id:{id}</h2>
        <img src={url} alt=""/>
        <div>Profile</div>
      </div>
      
    )
  }
}

Profile.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
}

Profile.defaultProps = {
  name: 'wgx',
  id: '0',
  url: ' ',
}

export default Profile;