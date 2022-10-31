<template>
    <form @submit.prevent="sendTweet">
        <textarea
            v-model="body"
            required
            placeholder="Type tweet here">
        </textarea>
        <button class="btn btnTweet" type="submit">Send tweet</button>
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    emits: ['sendTweet'],
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    // setup(props, context) {
    setup({items}, { emit }) {
        const body = ref('')

        const genders = ['male', 'female']
        const gender = genders[Math.floor(Math.random() * genders.length)]
        // const sendTweet = () => { context.emit('sendTweet', newTweet)}
        // После деструктуризации нет необходимости обращаться к контексту
        const sendTweet = () => { 
            emit('sendTweet', {
                // После деструктуризации нет необходимости обращаться к пропсам
                id: items.length + 1,
                avatar: `https://avatars.dicebear.com/api/${gender}/${Date.now()}.svg`,
                body: body.value,
                likes: 0,
                liked: false,
                date: new Date(Date.now()).toLocaleString()
            })
            body.value = ''
        }

        return { 
            body,
            sendTweet,
        }
    }
}
</script>
