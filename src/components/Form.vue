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
export default {
    props: {
        length: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            body: ''
        }
    },
    methods: {
        sendTweet() {
            const genders = ['male', 'female']
            const gender = genders[Math.floor(Math.random() * genders.length)]
            const newTweet = {
                id: length + 1,
                avatar: `https://avatars.dicebear.com/api/${gender}/${Date.now()}.svg`,
                body: this.body,
                date: new Date(Date.now()).toLocaleString()
            }
            this.$emit('sendTweet', newTweet)
            this.body = ""
        }
    }
}
</script>