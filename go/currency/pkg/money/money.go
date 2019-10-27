package money

type Money struct {
	Amount  int
	Curreny string
}

func (m Money) Equals(money Money) bool {
	return m.Amount == money.Amount && m.Curreny == money.Curreny
}
