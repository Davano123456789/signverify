/**
 * SignVerify - Application Logic (app.js)
 * Menampilkan Detail Keterangan Dokumen & Tanda Tangan Digital
 */

document.addEventListener('DOMContentLoaded', function() {
    initVerificationPage();
});

/* ==========================================================================
   HALAMAN VERIFIKASI DOKUMEN & TANDA TANGAN (index.html)
   ========================================================================== */

function initVerificationPage() {
    const params = new URLSearchParams(window.location.search);
    const docId = params.get('id');
    const container = document.getElementById('verificationCard');

    if (!docId) {
        container.innerHTML = `
            <div class="card-body" style="text-align: center; padding: 3rem 1.5rem;">
                <h2 style="font-size: 1.25rem; color: var(--slate-900); margin-bottom: 0.5rem;">Informasi Verifikasi Dokumen</h2>
                <p style="color: var(--slate-500); font-size: 0.9rem;">Silakan scan QR Code yang tertera pada dokumen fisik atau PDF untuk melihat keterangan surat & TTD resmi.</p>
            </div>
        `;
        return;
    }

    const docData = DOCUMENT_DATABASE[docId.trim()];

    if (docData) {
        container.innerHTML = `
            <div class="card-body" style="padding: 2.25rem;">
                <!-- Keterangan Verifikasi -->
                <p style="color: var(--slate-600); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.75rem;">
                    Dokumen <strong>${docData.type}</strong> ini telah diverifikasi keasliannya.
                </p>

                <!-- Tanda Tangan & Stempel -->
                <div class="signature-box" style="margin-top: 1.75rem; padding-top: 1.5rem; border-top: 1px dashed var(--slate-300); display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <h4 style="font-size: 0.775rem; color: var(--slate-500); text-transform: uppercase; margin-bottom: 0.1rem;">Tanda Tangan :</h4>

                    <div class="stamp-container" style="width: 200px; height: 80px; margin-bottom: -1.75rem;">
                        <img src="assets/ttd.png" alt="Tanda Tangan Digital" class="signature-stamp-svg" style="object-fit: contain;">
                    </div>

                    <div class="signer-name" style="font-size: 1.1rem; font-weight: 700; color: var(--slate-900); line-height: 1.2;">${docData.signerName}</div>
                    <div class="signer-title" style="font-size: 0.875rem; color: var(--slate-600); line-height: 1.2; margin-top: -0.5rem;">${docData.signerTitle}</div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="card-body" style="text-align: center; padding: 3.5rem 1.5rem;">
                <h2 style="font-size: 1.2rem; color: #dc2626; margin-bottom: 0.5rem;">Data Dokumen Tidak Ditemukan</h2>
                <p style="color: var(--slate-600); font-size: 0.9rem;">ID Surat "${docId}" tidak terdaftar dalam sistem.</p>
            </div>
        `;
    }
}
