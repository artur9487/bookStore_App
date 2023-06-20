/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './CustomHook';

const BreadCrumb = () => {
	let { author } = useParams();
	const newAuthor = author.replace(' ', '+');
	const [data] = useFetch(newAuthor, 4);

	return (
		<div className='p-10  w-1/2 h-screen bg-gray-700 border-white-200 border-4'>
			<p>Your 4 books</p>
			<div className='grid grid-cols-2 gap-2 h-screen'>
				{data.map((item) => {
					return item.map((item2, indx) => {
						const ID = item2.id;
						const Title = item2.volumeInfo.title;
						console.log(item2.volumeInfo.imageLinks);
						const source =
							item2.volumeInfo.imageLinks?.smallThumbnail;
						return (
							<div
								className='border border-white-300 flex flex-col items-center justify-center'
								key={indx}>
								<div className='border border-white-300 basis-1/2 w-1/2'>
									<img
										className='w-full object-cover h-1/2'
										alt='cover image'
										src={source}
									/>
									<p className='p-3 text-center text-white'>
										{Title}
									</p>
								</div>
							</div>
						);
					});
				})}
			</div>
		</div>
	);
};

export default BreadCrumb;
