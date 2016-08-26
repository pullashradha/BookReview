import Ember from 'ember';

export default Ember.Service.extend ({
  favoriteBooksList: [],
  addBook(favoritedBook) {
    this.get("favoriteBooksList").pushObject(favoritedBook);
  }
});
