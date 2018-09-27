const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === 'following' || this.followState === 'unfollowing') {
      this.$el.attr("disabled", true);
    } else {
      this.$el.attr("disabled", false);
    }

    if (this.followState === 'unfollowed') {
      this.$el.text('Follow');
    } else {
      this.$el.text('Unfolllow!');
    }
  }

  handleClick(event) {
    console.log('event', event);
    let that = this;
    event.preventDefault();

    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(function() {
        that.followState = 'unfollowed';
        that.render();
      });
    } else if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      APIUtil.followUser(this.userId).then(function() {
        that.followState = 'followed';
        that.render();
      });

    }
  }
}

module.exports = FollowToggle;
