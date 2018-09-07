import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  main_paragraph: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
  disclaimer: string;

  constructor() { }

  ngOnInit() {
    this.main_paragraph = 'Веб страна која ги акумилира искуствата од минатите учесници на програмата Work and Travel USA.';

    this.paragraph_1 = 'Прочитај ги искуствата од другите студенти во секцијата ИСКУСТВА и информирај се од прва рака!';
    this.paragraph_2 = 'Прочитај ги нашите совети и најди одговор на често поставувани прашања во секциите СОВЕТИ и ПРАШАЊА !';
    this.paragraph_3 = 'Ако веќе си учествувал во програмата, сподели го твоето искуство во делот СПОДЕЛИ ИСКУСТВО и помогни им на идните студенти!';
    this.disclaimer = '*При читање на искуствата имајте во предвид дека истите се базирани на лични ставови и мислења, и условите на работното место можат да се сменат од година во година.';
  }

}
