import {dashboardDataSchema} from '@/features/dashboard/model/schema';
import type {DashboardData} from '@/features/dashboard/model/types';
import {mapToDashboardData} from './mappers';
import {getCarts, getProducts, getUsers} from './requests';

export async function getDashboardData(): Promise<DashboardData> {
    const [usersResponse, productsResponse, cartsResponse] =
        await Promise.all([getUsers(), getProducts(), getCarts()]);

    const mappedData = mapToDashboardData(
        usersResponse,
        productsResponse,
        cartsResponse,
    );
    return dashboardDataSchema.parse(mappedData);
}
