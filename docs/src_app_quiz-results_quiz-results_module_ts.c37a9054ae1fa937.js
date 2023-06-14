"use strict";
(self["webpackChunkquiz_maker"] = self["webpackChunkquiz_maker"] || []).push([["src_app_quiz-results_quiz-results_module_ts"],{

/***/ 259:
/*!********************************************************!*\
  !*** ./src/app/quiz-results/quiz-results.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizResultsComponent": () => (/* binding */ QuizResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/pipes/decode-html.pipe */ 3816);




const _c0 = function (a0, a1, a2) {
  return {
    "btn-outline-success": a0,
    "btn-success": a1,
    "btn-danger": a2
  };
};
function QuizResultsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const j_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r0.isIndifferent(element_r5, ctx_r0.question1 == null ? null : ctx_r0.question1.correct_answer, ctx_r0.quizResponse == null ? null : ctx_r0.quizResponse.inputResponse1), ctx_r0.isCorrectAnswer(element_r5, ctx_r0.question1 == null ? null : ctx_r0.question1.correct_answer), ctx_r0.isIncorrectAnswer(element_r5, ctx_r0.question1 == null ? null : ctx_r0.question1.correct_answer, ctx_r0.quizResponse == null ? null : ctx_r0.quizResponse.inputResponse1)))("value", element_r5)("id", "q1" + j_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r5));
  }
}
function QuizResultsComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const j_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r1.isIndifferent(element_r7, ctx_r1.question2 == null ? null : ctx_r1.question2.correct_answer, ctx_r1.quizResponse == null ? null : ctx_r1.quizResponse.inputResponse2), ctx_r1.isCorrectAnswer(element_r7, ctx_r1.question2 == null ? null : ctx_r1.question2.correct_answer), ctx_r1.isIncorrectAnswer(element_r7, ctx_r1.question2 == null ? null : ctx_r1.question2.correct_answer, ctx_r1.quizResponse == null ? null : ctx_r1.quizResponse.inputResponse2)))("value", element_r7)("id", "q2" + j_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r7));
  }
}
function QuizResultsComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r2.isIndifferent(element_r9, ctx_r2.question3 == null ? null : ctx_r2.question3.correct_answer, ctx_r2.quizResponse == null ? null : ctx_r2.quizResponse.inputResponse3), ctx_r2.isCorrectAnswer(element_r9, ctx_r2.question3 == null ? null : ctx_r2.question3.correct_answer), ctx_r2.isIncorrectAnswer(element_r9, ctx_r2.question3 == null ? null : ctx_r2.question3.correct_answer, ctx_r2.quizResponse == null ? null : ctx_r2.quizResponse.inputResponse3)))("value", element_r9)("id", "q3" + j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r9));
  }
}
function QuizResultsComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const j_r12 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r3.isIndifferent(element_r11, ctx_r3.question4 == null ? null : ctx_r3.question4.correct_answer, ctx_r3.quizResponse == null ? null : ctx_r3.quizResponse.inputResponse4), ctx_r3.isCorrectAnswer(element_r11, ctx_r3.question4 == null ? null : ctx_r3.question4.correct_answer), ctx_r3.isIncorrectAnswer(element_r11, ctx_r3.question4 == null ? null : ctx_r3.question4.correct_answer, ctx_r3.quizResponse == null ? null : ctx_r3.quizResponse.inputResponse4)))("value", element_r11)("id", "q4" + j_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r11));
  }
}
function QuizResultsComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "decodeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const j_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](6, _c0, ctx_r4.isIndifferent(element_r13, ctx_r4.question5 == null ? null : ctx_r4.question5.correct_answer, ctx_r4.quizResponse == null ? null : ctx_r4.quizResponse.inputResponse5), ctx_r4.isCorrectAnswer(element_r13, ctx_r4.question5 == null ? null : ctx_r4.question5.correct_answer), ctx_r4.isIncorrectAnswer(element_r13, ctx_r4.question5 == null ? null : ctx_r4.question5.correct_answer, ctx_r4.quizResponse == null ? null : ctx_r4.quizResponse.inputResponse5)))("value", element_r13)("id", "q5" + j_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, element_r13));
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "bg-danger": a0,
    "bg-warning": a1,
    "bg-success": a2
  };
};
class QuizResultsComponent {
  constructor() {
    this.quizScore = 0;
    this.totalQuiz = 0;
  }
  ngOnInit() {
    this.quizResponse = window.history.state['dataR'];
    this.quizQuestion = window.history.state['dataQ'];
    this.question1 = this.quizQuestion?.results[0];
    this.question2 = this.quizQuestion?.results[1];
    this.question3 = this.quizQuestion?.results[2];
    this.question4 = this.quizQuestion?.results[3];
    this.question5 = this.quizQuestion?.results[4];
    // console.log(this.quizQuestion);
    // console.log(this.quizResponse);
    this.quizScore = this.computeScore(this.quizResponse ? this.quizResponse : undefined);
    this.totalQuiz = this.quizQuestion?.results ? this.quizQuestion.results.length : 0;
  }
  isIndifferent(element, correct_answer, inputResponse) {
    return element !== correct_answer && element !== inputResponse;
  }
  isCorrectAnswer(element, correct_answer) {
    return element === correct_answer;
  }
  isIncorrectAnswer(element, correct_answer, inputResponse) {
    return element !== correct_answer && element === inputResponse;
  }
  computeScore(quizResponse) {
    let score = 0;
    if (!quizResponse) {
      return score;
    }
    this.quizQuestion?.results.forEach(function (arrayItem, index) {
      if (index === 0 && arrayItem.correct_answer === quizResponse.inputResponse1) {
        score += 1;
      }
      if (index === 1 && arrayItem.correct_answer === quizResponse.inputResponse2) {
        score += 1;
      }
      if (index === 2 && arrayItem.correct_answer === quizResponse.inputResponse3) {
        score += 1;
      }
      if (index === 3 && arrayItem.correct_answer === quizResponse.inputResponse4) {
        score += 1;
      }
      if (index === 4 && arrayItem.correct_answer === quizResponse.inputResponse5) {
        score += 1;
      }
    });
    return score;
  }
}
QuizResultsComponent.ɵfac = function QuizResultsComponent_Factory(t) {
  return new (t || QuizResultsComponent)();
};
QuizResultsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuizResultsComponent,
  selectors: [["app-quiz-results"]],
  decls: 47,
  vars: 26,
  consts: [[1, "container-fluid"], [1, "row"], [1, "col-8", "mx-auto", "pt-2"], [1, "text-center", "text-uppercase", "mb-4", "mt-2", "font-weight-bold"], [1, "form-inline", "row", "px-4"], [1, "form-group", "mb-4", "col-12"], [1, "form-group", "question"], [1, "text-small"], [1, "form-group", "radios"], [4, "ngFor", "ngForOf"], [1, "form-group", "mb-2", "col-12"], [1, "form-group", "button", "mb-2", "mt-4", "col-12", "justify-content-center"], [1, "my-2", "px-3", 3, "ngClass"], ["type", "button", "routerLink", "/questions", 1, "btn", "btn-sm", "w-75", "btn-secondary"], ["name", "inputResponse1", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse2", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse3", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse4", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"], ["name", "inputResponse5", 1, "btn", "btn-sm", 3, "ngClass", "value", "id"]],
  template: function QuizResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Results");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, QuizResultsComponent_ng_container_12_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "div", 6)(15, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, QuizResultsComponent_ng_container_19_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10)(21, "div", 6)(22, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, QuizResultsComponent_ng_container_26_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10)(28, "div", 6)(29, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, QuizResultsComponent_ng_container_33_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10)(35, "div", 6)(36, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "decodeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, QuizResultsComponent_ng_container_40_Template, 4, 10, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11)(42, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11)(45, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Create a new quiz");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, ctx.question1 == null ? null : ctx.question1.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question1 == null ? null : ctx.question1.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, ctx.question2 == null ? null : ctx.question2.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question2 == null ? null : ctx.question2.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 16, ctx.question3 == null ? null : ctx.question3.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question3 == null ? null : ctx.question3.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 18, ctx.question4 == null ? null : ctx.question4.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question4 == null ? null : ctx.question4.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 20, ctx.question5 == null ? null : ctx.question5.question));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.question5 == null ? null : ctx.question5.all_answers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](22, _c1, ctx.quizScore <= 1, ctx.quizScore > 1 && ctx.quizScore <= 3, ctx.quizScore > 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("You scored " + ctx.quizScore + " out of " + ctx.totalQuiz);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_pipes_decode_html_pipe__WEBPACK_IMPORTED_MODULE_0__.DecodeHtml],
  styles: ["button.btn-outline-success[_ngcontent-%COMP%], button.btn-success[_ngcontent-%COMP%], button.btn-danger[_ngcontent-%COMP%] {\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    font-size: small;\r\n}\r\n\r\n.btn-outline-success[_ngcontent-%COMP%]:hover {\r\n    color: #28a745;\r\n    background-color: #fff;\r\n    border-color: #28a745;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcXVpei1yZXN1bHRzL3F1aXotcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7SUFHSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MsXHJcbmJ1dHRvbi5idG4tc3VjY2VzcyxcclxuYnV0dG9uLmJ0bi1kYW5nZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1546:
/*!*****************************************************!*\
  !*** ./src/app/quiz-results/quiz-results.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizResultsModule": () => (/* binding */ QuizResultsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _quiz_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-results.component */ 259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class QuizResultsModule {}
QuizResultsModule.ɵfac = function QuizResultsModule_Factory(t) {
  return new (t || QuizResultsModule)();
};
QuizResultsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: QuizResultsModule
});
QuizResultsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _quiz_results_component__WEBPACK_IMPORTED_MODULE_1__.QuizResultsComponent
  }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuizResultsModule, {
    declarations: [_quiz_results_component__WEBPACK_IMPORTED_MODULE_1__.QuizResultsComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_quiz-results_quiz-results_module_ts.c37a9054ae1fa937.js.map