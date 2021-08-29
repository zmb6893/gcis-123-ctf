"""
Opens the secret link using the components hidden throughout the capture the flag activity
@author: Zoe Bingham
"""
import webbrowser

# open the solution files
try:
    a = open("../solution/solution-1.txt").read()
    b = open("../solution/solution-2.txt").read()
    c = open("../solution/solution-3.txt").read()
except FileNotFoundError:
    print("ERROR: Make sure that \"solution-1.txt\", \"solution-2.txt\", and \"solution-3.txt\" all exist")
    exit()

try:
    # concatenate the results from each of the files
    code = a + b + c
except:
    print("ERROR: Make sure that all the contents of your files are strings")

try:
    # open the video in the web browser
    webbrowser.open('https://www.youtube.com/watch?v=' + code) 
except:
    print("ERROR: Unable to open link. Make sure that the video code is correct")