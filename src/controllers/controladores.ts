import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertCustomer,
  findByIdAndDeleteCustomer,
  findByIdAndUpdateCustomer,
  findCustomer,
  findIdCustomer,
} from "../service/Customers.service";


const getCustomers = async (req: Request, res: Response) => {
  try {
    const responseCustomers = await findCustomer();
    res.send(responseCustomers);
  } catch (error) {
    handleHttp(res, "ERROR_GET_CUSTOMERS");
  }
};

const getIdCustomers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseCustomers = await findIdCustomer(id);
    res.send(responseCustomers);
  } catch (error) {
    handleHttp(res, "ERROR_GET_CUSTOMERS");
  }
};

const postCustomers = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseCustomer = await insertCustomer(body);
    res.send(responseCustomer);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_CUSTOMERS");
  }
};

const delecteCustomers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseCustomer = await findByIdAndDeleteCustomer(id);
    res.send(responseCustomer);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_CUSTOMERS");
  }
};

const putCustomers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const responseCustomer = await findByIdAndUpdateCustomer(id, body);
    res.send(responseCustomer);
  } catch (error) {
    handleHttp(res, "ERROR_PUT_CUSTOMERS");
  }
};

export {
  getCustomers,
  getIdCustomers,
  postCustomers,
  putCustomers,
  delecteCustomers,
};
