class UsersSearch {

  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.input;
    this.ul = this.$el.ul;
  }

  handleInput(event) {
    APIUtil.searchUsers(this.input.val)
  }
}
