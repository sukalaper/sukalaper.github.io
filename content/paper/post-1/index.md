+++
date = '2025-09-08T00:24:15+07:00'
title = 'Posting Pertama Setelah Hiatus.'
+++

# H1: Judul Halaman Utama (Header 1)
## H2: Bagian Artikel (Header 2)
### H3: Sub-bagian Penting (Header 3)
#### H4: Detail Teknis (Header 4)
##### H5: Catatan Tambahan (Header 5)
###### H6: Detail Mikro (Header 6)

---

## 1. Tipografi Dasar
Ini adalah contoh paragraf yang panjang untuk melihat bagaimana *line-height* dan *max-width* (81ch) bekerja. Jika teks ini terlalu rapat atau terlalu lebar, kita bisa melakukan penyesuaian pada CSS. Fokus kita adalah **keterbacaan** dan **estetika**.

*   **Teks tebal** untuk penekanan kuat.
*   *Teks miring* untuk penekanan lembut.
*   ***Teks tebal dan miring*** untuk penekanan ganda.
*   ~~Teks dicoret~~ untuk revisi atau pemikiran yang dibatalkan.
*   `Inline code` untuk perintah terminal atau nama file seperti `hugo.toml`.

## 2. Blockquote Berjenjang
> "Prinsip KISS adalah tentang kesederhanaan."
>
> Ini adalah paragraf kedua dalam kutipan yang sama.
>
> > Dan ini adalah level kutipan kedua. Biasanya digunakan untuk *referencing* atau komentar tambahan.
> > > Dan ini level ketiga, untuk menunjukkan kedalaman hierarki informasi dalam sebuah argumen.

## 3. Daftar Kompleks
*   **Root Item 1**
    *   Sub-item A
        *   Level 3 item: Detail sangat spesifik.
    *   Sub-item B
*   **Root Item 2**
    1.  Ordered item 1
    2.  Ordered item 2

- [ ] Task belum selesai
- [x] Task selesai

## 4. Tabel (Complex)
| Header 1 | Header 2 | Header 3 |
| :--- | :---: | ---: |
| Kiri | Tengah | Kanan |
| Data A | Data B | Data C |
| Baris panjang banget biar ngetes cell width | 123 | 999 |

## 5. Media & Embeds
![Alt text buat ngetes gambar yang lebarnya ngawur](https://placehold.co/400)
*Caption gambar.*

## 6. Blok Kode (Syntax Highlighting)
```rust
struct Record<'a> {
    name: &'a str,
    score: f64,
}

fn main() {
    let mut data = [
        Record { name: "Alice", score: 85.0 },
        Record { name: "Bob", score: 92.0 },
        Record { name: "Charlie", score: 78.0 },
        Record { name: "Diana", score: 88.0 },
        Record { name: "Evan", score: 95.0 },
    ];

    println!("Original List:");
    for r in &data {
        println!("{} - {:.0}", r.name, r.score);
    }

    data.sort_unstable_by(|a, b| {
        b.score.total_cmp(&a.score)
    });

    println!("\nSorted by Score (Descending):");
    for r in &data {
        println!("{} - {:.0}", r.name, r.score);
    }

    let n = data.len() as f64;
    let sum: f64 = data.iter().map(|r| r.score).sum();
    let mean = sum / n;

    let variance = data
        .iter()
        .map(|r| (r.score - mean).powi(2))
        .sum::<f64>() / n;

    let std_dev = variance.sqrt();
    let median = data[data.len() / 2].score;

    println!("\nDescriptive Analytics:");
    println!("Count   : {}", n);
    println!("Mean    : {:.2}", mean);
    println!("Std Dev : {:.2}", std_dev);
    println!("Median  : {:.2}", median);

    println!("\nStandardized Scores (Z-Score):");
    for r in &data {
        let z = (r.score - mean) / std_dev;
        println!("{:<8} | Z: {:>5.2}", r.name, z);
    }
}
```
