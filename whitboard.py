# Its Halloween and all the kids just got home from trick-or-treating.
# we have a list representing how much candy each child in our group has made out with.
# We don’t want the kids to start arguing, and we know trouble is brewing as many of the children
# in the group have received different amounts of candy from each home.
# So we want each child to have the same amount of candies, only we can’t exactly take any candy away from the kids,
# that would be even worse.
# Instead we decide to give each child extra candy until they all have the same amount.
# In the first case the most candies are given to second kid , 8.
# Because of that we will give the first kid 3 so he can have 8
# and the third kid 2
# and the fourth kid 4, so all kids will have 8 candies.
# So we end up handing out 3 + 2 + 4 = 9.
# Examples:
# input: [5,8,6,4]
# output: 9
# input: [1,2,4,6]
# output: 11
# Notes:
# the length of the list of children will always be greater than one.

def distribute_candy(candies):
    candy_count = 0
    max_candy = max(candies)
    for candy in candies:
        new_candy = max_candy - candy
        candy_count += new_candy
    return candy_count

print(distribute_candy([1,2,4,6]))

