/** @format */

import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const MainView = () => {
	const authors = ['Stephen King', 'Brandon Sanderson', 'Rowling Tolkien'];
	const [data, setData] = useState([]);

	/*useEffect(() => {
		authors
			.map((author) => author.replace(' ', '+'))
			.map((author2) => {
				return axios
					.get(
						`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author2}&key=AIzaSyBtCL1XBIUeV7VUj9Wb30tqUQ2KDwqKQNM+&maxResults=10`
					)
					.then((res) => {
						setData(res.data.items);
					})
					.catch((err) => console.log(err));
			});
	}, [authors]);*/

	useEffect(() => {
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes?q=inauthor:Brandon+Sanderson&key=AIzaSyBtCL1XBIUeV7VUj9Wb30tqUQ2KDwqKQNM+&maxResults=10`
			)
			.then((res) => {
				setData(res.data.items);
			})
			.catch((err) => console.log(err));
	}, [authors]);

	console.log(data);

	return (
		<table>
			<thead>
				<tr>
					<th className='border border-slate-300 ...'>ID</th>
					<th className='border border-slate-300 ...'>Author</th>
					<th className='border border-slate-300 ...'>Title</th>
					<th className='border border-slate-300 ...'>Kind</th>
				</tr>
			</thead>
			<tbody>
				{/*data.map((item) => {
					const ID = item.accessInfo.id;
					const Title = item.volumeInfo.title;
					const Author = item.volumeInfo.authors;

					return (
						<tr>
							<td className='border border-slate-300 ...'>{ID}</td>
							<td className='border border-slate-300 ...'>{Author}</td>
							<td className='border border-slate-300 ...'>{Title}</td>
						</tr>
					);
				})*/}
			</tbody>
		</table>
	);
};

export default MainView;
