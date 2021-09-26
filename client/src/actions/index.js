import {
  SET_IS_DIALOG_OPEN,
  SET_IS_RESULTS_DIALOG_OPEN,
  SIGN_IN,
  FAILED_SIGN_IN,
  TRY_SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SET_SELECTED_HSK,
  SET_SELECTED_MULTIPLE_CHOICE_ANSWER,
  FETCH_HSK_WORDS,
  SIGN_IN_WITH_TOKEN,
  SET_MULTIPLE_CHOICE_QUESTIONS,
  SET_CURRENT_QUESTION,
  SUBMIT_MULTIPLE_CHOICE_QUESTIONS,
  SET_MATCHING_GAME_CARDS,
  FLIP_CARD,
  HANDLE_TRANSITION_END,
  CLEAN_MATCHING_GAME,
  SET_IS_MATCHING_GAME_DIALOG_OPEN,
} from "./types";
import history from "../history";
import toolboxApi from "../apis/toolboxApi";
import _ from "lodash";

export const setIsDialogOpen = (isDialogOpen) => {
  return {
    type: SET_IS_DIALOG_OPEN,
    payload: isDialogOpen,
  };
};

export const setIsResultsDialogOpen =
  (isResultsDialogOpen, selectedHsk = 1) =>
  (dispatch) => {
    dispatch({
      type: SET_IS_RESULTS_DIALOG_OPEN,
      payload: isResultsDialogOpen,
    });
    if (!isResultsDialogOpen) {
      history.push(`/hsk${selectedHsk}/progress`);
    }
  };

export const signIn = (formValues) => async (dispatch) => {
  try {
    const { data } = await toolboxApi.post(
      "/signin",
      JSON.stringify(formValues)
    );
    let now = new Date();
    let time = now.getTime();
    time += 3600 * 1000 * 2;
    now.setTime(time);
    document.cookie = `token=${
      data.token
    }; expires=${now.toUTCString()}; path=/`;
    dispatch({ type: SIGN_IN, payload: data });
    history.push(`/hsk${data.selectedHsk}/progress`);
  } catch (e) {
    dispatch({ type: FAILED_SIGN_IN });
  }
};

export const trySignIn = () => {
  return { type: TRY_SIGN_IN };
};

export const signUp = (formValues) => async (dispatch) => {
  try {
    const { data } = await toolboxApi.post(
      "/signup",
      JSON.stringify(formValues)
    );

    document.cookie = `token=${data.token}; path=/`;
    dispatch({ type: SIGN_UP, payload: data });
    history.push("/usersettings");
  } catch (e) {
    console.log(e);
  }
};

export const signOut = () => async (dispatch) => {
  document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  dispatch({ type: SIGN_OUT });
  history.push("/");
};

export const setSelectedHsk = (value) => async (dispatch) => {
  try {
    let jwtToken =
      "Bearer " +
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        .split("=")[1];
    const { data } = await toolboxApi.post(
      "/selectedhsk",
      JSON.stringify({ selectedHsk: value }),
      {
        headers: {
          Authorization: jwtToken,
        },
      }
    );
    dispatch({ type: SET_SELECTED_HSK, payload: data.selectedHsk });
    history.push(`/hsk${value}/progress`);
  } catch (e) {
    console.log(e);
  }
};

export const setSelectedMultipleChoiceAnswer = (
  selectedMultipleChoiceAnswer,
  multipleChoiceQuestions,
  currentQuestion
) => {
  multipleChoiceQuestions[currentQuestion].selectedAnswer =
    selectedMultipleChoiceAnswer;
  return {
    type: SET_SELECTED_MULTIPLE_CHOICE_ANSWER,
    payload: { selectedMultipleChoiceAnswer, multipleChoiceQuestions },
  };
};

export const fetchHskWords = (selectedHsk) => async (dispatch) => {
  try {
    const { data: hskWords } = await toolboxApi.get(`/hskwords/${selectedHsk}`);
    let jwtToken =
      "Bearer " +
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        .split("=")[1];
    const { data: learnedWords } = await toolboxApi.get(
      `/learnedwords/${selectedHsk}`,
      {
        headers: {
          Authorization: jwtToken,
        },
      }
    );
    hskWords.forEach((hskWord) => {
      if (learnedWords.includes(hskWord._id)) {
        hskWord.isLearned = true;
      } else {
        hskWord.isLearned = false;
      }
    });
    dispatch({ type: FETCH_HSK_WORDS, payload: hskWords });
  } catch (e) {
    console.log(e);
  }
};

export const signInWithToken = () => async (dispatch) => {
  try {
    let jwtToken =
      "Bearer " +
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        .split("=")[1];
    const { data } = await toolboxApi.get(`/signinwithtoken`, {
      headers: {
        Authorization: jwtToken,
      },
    });
    let now = new Date();
    let time = now.getTime();
    time += 3600 * 1000 * 2;
    now.setTime(time);
    document.cookie = `token=${
      data.token
    }; expires=${now.toUTCString()}; path=/`;
    dispatch({ type: SIGN_IN_WITH_TOKEN, payload: data });
    history.push("/hsk1/progress");
  } catch (e) {
    console.log(e);
  }
};

export const setMultipleChoiceQuestions = (
  hskWords,
  numberOfQuestions = 10
) => {
  hskWords = Object.values(hskWords);
  let multipleChoiceQuestions = [];
  while (multipleChoiceQuestions.length < numberOfQuestions) {
    let randomIndex = Math.floor(Math.random() * hskWords.length);
    if (!multipleChoiceQuestions.includes(hskWords[randomIndex])) {
      multipleChoiceQuestions.push(hskWords[randomIndex]);
    }
  }
  multipleChoiceQuestions.forEach((question) => {
    let answers = [question.translations.join(", ")];
    while (answers.length < 4) {
      let randomAnswer =
        hskWords[Math.floor(Math.random() * hskWords.length)].translations.join(
          ", "
        );
      if (!answers.includes(randomAnswer)) {
        answers.push(randomAnswer);
      }
    }
    question.answers = _.shuffle(answers);
    question.selectedAnswer = -1;
    question.isCorrect = false;
  });

  return {
    type: SET_MULTIPLE_CHOICE_QUESTIONS,
    payload: multipleChoiceQuestions,
  };
};

export const setCurrentQuestion = (
  currentQuestion,
  multipleChoiceQuestions
) => {
  let selectedMultipleChoiceAnswer;
  if (multipleChoiceQuestions.length) {
    selectedMultipleChoiceAnswer =
      multipleChoiceQuestions[currentQuestion].selectedAnswer;
  }
  return {
    type: SET_CURRENT_QUESTION,
    payload: { currentQuestion, selectedMultipleChoiceAnswer },
  };
};

export const submitMultipleChoiceQuestions =
  (multipleChoiceQuestions, selectedHsk) => async (dispatch) => {
    const gradeQuestion = (question) => {
      const isCorrect =
        question.translations.join(", ") ===
        question.answers[question.selectedAnswer];
      return { ...question, isCorrect };
    };
    const gradedQuestions = multipleChoiceQuestions.map(gradeQuestion);
    const correctWords = {
      learnedWords: gradedQuestions
        .filter((question) => question.isCorrect)
        .map((question) => question._id),
    };
    try {
      let jwtToken =
        "Bearer " +
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          .split("=")[1];
      await toolboxApi.post(
        `/learnedwords/${selectedHsk}`,
        JSON.stringify(correctWords),
        {
          headers: {
            Authorization: jwtToken,
          },
        }
      );
      dispatch({
        type: SUBMIT_MULTIPLE_CHOICE_QUESTIONS,
        payload: gradedQuestions,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const setMatchingGameCards = (hskWords, numberOfQuestions = 8) => {
  hskWords = Object.values(hskWords);
  let matchingGameCards = [];
  while (matchingGameCards.length < numberOfQuestions) {
    let randomIndex = Math.floor(Math.random() * hskWords.length);
    let _id = hskWords[randomIndex]._id;
    if (!matchingGameCards.some((card) => card._id === _id)) {
      let cardOne = {
        _id,
        hanzi: hskWords[randomIndex].hanzi,
        pinyin: hskWords[randomIndex].pinyin,
        isFlipped: false,
        // finishedFlipping: false,
        isAnswered: false,
        isFlipping: false,
      };
      let cardTwo = {
        _id,
        translations: hskWords[randomIndex].translations.join(", "),
        isFlipped: false,
        // finishedFlipping: false,
        isAnswered: false,
        isFlipping: false,
      };
      matchingGameCards.push(cardOne);
      matchingGameCards.push(cardTwo);
    }
  }
  matchingGameCards = _.shuffle(matchingGameCards);

  return {
    type: SET_MATCHING_GAME_CARDS,
    payload: matchingGameCards,
  };
};

export const flipCard = (index) => (dispatch, getState) => {
  let isPaused = false;
  const { matchingGameCards: cards } = getState().matchingGame;
  cards[index].isFlipping = true;
  const flippingCards = cards.reduce((acc, card) => {
    return card.isFlipping ? acc + 1 : acc;
  }, 0);
  const flippedUnansweredCards = cards.reduce((acc, card) => {
    if (card.isFlipped && !card.isAnswered) return acc + 1;
    else return acc;
  }, 0);
  if (flippingCards + flippedUnansweredCards === 2) {
    isPaused = true;
  }
  dispatch({
    type: FLIP_CARD,
    payload: { cards, isPaused },
  });
};

export const handleTransitionEnd = (index) => async (dispatch, getState) => {
  let isDialogOpen = false;
  let { isPaused } = getState().matchingGame;
  const { matchingGameCards: cards } = getState().matchingGame;
  cards[index].isFlipped = !cards[index].isFlipped;
  if (!cards[index].isFlipped) isPaused = false;
  cards[index].isFlipping = false;
  const index1 = cards.findIndex((card) => card.isFlipped && !card.isAnswered);
  const index2 =
    cards
      .slice(index1 + 1)
      .findIndex((card) => card.isFlipped && !card.isAnswered) +
    index1 +
    1;
  if (index2 > index1) {
    if (cards[index1]._id === cards[index2]._id) {
      cards[index1].isAnswered = true;
      cards[index2].isAnswered = true;
      isPaused = false;
      if (cards.every((card) => card.isAnswered)) {
        const getUniqueIds = (cards) => {
          return cards
            .map((card) => card._id)
            .filter((id, i, arr) => arr.indexOf(id) === i);
        };
        const { matchingGameCards: cards } = getState().matchingGame;
        const { selectedHsk } = getState().hsk;
        const learnedWords = getUniqueIds(cards);
        const correctWords = { learnedWords };
        try {
          let jwtToken =
            "Bearer " +
            document.cookie
              .split("; ")
              .find((row) => row.startsWith("token="))
              .split("=")[1];
          await toolboxApi.post(
            `/learnedwords/${selectedHsk}`,
            JSON.stringify(correctWords),
            {
              headers: {
                Authorization: jwtToken,
              },
            }
          );
          isDialogOpen = true;
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      cards[index1].isFlipping = true;
      cards[index2].isFlipping = true;
    }
  }
  dispatch({
    type: HANDLE_TRANSITION_END,
    payload: { cards, isPaused, isDialogOpen },
  });
};

export const cleanMatchingGame = () => {
  return {
    type: CLEAN_MATCHING_GAME,
  };
};

export const setIsMatchingGameDialogOpen = (isOpen) => (dispatch, getState) => {
  const { selectedHsk } = getState().hsk;
  dispatch({
    type: SET_IS_MATCHING_GAME_DIALOG_OPEN,
    payload: isOpen,
  });
  history.push(`/hsk${selectedHsk}/progress`);
};
