import { TipoProduto } from './../../../shared/enums/tipo-produto-enum';
import { Produto } from './../../../models/produto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ErroDetalhesProduto {
  tipoErro: string;
  controleErro?: string;
  mensagemErro: string;
}

export const qtdValidator = [
  Validators.min(1),
  Validators.required,
  Validators.nullValidator,
];

export function getProdutoValidationErrors(produto: Produto): ErroDetalhesProduto[] {
  let errors: ErroDetalhesProduto[] = [];

  var form = new FormGroup({
      quantidade: new FormControl(produto.qtdItem, qtdValidator),
      cor: new FormControl(produto.corSelecionada, produto.tipo === TipoProduto.CALÇADO ? Validators.required : null),
      tamanho: new FormControl(produto.tamanhoSelecionado, produto.tipo === TipoProduto.CALÇADO || produto.tipo === TipoProduto.ROUPA ? Validators.required : null),
  });

  Object.keys(form.controls).forEach((campoErro) => {
    const control = form.get(campoErro);

    var controlErrors: any = control?.errors;

    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach((tipoErro) => {
        errors.push({
          controleErro: campoErro,
          tipoErro: tipoErro,
          mensagemErro: campoErro + mensagensErros.get(tipoErro),
        });
      });
    }
  });

  return errors;
}

export const mensagensErros = new Map<string, string>([
  ['required', ' é obrigatório'],
  ['min', ' deve ser no mínimo 1'],
  ['minlength', ' informado é muito curto'],
  ['maxlength', ' informado é muito longo'],
  ['pattern', ' informado é inválido. Insira um formato válido.'],
]);
