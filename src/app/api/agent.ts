import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL;


const sleep = () => new Promise(resolve => setTimeout(resolve, 100));

const responseBody = (response: AxiosResponse) => response.data; //ให้ส่งข้อมูลออกไป

axios.interceptors.response.use(async response => {
    if (import.meta.env.NODE_ENV === 'development') await sleep();


    return response
}, (error: AxiosError) => {
    return Promise.reject(error.response) //ส่งไปให้ catch(error) นำไปใช้ได้เลย
});

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Account = {
    login: (value: any) => requests.post('Accounts/Login', value),
    register: (value: any) => requests.post('Accounts/RegisterAccount', value)
};
const Trip = {
    createtrip:(value: any) => requests.post('Trips/GetTrip', value),
    gettrip: () =>
        requests.get('Trips/GetTrip')
};

const agent = {
    Account,
    Trip
};

export default agent;
