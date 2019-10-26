package dollar

type Dollar struct {
	amount int
}

func NewDollar(amount int) *Dollar {
	return &Dollar{amount}
}

func (d *Dollar) Times(multiplier int) *Dollar {
	return NewDollar(d.amount * multiplier)
}

func (d *Dollar) Equals(dollar *Dollar) bool {
	return d.amount == dollar.amount
}
