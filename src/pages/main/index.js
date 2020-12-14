import React, {useContext, useEffect, useState} from "react";
import './main.scss';
import LoadingContext from '../../context/LoadingContext';
import UserContext from '../../context/UserContext';

import { PHRASES, CARD_LABELS } from '../../utils';

import {
	MenuHeader,
	Banner,
	CardDashboard,
	BoxAreaDetails
} from "../../components";

import ImgBanner from '../../assets/images/img-banner-blue.jpg';
import ImgJuros from '../../assets/images/juros.jpg';
import ImgParcelas from '../../assets/images/parcelas.jpg';
import ImgDetalhes from '../../assets/images/detalhes.jpg';
import ImgCallCenter from '../../assets/images/call-center.jpg';

import { getUser } from "../../services/api";

export default function Main() {

	const [cardDetailsSelected, setCardDetailsSelected] = useState(null);

	const loading = useContext(LoadingContext);
	const {updateUser} = useContext(UserContext);

	useEffect(()=> {
		getUserDashboard();
	}, [])

	async function getUserDashboard() { 
		loading.showLoading('Carregando dados do usuário ...');
		const response = await getUser() 
		if(response) {
			updateUser(response);
			loading.hideLoading();
		}
		loading.hideLoading();
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
				<MenuHeader />
				<Banner img={ImgBanner} msg1={PHRASES.phrase_01} />
			</div>
			<div className="ldb-content">
				{!cardDetailsSelected ?
					<>
						<CardDashboard icon={ImgDetalhes} label={CARD_LABELS.DETALHES} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
						<CardDashboard icon={ImgParcelas} label={CARD_LABELS.PARCELAS} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
						<CardDashboard icon={ImgJuros} label={CARD_LABELS.JUROS} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
						<CardDashboard icon={ImgCallCenter} label={CARD_LABELS.SUPORTE} onClickButton={(e)=> handleClickCardButton(e.target.value)} />
					</>
					: 
					<BoxAreaDetails card={cardDetailsSelected} onClickClose={()=> handleClickCloseBoxAreaDetails()} />
				}
				
			</div>
			<div className="ldb-footer">

			</div>	
		</div> 
	)
}