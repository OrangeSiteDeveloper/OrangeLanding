<template>
  <div>
    <n-grid :cols="8">
      <n-gi :offset="1" :span="6">
        <n-grid :x-gap="12" :cols="2">
          <n-gi :span="1">
            <n-card hoverable>
              <form>
                <label for="sid">学号:&nbsp;</label>
                <input type="text" id="sid" name="sid" placeholder="请填写学号" />
                <br />
                <br />
                <label for="sname">姓名:&nbsp;</label>
                <input type="text" id="sname" name="sname" placeholder="请填写姓名" />
                <br />
                <br />
                <label for="sex">性别:&nbsp;</label>
                <select name="sex" id="sex">
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
                <br />
                <br />
                <label for="smajor">专业:&nbsp;</label>
                <input type="text" id="smajor" name="smajor" placeholder="请填写专业" />
                <br />
                <br />
                <label for="sphone">手机号码:&nbsp;</label>
                <input type="text" id="sphone" name="sphone" placeholder="请填写手机号码" />
                <br />
                <br />
                <label for="sqq">qq:&nbsp;</label>
                <input type="text" id="sqq" name="sqq" placeholder="请填写qq" />
                <br />
                <br />
                <label for="semail">电子邮箱：&nbsp;</label>
                <input type="text" id="semail" name="semail" placeholder="请填写电子邮箱" />
                <br />
                <br />
                <label for="sgroup">意向小组:&nbsp;</label>
                <select name="sgroup" id="sgroup">
                  <option value="web">网站组</option>
                  <option value="be">程序设计组</option>
                </select>
                <br />
                <br />
                <label for="sdepartment">意向部门（可选）:&nbsp;</label>
                <select name="sdepartment" id="sdepartment">
                  <option value="xc">宣传部</option>
                  <option value="wl">外联部</option>
                </select>
                <br />
                <br />
                <label for="w3review">用一段简短的文字描述你自己！</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="正如你所看到的，我是一个非主流。"></textarea>
                <n-button disabled strong secondary round type="primary"> 期待2022纳新季再次开启 </n-button>
                <n-button disabled strong secondary round type="info"> 重新填写 </n-button>
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
  </div>
</template>
<script setup lang="ts">
import { NGrid, NGi, NCard, NButton } from "naive-ui";
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
}

.n-button {
  margin: 10px 10px 0;
}
</style>
