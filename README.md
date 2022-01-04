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

- zmienne :heavy_check_mark:
- operatory porównania :heavy_check_mark:
- pętle :heavy_check_mark:
- obiekty, atrybuty :heavy_check_mark:
- warunki :heavy_check_mark:
- funkcje :heavy_check_mark:
- operatory logiczne :heavy_check_mark:
- tablice :heavy_check_mark:
- iteracja i/lub rekurencja :heavy_check_mark:
- console :heavy_check_mark:
- return :heavy_check_mark:
- "===" vs "==" :heavy_check_mark:
- integracja z zewnętrznym REST API :heavy_check_mark:
- interakcja z domem :heavy_check_mark:
- odwoływanie się do elementów DOM z JavaScript :heavy_check_mark:
- zmiana stylów z poziomu JSa :heavy_check_mark:
- zmiana zawartości HTML z poziomu JSa :heavy_check_mark:
- animacje :heavy_check_mark:
- zewnętrzne biblioteki :heavy_check_mark:
- async await i/lub Promise :heavy_check_mark:
- funkcje callback :heavy_check_mark:
- metody HTTP :heavy_check_mark:
