function showMagicians(magicianNames: string[]): void {
    magicianNames.forEach(name => {
        console.log(name);
    });
}


const magicians: string[] = ["arryan", "Harry", "Penn Jillette", "Teller", "Derren Brown"];


showMagicians(magicians);
