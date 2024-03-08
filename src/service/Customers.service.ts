import { Customer } from "../interfaces/customers.interface";
import CustomersModel from "../models/customers";
import {encrypt} from '../utils/bcrypt.handel'
const insertCustomer = async (customer: Customer) => {
  //encriptar
  customer.email = await encrypt(customer.email) 
  const responseCustomer = await CustomersModel.insertMany(customer);
  return responseCustomer;
};

const findIdCustomer = async (idCustomer: String) => {
  const responseCustomer = await CustomersModel.findById(idCustomer);
  return responseCustomer;
};

const findCustomer = async () => {
  const responseCustomer = await CustomersModel.find();
  return responseCustomer;
};

const findByIdAndUpdateCustomer = async (_id:String,updata:Customer) => { 
  const responseCustomer = await CustomersModel.findByIdAndUpdate(_id,updata,{new:true})
  return responseCustomer;
};

const findByIdAndDeleteCustomer = async (idCustomer: String) => {
  const responseCustomer = await CustomersModel.findByIdAndDelete(idCustomer);
  return responseCustomer;
};

export {
  insertCustomer,
  findByIdAndUpdateCustomer,
  findIdCustomer,
  findByIdAndDeleteCustomer,
  findCustomer,
};
