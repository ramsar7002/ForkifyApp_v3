import * as model from './model.js';
import receipeView from './views/receipeView';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView';
import { MODAL_CLOSE_SEC } from './config.js';

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    receipeView.renderSpiner();

    resultsView.update(model.getSearchResultsPage());
    //Loading recipe
    await model.loadRecipe(id);

    receipeView.render(model.state.recipe);

    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    receipeView.renderError();
  }
};

const controlSearchResults = async e => {
  try {
    //get search qurey
    const query = searchView.getQuery();

    if (!query) return;
    resultsView.renderSpiner();

    //get results from apif
    await model.loadSearchResults(query);

    //render results
    resultsView.render(model.getSearchResultsPage());

    //render initial pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = goToPage => {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const controlServings = sign => {
  //update the recpie servings
  const num =
    sign === 'plus'
      ? model.state.recipe.servings + 1
      : model.state.recipe.servings - 1;
  if (num === 0) return;
  model.updateServings(num);
  //update the recipe view
  // receipeView.render(model.state.recipe);
  receipeView.update(model.state.recipe);
};

const controlAddBookmark = () => {
  if (model.state.recipe.bookmarked) {
    model.deleteBookMark(model.state.recipe);
  } else {
    model.addBookmark(model.state.recipe);
  }
  receipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpiner();
    await model.uploadRecipe(newRecipe);
    receipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
    bookmarksView.render(model.state.bookmarks);

    //change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  receipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  receipeView.addHandlerUpdateServings(controlServings);
  receipeView.addHandlerAddBookmark(controlAddBookmark);
  bookmarksView.addHandlerRender(controlBookmarks);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
