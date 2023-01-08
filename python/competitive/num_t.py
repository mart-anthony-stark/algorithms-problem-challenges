def sum1(n):
    # O(1)
    return (n) * (n+1) // 2

def sum2(n1, n2):
    # O(1)
    n = n2-n1
    return (n//2) * (n1+n2)

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
print("Sum of consecutive numbers to 10: {}".format(sum1(10)))
print("Sum of consecutive numbers to 10: {}".format(sum2(0, 10)))


# GREATEST COMMON DENOMINATOR / LOWEST COMMON FACTOR
# Euclid algo
# T.C = O(log(min(a/b)))
# produc = lcm * gcd
def gcd(a,b):
    if a == 0:
        return b
    return(b%a, a)

def lcm(a,b):
    prod = a*b
    hcf = gcd(a,b)
    return prod // hcf
