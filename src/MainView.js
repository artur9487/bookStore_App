/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useFetch from './CustomHook';

const MainView = () => {
	const navigate = useNavigate();
	const [searchPattern, setSetPattern] = useState('');
	const [data] = useFetch(searchPattern, 10);

	const handleClick = (author) => {
		navigate(`/${author}`);
	};

	console.log(data);

	return (
		<div className='container flex items-center flex-row bg-gray-700 w-full h-full border-2 border-indigo-400'>
			<div className='w-1/2'>
				<form className='flex flex-col py-4'>
					<label className='font-medium text-white' htmlFor='name'>
						Search for an author
					</label>
					<input
						className='bg-gray-600'
						name='name'
						type='text'
						value={searchPattern}
						onChange={(e) => setSetPattern(e.target.value)}
					/>
				</form>
				<table className=' mx-auto rounded-lg text-white'>
					<thead>
						<tr className='border-b-2 border-gray-800'>
							<th>Lp</th>
							<th>Author</th>
							<th>Kind</th>
						</tr>
					</thead>
					<tbody>
						{data === undefined ? (
							<tr>
								<td className='border border-slate-300 ...'>
									"Loading"
								</td>
							</tr>
						) : (
							data.map((item, index) => {
								return item.map((item2, index2) => {
									const Author = item2.volumeInfo.authors;
									const Kind = item2.volumeInfo.categories;

									return (
										<tr
											className='even:bg-gray-800 p-3 hover:bg-gray-600  py-5 cursor-pointer'
											onClick={() => handleClick(Author)}
											key={index2}>
											<td className='py-2 px-2'>{index2 + 1}.</td>
											<td className='py-2 px-2'>{Author}</td>
											<td className='py-2 px-2'>{Kind}</td>
										</tr>
									);
								});
							})
						)}
					</tbody>
				</table>
			</div>
			<Outlet />
		</div>
	);
};

export default MainView;
