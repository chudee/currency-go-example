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

---

### Chapter 3. Peace for everyone

#### TODO list

- $5  + 10CHF = $10 (If the exchange rate is 2:1)
- ~~$5 x 2 = $10~~
- making amount to private
- ~~side effect Dollar?~~
- Money rounding?
- ~~__equals()__~~
- hashCode()
- Equal null
- Equal object

#### Examine

- we noticed that the design pattern(object value) implies another operation.
- I tested the operation.
- I easy implemented the operation.
- I did more testing instead of refactoring right now.
- I refactored to accommodate both cases.

---

### Chapter 4. Privacy

#### TODO list

- $5  + 10CHF = $10 (If the exchange rate is 2:1)
- ~~$5 x 2 = $10~~
- ~~__making amount to private__~~
- ~~side effect Dollar?~~
- Money rounding?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object

#### Examine

- I used developed functions to improve test.
- I recognized that if both tests fail at the same time, it will broke.
- I continued even though there were risks.
- I used new function for the object to test becouse should to lower coupling between test and code.
