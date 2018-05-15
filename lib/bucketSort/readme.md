# Bucket Sort
AKA *Radix Sort* 

Good for sorting operations when the item to sort on has a finite range. EG. Sort a very large array of Person objects in order of age. 

1. Set up an array of initially empty "buckets".
2. Scatter: Go over the original array, putting each object in its bucket.
3. Sort each non-empty bucket.
4. Gather: Visit the buckets in order and put all elements back into the original array.

