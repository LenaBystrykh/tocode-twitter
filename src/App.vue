<template>
<div class="wrapper">
  <div class="wrapper-content">
    <div class="view">
      <div class="container">
        <Form @sendTweet="postTweet" :items="items"/>
        <TweetList :items="items" @toggleLike="toggleLike" />
      </div>
    </div>
  </div>
</div>

</template>

<script>
// Без импорта рефа список items не будет реактивным - при отправке поста не будут отображаться добавленные значения
import { ref } from 'vue'
import Form from '@/components/Form'
import TweetList from '@/components/TweetList'

export default {
	components: { Form, TweetList },
	setup() {
		const items = ref([
			{
				id: 1,
				avatar: `https://avatars.dicebear.com/api/male/1.svg`,
				body: 'tweet in vue3',
				likes: 7,
				liked: true,
				date: new Date(Date.now()).toLocaleString()
			},
			{
				id: 2,
				avatar: `https://avatars.dicebear.com/api/female/2.svg`,
				body: 'another tweet',
				likes: 3,
				liked: false,
				date: new Date(Date.now()).toLocaleString()
			}
		])

		// function postTweet(item) {
		// 	// Из-за реактивности и рефов и из-за прокси надо прописывать не просто items, а именно с value
		// 	items.value.push(item)
		// }
		// А лучше вообще вот так
		const postTweet = item => items.value.push(item)

		const toggleLike = item => {
			if (item.liked) {
				item.likes -= 1
			}
			else { item.likes += 1 }
			item.liked = !item.liked
		}
		return { 
			items,
			postTweet,
			toggleLike
		}
	}
}
</script>
