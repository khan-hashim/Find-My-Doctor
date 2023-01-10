const initState = {
  items2: [
    // items for covidtest page
    {
      id: 1,
      title: "Covid-19 PCR Test",
      desc: "Results within 24 hours",
      price: 150,
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 2,
      title: "Covid-19 Rapid Antigen Test",
      desc: "Results within 15-20 mins",
      price: 40,
      quantity: 0,
      date: "",
      time: "",
    },
  ],
  items3: [
    // items for Doctors page
    {
      id: 1,
      title: "Dr ABC ",
      imageURL: "images/DR1.jpg",
      price: 50,
      desc: "Family Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 2,
      title: "Dr DEF",
      imageURL: "images/DR2.jpg",
      price: 40,
      desc: "Family Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 3,
      title: "Dr GHI",
      imageURL: "images/DR3.jpg",
      price: 55,
      desc: "Family Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 4,
      title: "Dr JKL",
      imageURL: "images/DR4.jpg",
      price: 45,
      desc: "Family Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 5,
      title: "Dr MNO",
      imageURL: "images/DR5.jpg",
      price: 40,
      desc: "Family Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 6,
      title: "Dr PQR",
      imageURL: "images/DR6.jpg",
      price: 60,
      desc: "Family and ER Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 7,
      title: "Dr STU",
      imageURL: "images/DR7.jpg",
      price: 50,
      desc: "Family Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 8,
      title: "Dr VW",
      imageURL: "images/DR8.jpg",
      price: 35,
      desc: "Family and ER Physician",
      quantity: 0,
      date: "",
      time: "",
    },
    {
      id: 9,
      title: "Dr XYZ",
      imageURL: "images/DR9.jpg",
      price: 30,
      desc: "ER Physician",
      quantity: 0,
      date: "",
      time: "",
    },
  ],
  addedItems: [],
  total: 0,
};
function rootreducer(state = initState, action) {
  if (action.type === "ADD_TO_CART") {
    let addedItem = state.items3.find((item) => item.id === action.id);
    let existingItem = state.addedItems.find((item) => action.id === item.id);
    if (existingItem) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      addedItem.date = action.date;
      addedItem.time = action.time;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    let itemToRemove = state.addedItems.find((item) => item.id === action.id);
    let new_items = state.addedItems.filter((item) => item.id !== action.id);
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  } else if (action.type === "ADD_QUANTITY") {
    let addedItem = state.items3.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  } else if (action.type === "SUB_QUANTITY") {
    let addedItem = state.items3.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    // } else if (action.type === "ADD_DOC_APP") {
    //   let addedItem = state.items3.find((item) => item.id === action.id);
    //   addedItem.quantity = 1;
    //   addedItem.date = action.date;
    //   addedItem.time = action.time;
    //   let newTotal = state.total + addedItem.price;
    //   return {
    //     ...state,
    //     addedItems: [...state.addedItems, addedItem],
    //     total: newTotal,
    //   };
  } else if (action.type === "EMPTY_CART") {
    return {
      ...state,
      addedItems: [],
      total: 0,
    };
  } else {
    return state;
  }
}
export default rootreducer;
