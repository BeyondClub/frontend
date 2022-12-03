const Card = ({ children, className = '' }) => {
	return <div className={`bg-white shadow-sm rounded-md p-5 ${className}`}>{children}</div>;
};

export default Card;
