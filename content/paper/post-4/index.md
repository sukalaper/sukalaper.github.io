+++
date = '2026-09-18T23:12:32+07:00'
draft = false
title = 'Proyek Vim Yang Saya Tinggalkan'
+++

Proyek ini telah saya tinggalkan, mengingat keterbatasan saya pada [vimrc](https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/) tapi bukan berarti ini akan saya abaikan. 

Mungkin beberapa bulan atau mungkin tahun kedepan, ini akan kembali hadir kembali. Mengingat situs ini telah kembali.

```vimrc
let g:english_words_file = expand('~/.vim/plugged/koreksi-bahasa-inggris-pada-markdown-dengan-vim/kumpulan-kata-bahasa-inggris.txt')
let g:english_words_pattern = '\v\m\<(' . join(readfile(g:english_words_file), '\|') . '\>'
let g:italic_enabled = 0

function! ToggleItalic()
  if g:italic_enabled
    autocmd! MarkdownAutoCmd
    let g:italic_enabled = 0
    echo "Kamus koreksi pada bahasa Inggris di nonaktifkan!"
  else
    augroup MarkdownAutoCmd
      autocmd!
      autocmd BufWritePre *.md call AddItalicForEnglishWords()
    augroup END
    let g:italic_enabled = 1
    echo "Kamus koreksi pada bahasa Inggris di aktifkan!"
  endif
endfunction

function! AddItalicForEnglishWords()
  let l:current_line = getline('.')
  let l:modified_line = substitute(l:current_line, g:english_words_pattern, '_\0_', 'g')
  call setline(line('.'), l:modified_line)
endfunction

augroup MarkdownAutoCmd
  autocmd!
  autocmd BufWritePre *.md if g:italic_enabled | call AddItalicForEnglishWords() | endif
augroup END

nnoremap <leader>l :call ToggleItalic()<CR>
```

Yang mana dalam pseudo-code lebih kurang seperti ini:

```plain
INISIALISASI:
  Set variabel jalur file kata bahasa Inggris ke direktori plugin
  Set variabel pola regex dengan membaca isi file tersebut lalu menggabungkannya dengan pemisah OR
  Set variabel status aktif fitur ke 0 (mati)

FUNGSI ToggleItalic():
  JIKA status aktif bernilai 1 (hidup):
    Hapus semua autocmd pada group MarkdownAutoCmd
    Ubah status aktif menjadi 0
    Tampilkan pesan bahwa kamus dinonaktifkan
  JARI LAINNYA (jika mati):
    Buat atau masuki augroup MarkdownAutoCmd
    Hapus autocmd lama di group tersebut
    Buat autocmd baru: sebelum menulis file markdown, jalankan fungsi penambah format miring
    Ubah status aktif menjadi 1
    Tampilkan pesan bahwa kamus diaktifkan
  AKHIR JIKA

FUNGSI AddItalicForEnglishWords():
  Ambil teks pada baris yang sedang aktif
  Ganti kata yang cocok dengan pola bahasa Inggris menjadi format miring menggunakan underscore
  Perbarui baris aktif pada editor dengan teks yang sudah dimodifikasi

PENGATURAN OTOMATIS (AUGROUP):
  Buat augroup MarkdownAutoCmd
  Hapus autocmd lama
  Pasang autocmd: sebelum menyimpan file berformat .md, cek apakah status aktif bernilai 1, jika ya maka jalankan fungsi penambah format miring

PEMETAAN TOMBOL (KEYMAP):
  Hubungkan tombol pintas leader + l untuk menjalankan fungsi ToggleItalic()
```
