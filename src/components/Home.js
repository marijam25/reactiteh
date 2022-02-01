import TabelaStudenti from "./TabelaStudenti";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react'


function Home() {



    const [sviStudenti, setSviStudenti] = useState([
        { id: 1, student: 'Marija Markovic', brojIndeksa: '12/18', domaci: 'Treci', asistent: 'Tamara Naumovic' },
        { id: 2, student: 'Jovana Petrovic', brojIndeksa: '141/18', domaci: 'Drugi', asistent: 'Aleksa Miletic' },
        { id: 3, student: 'Ivan Nikolic', brojIndeksa: '332/18', domaci: 'Prvi', asistent: 'Petar Lukovac' },
        { id: 4, student: 'Dragana Jovanovic', brojIndeksa: '63/18', domaci: 'Prvi i Treci', asistent: 'Aleksa Miletic' },
        { id: 5, student: 'Stefan Dragovic', brojIndeksa: '282/18', domaci: 'Prvi i Drugi', asistent: 'Petar Lukovac' },
        { id: 6, student: 'Ana Milenkovic', brojIndeksa: '771/18', domaci: 'Prvi, Drugi i Treci', asistent: 'Tamara Naumovic' },
        { id: 7, student: 'Filip Bojanic', brojIndeksa: '2/18', domaci: 'Drugi', asistent: 'Petar Lukovac' },
        { id: 8, student: 'Nevena Stefanovic', brojIndeksa: '194/18', domaci: 'Prvi', asistent: 'Aleksa Miletic' },
    ]);

    return (
        <div>
            <h1 className="mt-3">Spisak prijavljenih studenata za odbranu domacih zadataka</h1>
            <Link
                to='/prijavljivanje'
                state={{
                    studenti: sviStudenti,
                }}
            >
                Prijavljivanje
            </Link>

            <TabelaStudenti studenti={sviStudenti} />
        </div >
    )
}

export default Home