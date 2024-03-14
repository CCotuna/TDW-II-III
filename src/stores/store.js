// store.js
import { reactive } from 'vue';

export const store = reactive({
  employees: [
    { name: 'Alexandra Smith', position: 'Manager', image: 'https://picsum.photos/100/50' },
    { name: 'Michael Johnson', position: 'Programmer', image: 'https://picsum.photos/100/50' },
    { name: 'Emily Davis', position: 'Designer', image: 'https://picsum.photos/100/50' },
    { name: 'Christopher Brown', position: 'Analyst', image: 'https://picsum.photos/100/50' },
    { name: 'Jessica Wilson', position: 'Accountant', image: 'https://picsum.photos/100/50' },
    { name: 'David Taylor', position: 'Marketing', image: 'https://picsum.photos/100/50' },
    { name: 'Sarah Martinez', position: 'Administrator', image: 'https://picsum.photos/100/50' },
    { name: 'James Anderson', position: 'Sales', image: 'https://picsum.photos/100/50' },
    { name: 'Jennifer Clark', position: 'HR', image: 'https://picsum.photos/100/50' }
  ]
});
