import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //登录后的用户信息
    userData:{
      id:0,
      userName:"",
      avatar:"",
      email:"",
      skillList:[],
      authCode:0,
    },
    taskDetail:{
      name:"",
      detail:"",
      gread:0,
      type:[],
      limitTime:"",
      publisher:"",
      value:1,
      id:0,
      state:0,
      flag:0,
      finish:0,
      fromPublisher:false,
      fromReciver:false
    },
    otherUserData:{
      id:0,
      name:"",
      avatar:"",
      mail:"",
      intro:"",
    },
    //富文本编辑器内容
    editor:"",
  },
  getters:{
    //实名认证
    isRealName(state){
      if (state.userData.authCode==undefined) {
        return false
      }
      if (state.userData.authCode==1||state.userData.authCode==2) {
        return true
      }else{
        return false
      }
    },
    //技能认证
    isSkill(state){
      if (state.userData.authCode==undefined) {
        return false
      }
      if (state.userData.authCode!=2) {
        return false
      }else{
        return true
      }
    }
  },
  mutations: {
    setUser(state,data){
      state.userData=data
    },
    setDetail(state,detail){
      state.taskDetail=detail
    },
    setEditor(state,html){
      state.editor=html
    },
    //将本地储存的信息写入state中
    readLocal(state){
      if (localStorage.getItem('userName')!=null) {
        state.userData.authCode=localStorage.authCode
        state.userData.avatar=localStorage.avatar
        state.userData.bio=localStorage.bio
        state.userData.email=localStorage.email
        state.userData.id=localStorage.id
        state.userData.userName=localStorage.userName
        state.userData.skillList=JSON.parse(localStorage.getItem('skillList'))
      }
      
    },
    //清除vuex登录信息
    clearUserData(state){
      state.userData.id=0
      state.userData.userName=""
      state.userData.avatar=""
      state.userData.email=""
      state.userData.skillList=[]
      state.userData.authCode=0
    },
    changeAuth(state,data){
      state.userData.authCode=data.code
      state.userData.skillList=data.skills
    },
    //查看关注人主页，将数据写入otherUserData
    setOtherUserData(state,data){
      state.otherUserData=data
    }
  },
  actions: {
  },
  modules: {
  }
})
