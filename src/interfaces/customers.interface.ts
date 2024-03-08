interface Address {
  nameOfTheStreet: string;
  height: number;
  dept: string;
  floor: number;
}

interface Customer {
  firstName: string;
  lastName: string;
  identification: number;
  address: Address;
  phoneNumber: string;
  email: string;
}

// interface Demographic {
//     idCustomers:Customers["identification"];
//     age:number;
//     gender: "feminine" | "masculine";
//     civilStatus:"soltero"| "casado" |"divorciado";
//     profession:string;
//     incomeLevel:String
// }



// interface ShoppingHistory {
//   purchasedProducts:String[],
//   PurchaseDates:Date,
//   transactionAmounts:Date,
//   purchasingPreferences:String[]
// }


export { Customer ,Address }