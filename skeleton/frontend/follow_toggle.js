class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    console.log('rendered');
    if (this.followState === 'unfollowed') {
      this.$el.text('Follow');
    } else {
      this.$el.text('Unfolllow!');
    }
  }

  handleClick() {
    preventDefault();

  }
}

module.exports = FollowToggle;
