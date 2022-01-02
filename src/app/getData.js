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

export const getQuestions = async (categoryID, token) => {
  try {
    const questionsLevel = window.questionsLevel || 'easy';
    let path;
    if (categoryID === 999) {
      path = 'https://opentdb.com/api.php?amount=10';
    } else {
      path = `https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${questionsLevel}&token=${token}`;
    }
    const res = await fetch(path);

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();

    if(data.response_code !== 0) {
      const newToken = await getToken();
      return await getQuestions(categoryID, newToken);
    } 
    // sessionStorage.setItem(
    //   'questions',
    //   JSON.stringify(data.results),
    // );
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getQuestionTotalCount = async (categoryID) => {
  try {
    const res = await fetch(`https://opentdb.com/api_count.php?category=${categoryID}`);

    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data.category_question_count;
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

export const getToken = async () => {
  try {
    const res = await fetch('https://opentdb.com/api_token.php?command=request');
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    sessionStorage.setItem(
      'token',
      JSON.stringify(data.token),
    );
    return data.token;
  } catch (error) {
    console.error(error);
  }
};