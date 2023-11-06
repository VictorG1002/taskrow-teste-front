## Respostas CSS

- Perguntas: https://github.com/taskrow/web-frontend-test-2023/blob/main/parte2.md

- 1. <p>De todas as formas.</p>

- 2. <p> É o que se usa para selecionar os elementos HTML aos quais você deseja aplicar determinados estilos. Seletor de Elemento, Seletor de Classe, Seletor de ID, Seletor de Atributo, Seletor Universal, Seletor de Descendência, Seletor de Adjacência, Seletor de Filho Direto, Seletor de Pseudo-classes e Pseudo-elementos.<p>

- 3. É usado para selecionar todos os elementos `<p>` que são filhos diretos de elementos `<div>`

- 4. **div > p:** Seleciona todos os elementos `<p>` que são filhos diretos de elementos `<div>`

     **div p:** Seleciona todos os elementos `<p>`que estão estruturado em qualquer nível dentro de elementos`<div>`

     **div + p:** Seleciona o primeiro elemento `<p>` que é imediatamente precedido por um elemento `<div>`

- 5.  **Block:** É exibido como um bloco e quebra a linha após o elemento. Ele preenche toda
      a largura disponível, por padrão.

      **Inline:** É exibido em linha, permitindo que outros elementos sejam exibidos ao lado dele, sem quebra de linha antes ou depois do elemento.

      **Inline-block:** É exibido como um bloco, mas permite que outros elementos sejam exibidos ao lado dele, sem quebra de linha antes depois do elemento.

      **None:** É completamente removido do layout.

      **Flex:** Permite que você use as propriedades flexbox para manipular o layout dos elementos filhos.

      **Grid:** Permite que você use as propriedades CSS grid para criar layouts complexos em duas dimensões.

- 6.  **Static:** Valor padrão. O elemento segue o fluxo normal da página. Ignora as propriedades top, bottom left e right.

      **Relative:** O elemento é utiliza seu próprio canto para referenciar.

      **Absolute:** Possui dois comportamentos diferentes. O primeiro é quando o elemento com essa propriedade possui um elemento pai de valor diferente de static. Neste caso, ele terá este elemento pai como referência para ser posicionado. O segundo comportamento é quando o elemento com position absolute não tem elemento pai, ou este elemento pai possui position static. Nesta situação, ele irá ignorar estes elementos e será posicionado a partir do canto esquerdo superior do documento, podendo até mesmo sobrepor a eles.

      **Fixed:** O elemento é removido do fluxo normal da página e permanece fixo em relação à viewport, ou seja, ele não se move quando a página é rolada.

      **Sticky:** O elemento é posicionado com base na posição de rolagem do usuário. Ele se comporta como relative até que um limite específico seja alcançado, momento em que se comporta como fixed.

- 7. Adicionar Fontes Externas (Web Fonts): Usar serviços de fontes da web, como o Google Fonts ou Adobe Fonts, para usar fontes personalizadas na página. Isso garante que a fonte seja carregada corretamente em todos os dispositivos.

- 8. **Px:** Um pixel (px) é uma unidade de medida fixa e representa um único ponto em uma tela de computador.

     **Em:** Isso define o tamanho da fonte como um múltiplo do tamanho da fonte do elemento pai,se o tamanho da fonte do elemento pai for 16px, então 1em será igual a 16px, 2em será igual a 32px e assim por diante.

     **Rem:** Isso define o tamanho da fonte como um múltiplo do tamanho da fonte do elemento raiz(16px), se o tamanho da fonte padrão do navegador for 16px, 1rem será igual a 16px, 2rem será igual a 32px e assim por diante.

     **Pt:** Um ponto (pt) é uma unidade de medida comumente usada para o tamanho de fontes em impressão e é equivalente a 1/72 polegadas.

- 9. **Flex box:** 4

     **CSS grid:** 5

     **variáveis CSS:** 5

     **viewport:** 4

- 10. https://css-tricks.com/ , https://developer.mozilla.org/pt-BR/docs/Web/CSS
