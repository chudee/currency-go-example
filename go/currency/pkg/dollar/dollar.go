package dollar

import m "github.com/chudee/currency-go-example/go/currency/pkg/money"

type Dollar struct {
	m.Money
}

func NewDollar(amount int) *Dollar {
	return &Dollar{m.Money{amount}}
}

func (d *Dollar) Times(multiplier int) *Dollar {
	return NewDollar(d.Amount * multiplier)
}
