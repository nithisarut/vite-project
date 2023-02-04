import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { DataRegister, Login, Register, RegisterInput } from "../models/Account";


interface AccountState {
    account: DataRegister | null;
    //roleData: Role[] | null;
    token: string | null;
    //tokenExpirationDate: Date | null;
}

const initialState: AccountState = {
    account: null,
    //roleData: null,
    token: null,
    //tokenExpirationDate: null,
};

export interface setUpAccount {
    account: DataRegister;
    token: string;
    //expirationDate?: Date;
};

export const loadAccountStorage = () =>
    JSON.parse(localStorage.getItem("account")!);

export const loginAccount = createAsyncThunk<any, Login>(
    'account/login',
    async (data, thunkAPI) => {
        try {
            let formData = new FormData();
            formData.append("Email", data.email);
            formData.append("Password", data.password);
            const result = await agent.Account.login(formData);
            const { ...payload } = result
            localStorage.setItem('account', JSON.stringify(result.data))
            console.log(payload)
            return payload;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);

export const registerAccount = createAsyncThunk<any, RegisterInput>(
    'account/register',
    async (data, thunkAPI) => {
        try {
            let formData = new FormData();
            formData.append("Fullname", data.fullname);
            formData.append("Email", data.email);
            formData.append("Password", data.password);
            formData.append("PhoneNumber", data.phonenumber);
            formData.append("FormFiles", data.filefrom);
            formData.append("RoleID", "1");
            const result = await agent.Account.register(formData);
            return result;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
);
export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginAccount.fulfilled, (state, action) => {
            if (action.payload.result) {
                state.account = action.payload.result.account;
                state.token = action.payload.result.token;
            };
        });
    },



});

export const { } = accountSlice.actions