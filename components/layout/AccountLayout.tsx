import { GearIcon } from '@radix-ui/react-icons';

import { Button } from '@mantine/core';
import TransakWidget from 'components/biconomy/Transak';
import Card from 'components/common/Card';

const Stats = ({ label, value }) => {
	return (
		<div>
			<p className="uppercase font-medium text-gray-500">{label}</p>
			<b className="text-2xl">{value}</b>
		</div>
	);
};

const AccountLayout = ({ children }) => {
	return (
		<>
			<div className="brand-banner">
				<img src="/assets/banner.png" alt="brand-banner" />
			</div>
			<section className="mx-auto max-w-screen-xl px-1 md:px-4 sm:px-6 relative -mt-4">
				<Card className="grid md:grid-cols-12 p-0">
					<>
						<div className="col-span-3 pl-5 pt-5 border-r pr-5">
							<div className="grid place-items-center">
								<img
									alt=""
									src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
									className="w-40 h-40"
								/>
							</div>
							<div className="mt-8 pb-10">
								<b>Starbucks</b>
								<p className="text-gray-500">@starbucks.lens</p>
								<div className="space-y-5">
									<p className="text-gray-500 mt-5">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua.
									</p>

									<Button
										color="default"
										radius="lg"
										variant="default"
										leftIcon={<GearIcon className="w-4 h-4 text-gray-500" />}
									>
										Edit profile
									</Button>

									<Stats label="Total Revenue" value="200000" />
									<Stats label="withdrawable Revenue" value="200000" />

									<TransakWidget />
								</div>
							</div>
						</div>
						<div className="col-span-9 p-0">{children}</div>
					</>
				</Card>
			</section>
		</>
	);
};

export default AccountLayout;
