# Currency example

## Purpose

```cassandraql  
+----------+------------+---------+---------+
|  stocks  |  qualtity  |  price  |   sum   |
+-------------------------------------------+
|   IBM    |    1000    |    25   |  25000  |
+-------------------------------------------+
|    GE    |     400    |   100   |  40000  |
+-------------------------------------------+
|          |            |  total  |  65000  |
+----------+------------+---------+---------+


+----------+------------+---------+-----------+
|  stocks  |  qualtity  |  price  |   sum     |
+---------------------------------------------+
|   IBM    |    1000    |  25USD  |  25000USD |
+---------------------------------------------+
| No|artis |     400    | 150CHF  |  60000CHF |
+---------------------------------------------+
|          |            |  total  |  65000USD |
+----------+------------+---------+-----------+


+----------+------------+---------------+
| standard | conversion | Exchange Rate |
+---------------------------------------+
|   CHF    |    USD     |      1.5      |
+----------+------------+---------------+
```

### Chapter 1. Money Objects That Support Multiple Currencies

#### TODO list

- $5  + 10CHF = $10 (If the exchange rate is 2:1)
- ~~__$5 x 2 = $10__~~
- making amount to private
- side effect Dollar?
- Money rounding?

---

### Chapter 2. Corrupted Object

The general TDD cycle was like next. __(Do the following as if you're breathing)__
1. Write a test
2. Let it compile
3. Make it executable
4. Make it right
5. Remove duplicates

#### TODO list

- $5  + 10CHF = $10 (If the exchange rate is 2:1)
- ~~$5 x 2 = $10~~
- making amount to private
- ~~__side effect Dollar?__~~
- Money rounding?
