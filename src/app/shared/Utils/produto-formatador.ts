import { Pedido } from "src/app/models/pedido";
import { Produto } from "src/app/models/produto";
import { FormasPagamento } from "../enums/formas-pagamento.enum";
import { TipoProduto } from "../enums/tipo-produto-enum";

export function formatarProdutosPedido(produtos: Produto[], pedido: Pedido): string {
  let aux: string = '';

  produtos.map((p) => {
    aux += `(${p.qtdItem}x) ${p.nome}`;

    if (p.tamanhoSelecionado) {
      aux += ` - ${p.tamanhoSelecionado.replaceAll(' ', '')}`;
    }
    if (p.corSelecionada) {
      aux += `/${p.corSelecionada}`;
    }

    if (pedido.formaPagamento === FormasPagamento.CARTAO_CREDITO) {
      aux += ` - ${p.valorTaxa.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })} `;
    } else {
      aux += ` - ${p.valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })} `;
    }
  });

  return aux.trim();
}

export function formatarValorTotalProduto(produto: Produto, pedido: Pedido | undefined) {
  let total;

  if (pedido && pedido.formaPagamento == FormasPagamento.CARTAO_CREDITO) {
    total = produto.qtdItem ? produto.valorTaxa * produto.qtdItem : 0;
  } else {
    total = produto.qtdItem ? produto.valor * produto.qtdItem : 0;
  }

  return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'});
}

export function formatarProdutoPedido(p: Produto) {
  let aux = `(${p.qtdItem}x) ${p.nome}`;

  if (p.tamanhoSelecionado) {
    aux += ` - ${ p.tamanhoSelecionado.replaceAll(' ', '')}`;
  }
  if (p.corSelecionada) {
    aux += `/${p.corSelecionada}`;
  }

  return aux.trim();
}

export function formatarProdutoCarrinho(produto: Produto) {
  let aux = produto.nome + ' - ';

  aux += produto.tipo == TipoProduto.ROUPA ? produto.tamanhoSelecionado : '';
  aux += produto.tipo == TipoProduto.CALÇADO
      ? produto.tamanhoSelecionado + '/' + produto.corSelecionada
      : '';

  return aux.trim();
}

