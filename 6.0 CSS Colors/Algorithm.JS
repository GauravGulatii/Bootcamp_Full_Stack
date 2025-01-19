function kadane(arr):           // Kadane algorithm, input is just an array
    maxSum = -infinity          // Since our matrix might have a negative sum as highest
    currSum = 0
    start = 0
    bestStart = 0
    bestEnd = 0

    for i from 0 to len(arr) - 1 :
        currSum += arr[i]
        if currSum > maxSum:
            maxSum = currSum
            bestStart = start
            bestEnd = i
        if currSum < 0:
            currSum = 0
            start = i + 1
    
    return maxSum, bestStart, bestEnd

    // Here is the Pseudocode for our Algorithm 

function findMaxSumAndDimensions(matrix):
    N = number of rows in matrix
    M = number of columns in matrix
    maxSum = -infinity
    height = 0
    width = 0

    // We will go through all pairs of rows
    for r1 from 0 to N-1:
        colSum = [0] * M    // Initialising column sum array
        for r2 from r1 to N-1:
                            // Update column sums for rows between r1 and r2
            for col from 0 to M-1:
                colSum[col] += matrix[r2][col]
            
            // Apply Kadane algorithm to colSum ( shown above)
            currSum, startCol, endCol = kadane(colSum)
            
            // We will Update maxSum and the dimensions if a new max is found
            if currSum > maxSum:
                maxSum = currSum
                height = r2 - r1 + 1  // Gives the height of submatrix
                width = endCol - startCol + 1 // Gives the width of submatrix
    
    return maxSum, height, width
