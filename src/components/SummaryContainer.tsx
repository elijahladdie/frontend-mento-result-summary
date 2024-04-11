import { useContext, useEffect, useState } from 'react'
import BtnContext from 'context/btn-context'
import SummaryItem from './SummaryItem'

type Props = {
	data: {
		icon: string
		category: string
		score: number
	}[]
}

const SummaryContainer = (props: Props) => {
	const [btnClass, setBtnClass] = useState('')

	const ctx = useContext(BtnContext)

	useEffect(() => {
		if (ctx.isDisabled === false) {
			setBtnClass(
				'border-none bg-darkGrayBlue hover:bg-gradient-to-b from-lightSlateBlueBbackground to-lightRoyalBlueBackground text-white'
			)
		}
	}, [ctx.isDisabled])

	return (
		<div className='w-full max-w-2xl p-12 md:w-[37rem] md:pt-14 md:pb-20'>
			<h2 className='font-bold md:text-[2.4rem] md:mb-4'>Summary</h2>
			<SummaryItem
				{...props.data[0]}
				bgColor={'bg-lightRed'}
				textColor={'text-lightRed'}
			/>
			<SummaryItem
				{...props.data[1]}
				bgColor={'bg-orangeyYellow'}
				textColor={'text-orangeyYellow'}
			/>
			<SummaryItem
				{...props.data[2]}
				bgColor={'bg-greenTeal'}
				textColor={'text-greenTeal'}
			/>
			<SummaryItem
				{...props.data[3]}
				bgColor={'bg-cobaltBlue'}
				textColor={'text-cobaltBlue'}
			/>
			<button
				disabled={ctx.isDisabled}
				className={`w-full text-center py-6 mt-2 border rounded-[100vh] text-lightLavender md:mt-10 ${btnClass}`}>
				Continue
			</button>
		</div>
	)
}

export default SummaryContainer
