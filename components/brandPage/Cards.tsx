import Link from 'next/link';
import { useRouter } from 'next/router';

const Cards = (props) => {
	const router = useRouter();

	return (
		<div className="card-outer">
			<div className="card-img">
				<img src={props.img} alt="card-bg-img" />
			</div>
			<div className="card-info">
				<div className="card-info-heading">
					<h2>{props.title}</h2>
				</div>
				<div className="card-info-details">
					{props.line1 ? <h2>• {props.line1}</h2> : <h2></h2>}
					{props.line2 ? <h2>• {props.line2}</h2> : <h2></h2>}
					{props.line3 ? <h2>• {props.line3}</h2> : <h2></h2>}
				</div>
				<div className="card-info-timelines">
					<div className="card-info-timelines-data">
						{props.time ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1}
								stroke="rgba(0, 0, 0, 0.687)"
								className="w-5 h-5 mr-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						) : null}
						<h2>{props.time}</h2>
					</div>
					<div className="card-info-timelines-data">
						{props.redeemed ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1}
								stroke="rgba(0, 0, 0, 0.687)"
								className="w-5 h-5 mr-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
								/>
							</svg>
						) : null}
						{props.redeemed ? (
							<h2>
								{props.redeemed}/{props.total} redeemed
							</h2>
						) : null}
					</div>
				</div>
				<div className="card-btn">
					<Link href={'/brand/' + router.query.profile + '/ID'} passHref>
						<button className="card-btn-txt">View</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cards;
