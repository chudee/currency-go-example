package franc

import m "github.com/chudee/currency-go-example/go/currency/pkg/money"

type Franc struct {
	m.Money
}

func NewFranc(amount int) *Franc {
	return &Franc{m.Money{amount}}
}

func (f *Franc) Times(multiplier int) *Franc {
	return NewFranc(f.Amount * multiplier)
}
