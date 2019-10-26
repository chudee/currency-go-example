package dollar

type Dollar struct {
	Amount int
}

func (d *Dollar) Times(multiplier int) Dollar {
	return Dollar{Amount: d.Amount * multiplier}
}

func (d *Dollar) Equals(dollar Dollar) bool {
	return d.Amount == dollar.Amount
}
