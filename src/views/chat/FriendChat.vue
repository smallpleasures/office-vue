<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <message></message>
      <userText></userText>
    </div>
  </div>
</template>

<script>
import card from '@/components/chat/card.vue'
import list from '@/components/chat/list.vue'
import message from '@/components/chat/message.vue'
import userText from '@/components/chat/usertext.vue'

export default {
  name: 'FriendChat',
  data () {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('initData');
  },
  components:{
    card,
    list,
    message,
    userText
  }
}
</script>

<style lang="css" scoped>
#app {
  margin: 20px 100px;
  //margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #c8c9c9;
}
.sidebar {
  height: 100%;
  float: left;
  color: #f4f4f4;
  background-color: #2e3238;
  width: 200px;
}
.main {
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #eee;
}
</style>
