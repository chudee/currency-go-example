package cmd

import (
	d "github.com/chudee/currency-go-example/go/currency/pkg/dollar"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestMultiplication(t *testing.T) {
	five := d.Dollar{Amount: 5}
	five.Times(2)

	assert.Equal(t, 10, five.Amount)
}
