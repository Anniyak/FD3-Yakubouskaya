import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: -180 },
  {
    id: 120,
    fam: "Григорьев",
    im: "Григорий",
    otch: "Григорьевич",
    balance: 220,
  },
];

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    saveClient: (state, action) => {
      state.forEach((client) => {
        if (client.id == action.payload.id) {
          client.fam = action.payload.fam;
          client.im = action.payload.im;
          client.otch = action.payload.otch;
          client.balance = action.payload.balance;
        }
      });
    },
    addClient: (state, action) => {
      let max = 0;
      state.forEach((cl) => {
        if (cl.id > max) max = cl.id;
      });
      const newClient = {
        id: max + 1,
        fam: "",
        im: "",
        otch: "",
        balance: 0,
      };
      state.push(newClient);
    },
    deleteClient: (state, action) => {
      let ind = 0;
      state.forEach((cl, i) => {
        if (cl.id == action.payload) ind = i;
      });
      state.splice(ind, 1);
    },
  },
});
export const { saveClient, addClient, deleteClient } = clientsSlice.actions;

export default clientsSlice.reducer;
