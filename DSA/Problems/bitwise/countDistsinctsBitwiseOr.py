def countDistsinctsBitwiseOr (arr):
    result = set()
    prev = set()
    for x in arr:
        curr = set()
        curr.add(x)

        for val in prev:
            curr.add(val | x)

        for val in curr:
            result.add(val)

        prev = curr
    
    return len(result)

print(countDistsinctsBitwiseOr([1,2,3]))
