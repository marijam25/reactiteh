
function TabelaStudenti(props) {

    var studenti = props.studenti

    return (

        <div id="student-tbl-div">
            <table className="table table-bordered table-striped" id="tabela-studenti">
                <thead>
                    <tr className="table-primary">
                        <th>Student</th>
                        <th>Broj indeksa</th>
                        <th>Domaci</th>
                        <th>Asistent</th>
                    </tr>
                </thead>
                <tbody>
                    {studenti.map(student => {
                        return (
                            <tr key={student.id}>
                                <td>{student.student}</td>
                                <td>{student.brojIndeksa}</td>
                                <td>{student.domaci}</td>
                                <td>{student.asistent}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default TabelaStudenti