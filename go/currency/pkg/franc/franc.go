package franc

type Franc struct {
	amount int
}

func NewFranc(amount int) *Franc {
	return &Franc{amount}
}

func (f *Franc) Times(multiplier int) *Franc {
	return NewFranc(f.amount * multiplier)
}

func (f *Franc) Equals(franc Franc) bool {
	return f.amount == franc.amount
}
