# Platform buurtinitiatieven Amsterdam West
Een design voor een buurtplatform voor bewoners en buurtinitiatieven uit Amsterdam West

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
De hallen organiseert een buurtplatform voor bewoners en buurtinitiatieven uit Amsterdam West. <br>
Hierbij kunnen de bewoners makkelijker in contact komen met de verschillende buurtinitiatieven <br>
en kunnen de buren hulp vragen of aanbieden via het 'help een buur' platform.

User story
> Als buurtbewoner uit Amsterdam West zou ik mijzelf willen aanmelden bij verschillende initiatieven.

<br>

[Klik hier om naar het buurtplatform te gaan](https://xxdaniquee.github.io/look-and-feel-corporate-identity/)
<br><br>

<img width="851" alt="Screenshot 2023-11-26 at 22 04 03" src="https://github.com/xxdaniquee/look-and-feel-corporate-identity/assets/128936068/c59c8520-2198-4efa-94bc-9ce10a5c28b1">

## Kenmerken
Deze website is gebouwd met [HTML]() en [CSS](). <br>
Deze website is mobile first gebouwd en responsive.

### HTML
Er zijn 2 HTML pagina's voor deze website. Beide hebben de settings in de [HEAD]() en de content in de [BODY]().
> Dit is de HTML van de homepagina: [Index.html](https://github.com/xxdaniquee/look-and-feel-corporate-identity/blob/main/index.html) <br>
> En dit van de buurtinitiatieven pagina: [Abc.html](https://github.com/xxdaniquee/look-and-feel-corporate-identity/blob/main/abc.html)

### HEAD
In de head staan de links naar de bijbehorende styling pagina's. In de main.css staat de algemene styling <br>
en 3 files met specifieke styling voor andere schermformaten.
```
        <link rel="stylesheet" href="./styles/main.css">
        <link rel="stylesheet" href="./styles/tablet.css"> 
        <link rel="stylesheet" href="./styles/desktop.css"> 
        <link rel="stylesheet" href="./styles/desktop-xl.css"> 
```
Ook wordt er in de HEAD doorgelinkt naar de website van FontAwesome. <br>
Via deze link kan je iconen uitzoeken en op de website plaaatsen.
```
        <script src="https://kit.fontawesome.com/319280bb92.js" crossorigin="anonymous"></script> 
```

### BODY
De structuur van de BODY is verdeeld in [HEADER](), [MAIN]() en [FOOTER]()

#### HEADER
In de header staat het logo van De Hallen en een menu icoon om te navigeren naar andere pagina's.

#### MAIN
De main is opgedeeld in 4 sections met daarin de content voor dat element. <br>
Hierin staan alle teksten, linkjes en afbeeldingen.
```
        <section class="top"> 
        <section class="buurtinitiatieven"> 
        <section class="apply-info"> 
        <section class="buur"> 
```

In 2 van de sections, namelijk buurtinitiatieven en buur, staan kaartjes met daarop de content met informatie <br>
over een buurtinitiatief of een vraag/ aanbod uit de buurt. Deze content staat in article elementen.
```     
        <article class="initiatief">
        <article class="vraag-aanbod">
```
#### FOOTER
In de footer staat een menu met links naar andere pagina's.

### CSS
In de CSS staat de styling voor de HTML elementen. <br>
De CSS is gemaakt met een mobile first en responsive design.

#### MAIN
In main.css staat de algemene styling van de volledige website. Door het mobile first design, is dit <br> 
gelijk ook het design voor een klein sherm (smartphone). Hierin staan ook de custom properties, <br>
meer daarover vind je [hier](https://github.com/xxdaniquee/look-and-feel-living-styleguide#de-hallen---living-styleguide), en de gebruikte fonts.
```
@font-face {
    font-family: 'ITC Avant Garde Std Bold';
    src: url('ITCAvantGardeStd-Bold.eot');
    src: local('ITC Avant Garde Gothic Std Bold'), local('ITCAvantGardeStd-Bold'),
        url('ITCAvantGardeStd-Bold.eot?#iefix') format('embedded-opentype'),
        url('ITCAvantGardeStd-Bold.woff2') format('woff2'),
        url('ITCAvantGardeStd-Bold.woff') format('woff'),
        url('ITCAvantGardeStd-Bold.ttf') format('truetype');
    font-weight: bold;
}
```
#### TABLET
In tablet.css staat styling die aangepast is op het formaat van een tablet. <br<
Hiervoor is een media querie gebruikt:
```
@media (min-width: 768px) and (max-width: 1023px) {}
```
#### DESKTOP
In desktop-xl.css staat styling die aangepast is op het formaat van een groot desktop formaat browser.<br>
Hiervoor is een media querie gebruikt:
```
@media (min-width: 1024px) and (max-width: 1919px) {}
```
#### DESKTOP XL
In desktop.css staat styling die aangepast is op het formaat van een desktop formaat browser. <br>
Hiervoor is een media querie gebruikt:
```
@media (min-width: 1920px) {}
```
## Bronnen
* Actief Computer Centrum west https://accscip.nl/
* Amsterdams Buurvrouwen Contact https://abcamsterdam.org/
* Asv Bilderdijkpark https://www.bilderdijkpark.nl/wp/
* De Hallen https://dehallen-amsterdam.nl/
* Icons https://fontawesome.com/
* 

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
