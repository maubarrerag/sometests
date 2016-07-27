using System;

namespace Memorama
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			int n = 6, x, y, x2, y2;
			Random rnd = new Random();
			int[,] m = new int[n, n];
			int[,] l = new int[n, n]; /// No se si este array sea necesario
			int[] based = new int[18]; // Ponemos las cartas en un array (pueden ser letras, numeros palabras

			for (x = 0; x < 18; x++) {
				based[x] = x+1;
				Console.Write (based [x] + "\t");
			}
			Console.WriteLine();

			// Como son numeros podemos rellenar el array con un bucle, si fueran palabras habria que hacer 
			//otra cosa

			/** Igual y esto ya no es necesario **/
			for (x2 = 0; x2 < n; x2++)
				for (y2 = 0; y2 < n; y2++)
					l[x2, y2] = 0;
			

			/**Imprimimos el tablero, inicialmente esta vacio 
			 como esto se va a imprimir muchas veces se puede hacer en
			 un metodo, pero no compliquemos jejeje
			**/
			for (x2 = 0; x2 < n; x2++)
			{
				for (y2 = 0; y2 < n; y2++)
					Console.Write(m[x2, y2] + "\t");
				Console.WriteLine();
			}
			Console.WriteLine("\t");


			/**
			 * Rellenar el tablero consiste en recorrer el array inicial "based" dos
			 * veces y generar posiciones aleatorias del array m[] para guardar
			 * ese numero si la posicion esta ocupada, generamos otra.
			 * */
			y = 0;
			do {
				for (x = 0; x < based.Length; x++) {
					int a = rnd.Next(0,6); //random inicial para x
					int b = rnd.Next(0,6); //random inicil para y
					while(m[a,b] != 0){ //si la posicion esta ocupada hay que generar otro random
						a = rnd.Next(0,6);
						b = rnd.Next(0,6);
					}
					//colocamos el numero cuando ya tengamos la posicion vacia
					m[a,b] = based[x];
				}
				y++;
				//esto lo va a hacer del 1 al 18, despues lo va a hacer de nuevo, pero funciona porque
				//busca posiciones vacias
			} while(y < 2);

			Console.WriteLine();

			/**
			 * Imprimimos el tablero con el bucle que ya habias hecho
			 * */
			for (x2 = 0; x2 < n; x2++)
			{
				for (y2 = 0; y2 < n; y2++)
					Console.Write(m[x2, y2] + "\t");
				Console.WriteLine();
			}
			Console.WriteLine("\t");


		}
	}
}
