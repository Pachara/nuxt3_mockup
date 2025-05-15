<template>
    <div class="position-relative">
      <div
        class="form-control bg-dark text-primary border rounded-3 d-flex justify-content-between align-items-center"
        @click="toggleDropdown"
        style="cursor: pointer;"
      >
        {{ selected || 'เลือกจังหวัด' }}
        <i class="bi" :class="dropdownOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
      </div>
  
      <div
        v-if="dropdownOpen"
        class="position-absolute w-100 z-10 bg-white border rounded-3 mt-1 shadow-sm"
        style="max-height: 200px; overflow-y: auto;"
      >
        <input
          v-model="search"
          type="text"
          class="form-control border-0 border-bottom rounded-0"
          placeholder="ค้นหา..."
          @click.stop
        />
  
        <div
          v-for="province in filtered"
          :key="province"
          :class="[
            'px-3 py-2 dropdown-item bg-white hover-bg d-flex justify-between align-items-center',
            province === selected ? 'fw-bold text-primary' : ''
          ]"
          style="cursor: pointer;"
          @mousedown.prevent="select(province)"
        >
          <span>{{ province }}</span>
          <i v-if="province === selected" class="bi bi-check2-circle ms-auto"></i>
        </div>
  
        <div v-if="!filtered.length" class="text-muted text-center py-2">
          ไม่พบจังหวัด
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    modelValue: String,
    options: {
      type: Array,
      default: () => []
    }
  })
  const emit = defineEmits(['update:modelValue'])
  
  const search = ref('')
  const selected = computed(() => props.modelValue)
  const dropdownOpen = ref(false)
  
  const filtered = computed(() =>
    props.options.filter(p =>
      p.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
  }
  
  const select = (province) => {
    emit('update:modelValue', province)
    search.value = ''
    dropdownOpen.value = false
  }
  
  const handleClickOutside = (e) => {
    if (!e.target.closest('.position-relative')) {
      dropdownOpen.value = false
    }
  }
  onMounted(() => {
    window.addEventListener('click', handleClickOutside)
  })
  onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)
  })
  </script>
  
  <style scoped>
  .hover-bg:hover {
    background-color: #333 !important;
    color: #F16E00 !important;
    font-weight:bold
  }
  </style>
  