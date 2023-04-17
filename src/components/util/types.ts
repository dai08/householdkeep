import type { PropType } from 'vue';

export const month = {
  type: Array as PropType<{ date: number; dateOfWeek: string; foodCost: number; fixedCost: number; id: number }[]>,
  required: true,
};
