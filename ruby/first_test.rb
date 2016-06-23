books = {
	"MX" => "52",
	"USA" => "01",
	"CO" => "321"
   }

#
def print_cities(books)
  books.each{|k,v| puts k}
end

def print_ccode(books, key)
  puts books[key]
end

loop do 
	puts "Give a city and i will display the country code"
	key = gets.chomp
	puts "Getting #{key} country"
	if books.key?(key)
      print_ccode(books, key)
    else
      print_cities(books)
	end
end