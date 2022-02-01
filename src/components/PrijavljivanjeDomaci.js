import Forma from './Forma'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function PrijavljivanjeDomaci() {

    const location = useLocation()
    const { studenti } = location.state

    const [students, setStudents] = useState(studenti)

    function dodajNovuPrijavu(student) {
        setStudents(students => [...students, student])
    }
    console.log('Spisak studenata:')
    console.log(students)

    return (
        <div className='prijavljivanje_div'>
            <Forma funkcija={dodajNovuPrijavu} />
        </div >
    )
}

export default PrijavljivanjeDomaci