import { format } from "date-fns";
import _ from "lodash";
import { Card } from "react-bootstrap";

import { News } from "../../../models/News";
import { SHARED_CONSTANTS } from "../../../shared/constants";

interface Props {
	news: News;
}

export default function NewsItem({ news }: Readonly<Props>) {
	return (
		<Card className="h-100 border-0">
			<Card.Img
				variant="top"
				src={!_.isNil(news.urlToImage) ? news.urlToImage : "/assets/images/noImage.jpg"}
				alt={news.title}
				height={250}
			/>
			<Card.Body>
				<Card.Title className="fs-6">
					<a className="text-decoration-none" href={news.url} target="_blank" rel="noreferrer">
						{news.title}
					</a>
				</Card.Title>
				<Card.Text>{news.description}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<div className="d-flex justify-content-between text-muted">
					<small>{news.source.name}</small>
					<small>
						{format(
							new Date(news.publishedAt),
							`${SHARED_CONSTANTS.DATE_FORMAT} - ${SHARED_CONSTANTS.TIME_FORMAT}`
						)}
					</small>
				</div>
			</Card.Footer>
		</Card>
	);
}
