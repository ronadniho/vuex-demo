<template>
    <div>
        <h2>{{msg}}</h2><hr>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <h3>模块组：{{$store.state.a.count}}--{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "hello vuex"
    };
  },
  store,
  //第一种方法
  /* computed:{
        count(){
            return this.$store.state.count;
        }
    } */
  //第二种方法
  /* computed:mapState({
        count:state=>state.count
    }) */
  // 第三种方法
  /* computed: mapState(["count"]), */
  computed: {
    // ...mapState(["count"]),
    /* count() {
      return this.$store.getters.count;
    } */
    //...mapGetters(['count'])
    count(){//模块组
        return this.$store.state.a.count
    }
  },
  methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
  }
};
</script>
