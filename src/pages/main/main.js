import React, {useEffect, useState} from "react";

import './main.scss';

import {PHRASES, CARD_LABELS } from '../../utils';

import {
	MenuHeader,
	Banner,
	CardDashboard,
	BoxAreaDetails,
	Loading
} from "../../components";

import ImgBanner from '../../assets/images/img-banner-blue.jpg';

import ImgJuros from '../../assets/images/juros.jpg';
import ImgParcelas from '../../assets/images/parcelas.jpg';
import ImgDetalhes from '../../assets/images/detalhes.jpg';
import ImgCallCenter from '../../assets/images/call-center.jpg';

import { getUser } from "../../services/api";

export default function Main() {

	const [isLoading, setIsLoading] = useState(false);
	const [cardDetailsSelected, setCardDetailsSelected] = useState(null);
	const [user, setUser] = useState([]);

	useEffect(()=> {
		getUserDashboard();
	}, [])

	async function getUserDashboard() { 
		setIsLoading('Carregando dados do usuário ...');
		const response = await getUser() 
		if(response) {
			setUser(response);
			setIsLoading(false);
		}
		setIsLoading(false);
	} 

	function handleClickCardButton(card) {
		if(card === CARD_LABELS.DETALHES) {
			setCardDetailsSelected(card)
		} else if (card === CARD_LABELS.PARCELAS) {
			setCardDetailsSelected(card)
		} else if (card === CARD_LABELS.JUROS) {
			setCardDetailsSelected(card)
		} else if (card === CARD_LABELS.SUPORTE) {
			setCardDetailsSelected(card)
		}
	}

	function handleClickCloseBoxAreaDetails() {
		setCardDetailsSelected(null)
	}

	return(
		<div className="ldb-main">
			<div className="ldb-header">
				<MenuHeader user={user} />
				<Banner img={ImgBanner} msg1={PHRASES.phrase_01} />
			</div>
			<div className="ldb-content">
				<Loading loading={isLoading} message={isLoading ? isLoading : 'Carregando ...'}/>
				{!cardDetailsSelected ?
					<>
						<CardDashboard icon={ImgDetalhes} label={CARD_LABELS.DETALHES} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
						<CardDashboard icon={ImgParcelas} label={CARD_LABELS.PARCELAS} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
						<CardDashboard icon={ImgJuros} label={CARD_LABELS.JUROS} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
						<CardDashboard icon={ImgCallCenter} label={CARD_LABELS.SUPORTE} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
					</>
					: 
					<BoxAreaDetails card={cardDetailsSelected} onClickClose={()=> handleClickCloseBoxAreaDetails()} userInfo={user} />
				}
				
			</div>
			<div className="ldb-footer">

			</div>	
		</div> 
	)
}