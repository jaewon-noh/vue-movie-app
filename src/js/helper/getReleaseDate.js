export default ({year = '2019', month = '11', day = '18'}) => {
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return `${monthNames[Number(month) - 1]} ${Number(day)}, ${year}`;
};
