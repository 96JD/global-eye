import { getParamFromUrl } from "96jd-url-params-utils";
import _ from "lodash";
import { Col, Row } from "react-bootstrap";

import { APP_URL_PARAMS } from "../../../AppUrlParams";
import { newsApiSlice } from "../../../reduxToolkit/api/apiSlices/newsApiSlice";
import { globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppSelector } from "../../../reduxToolkit/store";
import Spinner from "../../../shared/components/Loader/components/Spinner";
import NewsItem from "./NewsItem";

export default function NewsList() {
	const selectedSearchedSource = useAppSelector(globalSliceSelectors.selectedSearchedSource);

	const selectedSearchedSourceParam = getParamFromUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE);

	const { data: allNewsResponse, isFetching } = newsApiSlice.useFetchAllNewsQuery(selectedSearchedSource, {
		skip: !_.isNil(selectedSearchedSourceParam) && selectedSearchedSourceParam !== selectedSearchedSource
	});

	return isFetching ? (
		<Spinner />
	) : (
		<Row className="g-4">
			{_.map(allNewsResponse?.articles, (article) => (
				<Col key={article.url} sm={6} lg={4}>
					<NewsItem news={article} />
				</Col>
			))}
		</Row>
	);
}
