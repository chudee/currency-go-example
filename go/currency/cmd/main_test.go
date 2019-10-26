package cmd

import (
	d "github.com/chudee/currency-go-example/go/currency/pkg/dollar"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestMultiplication(t *testing.T) {
	five := d.Dollar{Amount: 5}
	product := five.Times(2)
	assert.Equal(t, 10, product.Amount)
	product = five.Times(3)
	assert.Equal(t, 15, product.Amount)
}
