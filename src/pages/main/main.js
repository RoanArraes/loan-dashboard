import React, {useState} from "react";

import './main.scss';

import { LABELS, PHRASES } from '../../utils';

import {
	MenuHeader,
	Banner
} from "../../components/index";

import UserImgDefault from '../../assets/images/image-user.jpg';
import ImgBanner from '../../assets/images/pessoa-estudando.jpg';

const user = {
  firstName: 'Ana Maria',
  photo: UserImgDefault
};

export default function Main() {
	return(
		<div className="ldb-main">
			<div className="ldb-header">
				<MenuHeader user={user} />
				<Banner img={ImgBanner} msg1={PHRASES.phrase_01} msg2={PHRASES.phrase_02}/>
			</div>
			<div className="ldb-content">

			</div>
			<div className="ldb-footer">

			</div>	
		</div> 
	)
}