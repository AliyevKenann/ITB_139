//task 1
//cavab:Xahiş edirəm ikirəqəmli rəqəm daxil edin: 53
//Son dəyərimiz: 6

//task 2
// cavab:N = int(input("N ədədini daxil edin: "))

//for i in range(N):
//print("I know how to use cycles")


//task 3
// cavab: for i in range(100, 1000):
   // if i % 10 == 0:
   // print(i)

   //task 4
   // cavab:Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

   //task 5
   // cavab:Əvvəlcə daxil edilən ədədin bütün üçrəqəmli ədədlərini tapmalıyıq. Üçrəqəmli ədədlər 100dən böyükdür və 999-dan kiçikdir. Daha sonra bölünən ədədlərin cəmini hesablayaraq çap edə bilərik.

//a = int(input("Bir eded daxil edin: "))

//cem = 0
//for i in range(100, 1000):
//if a % i == 0:
//cem += i

//print("Bolunen ededlerin cemi:", cem)


// task 6
// cavab:n = int(input("Bir eded daxil edin: "))

// for i in range(n, 0, -1):
//if i == 2 or i == 3:
//print(i, end=", ")
//else:
//for j in range(2, int(i ** 0.5) + 1):
//if i % j == 0:
//break
//else:
//print(i, end=", ")

//print(1)


//task7
// cavab: public class Main {
   // public static void main(String[] args) {
    //    int carpim = 1;
        
      //  for (int i = 1; i <= 10; i++) {
      //      carpim *= i;
       // }
        
       // System.out.println(carpim);
   // }
//}


//task8
// cavab:bilmirem


//task9
//cavab:def find_first_dot_index(text):
  //  for index, letter in enumerate(text):
  //  if letter == '.':
  //      return index
//return -1  # Nokta bulunamazsa -1 döndürülür

//metin = input("Metni daxil edin: ")
//indeks = find_first_dot_index(metin)
//if indeks != -1:
//print("Nokta işareti ilk dəfə", indeks, "indeksdə yerləşir.")
//else:
//print("Metnde nokta işareti tapılmadı.")


//task10
// cavab:def check_numbers(text):
//for char in text:
//if char.isdigit():
//return True
//return False

//user_input = input("Mətn daxil edin: ")
//if check_numbers(user_input):
//print("Mətndə rəqəmlər var.")
//else:
//print("Mətndə rəqəmlər yoxdur.")