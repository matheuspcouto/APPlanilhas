export class Produto {
  id: number = 0;
  nome: string = '';
  descricao?: string;
  tipo?: string;
  tamanhos?: string[];
  tamanhoSelecionado?: string;
  cores?: string[];
  corSelecionada?: string;
  qtdItem?: number;
  valor: number = 0;
  valorTaxa: number = 0;
  img: string[] = [];
  ativo: boolean = true;
}
