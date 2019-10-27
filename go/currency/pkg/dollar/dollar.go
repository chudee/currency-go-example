package dollar

type Dollar struct {
	Amount int
}

func (d *Dollar) Times(multiplier int) {
	d.Amount *= multiplier
}
