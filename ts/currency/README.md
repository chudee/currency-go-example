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

---

## Chapter 5. Franc-ly Speaking

#### TODO list

- $5  + 10CHF = $10 (If the exchange rate is 2:1)
- ~~$5 x 2 = $10~~
- ~~making amount to private~~
- ~~side effect Dollar?~~
- Money rounding?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~__5CHF x 2 = 10CHF__~~
- duplicates Dollar/Franc
- common equals
- common times

#### Examine

- I can't target big test. so I made a small test that could make progress.
- Shamelessly I create duplicates and fixed a test a bit and created it.
- To make matters worse, I duplicate model code to Money and fixed a test and passed it.
- I promised not to go home until the duplicate disappeared.

---

## Chapter 6. came back 'Peace for everyone'

#### TODO list

- $5  + 10CHF = $10 (If the exchange rate is 2:1)
- ~~$5 x 2 = $10~~
- ~~making amount to private~~
- ~~side effect Dollar?~~
- Money rounding?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~5CHF x 2 = 10CHF~~
- duplicates Dollar/Franc
- ~~__common equals__~~
- common times

#### Examine

- I moved common code to superclass(Money) from First class(Dollar) gradually.
- I made Second class(Franc) to subclass of Money.
- before removing unnecessary implementations, I matched both equal() implementations.

--

## Chapter 7. Apple and Orange

#### TODO list

- $5  + 10CHF = $10 (If the exchange rate is 2:1)
- ~~$5 x 2 = $10~~
- ~~making amount to private~~
- ~~side effect Dollar?~~
- Money rounding?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~5CHF x 2 = 10CHF~~
- duplicates Dollar/Franc
- ~~common equals~~
- common times
- ~~__compare Dollar with Franc__~~
- currency?

#### Examine

- I pulled out flaw harassing us and put it in the test.
- Not perfect but I made it pass a test looking good way.
- Before there were more motivations, I didn't introduce more designs.

--

## Chapter 8. 객체 만들기  

#### TODO list

- $5  + 10CHF = $10 (환율이 2:1일 경우)
- ~~$5 x 2 = $10~~
- ~~amount를 private로 만들기~~
- ~~Dollar 부작용?~~
- Money 반올림?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~5CHF x 2 = 10CHF~~
- __Dollar/Franc 중복__
- ~~공용 equals~~
- 공용 times
- ~~Dollar과 Franc 비교하기~~
- 통화?
- testFrancMultiplication을 지워야 할까?

--

## Chapter 9. 우리가 사는 시간  

#### TODO list

- $5  + 10CHF = $10 (환율이 2:1일 경우)
- ~~$5 x 2 = $10~~
- ~~amount를 private로 만들기~~
- ~~Dollar 부작용?~~
- Money 반올림?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~5CHF x 2 = 10CHF~~
- Dollar/Franc 중복
- ~~공용 equals~~
- 공용 times
- ~~Dollar과 Franc 비교하기~~
- ~~__통화?__~~
- testFrancMultiplication을 지워야 할까?

--

## Chapter 10. 흥미로운 시간

#### TODO list

- $5  + 10CHF = $10 (환율이 2:1일 경우)
- ~~$5 x 2 = $10~~
- ~~amount를 private로 만들기~~
- ~~Dollar 부작용?~~
- Money 반올림?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~5CHF x 2 = 10CHF~~
- Dollar/Franc 중복
- ~~공용 equals~~
- __공용 times__
- ~~Dollar과 Franc 비교하기~~
- ~~통화?~~
- testFrancMultiplication을 지워야 할까?

--

## Chapter 11. 모든 악의 근

#### TODO list

- $5  + 10CHF = $10 (환율이 2:1일 경우)
- ~~$5 x 2 = $10~~
- ~~amount를 private로 만들기~~
- ~~Dollar 부작용?~~
- Money 반올림?
- ~~equals()~~
- hashCode()
- Equal null
- Equal object
- ~~5CHF x 2 = 10CHF~~
- ~~__Dollar/Franc 중복__~~
- ~~공용 equals~~
- ~~공용 times~~
- ~~Dollar과 Franc 비교하기~~
- ~~통화?~~
- testFrancMultiplication을 지워야 할까?

--

## Chapter 12. 드디어, 더하기

#### TODO list

- $5  + 10CHF = $10 (환율이 2:1일 경우)
- __$5 + $5 = $10__


--

## Chapter 13. 진짜로 만들기

#### TODO list

- $5  + 10CHF = $10 (환율이 2:1일 경우기)
- __$5 + $5 = $10__
- $5 + $5에서 Mnoey 반환하기
- ~~Bank.reduce(Money)~~
- Money에 대한 통화 변환을 수행하는 Reduce
- Reduce(Bank, String)
