import { Button, Table } from '@mantine/core';
import Layout from 'components/layout';
import AccountLayout from 'components/layout/AccountLayout';
import Link from 'next/link';

export default function Dashboard() {
	return (
		<Layout className="bg-blue-50 min-h-screen">
			<AccountLayout>
				<div className="flex justify-between my-5 p-5">
					<h4 className="font-bold text-xl mb-5">Create a campaign</h4>

					<Link passHref href="/campaign/create">
						<Button color="dark" radius="lg">
							Create a campaign
						</Button>
					</Link>
				</div>
				<Table striped>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Type</th>
							<th>Start Date</th>
							<th>End Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className="grid place-items-center">
									<img
										className="w-16 text-right"
										src="https://rukminim1.flixcart.com/image/416/416/l1v1uvk0/e-gift-voucher/o/c/u/open-starbucks-anyone-2000-original-imagdc2cu5sygyzj.jpeg?q=70"
									/>
								</div>
							</td>
							<td>Christmars</td>
							<td>Paid</td>
							<td>Dec 2, 2022</td>
							<td>Dec 2, 2022</td>
							<td>
								<Link href="/campaign/details/ids" passHref>
									<Button color="default" radius="lg" variant="default">
										Details
									</Button>
								</Link>
							</td>
						</tr>
					</tbody>
				</Table>
			</AccountLayout>
		</Layout>
	);
}
