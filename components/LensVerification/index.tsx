import { GetPosts } from 'graphql/queries';
import { useEffect, useState } from 'react';
import { useQuery } from 'urql';

const LensVerification = ({ lensHandle = null, lensVerifyHandle }) => {
	const [verified, setVerified] = useState(false);

	const [result] = useQuery({
		query: GetPosts,
		variables: {
			request: {
				handle: lensHandle,
			},
		},
	});

	useEffect(() => {
		if (result && result.data && result.data.publications) {
			const postList = result.data.publications.items;

			const doesPostMentioned = postList.some((i) => i.metadata.content.includes('@' + lensVerifyHandle));
			setVerified(doesPostMentioned);
		}
	}, [result]);

	return <>{verified ? 'Verified' : 'Verify now'}</>;
};

export default LensVerification;
