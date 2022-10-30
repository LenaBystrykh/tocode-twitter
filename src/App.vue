<template>
<div class="wrapper">
  <div class="wrapper-content">
    <div class="view">
      <div class="container">
        <Form @sendTweet="postTweet" :length="items.length"/>
        <TweetList :items="items" />
      </div>
    </div>
  </div>
</div>

</template>

<script>
import Form from '@/components/Form'
import TweetList from '@/components/TweetList'
export default {
  components: { Form, TweetList },
  data() {
    return {
      items: [
        {
          id: 1,
          avatar: `https://avatars.dicebear.com/api/male/1.svg`,
          body: 'tweet in vue3',
          likes: 7,
          date: new Date(Date.now()).toLocaleString()
        },
        {
          id: 2,
          avatar: `https://avatars.dicebear.com/api/female/2.svg`,
          body: 'another tweet',
          likes: 3,
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
    postTweet(item) {
      this.items.push(item)
    }
  }
}
</script>