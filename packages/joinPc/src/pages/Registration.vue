<template>
  <div>
    <n-grid :cols="8">
      <n-gi :offset="1" :span="6">
        <n-grid :x-gap="12" :cols="2">
          <n-gi :span="1">
            <n-card hoverable>
              <form>
                <label for="sId">学号:&nbsp;</label>
                <input type="text" v-model="data.sId" placeholder="请填写学号" />
                <br />
                <br />
                <label for="sName">姓名:&nbsp;</label>
                <input type="text" v-model="data.sName" placeholder="请填写姓名" />
                <br />
                <br />
                <label for="sex">性别:&nbsp;</label>
                <select v-model="data.sex">
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
                <br />
                <br />
                <label for="sMajor">专业:&nbsp;</label>
                <input type="text" v-model="data.sMajor" placeholder="请填写专业" />
                <br />
                <br />
                <label for="sPhone">手机号码:&nbsp;</label>
                <input type="text" v-model="data.sPhone" placeholder="请填写手机号码" />
                <br />
                <br />
                <label for="sQQ">qq:&nbsp;</label>
                <input type="text" v-model="data.sQQ" placeholder="请填写qq" />
                <br />
                <br />
                <label for="sEmail">电子邮箱：&nbsp;</label>
                <input type="text" v-model="data.sEmail" placeholder="请填写电子邮箱" />
                <br />
                <br />
                <label for="sGroup">意向小组:&nbsp;</label>
                <select v-model="data.sGroup">
                  <option value="web">网站组</option>
                  <option value="be">程序设计组</option>
                </select>
                <br />
                <br />
                <label for="sDepartment">意向部门（可选）:&nbsp;</label>
                <select v-model="data.sDepartment">
                  <option value="xc">宣传部</option>
                  <option value="wl">外联部</option>
                </select>
                <br />
                <br />
                <label for="w3review">用一段简短的文字描述你自己！</label>
                <textarea v-model="data.w3review" rows="8" cols="50" placeholder="正如你所看到的，我是一个非主流。"></textarea>
                <n-button  @click="submit()" strong secondary round type="primary"> 期待2022纳新季再次开启 </n-button>
                <n-button disabled @click="clear()" strong secondary round type="info"> 重新填写 </n-button>
              </form>
            </n-card>
          </n-gi>
          <n-gi :span="1">
            <n-card hoverable>
              <img style="width: 100%"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E8%A1%A8%E5%8D%95%20(1)(1).webp?x-oss-process=image/interlace,1" />
            </n-card>
          </n-gi>
        </n-grid>
      </n-gi>
    </n-grid>
    <!-- 提交结果反馈窗 -->
    <n-modal v-model:show="showModal">
      <n-card style="width: 600px; text-align: center;" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <h2 :style="'color:' + showMsgSty">{{ showMsg }}</h2>
      </n-card>
    </n-modal>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { NGrid, NGi, NCard, NButton, NModal } from "naive-ui";
import axios from "axios";
const baseUrl = "http://localhost:3000"
const data = ref({
  sId: "",
  sName: "",
  sex: "",
  sMajor: "",
  sPhone: "",
  sQQ: "",
  sEmail: "",
  sGroup: "",
  sDepartment: "",
  w3review: "",
});
let showModal = ref(false);
let showMsg = ref("提交失败");
let showMsgSty = ref("red");
function submit() {

  axios.post(baseUrl + '/api/join/submitMsg', { data }).then(
    (res) => {
      if (res.data === "success") {
        showMsg.value = "提交成功";
        showMsgSty.value = "green";
      }
      showModal.value = true;
    },
    (err) => {
      showModal.value = true;
      console.log(err);
    }
  )
  setTimeout(() => {
    showModal.value = false;
  }, 1500);

}
function clear() {
  data.value = {
    sId: "",
    sName: "",
    sex: "",
    sMajor: "",
    sPhone: "",
    sQQ: "",
    sEmail: "",
    sGroup: "",
    sDepartment: "",
    w3review: "",
  }
  showMsg.value = "清除成功";
  showMsgSty.value = "green";
  showModal.value = true;
  setTimeout(() => {
    showModal.value = false;
  }, 1000)
}

</script>

<style scoped>
input {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  font-size: 1.1vw;
}

select {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  font-size: 1.1vw;
  font-family: 楷体;
  -webkit-appearance: none;
}

label {
  font-size: 1.2vw;
}

textarea {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  font-size: 1.1vw;
  font-family: 楷体;
  resize: vertical;
}

.n-button {
  margin: 10px 10px 0;
  font-size: 1vw;
}
</style>
