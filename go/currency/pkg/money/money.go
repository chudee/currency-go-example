package money

type Money struct {
	Amount int
}

func (m *Money) Equals(money *Money) bool {
	return m.Amount == money.Amount
}
