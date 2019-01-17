<template>
  <div class="app" id="deviceready">
    <div style="text-align:center; width: 100%;">
      <div>
        <img src="img/banner.jpg" width="100%">
      </div>

      <div class="row">
        <div class="col">
          <div>
            <button @click="goto('/studyplan')" type="button" class="btn btn-info">
              <div>
                <img src="img/calenda_rong.png" alt="Lịch học" height="45">
              </div>
              <div>Lịch học</div>
            </button>
          </div>
        </div>
        <div class="col">
          <button @click="goto('/testplan')" type="button" class="btn btn-info">
            <div>
              <img src="img/test.png" alt="Lịch thi" height="45">
            </div>
            <div>Lịch thi</div>
          </button>
        </div>
        <div class="col">
          <button @click="goto('/survey')" type="button" class="btn btn-info">
            <div>
              <img src="img/survey.png" alt="Khảo sát" height="45">
            </div>
            <div>Khảo sát</div>
          </button>
        </div>
        <div class="col">
          <button @click="goto('/result')" type="button" class="btn btn-info">
            <div>
              <img src="img/result.png" alt="Kết quả" height="45">
            </div>
            <div>Kết quả</div>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <button @click="goto('/messenger')" type="button" class="btn btn-info">
            <div>
              <img src="img/mess.png" alt="Tin nhắn" height="45">
            </div>
            <div>Tin nhắn</div>
          </button>
        </div>

        <div class="col">
          <button @click="goto('/news')" type="button" class="btn btn-info">
            <div>
              <img src="img/news.png" alt="Tin nhắn" height="45">
            </div>
            <div>Bản tin</div>
          </button>
        </div>

        <div class="col">
          <button @click="goto('/one-gate')" type="button" class="btn btn-info">
            <div>
              <img src="img/1gate.png" alt="Một cửa" height="45">
            </div>
            <div>Một cửa</div>
          </button>
        </div>

        <div class="col">
          <button @click="goto('/finance')" type="button" class="btn btn-info">
            <div>
              <img src="img/taichinh.png" alt="Tài chính" height="45">
            </div>
            <div>Tài chính</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Users, Data } from "../apis/api";
export default {
  data() {
    return {
      User: {
        Name: ""
      },
      Points: [],
      Bank: {}
    };
  },
  created() {},
  mounted() {
    this.User.Name = "pham";
  },
  methods: {
    goto(url) {
      this.$router.push(url);
    },
    mt1() {},
    mt2() {}
  }
};
</script>
