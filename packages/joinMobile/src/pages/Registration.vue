<template>
  <div style="width: 95%; margin: 0 auto">
    <n-card size="small">
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
          <option value="programming">程序设计组</option>
          <option value="bigData">大数据组</option>
          <option value="embedded">嵌入式组</option>
          <option value="hardware">硬件组</option>
        </select>
        <br />
        <br />
        <label for="sDepartment">意向部门（可选）:&nbsp;</label>
        <select v-model="data.sDepartment">
          <option selected value="">无</option>
          <option value="ms">秘书部</option>
          <option value="xc">宣传部</option>
          <option value="wl">外联部</option>
        </select>
        <br />
        <br />
        <label for="w3review">用一段简短的文字描述你自己！</label>
        <textarea v-model="data.w3review" rows="8" cols="50" placeholder="正如你所看到的，我是一个非主流。"></textarea>
        <br />
        <br />
        <div class="identify">
          <!-- <label for="sEmail">&nbsp;</label> -->
          <input type="text" v-model="idCode" placeholder="请输入验证码" />
          <div @click="refreshCode">
            <SIdentify :identifyCode="identifyCode" />
          </div>
        </div>
        <n-button @click="submit()" strong secondary round type="primary"> 提交 </n-button>
        <n-button @click="clear()" strong secondary round type="info"> 重新填写 </n-button>
      </form>
    </n-card>
    <n-modal v-model:show="showModal">
      <n-card style="width: 300px; text-align: center;" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <h2 :style="'color:' + showMsgSty">{{ showMsg }}</h2>
      </n-card>
    </n-modal>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { NGrid, NGi, NCard, NButton, NModal } from "naive-ui";
import axios from "axios";
import SIdentify from '../components/identify.vue';
const baseUrl = "http://120.46.212.64:3000"
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
let idCode = ref("")
let showModal = ref(false);
let showMsg = ref("提交失败");
let showMsgSty = ref("red");
function submit() {

  if (idCode.value === identifyCode.value) {
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
  } else {
    showMsg.value = "验证码错误";
    showMsgSty.value = "red";
    showModal.value = true;
  }

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

// 图形验证码
let identifyCodes = "1234567890"
let identifyCode = ref('3212')

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const makeCode = (o, l) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += o[
      randomNum(0, o.length)
    ];
  }
}

const refreshCode = () => {
  identifyCode.value = "";
  makeCode(identifyCodes, 4);
}

onMounted(() => {
  identifyCode.value = "";
  makeCode(identifyCodes, 4);
})

</script>
     
<style scoped>
input {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  -webkit-appearance: none;
}

select {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  font-family: 楷体;
  background-color: white;
  color: rgb(169, 169, 169);
}

textarea {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  width: 100%;
  font-family: 楷体;
}

.n-card {
  box-shadow: 0px 0px 42px #d6cfcf;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.identify {
  display: flex;
}

.identify input {
  width: 50%;
}
</style>
