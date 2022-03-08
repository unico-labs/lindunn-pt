---
title: LINDDUN GO
layout: base.njk
---

<section class="linkability">

## Linkabilidade

#### O que é?
    
É a capacidade de ligação de dois ou mais itens de interesse (ex: pessoas, mensagens, ações, etc. Da perspectiva de um invasor significa que dentro do sistema o invasor pode distinguir se esses itens de interesse estão relacionados ou não, e podem ser utilizados para identificar.

#### Como assim?
    
Os dados podem ser vinculados, pois são do mesmo titular, ou compartilham propriedades. Por exemplo: visitas a sites pelo mesmo usuário, entradas em duas bases de dados relacionadas à mesma pessoa, pessoas relacionadas por um link de amizade, etc. Associação de pessoas que visitam o mesmo restaurante, pessoas com doenças semelhantes, etc.

#### Possíveis consequências

- Inferência: Dedução de informações sobre um conjunto de dados.
- Seleção/atribuição: isolar alguns ou todos os registros que pertencem a um indivíduo
- Identificação: Vinculação de itens de dados à identidade do titular dos dados.

#### Fluxos de dados no sistema

🚪**Entrada** - O sistema pode vincular dados que recebe a outros itens de dados

<br>

🚪🚶**Saída** - As partes receptoras podem vincular dados pessoais a outros itens de dados

<br>

👜 **Armazenamento** - O sistema armazena dados pessoais que podem ser vinculados a outros dados

<br>

🩹 **Recuperação** - Os dados pessoais recuperados podem ser vinculados a outros dados

### Vinculação de ações do usuário
    
**HOTSPOT**: UI/UX ENVIA CREDENCIAIS (USUÁRIO NÃO AUTENTICADO)

**FONTE DA AMEAÇA**: ORGANIZAÇÃO

<br>

**Definição: As solicitações ao sistema estão vinculadas aos dados ou ações do usuário que acha que está anônimo**

<br>

**Perguntas**: 

- O usuário pensa que é anônimo porque não se autenticou?
- É um problema se o sistema vincular várias ações do usuário?

<br>

**Exemplos**:

Consultas específicas (por ex: destino e data podem estar linkadas a sessões em um site de viagens). Até quando o usuário não está logado, sua navegação identifica seu perfil. Um sistema de avaliação para restaurantes, por exemplo, pode vincular um usuário autenticado à sua visita ao restaurante.

<br>

💡 Insights:
- Ameaças de profiling também se aplicam a usuários autenticados.
- Linkar pode levar à identificação
- Linkar várias ações pode criar o perfil do usuário
- Quanto mais informações, mais exclusivo o perfil.

### Linkabilidade na entrada de dados 

**HOTSPOT**: INTERAÇÃO COM O USUÁRIO (NÃO AUTENTICADO)

**FONTE DA AMEAÇA**: ORGANIZAÇÃO

<br>

**Definição: Os metadados são vinculados**

<br>

**Perguntas**:

- Existem dados contextuais vinculados ao acesso?
- Seria problema se os acessos fossem vinculados (pela organização ou por um observador)?

<br>

☀ Exemplos:

<br>

Metadados que podem ser usados para vincular dados: endereços IP, configurações do navegador, tempos de acesso, etc. Informações linkadas que revelam um padrão de uso, como por exemplo, mídia social após o mesmo programa de TV, etc

<br>

💡 Insights:

-   Possibilidade de recair na linkabilidade na entrada dos dados:
-   Organizacional: alta probabilidade, pois metadados geralmente estão disponíveis.
-   Externo: impacto provavelmente baixo, a menos que haja um contexto sensível.

### Linkando os contextos 

**HOTSPOT**: SAÍDA. CONTÉM DADOS PESSOAIS, O RECEPTOR NÃO É O TITULAR

**FONTE DA AMEAÇA**: RECEPTOR DOS DADOS

<br>

**Definição: Dados compartilhados a terceiros podem ser vinculados**

<br>

**Perguntas**: 

Espera-se que os dados compartilhados sejam anônimos?
Tais dados podem ser linkados a dados obtidos anteriormente?


<br>
☀ Exemplos:

Um serviço de terceiros é usado como base de conhecimento. Para encaminhar facilmente respostas assíncronas para o usuário correto, o sistema fornece o identificador interno do usuário, que permite aos terceiros vincular todas as solicitações ao mesmo usuário.

<br>

💡 Insights:
- Linkar pode levar à criação de perfis de identificação
- Depende dos dados que o terceiro já possui: quanto mais atributos compartilhados, maior o risco.
- Ainda que os dados sejam anonimizados, ameaças de non-compliance e unawareness surgirão


### Linkabilidade de dados compartilhados 
    
**HOTSPOT**: ARMAZENAMENTO DE DADOS PESSOAIS

**FONTE DA AMEAÇA**: ORGANIZAÇÃO

<br>

**Definição: Dados pessoais armazenados são linkáveis**

<br>

**Perguntas**:

- Os dados são armazenados com atributos exclusivos?
- Os dados podem ser minimizados?

<br>
    
☀ Exemplos:

O sistema recebeu um conjunto de dados brutos. Apenas o conjunto agregado de dados é necessário, mas eles são armazenados por titular de dados individualmente.

<br>

💡 Insights:

- Dados que podem ser linkados podem levar à criação de perfil, à inferência e identificabilidade
- Intimamente relacionado à minimização
- Se todos os atributos forem necessários para pelo menos um processo, os dados não podem ser minimizados ou desidentificados.

### Linkabilidade de dados guardados 

<br>

**HOTSPOT**: RECUPERAÇÃO DE DADOS PESSOAIS

**FONTE DA AMEAÇA**: TERCEIROS OU ORGANIZAÇÃO (RECEPTOR NÃO É TITULAR)

<br>

**Definição: Dados pessoais recuperados são linkáveis a dados obtidos anteriormente**

<br>

**Perguntas**:

- Os dados que estão sendo recuperados são anonimizados?
- O receptor pode linkar mais informações do que precisa?

<br>

☀ Exemplos:

Embora um banco de dados só permita consultas em um número limitado de atributos por vez, as consultas podem retornar resultados linkáveis. Dados de sensores, por exemplo, são temporariamente armazenados em buffer antes de enviar para o back-end. Em vez de enviar 1 conjunto agregado, o back-end recupera o conjunto de dados completo.

<br>

💡 Insights:

- Pode levar à identificabilidade
- A probabilidade depende do conhecimento da parte receptora.

### Dados recuperados vinculados
    
**HOTSPOT**: ORGANIZAÇÃO

**FONTE DA AMEAÇA**: FLUXO DE DADOS CONTÉM DADOS PESSOAIS (USUÁRIO NÃO AUTENTICADO)

<br>

**Definição: Os dados enviados estão vinculados a dados já coletados do mesmo titular dos dados**

<br>

**Perguntas**:

- O fluxo contém dados pessoais?
- O sistema vincula (ou pode) vincular esses dados de modo a violar a privacidade do usuário?

<br>

☀ Exemplos:

O titular dos dados compartilha um conjunto mínimo de informações, mas dadas as informações já disponíveis os dados podem ser facilmente vinculados.

<br>

💡 Insights:

- As informações podem ser inferidas com base nos dados vinculados
- A ameaça depende dos dados que a organização já possui

</section>

<section class="identifiability">

## Identificabilidade
    
#### O que é?

Capacidade de identificar o contexto dentro de um conjunto de dados (por exemplo, eliminar o anonimato via informações em um conjunto de dados)

#### Como assim?

Os dados podem ser vinculados à identidade do titular com uma certa assertividade. Exemplos: identificar o leitor de uma página da web, o remetente de um e-mail, a pessoa a quem uma entrada em um banco de dados está relacionada, etc.

#### Possíveis consequências:

Quando os dados pessoais podem ser identificados, eles exigem medidas de segurança ainda mais rígidas. Os dados identificados também podem resultar em problemas de desconhecimento e não conformidade.

#### Fluxos de dados no sistema

🚪Entrada: O sistema pode vincular os dados pessoais que recebe a outros itens de dados

🚪🚶Saída: Os receptores podem vincular dados pessoais a outros itens de dados

👜 Armazenamento: O sistema armazena dados que podem ser identificadores

🩹 Recuperação: Os dados recuperados podem ser usados como identificadores

### Credenciais de identificação
    
**HOTSPOT**: ENTRADA. CREDENCIAIS ENVIADAS NA UI/UX (USUÁRIO AUTENTICADO)

**FONTE DA AMEAÇA**: ORGANIZAÇÃO

<br>

**Definição: O uso de credenciais não anônimas permite a identificação do usuário**

<br>

**Perguntas**: 

- As credenciais contêm informações identificáveis?
- É um problema se o usuário for identificado?

<br>

☀ Exemplos:

Um usuário deve se registrar com seu nome completo e endereço para ler notícias, permitindo a identificação de visualizações de páginas da web. Exemplos de credenciais de identificação: endereço de e-mail com nome completo, e-ID, biometria, atributos específicos de credenciais anônimas, etc

<br>

💡 Insights:

- Quando os dados são identificados é necessário que mais medidas de segurança sejam desenvolvidas
- Está relacionado com non-compliance unawareness 

### Ações que identificam o usuário
    
**HOTSPOT**: ENTRADA. INTERAÇÃO COM O USUÁRIO (NÃO AUTENTICADO)

**FONTE DA AMEAÇA**: ORGANIZAÇÃO

<br>

**Definição: O usuário é identificado por meio de suas solicitações ao sistema**

<br>

**Perguntas**:

- As solicitações podem chegar a identificar o usuário?
- É um problema identificar o usuário com base em suas ações?

<br>

☀ Exemplos:

Consultas a um mecanismo de pesquisa podem ser usadas para identificar o usuário que fez a consulta se, por exemplo, envia dados identificáveis sobre si mesmo para o sistema

<br>

💡 Insights:

- A probabilidade depende do conhecimento previamente obtido pela organização em relação ao usuário.
- Embora o usuário não seja identificado com credenciais, suas ações são suficiente para reconhecer o titular
- Está relacionado com non-compliance e unawareness

### Identificação dos dados na entrada

**HOTSPOT**: ENTRADA. FLUXO CONTENDO DADOS PESSOAIS

**FONTE DA AMEAÇA**: ORGANIZAÇÃO

<br>

**Definição: Os dados enviados para o sistema podem ser usados para identificar o usuário**

<br>

**Perguntas**: 

- O fluxo contém dados pessoais identificáveis?
- Seria um problema se o usuário fosse identificado com base nesses dados (usuário deve permanecer anônimo)?

<br>

☀ Exemplos:

O titular dos dados compartilha anonimamente suas preferências em um formulário de feedback (de seu empregador, escola, etc). Quando essas preferências são exclusivas, elas podem identificar o usuário.


<br>

💡 Insights:

- A probabilidade de acontecer depende da quantidade de conhecimento na organização
- O titular dos dados pode ser identificado pela ligação de dados e dados obtido antes
- O titular dos dados não precisa ser o remetente
- Combinar vários itens de dados pode identificar
- Identificar credenciais e ações são subtipos dessa ameaça.

### Contexto identifica o usuário 

**HOTSPOT**: ENTRADA. INTERAÇÃO COM O USUÁRIO NÃO AUTENTICADO OU ANÔNIMO

**FONTE DA AMEAÇA**: ORGANIZAÇÃO/EXTERNO

<br>

**Definição: Os dados de comunicação identificam, mas o usuário acha que está anônimo**

<br>

**Perguntas**:

- Existem dados disponíveis que podem identificar ou linkar?
- É um problema se a comunicação do usuário identificá-lo?

<br>

☀ Exemplos: 

Um e-shop rastreia o acesso de um usuário. O usuário acessa o site às segundas-feiras às 22h. Mesmo quando não está logado, a loja pode identificá-lo com base em seus dados. Uma pessoa deseja identificar quem de seus vizinhos acessa um determinado serviço com conteúdo confidencial, e por aí vai.

<br>

💡 Insights:

-   A probabilidade depende de conhecimento prévio.
-   Sem acesso ao conteúdo, o invasor pode identificar a comunicação (detectabilidade do canal)
-   Organizacional: Relaciona-se ao unawareness e non compliance

### Dados compartilhados identificáveis
    
**HOTSPOT**: FLUXO DE SAÍDA DE DADOS PESSOAIS (O RECEPTOR NÃO É O TITULAR

**FONTE DA AMEAÇA**: RECEPTOR DOS DADOS

<br>

**Definição: Os dados podem ser usados pelo receptor para identificar usuários**

<br>

**Perguntas**:

- Espera-se que os dados compartilhados sejam anônimos?
- É possível reidentificar os dados vinculando-os a outros dados ou combinando atributos?

<br>

☀ Exemplos: 

Ao compartilhar um conjunto de dados com uma parte externa, o nome completo é removido e o endereço é reduzido para cidade. No entanto, estão disponíveis dados que, quando combinados, são suficientes para identificar os usuários no conjunto de dados. Exemplos de combinações de quase identificadores incluem: gênero, data de nascimento, código postal; sexo, idade, município e ocupação.


<br>

💡 Insights:

- Ao compartilhar dados identificados, a privacidade do titular dos dados é violada.
- Combinar quase-identificadores pode identificar uma pessoa.
- Resulta em ameaças de não conformidade e inconsistência.
- Se os dados forem originados de um banco de dados recuperado, a ameaça também corresponde a identificabilidade de dados recuperados
    

### Dados guardados que identificam

**HOTSPOT**: ARMAZENAMENTO DE DADOS PESSOAIS

**FONTE DA AMEAÇA**: ORGANIZACIONAL

<br>

**Definição: Os dados pessoais armazenados podem identificar, pois a anonimização é fraca**

<br>

**Perguntas**:

- Os dados são armazenados com atributos identificáveis? (ou seja, os dados contêm identificadores, quase-identificadores ou links com dados identificados?)
- Podem os dados de identificação serem minimizados (removidos, desidentificados, descentralizados)?

<br>

☀ Exemplos:

Os dados estão sendo anonimizados pela substituição dos atributos de identificação por um identificador interno. No entanto, está sendo mantido um vínculo com a identidade real, o que ainda permite identificabilidade. Ou, dados estão sendo armazenados com nome de usuário, endereço de e-mail ou CPF como identificador.

💡 Insights:

- Dados anônimos reidentificados causam violação grave de privacidade.
- Se os dados não podem ser anonimizados (pois são necessários no sistema), eles podem ser descentralizados.
- Intimamente relacionado à minimização.

 ### Dados recuperados identificáveis
    

**HOTSPOT**: RECUPERAÇÃO DE DADOS PESSOAIS (A PARTE RECEPTORA NÃO É TITULAR)

**FONTE DA AMEAÇA**: RECEPTOR DE DADOS


<br>

**Definição: Os dados pessoais recuperados do armazenamento persistente podem ser usados para identificar o titular dos dados (porque contêm um identificador ou porque contêm atributos para combinar a um quase identificador, ou porque podem ser vinculados a dados previamente identificados)**


<br>

**Perguntas**:

- Os dados identificados estão sendo recuperados ou o receptor tem mais dados sobre os titulares?
- É um problema se o receptor identificar os dados?


<br>

☀ Exemplos:

O banco de dados retorna um atributo único (por exemplo, endereço de e-mail, nascimento, etc.) e o receptor pode usar para identificar os dados

<br>

💡 Insights:

- Quase-identificadores podem ser suficientes para identificar o titular.
- Probabilidade e impacto dependem de outros dados
- Garantir o anonimato é difícil. Quanto mais informações estiverem vinculadas, mais exclusivas serão, mais difícil garantir o anonimato.


</section>

<section class="dontreject">

## Não Repúdio
    
#### O que é?

Um usuário pode negar que sabe alguma informação ou fez alguma ação

#### Como assim?

Existem evidências que vinculam o titular dos dados a uma determinada ação.


<br>

Exemplos: incapaz de negar ser cliente em uma determinada loja, incapaz de negar ter feito uma reclamação, um usuário de um sistema de votação online não pode negar em quem votou, etc.Ameaças de identificabilidade (e linkabilidade) aumentarão o risco de não repúdio.


<br>

Observe que o não repúdio é, na verdade, uma meta de segurança. No entanto, isso não deve resultar em nenhum conflito, pois (partes de) um sistema que exige o não repúdio como objetivo de segurança não deve precisar de negação plausível para os mesmos dados.

#### Possíveis consequências:

O não repúdio leva à responsabilização do titular dos dados: quando uma pessoa não é capaz de negar uma ação ou informação, ela pode ser responsabilizada (por exemplo, um denunciante pode ser processado).

#### Fluxos de dados no sistema:

🚪Entrada: O remetente não pode negar o uso do sistema

🚪🚶Saída: O receptor não pode negar recebimento de uma mensagem

👜 Armazenamento: O titular dos dados não pode negar o armazenamento de seus dados

🩹 Recuperação: Os dados recuperados não podem ser negados pelo titular dos dados

### Credenciais de não repúdio
    
**HOTSPOT**: ENTRADA. FLUXO CONTENDO CREDENCIAIS (USUÁRIO AUTENTICADO)

**FONTE DA AMEAÇA**: EXTERNO

<br>

**Definição: A pessoa não pode negar ter autenticado em um serviço**


<br>

**Perguntas**:

- O sistema requer credenciais identificáveis?
- É um problema se um usuário for vinculado ao sistema se as credenciais ou os registros de acesso vazarem?


<br>

☀ Exemplos:

O usuário se registra com o endereço de e-mail de sua empresa em um local obscuro. Quando violada, a conta do usuário leva diretamente ao usuário. Obs: um endereço de e-mail pessoal emitido pelo governo ou empregador é muito mais difícil de repudiar do que um endereço de e-mail registrado (por exemplo, gmail).


<br>

💡 Insights:

-   Quando os dados são identificados é necessário que mais medidas de segurança sejam implementadas
-   Está relacionado com non-compliance unawareness


### Não repúdio de mensagens

**HOTSPOT**: ENTRADA, UX/UI

**FONTE DA AMEAÇA**: ORGANIZACIONAL


<br>

**Definição: A pessoa não consegue negar ter autenticado-se em um serviço**


<br>

**Perguntas**:

- A origem da comunicação recebida é conhecida e rastreável até o remetente?
- É um problema manter um rastro de informação?


<br>

☀ Exemplos:

Um funcionário compartilha uma fofoca entre seus colegas de trabalho por meio de um e-mail assinado. Quando seu chefe recebe a mensagem encaminhada, é difícil para o funcionário negar ter espalhado a fofoca. (o nível de negação depende da probabilidade de spoofing da mensagem)

<br>


💡 Insights:

-   Aplica-se principalmente quando o receptor requer uma prova de autenticidade durante a comunicação, mas o remetente deseja poder negar a terceiros.
-   Não se aplica apenas a mensagens, mas também a solicitações ao sistema (por exemplo, registro de acesso a um processo, etc).
-   O item de credenciais é um subtipo desse tipo de ameaça.
    

### Não repúdio de recibos
    
**HOTSPOT**: FLUXO DE SAÍDA DE DADOS PARA O USUÁRIO

**FONTE DA AMEAÇA**: ORGANIZACIONAL


<br>

**Definição: O usuário não consegue negar ter recebido uma mensagem.**


<br>

**Perguntas**:

- Uma confirmação de recebimento da mensagem é enviada pelo destinatário?
- É um problema se o sistema souber que o usuário recebeu a mensagem?


<br>

☀ Exemplos: 

Serviços de mensagens (por exemplo, Whatsapp e Messenger) revelar ao remetente de uma mensagem quando a mensagem foi recebida.


<br>

💡 Insights:

- O reconhecimento do recebimento fica implícito com frequência. A probabilidade dessa ameaça acontecer é alta.
- Um usuário deve ser capaz de decidir se eles querem reconhecer recebendo uma mensagem. Relacionado a unawareness.

### Não repúdio no armazenamento de dados

**HOTSPOT**: SAÍDA.ARMAZENAMENTO DE DADOS SENSÍVEIS

**FONTE DA AMEAÇA**: ORGANIZACIONAL


<br>

**Definição: O usuário não consegue negar ter usado um sistema por ter dados registrados (por ex: a autenticidade foi verificada e registrada, porque os dados não podem ser alterados, etc.**


<br>

**Perguntas**:

- Os dados (sensíveis) são armazenados de forma irrepreensível?
- Os dados exigem repúdio?


<br>

☀ Exemplos:

Os dados no blockchain não podem ser alterados, portanto a o não repúdio é impossível.


<br>

💡 Insights:

-   Impacto: aplica-se principalmente a dados confidenciais cujo titular precisa remover todos os laços com ele mesmo.
-   Na área de segurança o não repúdio costuma ser um requisito, e não uma ameaça.

### Não repúdio na recuperação de dados

**HOTSPOT**: SAÍDA. RECUPERAÇÃO DE DADOS PESSOAIS. (O TITULAR NÃO É RECEPTOR) 

**FONTE DA AMEAÇA**: RECEPTOR DE DADOS


<br>

**Definição: Os dados recuperados contêm informação inegável.**


<br>

**Perguntas**: 

- As informações recuperadas são dados pessoais?
- É um problema se os dados forem vinculados ao titular?


<br>

☀ Exemplos: 

Os administradores do sistema têm acesso a arquivos de log completos e podem vincular o acesso ao usuário. O funcionário, por exemplo, não será capaz de negar que usou o sistema de reclamações éticas da empresa.


<br>

💡 Insights:

-   O impacto é maior quando a informação recuperada é identificável.
-   Se o não repúdio de certos dados são necessários, é importante que esses dados não sejam acessíveis por padrão


</section>

<section class="detectionability">

## Detectabilidade

#### O que é? 

**Ser capaz de distinguir suficientemente se um item de interesse existe ou não.**

#### Como assim?

Sem ter acesso aos dados, o ator da ameaça sabe que eles existem. A existência de dados é suficiente para inferir mais informações (confidenciais).

Exemplos: Ao detectar que uma celebridade tem histórico de saúde em uma clínica de reabilitação, pode-se inferir que a celebridade é viciada, mesmo sem ter acesso ao cadastro real.

#### Possíveis consequências:

A detecção de dados pode levar à dedução de dados pessoais. Essas informações podem ser usadas para estender o perfil do titular dos dados (capacidade de link) e / ou identificar o titular dos dados.


</section>

