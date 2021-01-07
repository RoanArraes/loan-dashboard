import React, { useState } from "react";
import {PHRASES, CARD_LABELS} from '../../utils';

import{
	MainArea,
	HeaderArea,
	BodyArea,
	FooterArea
} from './styles'

import {
	MenuHeader,
	Banner,
	CardDashboard,
	BoxAreaDetails,
	Footer
} from "../../components";

import ImgBanner from '../../assets/images/img-banner-blue.jpg';
import ImgJuros from '../../assets/images/juros.jpg';
import ImgParcelas from '../../assets/images/parcelas.jpg';
import ImgDetalhes from '../../assets/images/detalhes.jpg';
import ImgCallCenter from '../../assets/images/call-center.jpg';

export default function Main(){

	const [cardDetailsSelected, setCardDetailsSelected] = useState(null);

	function handleClickCardButton(card){
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

	function handleClickCloseBoxAreaDetails(){
		setCardDetailsSelected(null)
	}

	return(
		<MainArea>
			<HeaderArea>
				<MenuHeader />
				<Banner img={ImgBanner} msg1={PHRASES.phrase_01}/>
			</HeaderArea>
			<BodyArea>
				{!cardDetailsSelected ?
					<>
						<CardDashboard icon={ImgDetalhes} label={CARD_LABELS.DETALHES} onClickButton={(e)=> handleClickCardButton(e.target.value)}/>
						<CardDashboard icon={ImgParcelas} label={CARD_LABELS.PARCELAS} onClickButton={(e)=> handleClickCardButton(e.target.value)}/>
						<CardDashboard icon={ImgJuros} label={CARD_LABELS.JUROS} onClickButton={(e)=> handleClickCardButton(e.target.value)}/>
						<CardDashboard icon={ImgCallCenter} label={CARD_LABELS.SUPORTE} onClickButton={(e)=> handleClickCardButton(e.target.value)}/>
					</>
					: 
					<BoxAreaDetails card={cardDetailsSelected} onClickClose={()=> handleClickCloseBoxAreaDetails()}/>
				}
			</BodyArea>
			<FooterArea>
				<Footer />
			</FooterArea>	
		</MainArea> 
	)
}