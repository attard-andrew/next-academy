# Sample script
name = "John Doe"
age = 47
occupation = "Spy"

print(f"{name}, aged {age} is a {occupation}")

# Challenge: Assigning a Variable
number = 5
number += 20
print(f'The number is {number}')

# Challenge: Remainder Operator
number_oranges = 3333
number_people = 4
oranges_per_person = number_oranges // number_people
# This challenge wants us to divide the oranges equally among the people, then
# donate the remainder to charity. The Modulo (%) operator can be used to
# calculate the remainder when dividing two values
donation = number_oranges % number_people

print(f"""
	Each person will receive {oranges_per_person} oranges and {donation} orange
	will be donated to charity""")