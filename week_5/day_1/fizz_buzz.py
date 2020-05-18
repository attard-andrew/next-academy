# TODO:
# TODO:
# Ask the user to input a number
# If the number is a multiple of 3, show "Fizz"
# If the number is a multiple of 5, show "Buzz"
# If the number is a multiple of 3 and 5, show "FizzBuzz"
# If the number is neither a multiple of 3 or 5, show the input number

input_number = int(input("Please enter a number\n"))

if input_number % 3 == 0 and input_number % 5 == 0:
	print("FizzBuzz")
elif input_number % 5 == 0:
	print("Buzz")
elif input_number % 3 == 0:
	print("Fizz")
else:
	print(input_number)