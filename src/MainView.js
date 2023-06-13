/** @format */

import React from 'react';
import axios from 'axios';

const MainView = () => {
	const authors = ['Stephen King', 'Brandon Sanderson', 'Rowling Tolkien'];

	const data = authors
		.map((author) => author.replace(' ', '+'))
		.map((author2) => {
			return axios
				.get(
					`https://www.googleapis.com/books/v1/volumes?q=${author2}&key=AIzaSyBtCL1XBIUeV7VUj9Wb30tqUQ2KDwqKQNM`
				)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		});

	console.log(data);

	return (
		<table>
			<thead>
				<tr>
					<th className='border border-slate-300 ...'>Ko</th>
					<th className='border border-slate-300 ...'>City</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className='border border-slate-300 ...'>Indiana</td>
					<td className='border border-slate-300 ...'>Indianapolis</td>
				</tr>
				<tr>
					<td className='border border-slate-300 ...'>Ohio</td>
					<td className='border border-slate-300 ...'>Columbus</td>
				</tr>
				<tr>
					<td className='border border-slate-300 ...'>Michigan</td>
					<td className='border border-slate-300 ...'>Detroit</td>
				</tr>
			</tbody>
		</table>
	);
};

export default MainView;
