import { TipoProduto } from './../../shared/enums/tipo-produto-enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  errorValidator: any;
  loading = false;
  disabled: boolean = false;
  sexo?: string;
  tamanhosTipos: string[] = [];

  constructor(private router: Router){};

  ngOnInit() {
    this.produtos = this.mockProdutos().filter((p) => p.ativo);
  }

  mockProdutos() {
    return [
      {
        id: 1,
        nome: "Produto 1",
        descricao: 'Descrição Produto 1',
        tipo: TipoProduto.ROUPA,
        valor: 35.0,
        valorTaxa:  36.92,
        ativo: true,
        tamanhos: [ 'PP', 'P', 'M', 'G', 'GG', 'PP - Baby Look', 'P - Baby Look', 'M - Baby Look', 'G - Baby Look', 'GG - Baby Look' ],
        cores: ['Preto', 'Branco'],
        img: ['assets/product.png']
      },
      {
        id: 2,
        nome: "Produto 2",
        descricao: 'Descrição Produto 2',
        tipo: TipoProduto.CALÇADO,
        valor: 35.0,
        valorTaxa:  36.92,
        ativo: true,
        tamanhos: [ '36', '37', '38', '39', '40' ],
        cores: ['Preto', 'Branco'],
        img: ['assets/product.png']
      },
      {
        id: 3,
        nome: "Produto 3",
        descricao: 'Descrição Produto 3',
        tipo: TipoProduto.ROUPA,
        valor: 35.0,
        valorTaxa:  36.92,
        ativo: true,
        tamanhos: [ 'PP', 'P', 'M', 'G', 'GG', 'PP - Baby Look', 'P - Baby Look', 'M - Baby Look', 'G - Baby Look', 'GG - Baby Look' ],
        cores: ['Preto', 'Branco'],
        img: ['assets/product.png']
      },
      {
        id: 4,
        nome: "Produto 4",
        descricao: 'Descrição Produto 4',
        tipo: TipoProduto.ACESSORIO,
        valor: 35.0,
        valorTaxa:  36.92,
        ativo: true,
        img: ['assets/product.png']
      }
  ]

  }

 verProduto(produto: Produto){
  sessionStorage.setItem('produto', JSON.stringify(produto));
  this.router.navigate(['detalhes-produto']);
 }
}
