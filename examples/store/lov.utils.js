/*
*   power by    weishengjian
*   datetime    2018/8/1 10:29
*   desc        vuex使用相关工具类
*/


/*
*  获取默认的mutations对象
*  比如传来的state
*  state：{
*     openId:'',
*     token:'',
*  },
*  会自动生成默认的mutations
*  mutations:{
*     setOpenId:(state,data)=>{state.openId=data},
*     setToken:(state,data)=>{state.token=data}
*  },
*  为了扩展方便，开发者可以获取默认mutation对象之后，重写其中任何方法
*
*  在vue中使用
*
*  computed:{
*   ...mapState([
*     'openId','token'
*   ])
*  },
*
*  methods::{
*   ...mapMutations([
*     'setOpenId','setToken'
*   ])
*  }
*
*/
export function getDefaultMutations(state) {
    let mutations = {};
    for (let key in state)
        mutations[`set${key.charAt(0).toUpperCase()}${key.substring(1, key.length)}`] = (state, data) => state[key] = data;
    return mutations;
}

/*
*  获取默认的getters对象
*  比如传来的state
*  state：{
*     openId:'',
*     token:'',
*  },
*  会自动生成默认的mutations
*  getters:{
*     openId:(state)=>state.openId,
*     token:(state)=>state.token
*  },
*  为了扩展方便，开发者可以获取默认getters对象之后，重写其中任何方法
*
*  在vue中使用
*
*  computed:{
*   ...mapGetters([
*     'openId','token'
*   ])
*  },
*
*/
export function getDefaultGetters(state) {
    let getters = {};
    for (let key in state)
        getters[key] = (state) => state[key];
    return getters;
}

export async function getStoreSync() {

}
