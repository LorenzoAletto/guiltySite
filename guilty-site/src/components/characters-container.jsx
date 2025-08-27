export default function CharactersContainer() {
    const characters = [
        // Roster base
        'Sol Badguy',
        'Ky Kiske',
        'May',
        'Axl Low',
        'Chipp Zanuff',
        'Potemkin',
        'Faust',
        'Millia Rage',
        'Zato-1',
        'Giovanna',
        'Ramlethal Valentine',
        'Leo Whitefang',
        'Nagoriyuki',
        'Anji Mito',
        'I-No',

        // Season Pass 1 (DLC)
        'Goldlewis Dickinson',
        'Jack-O\'',
        'Happy Chaos',
        'Baiken',
        'Testament',

        // Season Pass 2 (DLC)
        'Bridget',
        'Sin Kiske',
        'Bedman?',
        'Asuka R♯', // (Asuka R. Kreutz alternate name)

        // Season Pass 3 (DLC)
        'Johnny',
        'Elphelt Valentine',
        'A.B.A',
        'Slayer',

        // Season Pass 4 (DLC)
        'Queen Dizzy',
        'Venom',
        'Unika',
        'Lucy Kushinada' // guest from Cyberpunk: Edgerunners
    ];

    const toURL = (name) => {
        return (

            "/" + name
                .toLowerCase()
                .replace(/[^a-z0-9]+/gi, "-")
                .replace(/^-+|-+$/g, "")
        );
    };
    ///Most used parameters
    const minMax = '80px'
    const border = '8px'
   
    return (
        <div>
            <div className="max-w-[61%] mx-auto bg-red-600 text-white text-center rounded">Characters</div>
            <div>
                <div className="flex flex-wrap gap-2 max-w-[60%] mx-auto justify-center">
                        {characters.map((character, index) => (
                            <span key={index} style={{ border: "1px solid #ccc", padding: "5px 10px", borderRadius:border,maxWidth: minMax, maxHeight: minMax, minHeight: minMax, minWidth: minMax, display: "flex", justifyContent: "center", alignItems: "center"}}>
                                 <a href={toURL(character)}><img src="/sol-chicomalo.png" alt="" style={{maxWidth: minMax, maxHeight: minMax, borderRadius: border}}/></a>
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}