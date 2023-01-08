n = 10
def sum1():
    # O(1)
    return (n) * (n+1) // 2

def get2():
    # O(n)
    i = int(input())
    sum = 0
    while i:
        sum += i
        i-=1
    return sum

# O(n) > O(1)
# O(1) is efficient
print(sum1())