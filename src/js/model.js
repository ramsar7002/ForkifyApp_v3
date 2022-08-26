import { async } from 'regenerator-runtime';
import { API_URL, KEY, RESULTS_PER_PAGE } from './config';
import { getJSON, sendJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  },

  bookmarks: [],
};

const createRecipeObject = recipe => {
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    bookmarked: state.bookmarks.some(rec => rec.id === recipe.id),
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async id => {
  try {
    // console.log(this._bookmarks);
    const data = await getJSON(`${API_URL}/${id}?key=${KEY}`);

    let { recipe } = data.data;

    state.recipe = createRecipeObject(recipe);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async query => {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map(item => {
      return {
        id: item.id,
        title: item.title,
        publisher: item.publisher,
        image: item.image_url,
        ...(item.key && { key: item.key }),
      };
    });

    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = newServings => {
  state.recipe.ingredients?.forEach(item => {
    item.quantity = (item.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const deleteBookMark = function () {
  state.bookmarks = state.bookmarks.filter(item => item.id !== state.recipe.id);
  state.recipe.bookmarked = false;
  persistBookmarks();
};

export const addBookmark = function (bookMark = state.recipe) {
  state.bookmarks.push(bookMark);
  bookMark.bookmarked = true;
  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) {
    state.bookmarks = JSON.parse(storage);
  }
};

init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ings = Object.entries(newRecipe)
      .filter(item => item[0].startsWith('ingredient') && item[1] != '')
      .map(item => {
        // const ingArr = item[1].replaceAll(' ', '').split(',');
        const ingArr = item[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3) {
          throw new Error(
            'Wrong ingredient format! Please use the correct format.'
          );
        }
        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients: ings,
    };

    const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);
    addBookmark(data.data.recipe);
    state.recipe = createRecipeObject(data.data.recipe);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
