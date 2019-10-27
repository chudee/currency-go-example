package cmd

import (
	d "github.com/chudee/currency-go-example/go/currency/pkg/dollar"
	f "github.com/chudee/currency-go-example/go/currency/pkg/franc"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestMultiplication(t *testing.T) {
	five := d.NewDollar(5)
	assert.Equal(t, d.NewDollar(10), five.Times(2))
	assert.Equal(t, d.NewDollar(15), five.Times(3))
}

func TestFrancMultiplication(t *testing.T) {
	five := f.NewFranc(5)
	assert.Equal(t, f.NewFranc(10), five.Times(2))
	assert.Equal(t, f.NewFranc(15), five.Times(3))
}

func TestEquality(t *testing.T) {
	assert.True(t, d.NewDollar(5).Equals(&d.NewDollar(5).Money))
	assert.False(t, d.NewDollar(5).Equals(&d.NewDollar(6).Money))
	assert.True(t, f.NewFranc(5).Equals(&f.NewFranc(5).Money))
	assert.False(t, f.NewFranc(5).Equals(&f.NewFranc(6).Money))
}
