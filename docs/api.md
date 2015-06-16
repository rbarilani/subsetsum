<a name="module_subsetsum"></a>
## subsetsum
Public API

<a name="module_subsetsum.getSubsets"></a>
### subsetsum.getSubsets(numbers, target, options) ⇒ <code>Array</code>
Find all possible combinations of a set of positive numbers to reach a given positive sum target.
Returns an empty array when no combinations was found.

Porting of python implementation
source: Stackoverflow answer - http://stackoverflow.com/questions/4632322/finding-all-possible-combinations-of-numbers-to-reach-a-given-sum

**Kind**: static method of <code>[subsetsum](#module_subsetsum)</code>  

| Param | Type | Description |
| --- | --- | --- |
| numbers | <code>Array</code> | A set of positive int numbers or can be a set of any type but you must provide a function   to extract a positive int number for this type @see options.number |
| target | <code>Int</code> &#124; <code>Object</code> | positive sum target or an object that represents the target (int number is extracted with the options.number function) |
| options | <code>Object</code> | options |
| options.number | <code>function</code> | A function to extract a int number for curr item |

