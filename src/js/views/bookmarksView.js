import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './view';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(item => previewView.render(item, false)).join('');
  }
}

export default new BookmarksView();
