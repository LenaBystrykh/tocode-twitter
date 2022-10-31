<template>
    <select v-model="sortBy">
        <option value="date">Sort by date</option>
        <option value="likes">Sort by likes</option>
    </select>
    <ul class="tweets__wrapper">
        <Tweet v-for="item in sortedItems" :key="item.id" :item="item" @toggleLike="toggleLike">
        </Tweet>
    </ul>
</template>
<script>
import { ref, computed } from 'vue'
import Tweet from '@/components/Tweet'
export default {
    components: { Tweet },
    emits: ['toggleLike'],
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    setup({ items }, { emit }) {
        const sortBy = ref('date')

        const sortedItems = computed(() => {
            return items.sort((a, b) => {
                if (a[sortBy.value] > b[sortBy.value]) return -1
                if (a[sortBy.value] < b[sortBy.value]) return 1
            })
        })

        const toggleLike = item => {
            emit('toggleLike', item)
        }

        return { 
            sortBy,
            sortedItems,
            toggleLike
        }
    }
}
</script>
