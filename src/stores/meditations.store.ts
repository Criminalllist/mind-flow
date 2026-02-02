import { defineStore } from "pinia"
import { ref } from "vue"
import apiClient from "@/api/client"
import type { Meditation } from "@/interfaces/meditaion.interface"
import type { ApiResponse } from "@/interfaces/api.interface"


export const useMeditationStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  async function getMeditations() {
    loading.value = true
    error.value = null

    try {
      const { data } = await apiClient.get<ApiResponse<{ meditations: Meditation[]}>>('/meditations')
      meditations.value = data.data.meditations
    } catch (e) {
      const err = e as Error;
      error.value = err.message || 'Ошибка при загрузке данных'
    } finally {
      loading.value = false
    }
  }

  return { meditations, getMeditations}
})