import axios from 'axios';

let base = 'http://localhost:1024/api/v1';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };


export const removeUser = params => { return axios.delete(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.delete(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.put(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.post(`${base}/user/add`, { params: params }); };