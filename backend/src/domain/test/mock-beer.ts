import { BeerModel } from '../model/beer'

export const mockBeerModel = (): BeerModel => ({
	id: 'any_id',
	abv: 8.918797384901016,
	address: 'any_address',
	category: 'any_category',
	city: 'any_city',
	coordinates: [
		41.0638,
		-80.0556
	],
	country: 'any_country',
	description: 'any_description',
	ibu: 104,
	name: 'any_name',
	state: 'any_state',
	website: 'any_state',
	created_at: new Date()
})

export const mockBeers = (): BeerModel[] => {
	return [
		{
			id: 'any_id',
			abv: 8.918797384901016,
			address: 'any_address',
			category: 'any_category',
			city: 'any_city',
			coordinates: [
				41.0638,
				-80.0556
			],
			country: 'any_country',
			description: 'any_description',
			ibu: 104,
			name: 'any_name',
			state: 'any_state',
			website: 'any_state',
			created_at: new Date()
		}, {
			id: 'another_id',
			abv: 8.918797384901016,
			address: 'any_address',
			category: 'any_category',
			city: 'any_city',
			coordinates: [
				41.0638,
				-80.0556
			],
			country: 'any_country',
			description: 'any_description',
			ibu: 104,
			name: 'any_name',
			state: 'any_state',
			website: 'any_state',
			created_at: new Date()
		}
	]
}