import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
  photoCover:string='https://i.imgur.com/mFtZxL8.jpg'
  contentTitle:string='COMO FUNCIONA O JOGO DE POKER'
  contentDescripton:string='Obviamente, como todos sabemos o poker possui diversas variantes, por isso iremos nos focar na mais conhecida, o Texas Holdem. Nele a ideia é receber 2 cartas cada jogador e formar poker sequência com o que estão dispostas na mesa pelo Crupiê. Estas sequências, por sua vez, são ranqueadas da maior para a menos. Em caso de você possuir uma sequência melhor do que a do adversário ou da banca, será o vencedor da partida.'
  private id:string='0'

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('id'))
    )
  }

}
