import icons from 'url:../../img/icons.svg';
import View from './view';

class BookmarksView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerAddBookmark() {
    this._parentElement.addEventListener('click', e => {
      console.log(e);
    });
  }
}

export default new BookmarksView();
