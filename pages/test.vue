<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const suggestions = ['apple', 'banana', 'cherry', 'apricot']
const filtered = computed(() =>
  search.value
    ? suggestions.filter(item => item.toLowerCase().includes(search.value.toLowerCase()))
    : []
)

const selectSuggestion = (item) => {
  search.value = item
}
</script>

<template>
  <div class="position-relative">
    <input
      v-model="search"
      type="text"
      class="form-control"
      placeholder="Search..."
    />

    <ul v-if="filtered.length" class="list-group position-absolute w-100 z-10">
      <li
        v-for="item in filtered"
        :key="item"
        class="list-group-item list-group-item-action"
        @click="selectSuggestion(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
