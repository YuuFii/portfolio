import React, { useState, useEffect, useMemo } from "react";

export function TypingText({ 
    words,
    className = "",
    cursorClassName = "bg-black"
}) {
    // 1. Menggunakan useMemo agar referensi array stabil dan tidak memicu render ulang
    const wordsArray = useMemo(() => {
        return Array.isArray(words) ? words : [words];
    }, [words]);

    // 2. Memulai dengan string kosong untuk menghindari masalah panjang karakter (length)
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const currentWordIndex = loopNum % wordsArray.length;
        const fullText = wordsArray[currentWordIndex];

        let timer;

        // 3. Memisahkan logika timer pengetikan dan penghapusan agar lebih aman
        if (isDeleting) {
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length - 1));
            }, 50); // Kecepatan menghapus
        } else {
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length + 1));
            }, 150); // Kecepatan mengetik
        }

        // 4. Mencegah bentrok timer saat memberikan jeda pada akhir atau awal kata
        if (!isDeleting && text === fullText) {
            clearTimeout(timer); // Hentikan pengetikan
            timer = setTimeout(() => setIsDeleting(true), 1500); // Jeda 1.5 detik sebelum menghapus
        } else if (isDeleting && text === "") {
            clearTimeout(timer); // Hentikan penghapusan
            setIsDeleting(false);
            setLoopNum((prev) => prev + 1); // Pindah ke kata berikutnya
        }

        // Membersihkan timer setiap kali komponen di-unmount atau effect berjalan ulang
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, wordsArray]);

    return (
        <div className={`flex items-center ${className}`}>
            <span>{text}</span>
            
            {/* 5. Memperbaiki lebar kursor menggunakan nilai arbitrer w-[3px] */}
            <span className="inline-block w-0.75 h-[1em] bg-black ml-2 animate-blink rounded-full"></span>
        </div>
    );
}