import _ from "lodash";

import { API_URLS, apiSlice } from "../";
import { News } from "../../../models/News";

interface AllNewsResponse {
	articles: News[];
}

export const newsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllNews: builder.query<AllNewsResponse, string>({
			query: (selectedSearchedSource: string) => `${API_URLS.NEWS}/fetch-all-news(${selectedSearchedSource})`,
			transformResponse: (allNewsResponse: AllNewsResponse) => {
				allNewsResponse.articles = _.orderBy(
					allNewsResponse.articles,
					[(article) => new Date(article.publishedAt)],
					["desc"]
				);
				return allNewsResponse;
			}
		})
	})
});
