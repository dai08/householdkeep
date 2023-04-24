import { defineStore } from 'pinia';
import { DAY_OF_WEEKS } from '../components/util/constant';
import type { Month, Date } from '../components/util/types';
import { reactive } from 'vue';
import { ref } from 'vue';

export const useTableStore = defineStore({
  id: 'table',

  state: () => ({
    // 各タブに表示するメッセージ
    formMessage: '支出',
    tableMessage: '今月の家計簿',
    // テーブルの日付、曜日、コスト
    // Month[]型にしたかったが出来なかったです
    month: [...Array(30)].map((_, index) => ({
      date: index + 1,
      dayOfWeek: DAY_OF_WEEKS[index % 7].name,
      foodCost: null,
      fixedCost: null,
      id: index + 1,
    })),
    // フォームと同期している日付
    // Date[]型にしたかったが出来なかったです
    date: reactive({
      year: 2024,
      month: 4,
      day: 1,
    }),
    currentTabName: ref('form'),
  }),

  getters: {
    numFoodCost(): number {
      const total = this.month.reduce((sum, i) => sum + (i.foodCost ?? 0), 0);
      return total;
    },
    numFixedCost(): number {
      const total = this.month.reduce((sum, i) => sum + (i.fixedCost ?? 0), 0);
      return total;
    },
  },

  actions: {
    changeTab(tabName: string) {
      this.currentTabName = tabName;
    },
    // Formのプルダウンで表示する日付をtableで選択したものにする処理
    changeFormData(day: number) {
      this.date.day = day;
    },
  },
});
