import { Schema, model } from "mongoose";
import {
  Address,
  Customer
} from "../interfaces/customers.interface";

const AddressSchema = new Schema<Address>({
  nameOfTheStreet: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
});

const CustomerShemas = new Schema<Customer>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    identification: {
      type: Number,
      required: true,
      unique:true
    },
    address: {
      type: AddressSchema,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection:"Customers"
  }
);

const CustomersModel = model("Customers", CustomerShemas);
export default CustomersModel;
