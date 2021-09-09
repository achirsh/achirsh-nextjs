import { requestIns } from '../util/request';
import { API_PATH } from '../config/index';

interface IParams {
    id: string
}

// 获取文章列表
export async function getData() {
    const response = (await requestIns.get(
        `${API_PATH}/api/article`
    )).data;

    return response;
}

// 获取文章详情
export async function getDetail(id: any) {
    const response = (await requestIns.get(
        `${API_PATH}/api/article/${id}`
    )).data;

    return response;
}