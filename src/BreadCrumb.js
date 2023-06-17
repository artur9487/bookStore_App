/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './CustomHook';

const BreadCrumb = () => {
	let { author } = useParams();
	const newAuthor = author.replace(' ', '+');
	const [data] = useFetch(newAuthor, 10);

	return (
		<div className='container mx-auto w-2 f-2 bg-gray-700'>
			{data.map((item) => {
				return item.map((item2, indx) => {
					const ID = item2.id;
					const Title = item2.volumeInfo.title;
					const source = item2.volumeInfo.imageLinks;
					console.log(source);
					return <div key={indx}></div>;
				});
			})}
		</div>
	);
};

export default BreadCrumb;
