import { useState } from 'react'

function Forma(props) {

    const [student, setStudent] = useState({
        student: '',
        brojIndeksa: '',
        domaci: '',
        asistent: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        alert('Student: ' + student.student + ' Broj indeksa:' + student.brojIndeksa + ' Domaci:' + student.domaci + ' Asistent:' + student.asistent)
        { props.funkcija(student) }
    }

    return (
        <div className="forma_div">
            <form className="text-center" id="forma_prijava">
                <div className="form-group">
                    <label htmlFor="form-label text-light">Student</label>
                    <input type="text" name="student" className="form-control text-center" value={student.student} onChange={e => setStudent({ ...student, student: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="form-label text-light">Broj indeksa</label>
                    <input type="text" name="brojIndeksa" className="form-control text-center" value={student.brojIndeksa} onChange={e => setStudent({ ...student, brojIndeksa: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="form-label text-light">Domaci</label>
                    <input type="text" name="domaci" className="form-control text-center" value={student.domaci} onChange={e => setStudent({ ...student, domaci: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="form-label text-light">Asistent</label>
                    <input type="text" name="asistent" className="form-control text-center" value={student.asistent} onChange={e => setStudent({ ...student, asistent: e.target.value })} />
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-success" id="dugme_sacuvaj">Sacuvaj</button>
            </form>

        </div>
    )
}

export default Forma