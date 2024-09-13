import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isLoading = true;
  isModalLoading = false; // Nuova proprietà per lo stato di caricamento della modale


  quadri: { src: string, title: string, description: string, collection: string, venduto: boolean}[] = [
    { src: 'assets/quadri/back to carribean.jpg', title: 'Music behind the wall', description: 'Olio 81x100', collection: 'Back to Carribean', venduto: false },
    { src: 'assets/quadri/back to carribean1.jpg', title: 'Il teatro magico', description: 'Olio 100x100', collection: 'Back to Carribean', venduto: true },
    { src: 'assets/quadri/back to carribean2.jpg', title: 'Cuba at night', description: 'Olio 81x100', collection: 'Back to Carribean', venduto: false },
    { src: 'assets/quadri/back to carribean3.jpg', title: 'Il mio mondo a colori', description: 'Olio, 81x116', collection: 'Back to Carribean', venduto: false },
    { src: 'assets/quadri/back to carribean4.jpg', title: 'The show must go on', description: 'Olio, 90x131', collection: 'Back to Carribean', venduto: false },
    { src: 'assets/quadri/back to carribean5.jpg', title: 'Il teatro di mangiafuoco', description: 'Olio, 115x89', collection: 'Back to Carribean', venduto: true },
    { src: 'assets/quadri/back to carribean6.jpg', title: 'Fiesta en La Habana', description: 'Olio, ', collection: 'Back to Carribean', venduto: false },
    { src: 'assets/quadri/back to carribean7.jpg', title: 'Il mio mondo interiore', description: 'Olio, 70x120', collection: 'Back to Carribean', venduto: true },
    { src: 'assets/quadri/back to carribean8.jpg', title: 'Back to Carribean', description: 'Olio 87x116', collection: 'Back to Carribean', venduto: false },
    { src: 'assets/quadri/mil 1.jpg', title: '#1', description: 'Tecnica mista, 60x60', collection: 'Mil rostros detras de mi alma', venduto: false },
    { src: 'assets/quadri/mil 2.jpg', title: '#2', description: 'Tecnica mista, 60x60', collection: 'Mil rostros detras de mi alma', venduto: true },
    { src: 'assets/quadri/mil 3.jpg', title: '#3',  description: 'Tecnica mista, 60x60', collection: 'Mil rostros detras de mi alma', venduto: false },
    { src: 'assets/quadri/mil 4.jpg', title: 'Connected',  description: 'Tecnica mista, 60x60', collection: 'Mil rostros detras de mi alma', venduto: true },
    { src: 'assets/quadri/mil 5.jpg', title: '#4', description: 'Olio, 60x40', collection: 'Mil rostros detras de mi alma', venduto: false },
    { src: 'assets/quadri/mil 6.jpg', title: '#5', description: 'Tecnica mista, 60x60', collection: 'Mil rostros detras de mi alma', venduto: false },
    { src: 'assets/quadri/mil 7.jpg', title: '#6', description: 'Tecnica mista, 50x50', collection: 'Mil rostros detras de mi alma', venduto: false },
    { src: 'assets/quadri/mil 8.jpg', title: '#8', description: 'Tecnica mista, 60x40', collection: 'Mil rostros detras de mi alma', venduto: false },
    { src: 'assets/quadri/Abraxas.jpg', title: 'Abraxas', description: 'Tecnica mista, 130x97', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/Madre Etna.jpg', title: 'Madre Etna', description: 'Tecnica mista, 130x97', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/magic woman.jpg', title: 'Magic Woman', description: 'Tecnica mista, 99x60', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry1.jpg', title: 'Modi', description: 'Tecnica mista, 100x82', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry2.jpg', title: 'Donna Poesia', description: 'Tecnica mista, 100x74', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry3.jpg', title: 'The Poetess', description: 'Tecnica mista, 116x90', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry4.jpg', title: 'Metamorfosi', description: 'Tecnica mista, 100x73', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry5.jpg', title: 'El Desasosiego', description: 'Tecnica mista, 130x81', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry6.jpg', title: 'Be calm', description: 'Tecnica mista, 81x126', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/cicatrices.png', title: 'Scars', description: 'Tecnica mista, 50x65', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry8.png', title: 'Donna Luce', description: 'Tecnica mista, 120x50', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry9.jpg', title: 'The Yocker', description: 'Tecnica mista, 90x60', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry10.jpg', title: 'Sensualidad', description: 'Tecnica mista, 90x60', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/woman & poetry11.jpg', title: 'Lavori in corso', description: 'Tecnica mista, 100x80', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/Amore materno.jpg', title: 'Amore materno', description: 'Tecnica mista, 130x90', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/Lolita.jpg', title: 'Lolita', description: 'Tecnica mista, 95x80', collection: 'Woman & poetry', venduto: true },
    { src: 'assets/quadri/La Gheisha.jpg', title: 'La Gheisha', description: 'Tecnica mista, 100x50', collection: 'Woman & poetry', venduto: false },
    { src: 'assets/quadri/la locura.jpg', title: 'La Locura', description: 'Acrilico, 116x90', collection: '', venduto: false },
    { src: 'assets/quadri/krisztina.jpg', title: 'Krisztina', description: 'Olio', collection: '', venduto: false },
    { src: 'assets/quadri/autoritratto.jpg', title: 'Autoritratto', description: 'Olio', collection: '', venduto: true },
    { src: 'assets/quadri/il bagno turco.jpg', title: 'Il bagno turco', description: 'Olio', collection: '', venduto: false },
    { src: 'assets/quadri/La casa rossa.jpg', title: 'La casa rossa', description: 'Acrilico, 80x120', collection: '', venduto: true },
    { src: 'assets/quadri/noche de bohemia.jpg', title: 'Noche de bohemia', description: 'Tecnica mista, 130x96', collection: '', venduto: false },
    { src: 'assets/quadri/Solitudine in tempi di covid.jpg', title: 'Solitudine in tempi di covid', description: 'Tecnica mista, 81x100', collection: '', venduto: false },
    { src: 'assets/quadri/the last act.jpg', title: 'The last act', description: 'Olio', collection: '', venduto: false },
    { src: 'assets/quadri/mujer.jpg', title: 'Mujer', description: 'Tecnica mista, 81x130', collection: '', venduto: false },
    { src: 'assets/quadri/la lussuria.jpg', title: 'La Lussuria', description: 'Tecnica mista, 81x130', collection: '', venduto: false },
    { src: 'assets/quadri/tempi oscuri.jpg', title: 'Tempi oscuri', description: 'Olio, 90x116', collection: '', venduto: false },
    { src: 'assets/quadri/trip to myself.jpg', title: 'Trip to myself', description: '130x97', collection: '', venduto: false },
    { src: 'assets/quadri/amor y desamor.jpg', title: 'Amor y Desamor', description: 'Tecnica mista, 100x100', collection: '', venduto: false },
    { src: 'assets/quadri/antica marina.jpg', title: 'Antica marina', description: 'Acrilico, 90x130', collection: '', venduto: false },
    { src: 'assets/quadri/Cristo che fa surf.jpg', title: 'Cristo che fa surf', description: 'Tecnica mista, 150x97', collection: '', venduto: false },
    { src: 'assets/quadri/sotto il vulcano.jpg', title: 'Sotto il vulcano', description: 'Tecnica mista, 70x60 ', collection: '', venduto: true },
    { src: 'assets/quadri/barca alla deriva.jpg', title: 'Barca alla deriva', description: 'Tecnica mista, 116x73', collection: '', venduto: false },
    { src: 'assets/quadri/broken.jpg', title: 'Broken', description: 'Tecnica mista, 116x73', collection: '', venduto: false },
    { src: 'assets/quadri/citta antica.jpg', title: 'Città antica', description: 'Acrilico, 90x136', collection: '', venduto: false },
    { src: 'assets/quadri/el barrio.jpg', title: 'El Barrio',  description: 'Olio, 80x61', collection: '', venduto: false },
    { src: 'assets/quadri/no name1.jpg', title: 'No Name #1',  description: 'Tecnica mista', collection: '', venduto: false },
    { src: 'assets/quadri/no name2.jpg', title: 'No Name #2',  description: 'Tecnica mista', collection: '', venduto: true },
    { src: 'assets/quadri/the sailor.jpg', title: 'The Sailor',  description: 'Tecnica mista', collection: '', venduto: false },
    { src: 'assets/quadri/il viaggiatore del tempo.jpg', title: 'Il viaggiatore del tempo', description: 'Tecnica mista, 120x100', collection: '', venduto: true },
    { src: 'assets/quadri/la gabbia.jpg', title: 'La Gabbia', description: 'Tecnica mista, 130x81', collection: '', venduto: false },
    { src: 'assets/quadri/la mascherina.jpg', title: 'La Mascherina', description: 'Tecnica mista, 73x54', collection: '', venduto: false },
    { src: 'assets/quadri/last round.jpg', title: 'Last Round', description: 'Tecnica mista, 116x81', collection: '', venduto: false },
  ];
  

  selectedQuadro: { src: string, title: string, description: string, collection: string } | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadQuadri();
  }

  async loadQuadri(): Promise<void> {
    this.isLoading = true;

    // Attendi il caricamento di tutte le immagini
    await this.loadAllImages();

    // Una volta che tutte le immagini sono caricate, nascondi lo spinner
    this.isLoading = false;
  }

  // Funzione che attende il caricamento di tutte le immagini
  async loadAllImages(): Promise<void> {
    const imageLoadPromises = this.quadri.map(quadro => this.loadImage(quadro.src));
    await Promise.all(imageLoadPromises);
  }

  // Funzione che restituisce una Promise che si risolve quando l'immagine è caricata
  loadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    });
  }

  async selectQuadro(quadro: { src: string, title: string, description: string, collection: string }): Promise<void> {
    this.isModalLoading = true; // Mostra lo spinner
    this.selectedQuadro = null; // Assicura che la modale sia vuota mentre carica
    await this.loadImage(quadro.src); // Attendi il caricamento dell'immagine
    this.selectedQuadro = quadro; // Imposta il quadro selezionato
    this.isModalLoading = false; // Nascondi lo spinner
  }


  deselectQuadro(): void {
    this.selectedQuadro = null;
  }
}