import { defineStore } from 'pinia';
import { DAY_OF_WEEKS } from '../components/util/constant';
import type { Month, Date } from '../components/util/types';

export const useHouseholdStore = defineStore({
  id: 'household',

  state: () => ({
    // テーブルの日付、曜日、コスト
    month: [...Array(30)].map((_, index) => ({
      date: index + 1,
      dayOfWeek: DAY_OF_WEEKS[index % 7].name,
      foodCost: null,
      fixedCost: null,
      id: index + 1,
    })) as Month[],
    // フォームと同期している日付
    date: {
      year: 2024,
      month: 4,
      day: 1,
    } as Date,
    // 表示するタブの初期値
    currentTabName: 'form' as string,
    cost: '食費' as string,
    price: 0 as number,
  }),

  getters: {
    getTotalFoodCost(): number {
      const total = this.month.reduce((sum, i) => sum + (i.foodCost ?? 0), 0);
      return total;
    },
    getTotalFixedCost(): number {
      const total = this.month.reduce((sum, i) => sum + (i.fixedCost ?? 0), 0);
      return total;
    },
  },

  actions: {
    changeTab(tabName: string) {
      this.currentTabName = tabName;
    },
    // Formのプルダウンで表示する日付をtableで選択したものにする処理
    setDay(day: number) {
      this.date.day = day;
    },
    setDataFoodCost() {
      const dayData = this.month[this.date.day - 1];
      dayData.foodCost ? (dayData.foodCost += this.price) : (dayData.foodCost = this.price);
    },
    setDataFixedCost() {
      const dayData = this.month[this.date.day - 1];
      dayData.fixedCost ? (dayData.fixedCost += this.price) : (dayData.fixedCost = this.price);
    },
    setInitialData() {
      this.date.day = 1;
      this.cost = '食費';
      this.price = 0;
    },
  },
});
