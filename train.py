def count_vowels(string):
    vowels = "aiueo"
    
    count = 0
    for unliHarf in string.lower():
        if unliHarf in vowels:
            count += 1
            
    return count



print(count_vowels("ellianor"))
print(count_vowels("IamEngineer"))