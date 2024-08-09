import { getParamFromUrl } from "96jd-url-params-utils";
import _ from "lodash";
import { useEffect } from "react";

import { APP_URL_PARAMS } from "../../AppUrlParams";
import { newsApiSlice } from "../../reduxToolkit/api/apiSlices/newsApiSlice";
import { globalSliceActions, globalSliceSelectors } from "../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../reduxToolkit/store";
import Spinner from "../../shared/components/Loader/components/Spinner";
import NewsList from "./components/NewsList";
import NewsSelectInput from "./components/NewsSelectInput";

export default function NewsPage() {
	const dispatch = useAppDispatch();

	const selectedSearchedSource = useAppSelector(globalSliceSelectors.selectedSearchedSource);

	const selectedSearchedSourceParam = getParamFromUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE);
	const emptySelectedSearchedSourceParam = _.isNil(selectedSearchedSourceParam);

	const { isError } = newsApiSlice.useFetchAllNewsQuery(selectedSearchedSource, {
		skip: !emptySelectedSearchedSourceParam && selectedSearchedSourceParam !== selectedSearchedSource
	});

	useEffect(() => {
		if (!emptySelectedSearchedSourceParam) {
			dispatch(globalSliceActions.setSelectedSearchedSource(selectedSearchedSourceParam));
		}
	}, [dispatch, emptySelectedSearchedSourceParam, selectedSearchedSourceParam]);

	return isError ? (
		<Spinner />
	) : (
		<>
			<NewsSelectInput />
			<NewsList />
		</>
	);
}
