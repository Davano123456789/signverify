/**
 * SignVerify - Database Dokumen Sampel (data.js)
 * Tempat menyimpan data keaslian surat/dokumen.
 * Kamu bisa menambah/mengedit data di sini dengan mudah!
 */

const DOCUMENT_DATABASE = {
    // 1. Dokumen SPK (Surat Perjanjian Kerja Sama)
    "SPK001": {
        id: "SPK001",
        type: "Surat Perjanjian Kerja Sama (SPK)",
        category: "SPK",
        number: "048/SPK-DIR/IX/2026",
        title: "Pengadaan & Pemasangan Infrastruktur Server Cloud",
        date: "15 September 2026",
        issuer: "PT Digital Sinergi Nusantara",
        issuerLocation: "Jakarta Selatan, Indonesia",
        recipient: "PT Media Teknologi Utama",
        signerName: "M. Fikrie Ramadhan",
        signerTitle: "Direktur Utama",
        status: "VALID",
        note: "Dokumen ini diterbitkan secara sah dan tercatat di sistem manajemen dokumen digital.",
        stampText: "PT DIGITAL SINERGI NUSANTARA - LUNAS & TERVERIFIKASI"
    },

    // 2. Dokumen Penawaran Harga
    "PEN001": {
        id: "PEN001",
        type: "Surat Penawaran Harga",
        category: "Penawaran",
        number: "112/PEN-MKT/VIII/2026",
        title: "Penawaran Pembuatan Aplikasi Web E-Verification & QR Code",
        date: "28 Agustus 2026",
        issuer: "PT Digital Sinergi Nusantara",
        issuerLocation: "Jakarta Selatan, Indonesia",
        recipient: "CV Mitra Abadi Jaya",
        signerName: "M. Fikrie Ramadhan",
        signerTitle: "Direktur Utama",
        status: "VALID",
        note: "Penawaran berlaku hingga 30 hari sejak tanggal diterbitkan.",
        stampText: "PT DIGITAL SINERGI NUSANTARA - OFFICIAL OFFER"
    },

    // 3. Dokumen Proposal Kerjasama
    "PROP001": {
        id: "PROP001",
        type: "Proposal Kerjasama Bisnis",
        category: "Proposal",
        number: "019/PROP-BD/IX/2026",
        title: "Proposal Kemitraan Strategis Transformasi Digital Enterprise",
        date: "05 September 2026",
        issuer: "PT Digital Sinergi Nusantara",
        issuerLocation: "Jakarta Selatan, Indonesia",
        recipient: "Dinas Komunikasi dan Informatika",
        signerName: "M. Fikrie Ramadhan",
        signerTitle: "Direktur Utama",
        status: "VALID",
        note: "Proposal resmi yang telah disetujui oleh Direksi PT Digital Sinergi Nusantara.",
        stampText: "PT DIGITAL SINERGI NUSANTARA - APPROVED PROPOSAL"
    },

    // 4. Dokumen Surat Pemberitahuan
    "SPT001": {
        id: "SPT001",
        type: "Surat Pemberitahuan Resmi",
        category: "Surat Pemberitahuan",
        number: "088/SPT-HRD/IX/2026",
        title: "Pemberitahuan Pelaksanaan Maintenance & Pemeliharaan Sistem E-Service",
        date: "10 September 2026",
        issuer: "PT Digital Sinergi Nusantara",
        issuerLocation: "Jakarta Selatan, Indonesia",
        recipient: "Seluruh Klien & Mitra Kerja",
        signerName: "M. Fikrie Ramadhan",
        signerTitle: "Direktur Utama",
        status: "VALID",
        note: "Surat pemberitahuan resmi yang berlaku bagi seluruh mitra dan pihak terkait.",
        stampText: "PT DIGITAL SINERGI NUSANTARA - OFFICIAL NOTICE"
    }
};

/**
 * SVG Tanda Tangan & Stempel Default
 * Digunakan sebagai tanda tangan digital resmi saat dokumen terverifikasi
 */
const DEFAULT_SIGNATURE_SVG = `
<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" class="signature-stamp-svg">
    <!-- Stempel Kebiruan Lingkaran -->
    <g transform="translate(240, 90) rotate(-12)" opacity="0.85">
        <circle cx="0" cy="0" r="65" fill="none" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 4"/>
        <circle cx="0" cy="0" r="58" fill="none" stroke="#2563eb" stroke-width="2"/>
        <path id="stampTextPath" fill="none" d="M -50,0 A 50,50 0 1,1 50,0" />
        <text font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">
            <textPath href="#stampTextPath" startOffset="50%">VERIFIED &amp; AUTHENTIC</textPath>
        </text>
        <circle cx="0" cy="0" r="22" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <path d="M-10 0 L-3 7 L12 -8" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="0" y="42" font-family="sans-serif" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="middle">OFFICIAL STAMP</text>
    </g>

    <!-- Goresan Tanda Tangan Stylized -->
    <g fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
        <!-- Inisial stroke -->
        <path d="M 40 120 C 50 70, 70 40, 90 60 C 110 80, 100 130, 80 140 C 70 145, 60 120, 85 90 C 110 60, 140 50, 160 80 C 180 110, 150 145, 175 125 C 200 105, 230 115, 260 110" />
        <path d="M 75 105 L 140 100" stroke-width="2.5" />
        <path d="M 120 70 C 140 110, 170 140, 210 135 C 250 130, 290 125, 310 120" stroke-width="3" />
        <!-- Garis Penutup TTD -->
        <path d="M 50 145 Q 160 160 300 135" stroke="#3b82f6" stroke-width="2.5" opacity="0.8" />
    </g>
</svg>
`;
