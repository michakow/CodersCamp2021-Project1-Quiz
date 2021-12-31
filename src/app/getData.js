export const getCategories = async () => {
  try {
    const res = await fetch('https://opentdb.com/api_category.php');
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    sessionStorage.setItem(
      'categories',
      JSON.stringify(data.trivia_categories),
    );
    return data.trivia_categories;
  } catch (error) {
    console.error(error);
  }
};

export const getQuestions = async (categoryID) => {
  try {
    let path;
    if (categoryID === 999) {
      path = 'https://opentdb.com/api.php?amount=10';
    } else {
      path = `https://opentdb.com/api.php?amount=10&category=${categoryID}`;
    }
    const res = await fetch(path);

    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    // sessionStorage.setItem(
    //   'questions',
    //   JSON.stringify(data.results),
    // );
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

// export const getQuiz = (categoryID) => {
//   fetch(`https://opentdb.com/api_count.php?category=${categoryID}`)
//   .then(res => res.json())
//   .then(data => console.log(data))
// }
// jak zrobić return z tego ?
