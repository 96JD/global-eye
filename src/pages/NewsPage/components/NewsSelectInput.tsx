import { addParamToUrl } from "96jd-url-params-utils";
import _ from "lodash";
import { ChangeEvent, useCallback, useMemo } from "react";
import { Form } from "react-bootstrap";

import { APP_URL_PARAMS } from "../../../AppUrlParams";
import { NEWS_CONSTANTS } from "../../../models/News";
import { globalSliceActions, globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../reduxToolkit/store";

export default function NewsSelectInput() {
	const dispatch = useAppDispatch();

	const selectedSearchedSource = useAppSelector(globalSliceSelectors.selectedSearchedSource);

	const onNewsSourceChange = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			switch (e.target.value) {
				case "BBC":
					dispatch(globalSliceActions.setSelectedSearchedSource("sources=bbc-news"));
					addParamToUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE, "sources=bbc-news");
					return;
				case "Bitcoin":
					dispatch(globalSliceActions.setSelectedSearchedSource("q=bitcoin"));
					addParamToUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE, "q=bitcoin");
					return;
				case "Food":
					dispatch(globalSliceActions.setSelectedSearchedSource("q=food-recipes"));
					addParamToUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE, "q=food-recipes");
					return;
				case "Football":
					dispatch(globalSliceActions.setSelectedSearchedSource("q=football"));
					addParamToUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE, "q=football");
					return;
				case "Syria":
					dispatch(globalSliceActions.setSelectedSearchedSource("q=syria"));
					addParamToUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE, "q=syria");
					return;
				case "Basketball":
					dispatch(globalSliceActions.setSelectedSearchedSource("q=basketball"));
					addParamToUrl(APP_URL_PARAMS.SELECTED_SEARCHED_SOURCE, "q=basketball");
					return;
			}
		},
		[dispatch]
	);

	const selectedSearchedSourceParam = useMemo(
		() =>
			_.find(NEWS_CONSTANTS.SOURCES, (source) =>
				_.includes(_.toLower(selectedSearchedSource), _.toLower(source.value))
			)?.value,
		[selectedSearchedSource]
	);

	return (
		<div className="d-flex flex-column align-items-center m-auto w-50 pb-4">
			<Form.Label htmlFor="news-sources" className="main-color fw-bold">
				Sources
			</Form.Label>
			<Form.Select id="news-sources" size="sm" value={selectedSearchedSourceParam} onChange={onNewsSourceChange}>
				{_.map(NEWS_CONSTANTS.SOURCES, (source) => (
					<option key={source.id} value={source.value}>
						{source.value}
					</option>
				))}
			</Form.Select>
		</div>
	);
}
