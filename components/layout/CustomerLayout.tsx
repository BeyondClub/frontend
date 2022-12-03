import Header from 'components/brandPage/Header';

const CustomerLayout = ({ children }) => {
	return (
		<>
			<div className="outer-bg">
				<Header />
				{children}
			</div>
		</>
	);
};

export default CustomerLayout;
