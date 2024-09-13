import React from 'react';
import {useParams} from 'react-router-dom';

const Detail = (props) => {
	let {a}= useParams();
	return (
		<div className='mt20'> 
			<div className='detailCard'>
				<div className='imgWrap'>
					<img src={props.datas[a].imges} width="100%" alt="조명" />
				</div>
				<div className='info'>
					<h4 className="mt20">{props.datas[a].title}</h4>
					<p>{props.datas[a].content}</p>
					<p className='price'>{props.datas[a].price}</p>
					<button className='btn'>주문하기</button>
				</div>
			</div>
		</div>
	);
};

export default Detail;