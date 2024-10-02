import re

def password_strength_checker(password):
    # Check length
    if len(password) < 8:
        return "Weak: Password should be at least 8 characters long."

    # Check for uppercase, lowercase, numbers, and special characters
    if not re.search("[a-z]", password):
        return "Weak: Password should contain at least one lowercase letter."
    if not re.search("[A-Z]", password):
        return "Weak: Password should contain at least one uppercase letter."
    if not re.search("[0-9]", password):
        return "Weak: Password should contain at least one number."
    if not re.search("[!@#$%^&*()_+-=]", password):
        return "Weak: Password should contain at least one special character."

    # Avoid common passwords (you can add more common passwords to this list)
    common_passwords = ['password', '123456', 'qwerty', 'abc123']
    if password.lower() in common_passwords:
        return "Weak: Avoid common passwords."

    return "Strong: Your password is secure!"

# Test the function
password = input("Enter a password to check its strength: ")
print(password_strength_checker(password))
