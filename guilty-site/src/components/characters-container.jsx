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

    const minMax = '80px'

    return (
        <div>
            <div className="Home-characters-card">Characters</div>
            <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", maxWidth: "70%", margin: "0 auto"}}>
                        {characters.map((character, index) => (
                            <span key={index} style={{ border: "1px solid #ccc", padding: "5px 10px", borderRadius:"8px",maxWidth: minMax, maxHeight: minMax, minHeight: minMax, minWidth: minMax}}>
                                {character} <a href={toURL(character)}><img src="/logo192.png" alt="" style={{maxWidth: minMax, maxHeight: minMax}}/></a>
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}