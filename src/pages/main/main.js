import React, {useState} from "react";

import './main.scss';

import { LABELS, PHRASES } from '../../utils';

import {
	MenuHeader,
	Banner,
	CardDashboard
} from "../../components/index";

import UserImgDefault from '../../assets/images/image-user.jpg';
import ImgBanner from '../../assets/images/img-banner-blue.jpg';

import ImgJuros from '../../assets/images/juros.jpg';
import ImgParcelas from '../../assets/images/parcelas.jpg';
import ImgDetalhes from '../../assets/images/detalhes.jpg';
import ImgCallCenter from '../../assets/images/call-center.jpg';



const user = {
  firstName: 'Ana Maria',
	photo: UserImgDefault
};

function handleClickCardButton() {

}

export default function Main() {
	return(
		<div className="ldb-main">
			<div className="ldb-header">
				<MenuHeader user={user} />
				<Banner img={ImgBanner} msg1={PHRASES.phrase_01} />
			</div>
			<div className="ldb-content">
				<CardDashboard icon={ImgDetalhes} label={'Detalhes'} onClickButton={(e)=> handleClickCardButton(e)} />
				<CardDashboard icon={ImgParcelas} label={'Parcelas'} onClickButton={(e)=> handleClickCardButton(e)} />
				<CardDashboard icon={ImgJuros} label={'Juros'} onClickButton={(e)=> handleClickCardButton(e)} />
				<CardDashboard icon={ImgCallCenter} label={'Suporte'} onClickButton={(e)=> handleClickCardButton(e)} />
			</div>
			<div className="ldb-footer">

			</div>	
		</div> 
	)
}