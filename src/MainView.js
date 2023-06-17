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

	return (
		<div className='container flex items-center flex-col bg-gray-700 w-full h-screen border-2 border-indigo-400'>
			<form className='flex flex-col py-4'>
				<label htmlFor='name'>Search for an author</label>
				<input
					name='name'
					type='text'
					value={searchPattern}
					onChange={(e) => setSetPattern(e.target.value)}
				/>
			</form>
			<table className=' bg-gray-800 mx-auto rounded-lg text-white'>
				<thead>
					<tr className='border-b-2 border-indigo-400'>
						<th>Lp</th>
						<th>Author</th>
						<th>Kind</th>
					</tr>
				</thead>
				<tbody>
					{data === undefined ? (
						<tr>
							<td className='border border-slate-300 ...'>"Loading"</td>
						</tr>
					) : (
						data.map((item, index) => {
							return item.map((item2, index2) => {
								const Author = item2.volumeInfo.authors;
								const Kind = item2.volumeInfo.categories;

								return (
									<tr
										className='border-b-2 border-indigo-400 py-5'
										onClick={() => handleClick(Author)}
										key={index2}>
										<td>{index2 + 1}</td>
										<td>{Author}</td>
										<td>{Kind}</td>
									</tr>
								);
							});
						})
					)}
				</tbody>
			</table>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainView;
