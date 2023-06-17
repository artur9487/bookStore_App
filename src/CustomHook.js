/** @format */

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (authors, num) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${authors}"&maxResults=${num}&key=AIzaSyBtCL1XBIUeV7VUj9Wb30tqUQ2KDwqKQNM`
			)
			.then((res) => {
				setData((prevState) => {
					return [res.data.items];
				});
			})
			.catch((err) => console.log(err));
	}, [authors]);

	return [data];
};

export default useFetch;
