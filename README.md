# Coders Camp 2021 | Projekt Zespołowy | Javascript

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp](https://CodersCamp.pl).\
Aplikację wykonali uczestnicy kursu przy pomocy mentora.
Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

**Mentor**: [Michał Ciborowski](https://github.com/Cidebur)

**Uczestnicy**:

- [Barbara Korytkowska](https://github.com/korytba)
- [Joanna Grala](https://github.com/JoannaGrala)
- [Magda Zaniewska-Ciecierska](https://github.com/FrontendMagdalena)
- [Michał Kowalczyk](https://github.com/michakow)
- [Roman Pavlenko](https://github.com/rpavlenko)
- [Zuza Wypych](https://github.com/zwypych)

## Demo

Zobaczyć efekt naszej pracy i sprawdzić swoją wiedzę w różnych kategoriach możesz [TUTAJ](https://michakow.github.io/CodersCamp2021-Project1-Quiz).

## O projekcie słów kilka

### Zmiany względem proponowanego projektu

Zamiast stwórzyć Quiz poświęcony jedynie Gwiezdnym Wojnom, zespół wraz z klientem zdecydował się stworzyć aplikację dla większego grona odbiorców. Tym samym z proponowanego projektu pozostał tylko pomysł na rodzaj aplikacji, a cały jej wygląd jest autorskim dziełem zespołu.

### Cel projektu

Celem projektu było dostarczenie aplikacji pozwalającej sprawdzić swoją wiedzę w 10 różnych kategoriach i porównać wyniki ze znajomymi.

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań.

### Strona startowa

Pierwszy widok jaki zastaniemy po przejściu do aplikacji służy do wyboru poziomu trudności Quizu z Menu oraz interesującej nas kateogrii pytań

> dodać screen

### Rozgrywka

Rozgrywka polega na udzieleniu odpowiedzi na pytanie poniżej wyznaczonego czasu. Za każdą dobrą odpowiedź gracz otrzymuje punkt, a po skończeniu gry jego wynik zostaje zapisany wraz z podaną wcześniej nazwą.

> dodać screen

### Tabela wyników

Dla każdej kategorii możemy sprawdzić wszystkie wyniki graczy biorących udział w rozgrywce na danym urządzeniu - wyniki przechowywane są w LocalStorage

> dodać screen

### Wykorzystane technologie

- HTML
- CSS (SCSS)
- JavaScript
- SessionStorage oraz LocalStorage
- Fetch API

### API

W projekcie zostało wykorzystane zewnętrzne API od [Open Trivia Database](https://opentdb.com/).

Z API pobierane są:
- Lista, wybranych przez zespół, kategorii, które zostają następnie zapisane w SessionStorage, aby ograniczyć liczbę requestów
- Pytania dla wybranej przez użytkownika kategorii
- Liczba wszystkich pytań łącznie dla wybranej kategorii, jak i dla konkretnego poziomu trudności Quizu
- Token sesji, który odpowiada za niepowtarzalność pytań oraz obsługę błędnego requestu, który również zostaje zapisany w SessionStorage 

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie należy wykonać następujące kroki:

1. Zainstalować zależności używając polecenia `npm install`
2. Wystartować serwer developerski poleceniem `npm run start`

Aplikacja będzie dostępna pod adresem **_localhost:8080_**

### Zrealizowane wymagania projektu

- zmienne
- operatory porównania
- pętle
- obiekty, atrybuty
- warunki
- funkcje
- operatory logiczne
- tablice
- iteracja i/lub rekurencja :white_check_mark:
- console :heavy_check_mark: :x:
- return :heavy_multiplication_x:
- "===" vs "=="
- integracja z zewnętrznym REST API
- interakcja z domem
- odwoływanie się do elementów DOM z JavaScript
- zmiana stylów z poziomu JSa
- zmiana zawartości HTML z poziomu JSa
- animacje
- zewnętrzne biblioteki
- async await i/lub Promise
- funkcje callback
- metody HTTP
