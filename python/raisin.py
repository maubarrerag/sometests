#!/usr/bin/python

def print_numbers():
   for i in range(1,100):
      text = str(i)
      if i % 3 == 0:
          text = "Online"
      if i % 5 == 0:
          if i % 3 == 0:
              text = text + " Banking"
          else:
              text = "Banking"
      print(text)


def main():
    print("Hahahahaha you suck!")
    print_numbers()


if __name__ == '__main__':
  main()
