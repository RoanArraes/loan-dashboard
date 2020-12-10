import React, {useState} from "react";

import './main.scss';

import {
	MenuHeader,
	Banner
} from "../../components/index";

import UserImgDefault from '../../assets/images/image-user.jpg';

const user = {
  firstName: 'Ana Maria',
  photo: UserImgDefault
};

export default function Main() {
	return(
		<div className="ldb-main">
			<div className="ldb-header">
				<MenuHeader user={user} />
				<Banner />
			</div>
			<div className="ldb-content">

			</div>
			<div className="ldb-footer">

			</div>	
		</div> 
	)
}