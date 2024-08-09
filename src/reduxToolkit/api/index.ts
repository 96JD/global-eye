import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BACKEND_API_URL = "https://jacob-dolorzo-global-eye-server.onrender.com";

const API_VERSION_1 = "api/v1";

export const API_URLS = {
	NEWS: `${BACKEND_API_URL}/${API_VERSION_1}/news`
};

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API_URL }),
	endpoints: () => ({})
});
