nilai_mahasiswa = [
    {
        nama: "siti",
        mk: [
            { nama: "agama", nilai: { harian: 80, uts: 60, uas: 70 } },
            { nama: "pemrograman", nilai: { harian: 10, uts: 80, uas: 70 } },
            { nama: "pancasila", nilai: { harian: 10, uts: 60, uas: 70 } }
        ]
    },
    {
        nama: "ali",
        mk: [
            { nama: "agama", nilai: { harian: 90, uts: 50, uas: 20 } },
            { nama: "pemrograman", nilai: { harian: 80, uts: 80, uas: 100 } },
            { nama: "pancasila", nilai: { harian: 60, uts: 90, uas: 80 } }
        ]
    },
    {
        nama: "budi",
        mk: [
            { nama: "agama", nilai: { harian: 100, uts: 80, uas: 70 } },
            { nama: "pemrograman", nilai: { harian: 100, uts: 80, uas: 90 } },
            { nama: "pancasila", nilai: { harian: 100, uts: 70, uas: 80 } }
        ]
    }
]

for (i in nilai_mahasiswa) {
    document.write(nilai_mahasiswa[i].nama + "<br/>")
    mk = nilai_mahasiswa[i].mk
    for (j in mk) {
        document.write(mk[j].nama + " ")
        document.write(" harian: " + mk[j].nilai.harian + " ")
        document.write(" uts: " + mk[j].nilai.uts + " ")
        document.write(" uas: " + mk[j].nilai.uas + " ")

        harian = mk[j].nilai.harian * 0.2;
        uts = mk[j].nilai.uts * 0.3;
        uas = mk[j].nilai.uas * 0.5;
        na = harian + uts + uas
        document.write(" Nilai Akhir: " + na + " ")
        grade = "E"
        if (na >= 80) {
            grade = "A"
        } else if (na >= 75) {
            grade = "B+"
        } else if (na >= 70) {
            grade = "B"
        } else if (na >= 60) {
            grade = "C+"
        } else if (na >= 50) {
            grade = "C"
        } else if (na >= 30) {
            grade = "D"
        }
        document.write(" grade: " + grade + " ")
        document.write("<br/>")
    }
}