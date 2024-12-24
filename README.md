# Incorrect use of $toDouble in MongoDB aggregation
This repository demonstrates an incorrect use of the `$toDouble` operator in a MongoDB aggregation query and provides the correct solution.

## Bug
The original query attempts to convert the value 10 to a double and compare it to the `price` field. This is incorrect, and the query will not return the expected results.

## Solution
The correct approach is to convert the `price` field to a double and then compare it to the value 10. This is achieved by applying the `$toDouble` operator to the field.