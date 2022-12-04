import Card from 'components/common/Card';
import Layout from 'components/layout';
import { useState } from 'react';

const TabList = ['Summary', 'Analytics', 'Verify a Ticket', 'NFT Minted Users'];

const FAQItems = ({ question, answer }) => {
	return (
		<div>
			<b>{question}</b>
			<p>{answer}</p>
		</div>
	);
};

const Summary = () => {
	return (
		<div>
			<img
				className=""
				src="https://rukminim1.flixcart.com/image/416/416/l1v1uvk0/e-gift-voucher/o/c/u/open-starbucks-anyone-2000-original-imagdc2cu5sygyzj.jpeg?q=70"
			/>

			<div className="space-y-5">
				<p className="my-5 text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odit pariatur totam,
					repellendus voluptatibus accusantium autem, iusto nostrum fuga voluptatum cum modi? Perspiciatis
					dicta quas necessitatibus vero commodi qui eveniet.
				</p>

				<FAQItems question="Duration" answer={'2022/12/01 0:00 - 2022/12/25, 0:00 (UTC)'} />
				<FAQItems question="How can I get it?" answer={'You can purchase it with $10'} />
				<FAQItems
					question="What can I access if I have this collectible?"
					answer={'You can get the access of special Christmas Event'}
				/>
				<div className='w-84'>
					<div>
						<p className="font-bold text-2xl my-2">Analytics</p>
					</div>
					<div className="flex justify-between align-center mx-4">
						<div>
							<p className="font-semibold text-xl">1500</p>
							<p>Owners</p>
						</div>
						<div>
							<p className="font-semibold text-xl">$10,000</p>
							<p>Total Revenues</p>
						</div>
						<div>
							<p className="font-semibold text-xl">150</p>
							<p>Weekly Mints</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function Dashboard() {
	const [tab, setTab] = useState(0);

	return (
		<Layout className="bg-blue-50 min-h-screen">
			<div className="brand-banner">
				<img src="/assets/banner.png" alt="brand-banner" />
			</div>
			<section className="mx-auto max-w-screen-xl px-1 md:px-4 sm:px-6 relative -mt-4">
				<Card className="grid md:grid-cols-12 p-0">
					<div className="col-span-3 pl-5 pt-5 border-r pr-5">
						<div className="grid place-items-center"></div>
						<div className="mt-8 pb-10 space-y-1    ">
							{TabList.map((option, index) => {
								return (
									<a
										key={index}
										onClick={() => setTab(index)}
										className={`${
											index === tab ? 'bg-gray-50 text-gray-900' : 'text-gray-500'
										} rounded-md block p-1 hover:bg-gray-50 cursor-pointer`}
									>
										{option}
									</a>
								);
							})}
						</div>
					</div>
					<div className="col-span-9 px-10">
						<div className="flex justify-between mt-5 p-5">
							<h4 className="font-bold text-xl mb-5">{TabList[0]}</h4>
						</div>
						<div className="pb-10">{tab == 0 ? <Summary /> : null}</div>
					</div>
				</Card>
			</section>
		</Layout>
	);
}
