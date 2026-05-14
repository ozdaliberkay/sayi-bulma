# Bir İşlem - Sayı Bulma Oyunu

Bu proje, verilen 6 sayı (5 tek basamaklı, 1 çift basamaklı) ve temel aritmetik işlemler (+, -, *, /) kullanılarak hedef bir sayıya ulaşmaya çalışılan klasik "Bir İşlem" oyununun dijital versiyonudur.

## 🎥 Proje Tanıtım Videosu

▶️ **Videoyu izlemek için görsele tıkla**
[![Watch the video](https://img.youtube.com/vi/5Cpb_VxzRoo/maxresdefault.jpg)](https://youtu.be/5Cpb_VxzRoo)

## Çalışma Mantığı

Uygulama, hedef sayıya ulaşmak için **Geri İzleme (Backtracking)** algoritmasını kullanır. Çözüm süreci şu adımları izler:

1.  **Sayı Kombinasyonları**: Elimizdeki sayılardan her seferinde iki tanesi seçilir.
2.  **Dört İşlem**: Seçilen iki sayıya toplama, çıkarma, çarpma ve bölme (tam bölünüyorsa) işlemleri uygulanır.
3.  **Yeni Durum**: İşlem sonucu yeni bir sayı olarak listeye eklenir ve kullanılan iki sayı listeden çıkarılır.
4.  **Özyineleme (Recursion)**: Kalan sayılarla aynı işlem, hedef sayıya ulaşana kadar veya tüm kombinasyonlar tükenene kadar tekrarlanır.
5.  **En Yakın Sonuç**: Eğer hedef sayıya tam olarak ulaşılamazsa, algoritma hedef sayıya en yakın olan (farkı en az olan) işlem adımlarını kullanıcıya sunar.

## Teknolojiler

-   **React**: Kullanıcı arayüzü ve state yönetimi için.
-   **Vite**: Hızlı geliştirme ve derleme ortamı için.
-   **Vanilla CSS**: Modern ve şık bir tasarım için.
