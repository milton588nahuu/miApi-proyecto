import {compare,hash} from "bcryptjs"

const encrypt = async ( data :string) => {
    const encryptData = await hash(data,10) 
    return encryptData
}

const verifity = async (data:string,data_db:string) => {
    const results = await compare(data,data_db)
    results ? console.log("success"):console.log("failed")
    return results
}

export {
    encrypt,
    verifity
}