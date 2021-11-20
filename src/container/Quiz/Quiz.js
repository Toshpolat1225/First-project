import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../component/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    answerState: null,
    activeQuestion: 0,
    quiz: [
      {
        question: "Dasturlash tilini ko'rsating?",
        questionAnswerId: 2,
        answers: [
          { text: "Jquery", id: 1 },
          { text: "Javascript", id: 2 },
          { text: "Css", id: 3 },
          { text: "Html", id: 4 },
        ],
        id: 1,
      },
      {
        question: "Html kod to'gri yozgan qatorni ko'rsting?",
        questionAnswerId: 3,
        answers: [
          { text: "<video><source>src='<адрес>'</video>", id: 1 },
          { text: "<video><source rsc='<адрес>'></video>", id: 2 },
          { text: "<video><source src='<адрес>'></video>", id: 3 },
          { text: "<video src='<адрес>'></video>", id: 4 },
        ],
        id: 2,
      },
      {
        question: "Javascript frameworkini ko'rsating?",
        questionAnswerId: 1,
        answers: [
          { text: "React", id: 1 },
          { text: "MongoDB", id: 2 },
          { text: "Java", id: 3 },
          { text: "Script", id: 4 },
        ],
        id: 3,
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.questionAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: {
          [answerId]: "success",
        },
        results,
      });

      if (this.state.quiz.length === this.state.activeQuestion + 1) {
        const timeout = window.setTimeout(() => {
          this.setState({
            isFinished: true,
          });
          window.clearInterval(timeout);
        }, 2);
      } else {
        const timeout = window.setTimeout(() => {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
          clearTimeout(timeout);
        }, 2);
      }
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: {
          [answerId]: "error",
        },
        results,
      });

      const timeout = window.setTimeout(() => {
        window.clearTimeout(timeout);
      }, 2);
    }
  };
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }
  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h2 className={classes.Nav}> Test </h2>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onClickAnswer={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
