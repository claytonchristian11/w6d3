const APIUtil = {

  followUser: id => (
     $.ajax({
      type: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json'
    })
  ),

  unfollowUser: id => {
    return $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json'
    });
  },

  searchUsers: id => {
    return $.ajax({
      type: 'POST',
      url: '/users/search',
      dataType: 'json'
    });
  }

};

module.exports = APIUtil;
