<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="header-quiz">
        <h1>Quiz Quiz</h1>
      </div>
      <div class="step-progress" :style="{ width: progress + '%' }"></div>
      <div
        class="box"
        v-for="(question, index) in questions.slice(a, b)"
        :key="index"
        v-show="quiz"
      >
        <div class="box-question">
          <h2>Câu hỏi {{ b }}/{{ questions.length }}</h2>
          <p>{{ question.question }}</p>
        </div>
        <div class="box-propositions">
          <ul>
            <li
              v-for="(proposition, index) in question.propositions"
              :key="index"
              class="li"
              @click="selectResponse(proposition, index)"
              :class="correct ? check(proposition) : ''"
            >
              {{ proposition.props }}
              <div
                class="fas fa-check"
                v-if="correct ? proposition.correct : ''"
              ></div>
              <div
                class="fas fa-times"
                v-if="correct ? !proposition.correct : ''"
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="box-score" v-if="score_show">
        <h2>Điểm của bạn là</h2>
        <h2>{{ score }}/{{ questions.length }}</h2>
        <div class="btn-restart">
          <button @click="restartQuiz">
            Restart <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      <div class="footer-quiz">
        <div v-if="progress < 100" class="box-button">
          <button
            @click="skipQuestion()"
            :style="next ? 'background-color: rgb(106, 128, 202)' : ''"
          >
            Bỏ qua
          </button>
          <button
            @click="nextQuestion()"
            :style="!next ? 'background-color: rgb(106, 128, 202)' : ''"
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: 'Ảnh "đen- trắng" là ảnh có ?',
          propositions: [
            { props: 'Hai mức chói "0" và "1"' },
            { props: 'Các điểm ảnh với mức xám khác 0' },
            { props: 'Nhiều mức xám nằm trong khoảng Lmin-Lmax' },
            { props: 'Độ bão hoà màu bằng 0', correct: true },
          ],
        },
        {
          question:
            'Mắt người chỉ cảm nhận được những sóng điện từ có màu từ tia màu ____ đến tia màu ____ ?',
          propositions: [
            { props: ' Đỏ / Tím', correct: true },
            { props: ' Lục / Tím' },
            { props: ' Tím / Vàng' },
            { props: ' Lục/Đỏ' },
          ],
        },
        {
          question:
            'Quang thông và độ sáng là đại lượng trắc quang đặc trưng cho khả năng phát sáng của ?',
          propositions: [
            { props: 'Nguồn sáng', correct: true },
            { props: 'Bề mặt được chiếu sáng' },
            { props: 'Bề mặt tự phát sáng' },
            { props: 'Nguồn sáng theo hướng nhất định' },
          ],
        },
        {
          question: 'Loại tế bào trong mắt có khả năng cảm thụ màu sắc là: ?',
          propositions: [
            { props: 'tế bào hình que' },
            { props: 'tế bào hình nón', correct: true },
            { props: 'tế bào hình gai' },
            { props: 'tế bào hình cầu' },
          ],
        },
        {
          question: 'Ngưỡng tương phản là đại lượng ?',
          propositions: [
            { props: 'Đặc trưng cho mức tương phản nhỏ nhất trong ảnh' },
            {
              props:
                'Mức khác biệt độ chói nhỏ nhất giữa hai chi tiết mà mắt người cảm nhận được',
              correct: true,
            },
            { props: 'Mức sáng nhỏ nhất mà mắt người cảm nhận được' },
          ],
        },
        {
          question: 'Độ tương phản của ảnh trên màn hình phụ thuộc vào ?',
          propositions: [
            { props: 'Độ chói của màn hình', correct: true },
            { props: 'Kích thước màn hình' },
            { props: 'Kích thước của các chi tiết trên màn hình' },
            { props: 'Mức xám trung bình trong ảnh' },
          ],
        },
        {
          question:
            'Phương pháp xử lý ảnh trong không gian được mô tả bằng toán tử T. Toán tử T tác động ?',
          propositions: [
            { props: 'Trực tiếp tới các hệ số khai triển Fourier của ảnh' },
            { props: 'Trực tiếp tới các điểm ảnh', correct: true },
            {
              props:
                'Cùng lúc tới các pixel trong không gian ảnh và các hệ số khai triển Fourier của ảnh đó.',
            },
            // {props:'Mức xám trung bình trong ảnh'},
          ],
        },
        {
          question: 'Lược đồ xám (histogram) chuẩn của ảnh là ?',
          propositions: [
            { props: 'Số lượng mức xám có trong ảnh số' },
            {
              props:
                'Xác suất xuất hiện của các mức xám (từ 0 đến 255) trong ảnh số',
              correct: true,
            },
            { props: 'Phân bố mức xám trên bề mặt ảnh số' },
            // {props:'Mức xám trung bình trong ảnh'},
          ],
        },
        {
          question: 'Ảnh được cân bằng lược đồ xám sẽ có ?',
          propositions: [
            { props: 'Độ chói đồng đều trên toàn bộ bề mặt ảnh' },
            { props: 'Độ tương phản được tăng cường', correct: true },
            { props: 'Độ tương phản của ảnh giảm đi' },
            { props: 'Độ nét được cải thiện' },
          ],
        },
        {
          question: 'Mã Huffman trong quá trình nén ảnh thực hiện giải thuật ?',
          propositions: [
            { props: 'Mã hóa loạt dài liên tục' },
            { props: 'Mã hóa bằng cách loại bỏ trùng lặp' },
            { props: 'Mã hóa với độ dài của từ mã thay đổi', correct: true },
            { props: 'Mã hóa với độ dài của từ mã không đổi' },
          ],
        },
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0,
    };
  },
  name: 'App',
  components: {
    //HelloWorld
  },
  computed: {},
  methods: {
    selectResponse(e) {
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return 'correct';
      } else {
        return 'incorrect';
      }
    },
    nextQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
      }
    },
    skipQuestion() {
      if (!this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },

    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data in vue
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  letter-spacing: 2px;
}

.container-app {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.container-quiz {
  display: flex;
  width: 40%;
  height: 70%;
  /* background-color: white; */
  text-align: center;
  flex-flow: column;
  border: 1px solid #e7eae0;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #e7eae0;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 10px 10px 0px 0px;
  color: rgb(0, 119, 10);
}

.container-quiz .box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}

.box-question {
  margin-top: 20px;
}

.box-question p {
  margin-top: 20px;
}

.box-propositions {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}

li:hover {
  /*transform: scale(1.1);*/
  background-color: #e7eae0;
}

li > div {
  float: right;
  margin-top: 7px;
  margin-right: 7px;
  color: white;
}

.check {
  color: rgb(74, 219, 74);
}

.close {
  color: rgb(240, 117, 100);
}

.footer-quiz {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #e7eae0;
  background-color: #e7eae0;
  border-radius: 0px 0px 10px 10px;
}

.box-button {
  display: flex;
  width: 100%;
}

.footer-quiz .box-button button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
  background-color: #a09f9ff5;
}

li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}

li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
}

.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}

.box-score h2 {
  margin-top: 40px;
}

i {
  display: none;
  color: white;
}

.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: rgb(106, 128, 202);
  transition: 0.5s;
}

.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}

.btn-restart button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  background-color: rgb(106, 128, 202);
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.next {
  background-color: rgb(106, 128, 202);
}

@media screen and (max-width: 900px) {
  .container-quiz {
    width: 60%;
  }
}

@media screen and (max-width: 720px) {
  .container-quiz {
    width: 80%;
  }
  .footer-quiz .box-button button {
    width: 100px;
  }
}
</style>
