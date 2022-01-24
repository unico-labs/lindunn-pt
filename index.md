
[Como usar](#instruções)

[Possibilidades](#alternativas)

[Sobre](#sobre)

### CARTAS:

## [1. Linkabilidade](#linkabilidade)

> [O que é?](#o-que-é-linkabilidade)

> [Como assim?](#Como-assim-linkabilidade)

> [Possíveis consequências](#possíveis-consequências-linkabilidade)

> [Fluxos de dados no sistema](#fluxos-de-dados-no-sistema-linkabilidade)

[Linkabilidade de credenciais](#Linkabilidade-de-credenciais)

[Vinculação de ações do usuário](#vinculação-de-ações-do-usuário)

[Linkabilidade na entrada de dados](#linkabilidade-na-entrada-de-dados) 

[Linkando os contextos](#linkando-os-contextos) 

[Linkabilidade de dados compartilhados](#linkabilidade-de-dados-compartilhados) 

[Linkabilidade de dados guardados](#linkabilidade-de-dados-guardados) 

[Dados recuperados vinculados](#dados-recuperados-vinculados) 

## [2. Identificabilidade](#identificabilidade)

> [O que é?](#O-que-é-identificabilidade) 

> [Como assim?](#como-assim-identificabilidade) 

> [Possíveis consequências:](#Possíveis-consequências-identificabilidade)

> [Fluxo de dados no sistema](#fluxos-de-dados-identificabilidade)

 [Credenciais de identificação](#credenciais-de-identificação) 

 [Ações que identificam o usuário](#ações-que-identificam-o-usuário) 

 [Identificação dos dados na entrada](#identificação-dos-dados-na-entrada) 

 [Contexto identifica o usuário](#contexto-identifica-o-usuário) 

 [Dados compartilhados identificáveis](#dados-compartilhados-identificáveis) 

 [Dados armazenados que identificam](#dados-guardados-identificáveis) 

 [Dados recuperados identificáveis](#dados-recuperados-identificáveis) 

## [3. Não repúdio](#não-repúdio)

> [O que é?](#o-que-é-não-repúdio) 

> [Como assim?](#como-assim-não-repúdio) 

> [Possíveis consequências:](#possíveis-consequências-não-repúdio) 

> [Fluxos de dados no sistema:](fluxos-de-dados-no-sistema-não-repúdio)

[Credenciais](#não-repúdio-credenciais)

[Não repúdio de mensagens](#non-repudiation-de-mensagens)

[Não repúdio de recibos](#non-repudiation-de-recibos)

[Não repúdio no armazenamento de dados](#nao-repúdio-no-armazenamento-de-dados)

[Não repúdio na recuperação de dados](#Não-repúdio-na=recuperação-de-dados)

## [4. Detectabilidade](#detectabilidade)

> [O que é?](#o-que-é-detectabilidade)  

> [Como assim?](#como-assim-detectabilidade)  

> [Possíveis consequências](#consequências-detectabilidade)

> [Fluxos de dados no sistema](#Fluxos-de-dados-no-sistema-detectabilidade)

[Credenciais detectáveis](#credenciais-detectáveis)

[Comunicação detectável](#comunicação-detectável)

[Outliers detectáveis ](#outliers-detectáveis)  

[Detecção de dados no armazenamento](#detecção-no-armazenamento)

[Detectabilidade na recuperação](#detectabilidade-na-recuperação)

# [5. Desconhecimento](#desconhecimento)

> [O que é?](#o-que-é-desconhecimento) 

> [Como assim?](#como-assim-desconhecimento)

> [Possíveis consequências:](#Possíveis-consequências-desconhecimento)

> [Fluxos para e do sistema](#Fluxos-para-e-do-sistema-desconhecimento)

[Falta de transparência](#falta-de-transparência) 

[Falta de controles de privacidade centrados no usuário](#falta-de-controles-de-privacidade-centrados-no-usuário)

[Falta de acesso ou portabilidade dos dados](#falta-de-acesso-ou-portabilidade)

[Falta de decontroles para apagar ou excluir dados](#falta-de-controles-para-apagar-ou-corrigir-dados)

[Falta de suporte para consentimento](#falta-de-suporte-para-consentimento) 
# [6.NÃO-CONFORMIDADE](#não-conformidade)

> [O que é?](#o-que-é-não-conformidade) 

> [Como assim?](#como-assim-não-conformidade)

> [Possíveis consequências:](#Possíveis-consequências-não-conformidade)

> [Fluxos para e do sistema](#Fluxos-para-e-do-sistema-não-conformidade)

[Coleta desproporcional](#coleta-desproporcional)

[Processamento ilegítimo](#processamento-ilegítimo)

[Processamento desproporcional](#processamento-desproporcional) 

[Tomada de decisão automatizada](#tomada-de-decisão-automatizada)

[Armazenamento desproporcional](#armazenamento-desproporcional)

___

# <span style="color:#577BC1" a id="linkabilidade"></a>1. Linkabilidade </span>

### <a id="o-que-é-linkabilidade"></a> O que é?

É a capacidade de ligação de dois ou mais itens de interesse (ex: pessoas, mensagens, ações, etc. Da perspectiva de um invasor significa que dentro do sistema o invasor pode distinguir se esses itens de interesse estão relacionados ou não, e podem ser utilizados para identificar. 

### <a id="Como-assim-linkabilidade"></a> Como assim?
Os dados podem ser vinculados, pois são do mesmo titular, ou  compartilham propriedades. Por exemplo: visitas a sites pelo mesmo usuário, entradas em duas bases de dados relacionadas à mesma pessoa, pessoas relacionadas por um link de amizade, etc. Associação de pessoas que visitam o mesmo restaurante, pessoas com doenças semelhantes, etc.

### <a id="possíveis-consequências-linkabilidade"></a> Possíveis consequências

- Inferência: Dedução de informações sobre um conjunto de dados.
- Seleção/atribuição: isolar alguns ou todos os registros que pertencem a um indivíduo 
- Identificação: Vinculação de itens de dados à identidade do titular dos dados.

## <a id="fluxos-de-dados-no-sistema-linkabilidade"></a> Fluxos de dados no sistema 

🚪**Entrada** O sistema pode vincular dados que recebe a outros itens de dados

🚪🚶**Saída** As partes receptoras podem vincular dados pessoais a outros itens de dados

👜 **Armazenamento** O sistema armazena dados pessoais que podem ser vinculados a outros dados

🩹 **Recuperação** Os dados pessoais recuperados podem ser vinculados a outros dados

## <span style="color:#577BC1"> Linkabilidade de credenciais </span>

**HOTSPOT: UI/UX ENVIA CREDENCIAIS (USUÁRIO AUTENTICADO)**

**FONTE DA AMEAÇA: ORGANIZAÇÃO** 

**Definição: Ações e dados podem ser vinculados reutilizando credenciais de múltiplas interações do sistema**

1.  O sistema usa as credenciais do usuário para rastreamento?
2.  O rastreamento do usuário é um problemas

☀ **Exemplos:** 

O endereço de e-mail é usado como login para vários serviços. Em vez de apenas usar as credenciais de um cliente para autenticar, um e-shop vincula as credenciais do usuário às visualizações da página de seu produto e, assim, cria um perfil de usuário.

💡 **Insights:**

- Vincular várias ações é criação de perfil
- Relaciona-se com unawareness e non compliance 
- Vincular/linkar leva à identificação
- A menos que sejam credenciais anônimas, são sempre vinculáveis.

## <span style="color:#577BC1"> Vinculação de ações do usuário </span>

**HOTSPOT: UI/UX ENVIA CREDENCIAIS (USUÁRIO NÃO AUTENTICADO)**

**FONTE DA AMEAÇA: ORGANIZAÇÃO** 

**Definição: As solicitações ao sistema estão vinculadas aos dados ou ações do usuário que acha que está anônimo**

1.  O usuário pensa que é anônimo porque não se autenticou?
2.  É um problema se o sistema vincular várias ações do usuário?

☀ **Exemplos:** 

Consultas específicas (por ex: destino e data podem estar linkadas a sessões em um site de viagens). Até quando o usuário não está logado, sua navegação identifica seu perfil. Um sistema de avaliação para
restaurantes, por exemplo, pode vincular um usuário autenticado à sua
visita ao restaurante.

💡 **Insights:**

- Ameaças de profiling também se aplicam a usuários autenticados.
- Linkar pode levar à identificação
- Linkar várias ações pode criar o perfil do usuário 
- Quanto mais informações, mais exclusivo o perfil.

## <span style="color:#577BC1"> Linkabilidade na entrada de dados </span>

**HOTSPOT: INTERAÇÃO COM O USUÁRIO (NÃO AUTENTICADO)**

**FONTE DA AMEAÇA: ORGANIZAÇÃO** 

**Definição: Os metadados são vinculados**

1.  Existem dados contextuais vinculados ao acesso?
2.  Seria problema se os acessos fossem vinculados (pela organização ou
    por um observador)?

☀ **Exemplos:**

Metadados que podem ser usados para vincular dados: endereços IP, configurações do navegador, tempos de acesso, etc. Informações linkadas que revelam um padrão de uso, como por exemplo, mídia social após o mesmo programa de TV, etc

💡 **Insights:**

Possibilidade de recair na linkabilidade na entrada dos dados:
- Organizacional: alta probabilidade, pois metadados geralmente estão disponíveis.
- Externo: impacto provavelmente baixo, a menos que haja um contexto sensível.

## <span style="color:#577BC1"> Linkando os contextos </span>

**HOTSPOT: SAÍDA. CONTÉM DADOS PESSOAIS, O RECEPTOR NÃO É O TITULAR**

**FONTE DA AMEAÇA: RECEPTOR DOS DADOS** 

**Definição: Dados compartilhados a terceiros podem ser vinculados**

1.  Espera-se que os dados compartilhados sejam anônimos?
2.  Tais dados podem ser linkados a dados obtidos anteriormente?

☀ **Exemplos:** 

Um serviço de terceiros é usado como base de conhecimento. Para encaminhar facilmente respostas assíncronas para o usuário correto, o sistema fornece o identificador interno do usuário, que permite aos terceiros vincular todas as solicitações ao mesmo usuário.

💡 **Insights:**

- Linkar pode levar à criação de perfis de identificação
- Depende dos dados que o terceiro já possui: quanto mais atributos compartilhados, maior o risco.
- Ainda que os dados sejam anonimizados, ameaças de non-compliance e unawareness surgirão

## <span style="color:#577BC1"> Linkabilidade de dados compartilhados

**HOTSPOT: ARMAZENAMENTO DE DADOS PESSOAIS** 

**FONTE DA AMEAÇA: ORGANIZAÇÃO**

**Definição: Dados pessoais armazenados são linkáveis**

1.  Os dados são armazenados com atributos exclusivos?
2.  Os dados podem ser minimizados?

☀ **Exemplos:** 

O sistema recebeu um conjunto de dados brutos. Apenas o conjunto agregado de dados é necessário, mas eles são armazenados por titular de dados individualmente.

💡 **Insights:**

- Dados que podem ser linkados podem levar à criação de perfil, à inferência e identificabilidade
- Intimamente relacionado à minimização
- Se todos os atributos forem necessários para pelo menos um processo, os dados não podem ser minimizados ou desidentificados.

## <span style="color:#577BC1">Linkabilidade de dados guardados</span>

**HOTSPOT: RECUPERAÇÃO DE DADOS PESSOAIS**

**FONTE DA AMEAÇA: TERCEIROS OU ORGANIZAÇÃO (RECEPTOR NÃO É TITULAR)**  

**Definição: Dados pessoais recuperados são linkáveis a dados obtidos anteriormente**

1.  Os dados que estão sendo recuperados são anonimizados?
2.  O receptor pode linkar mais informações do que precisa?

☀ **Exemplos:** 

Embora um banco de dados só permita consultas em um número limitado de atributos por vez, as consultas podem retornar resultados linkáveis. Dados de sensores, por exemplo, são temporariamente armazenados em buffer antes de enviar para o back-end. Em vez de enviar 1 conjunto agregado, o back-end recupera o conjunto de dados completo.

💡 **Insights:**

- Pode levar à identificabilidade 
- A probabilidade depende do conhecimento da parte receptora.

## <span style="color:#577BC1"> Dados recuperados vinculados (L7) </span>

**HOTSPOT: ORGANIZAÇÃO**  
**FONTE DA AMEAÇA: FLUXO DE DADOS CONTÉM DADOS PESSOAIS (USUÁRIO NÃO AUTENTICADO)**

**Definição: Os dados enviados estão vinculados a dados já coletados do mesmo titular dos dados**

1.  O fluxo contém dados pessoais?
1.  O sistema vincula (ou pode) vincular esses dados de modo a violar a privacidade do usuário?

☀ **Exemplos:** 

O titular dos dados compartilha um conjunto mínimo de informações, mas dadas as informações já disponíveis os dados podem ser facilmente vinculados.

💡 **Insights:**

- As informações podem ser inferidas com base nos dados vinculados
- A ameaça depende dos dados que a organização já possui

# <span style="color:#95CD41" a id="identificabilidade"></a> 2. Identificabilidade </span>

### <a id="o-que-é-identificabilidade"></a> O que é?

Capacidade de identificar o contexto dentro de um conjunto de dados
(por exemplo, eliminar o anonimato via informações em um conjunto de dados)

### <a id="como-assim-identificabilidade"></a> Como assim?

Os dados podem ser vinculados à identidade do titular com uma certa assertividade. Exemplos: identificar o leitor de uma página da web, o  remetente de um e-mail, a pessoa a quem uma entrada em um banco de dados está relacionada, etc.

### <a id="Possíveis-consequências-identificabilidade"></a> Possíveis consequências:

Quando os dados pessoais podem ser identificados, eles exigem medidas de segurança ainda mais rígidas. Os dados identificados também podem resultar em problemas de desconhecimento e não conformidade.

### <a id="fluxos-de-dados-identificabilidade"></a> Fluxos de dados no sistema 

🚪**Entrada**  O sistema pode vincular os dados pessoais que recebe a outros itens de dados 

🚪🚶**Saída**   Os receptores podem vincular dados pessoais a outros itens de dados

👜 **Armazenamento** O sistema armazena dados que podem ser identificadores

🩹 **Recuperação** Os dados recuperados podem ser usados como identificadores

## <span style="color:#95CD41"> Credenciais de identificação</span>

**HOTSPOT: ENTRADA. CREDENCIAIS ENVIADAS NA UI/UX (USUÁRIO AUTENTICADO)**

**FONTE DA AMEAÇA: ORGANIZAÇÃO**

**Definição: O uso de credenciais não anônimas permite a identificação do usuário**

1.  As credenciais contêm informações identificáveis?
2.  É um problema se o usuário for identificado?

☀ **Exemplos:** 

Um usuário deve se registrar com seu nome completo e endereço para ler notícias, permitindo a identificação de visualizações de páginas da web. Exemplos de credenciais de identificação: endereço de e-mail com nome completo, e-ID, biometria, atributos específicos de credenciais anônimas, etc

💡 **Insights:**
- Quando os dados são identificados ao invés de identificáveis, é necessário que mais medidas de segurança sejam
- Está relacionado com  non-compliance unawareness

## <span style="color:#95CD41">Ações que identificam o usuário </span>

**HOTSPOT: ENTRADA. INTERAÇÃO COM O USUÁRIO (NÃO AUTENTICADO)**

**FONTE DA AMEAÇA: ORGANIZAÇÃO**

**Definição: O usuário é identificado por meio de suas solicitações ao sistema**

1.  As solicitações podem chegar a identificar o usuário?
2.  É um problema identificar o usuário com base em suas ações?

☀ **Exemplos:** 

Consultas a um mecanismo de pesquisa podem ser usadas para identificar o usuário que fez a consulta se, por exemplo, envia dados identificáveis sobre si mesmo para o sistema

💡 **Insights:**
- A probabilidade depende do conhecimento previamente obtido pela organização em relação ao usuário.

- Embora o usuário não seja identificado com credenciais, suas ações são suficiente para reconhecer o titular 
- Está relacionado com non-compliance e unawareness

## <span style="color:#95CD41">Identificação dos dados na entrada </span>

**HOTSPOT: ENTRADA. FLUXO CONTENDO DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZAÇÃO**

**Definição: Os dados enviados para o sistema podem ser usados para identificar o usuário**

1.  O fluxo contém dados pessoais identificáveis?
2.  Seria um problema se o usuário fosse identificado com base nesses dados (ou seja, eles precisam permanecer anônimos)?

☀ **Exemplos:** 

O titular dos dados compartilha anonimamente suas preferências em um formulário de feedback (de seu empregador, escola, etc). Quando essas preferências são exclusivas, elas podem identificar o usuário.

💡 **Insights:**

- A probabilidade de acontecer depende da quantidade de conhecimento na organização
- O titular dos dados pode ser identificado pela ligação de dados e dados obtido antes
- O titular dos dados não precisa ser o remetente
- Combinar vários itens de dados pode identificar
- Identificar credenciais e ações são subtipos dessa ameaça.

## <span style="color:#95CD41"> Contexto identifica o usuário (i4) </span>

**HOTSPOT: ENTRADA. INTERAÇÃO COM O USUÁRIO NÃO AUTENTICADO OU ANÔNIMO**

**FONTE DA AMEAÇA: ORGANIZAÇÃO/EXTERNO**

**Definição: Os dados de comunicação identificam, mas o usuário acha que está anônimo**

1.  Existem dados disponíveis que podem identificar ou linkar?
2.  É um problema se a comunicação do usuário identificá-lo?

☀ **Exemplos:** Um e-shop rastreia o acesso de um usuário. O usuário acessa o site às segundas-feiras às 22h. Mesmo quando não está logado, a loja pode identificá-lo com base em seus dados. Uma pessoa deseja identificar quem de seus vizinhos acessa um determinado serviço com conteúdo confidencial, e por aí vai.

💡 **Insights:**

- A probabilidade depende de conhecimento prévio. 
- Sem acesso ao conteúdo, o invasor pode identificar a comunicação (detectabilidade do canal)
- Organizacional: Relaciona-se ao unawareness e non compliance

## <span style="color:#95CD41"> Dados compartilhados identificáveis (i5) </span>

**HOTSPOT: FLUXO DE SAÍDA DE DADOS PESSOAIS (O RECEPTOR NÃO É O TITULAR** 

**FONTE DA AMEAÇA: RECEPTOR DOS DADOS**

**Definição: Os dados podem ser usados pelo receptor para identificar usuários**

1.  Espera-se que os dados compartilhados sejam anônimos?
2.  É possível reidentificar os dados vinculando-os a outros dados ou combinando atributos?

☀ **Exemplos:** Ao compartilhar um conjunto de dados com uma parte externa, o nome completo é removido e o endereço é reduzido para cidade. No entanto, estão disponíveis dados que, quando combinados, são suficientes para identificar os usuários no conjunto de dados. Exemplos de combinações de quase identificadores incluem: gênero, data de nascimento, código postal; sexo, idade, município e ocupação.

💡 **Insights:**
- Ao compartilhar dados identificados, a privacidade do titular dos dados é violada.
- Combinar quase-identificadores pode identificar uma pessoa.
- Resulta em ameaças de não conformidade e inconsistência.
- Se os dados forem originados de um banco de dados recuperado, a ameaça também corresponde a identificabilidade de dados recuperados

## <span style="color:#95CD41">Dados guardados que identificam I6 </span>

**HOTSPOT: ARMAZENAMENTO DE DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**Definição: Os dados pessoais armazenados podem identificar, pois a anonimização é fraca**

1.  Os dados são armazenados com atributos identificáveis? (ou seja, os dados contêm identificadores, quase-identificadores ou links com dados identificados?)

2 . Podem os dados de identificação serem minimizados (removidos, desidentificados, descentralizados)?

☀ **Exemplos:** 

Os dados estão sendo anonimizados pela substituição dos atributos de identificação por um identificador interno. No entanto, está sendo mantido um vínculo com a identidade real, o que ainda permite identificabilidade. Ou, dados estão sendo armazenados com nome de usuário, endereço de e-mail ou CPF como identificador. 

💡 **Insights:**
- Dados identificados, quando se destinam a ser anônimos e são identificados, causam violação grave de privacidade.
- Se os dados não podem ser anonimizados (pois são necessários no sistema), eles podem ser descentralizados.
- Intimamente relacionado à minimização.

## <span style="color:#95CD41"> Dados recuperados identificáveis (i7) </span>

**HOTSPOT: RECUPERAÇÃO DE DADOS PESSOAIS (A PARTE RECEPTORA NÃO É TITULAR)**

**FONTE DA AMEAÇA: RECEPTOR DE DADOS**  

**Definição: Os dados pessoais recuperados do armazenamento persistente podem ser usados para identificar o titular dos dados (porque contêm um identificador ou porque contêm atributos para combinar a um quase identificador, ou porque podem ser vinculados a dados previamente identificados)**

1.  Os dados identificados estão sendo recuperados ou o receptor tem mais dados sobre os titulares?
2.  É um problema se o receptor identificar os dados?

☀ **Exemplos:**

O banco de dados retorna um atributo único (por exemplo, endereço de e-mail, nascimento, etc.) e o receptor pode usar para identificar os dados

💡 **Insights:**
- Quase-identificadores podem ser suficientes para identificar o titular.
- Probabilidade e impacto dependem de outros dados
- Garantir o anonimato é difícil. Quanto mais informações
estiverem vinculadas, mais exclusivas serão, mais difícil garantir o anonimato. 

# <span style="color:#116530" a id="não-repúdio">3. Não repúdio </span>

### <a id="o-que-é-não-repúdio"></a> O que é?

Um usuário não pode negar que sabe alguma informação ou fez alguma ação

### <a id="Como-assim-não-repúdio"></a>Como assim?

Existem evidências que vinculam o titular dos dados a uma determinada ação.

Exemplos: incapaz de negar ser cliente em uma determinada loja, incapaz de negar ter feito uma reclamação, um usuário de um sistema de votação online não pode negar em quem votou, etc.Ameaças de identificabilidade (e linkabilidade) aumentarão o risco de não repúdio.

Observe que o não repúdio é, na verdade, uma meta de segurança. No entanto, isso não deve resultar em nenhum conflito, pois (partes de) um sistema que exige o não repúdio como objetivo de segurança não deve precisar de negação plausível para os mesmos dados.

### <a id="possíves-consequências-não-repúdio"></a> Possíveis consequências:

O não repúdio leva à responsabilização do titular dos dados: quando uma pessoa não é capaz de negar uma ação ou informação, ela pode ser responsabilizada (por exemplo, um denunciante pode ser processado).

### <a id="fluxos-de-dados-não-repúdio"></a>Fluxos de dados no sistema:

🚪**Entrada**:  O remetente não pode negar o uso do sistema 

🚪🚶**Saída**: O receptor não pode negar recebimento de uma mensagem

👜 **Armazenamento**: O titular dos dados não pode negar o armazenamento de seus dados

🩹 **Recuperação**: Os dados recuperados não podem ser negados pelo titular dos dados

## <span style="color:#116530">Credenciais de não repúdio</span>

**HOTSPOT:ENTRADA. FLUXO CONTENDO CREDENCIAIS (USUÁRIO AUTENTICADO)**

**FONTE DA AMEAÇA: EXTERNO**

**Definição: A pessoa não pode negar ter autenticado em um serviço**

1.  O sistema requer credenciais identificáveis?

2.  É um problema se um usuário for vinculado ao sistema se as
    credenciais ou os registros de acesso vazarem?

☀ **Exemplos:** 

O usuário se registra com o endereço de e-mail de sua empresa em um local obscuro. Quando violada, a conta do usuário leva diretamente ao usuário. Obs: um endereço de e-mail pessoal emitido pelo governo ou  empregador é muito mais difícil de repudiar do que um endereço de  e-mail registrado (por exemplo, gmail).

💡 **Insights:**

- Quando os dados são identificados ao invés de identificáveis, é necessário que mais medidas de segurança sejam implementadas
- Está relacionado com  non-compliance unawareness

## <span style="color:#116530"> Não repúdio de mensagens </span>

**HOTSPOT: ENTRADA, UX/UI**

**FONTE DA AMEAÇA: ORGANIZACIONAL** 

**Definição: A pessoa não consegue negar ter autenticado-se em um serviço**

1.  A origem da comunicação recebida é conhecida e rastreável até o remetente?

2.  É um problema manter um rastro de informação?

☀ **Exemplos:** 

Um funcionário compartilha uma fofoca entre seus colegas de trabalho por meio de um e-mail assinado. Quando seu chefe recebe a mensagem encaminhada, é difícil para o funcionário negar ter espalhado a fofoca. (o nível de negação depende da probabilidade de spoofing da mensagem)

💡 **Insights:**

- Aplica-se principalmente quando o receptor requer uma prova de autenticidade durante a comunicação, mas o remetente deseja poder negar a terceiros.
- Não se aplica apenas a mensagens, mas também a solicitações ao sistema (por exemplo, registro de acesso a um processo, etc).
- O item de credenciais (n1) é um subtipo desse tipo de ameaça.

## <span style="color:#116530"> Não repúdio de recibos</span>

**HOTSPOT: FLUXO DE SAÍDA DE DADOS PARA O USUÁRIO**

**FONTE DA AMEAÇA: ORGANIZACIONAL** 

**Definição: O usuário não consegue negar ter recebido uma mensagem.**

1.  Uma confirmação de recebimento da mensagem é enviada pelo
    destinatário?

2.  É um problema se o sistema souber que o usuário recebeu a mensagem?

☀ **Exemplos:** 
Serviços de mensagens (por exemplo, Whatsapp e Messenger) revelar ao remetente de uma mensagem quando a mensagem foi recebida.

💡 **Insights:**

- O reconhecimento do recebimento fica implícito com frequência. A probabilidade dessa ameaça acontecer é alta.
- Um usuário deve ser capaz de decidir se eles querem reconhecer recebendo uma mensagem. Relacionado a unawareness.

## <span style="color:#116530"> Não repúdio no armazenamento de dados </span>

**HOTSPOT: SAÍDA.ARMAZENAMENTO DE DADOS SENSÍVEIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**Definição: O usuário não consegue negar ter usado um sistema por ter dados registrados (por ex: a autenticidade foi verificada e registrada,  porque os dados não podem ser alterados, etc.**

1.  Os dados (sensíveis) são armazenados de forma irrepreensível?

2.  Os dados exigem repúdio?

☀ **Exemplos:** 

Os dados no blockchain não podem ser alterados, portanto a o não repúdio é impossível. 

💡 **Insights:**

- Impacto: aplica-se principalmente a dados confidenciais cujo  titular precisa remover todos os laços com ele mesmo.
- Na área de segurança o não repúdio costuma ser um requisito, e não uma ameaça.
- Relaciona-se intimamente com a n2.

## <span style="color:#116530"> Não repúdio na recuperação de dados </span> 

**HOTSPOT: SAÍDA. RECUPERAÇÃO DE DADOS PESSOAIS. (O TITULAR NÃO É RECEPTOR)
**FONTE DA AMEAÇA: RECEPTOR DE DADOS**

**Definição: Os dados recuperados contêm informação inegável.**

1.  As informações recuperadas são dados pessoais?

2.  É um problema se os dados forem vinculados ao titular?

☀ **Exemplos:** 
Os administradores do sistema têm acesso a arquivos de log completos e podem vincular o acesso ao usuário. O funcionário, por exemplo, não será capaz de negar que usou o sistema de reclamações éticas da empresa.

💡 **Insights:**

- O impacto é maior quando a informação recuperada é identificável.
- Se o não repúdio de certos dados são necessários, é importante que esses dados não sejam acessíveis por padrão

# <span style="color:#FFAB76">4. Detectabilidade </span>

### O que é? 
Ser capaz de distinguir suficientemente se um item de interesse existe ou não.

### Como assim?
Sem ter acesso aos dados, o ator da ameaça sabe que eles existem. A existência de dados é suficiente para inferir mais informações (confidenciais).

Exemplos: Ao detectar que uma celebridade tem histórico de saúde em uma clínica de reabilitação, pode-se inferir que a celebridade é viciada, mesmo sem ter acesso ao cadastro real.

### Possíveis consequências

A detecção de dados pode levar à dedução de dados pessoais. Essas  informações podem ser usadas para estender o perfil do titular dos dados (capacidade de link) e / ou identificar o titular dos dados.

### Fluxos para e do sistema

🚪**Entrada** Uma parte externa pode detectar comunicação interna ou externa

🚪🚶**Saída** Uma parte externa pode detectar comunicação interna ou externa

👜 **Armazenamento** Os dados armazenados podem ser detectado

🩹 **Recuperação** Respostas de consultas revelam a existência dos dados

## <span style="color:#FFAB76"> Credenciais detectáveis (n1) </span>

**HOTSPOT: SAÍDA/ENTRADA. UX/UI ENVIANDO CREDENCIAIS (USUÁRIO AUTENTICADO)**

**FONTE DA AMEAÇA:EXTERNA**

**Definição: A resposta a uma solicitação permite a detecção da existência de um usuário (sem realmente acessar nenhum dado).**

1.  O sistema fornece feedback sobre as credenciais (senha errada, senha esquecida)?

2.  É um problema para um usuário se seu uso do sistema for conhecido?

☀ **Exemplos:** 

Ao entrar em um serviço, é possível detectar se um usuário existe ou não existe (ou seja, mensagem de erro de ID de usuário inválido).

💡 **Insights:**
- A detecção de contas de usuários também resulta em ameaças à segurança (informações divulgação/spoofing).
- Muitas vezes é fácil de corrigir, respondendo mais favorável à privacidade.

## <span style="color:#FFAB76"> Comunicação detectável (d2) </span>

**HOTSPOT: ENTRADA/SAÍDA. FLUXO COM O USUÁRIO**
**FONTE DA AMEAÇA: EXTERNA**

**A comunicação entre o usuário e o serviço pode ser observada.**

1.  Existe um mecanismo para ocultar que a comunicação ocorre?

2.  Seria um problema se uma parte externa pudesse ver que o usuário se comunica com o sistema?

☀ **Exemplos:** 

Ao detectar a comunicação entre uma pessoa e um serviço, pode-se inferir que a pessoa é um usuário do serviço (por exemplo, site de conteúdo adulto, fórum para determinada doença, etc).

💡 **Insights:**
- Aplicável apenas quando o sistema possui um contexto sensível.
- As soluções incluem: comunicação anônima (redes como o Tor)

## <span style="color:#FFAB76"> Outliers detectáveis (d3) </span>

**HOTSPOT: ENTRADA/SAÍDA**

**FONTE DA AMEAÇA: EXTERNA** 

**Definição: Ao detectar que a comunicação se comporta de maneira diferente, mais informações serão deduzidas sobre o fluxo de dados.**

1.  Informações adicionais podem ser deduzidas do comportamento de comunicação?

2.  É um problema a possibilidade de um ator externo observar a comunicação?

☀ **Exemplos:** 

A comunicação é detectada em um momento irregular, por exemplo, a casa inteligente envia atualizações em intervalos regulares, e em caso de emergência (incêndio, roubo) uma notificação é enviada imediatamente

💡 **Insights:**
- Detectabilidade pode levar à inferência de (pessoal) informação, observando comunicação.
- O impacto depende da sensibilidade dos dados e do contexto envolvido.
- Normalmente, a comunicação é detectada entre o sistema e um usuário, ou um processos.
- As soluções incluem tráfego fictício e esteganografia.

## <span style="color:#FFAB76"> Detecção de dados no armazenamento d4</span>

**HOTSPOT: ENTRADA/SAÍDA, ARMAZENAMENTO DE DADOS PESSOAIS**

**FONTE DA AMEAÇA: EXTERNA (com acesso ao sistema)**

**Alguém externo pode detectar que há (mais) dados armazenados no banco.**

1.  As ações de armazenamento podem revelar mais informações?

2.  É um problema se a existência de dados puder ser deduzida?

☀ **Exemplos:** 

Ao armazenar dados, um erro de falta de memória revela a existência de outros dados no banco de dados. Um partido político oferece a possibilidade de registrar um endereço para receber um panfleto. A mensagem de 'endereço já registrado' permite detectar endereços de pessoas que apoiam o partido político.

💡 **Insights:**

- O impacto depende do tipo de informação armazenada no banco de dados (ou seja, o que pode ser deduzido da detecção dos dados).
- Ações de armazenamento não devem vazar informações sobre dados previamente armazenados.

## <span style="color:#FFAB76"> Detectabilidade na recuperação (d5) </span>

**HOTSPOT: ENTRADA/SAÍDA. RECUPERAÇÃO DE DADOS PESSOAIS**

**FONTE DA AMEAÇA: RECEPTOR DE DADOS**

**A resposta da consulta revela a existência de dados (sem fornecer acesso).**

1.  As solicitações de recuperação podem revelar mais informações sobre o conteúdo do banco de dados?

2.  Seria um problema se esta informação fosse revelada?

☀ **Exemplos:** 

Os metadados dos resultados da consulta revelam mais do que o necessário (por exemplo: controle de acesso impede o acesso a dados ou arquivos reais, mas a resposta à consulta indica que os resultados foram encontrados).

💡 **Insights:**

- Muitas vezes saber que dados existem pode revelar informações adicionais, mesmo sem o acesso específico a um conjunto de dados
- Refere-se principalmente a preocupações com meta-informação que pode ser extraída pela parte receptora.

## <span style="color:#EA5C2B"> 5. Desconhecimento </span>

### O que é?

O titular dos dados não tem conhecimento ou não pode intervir na recolha e posterior tratamento dos seus dados pessoais.

### Como assim?

O desconhecimento está relacionado aos direitos do titular dos dados e concentra-se nas ameaças de **transparência** (ou previsibilidade) e
**inter-vencibilidade** (ou gestão).

### Falta de intervenção:

Um titular dos dados não pode acessar e gerenciar seus próprios dados pessoais. Exemplos: o titular dos dados não pode acessar os próprios dados ou não pode solicitar a retificação dos dados, o titular dos dados não pode
(facilmente) atualizar as configurações de privacidade, etc.

### Possíveis consequências:

O desconhecimento leva à violação dos direitos fundamentais do titular
dos dados.

### Fluxos para e do sistema

🚪**Entrada** Há falta de transparência e capacidade de intervenção fornecida ao titular dos dados no momento da coleta

👜 **Armazenamento** Um titular dos dados não pode intervir suficientemente em seus dados armazenados

🩹 **Processo** Existe uma falta de transparência e capacidade de intervenção proporcionada ao titular dos dados durante o processamento de dados pessoais

## <span style="color:#EA5C2B"> Falta de transparência </span>

**HOTSPOT:ENTRADA. PROCESSO COM DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**O titular dos dados é insuficientemente informado sobre a coleta e tratamento dos seus dados pessoais.**

1.  Dados pessoais estão sendo coletados e/ou processados?

2.  O titular dos dados está insuficientemente informado sobre essa coleta ou outras atividades de processamento?

☀ **Exemplos:** 

Tanto a coleta direta quanto a coleta por terceiros devem ser comunicadas ao titular dos dados.

💡 **Insights:**
- Essa ameaça pode acontecer no momento da coleta, mas se aplica a todos os processamentos posteriores. 
- Transparência é um direito do titular de dados
- Refere-se principalmente a preocupações com meta-informação que pode ser extraída pela parte receptora.

## <span style="color:#EA5C2B"> Falta de controles de privacidade centrados no usuário (u2) </span>

**HOTSPOT: ENTRADA. PROCESSO COM DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**O sistema não fornece controles de privacidade amigáveis ao usuário.**
(por ex: configurações padrão, ferramentas de feedback e conscientização, suporte para escolha de preferências de privacidade)

1.  Dados pessoais estão sendo coletados e/ou processados?

2.  Não há configurações padrão para preservação de privacidade ou não há suporte para o titular definir preferências de privacidade ou não há informações para conscientização?

☀ **Exemplos:** 

Tanto a coleta direta quanto a coleta por terceiros devem ser comunicadas ao titular dos dados.

💡 **Insights:**

- Relevante para sistemas que coletam dados pessoais direto de usuários e sistemas voltados para o compartilhar dados pessoais (por exemplo, mídias sociais). 
- Configurações favoráveis​à privacidade deve ser padrão. 
- O titular dos dados deve ser capaz de controlar facilmente suas configurações de privacidade.  
- Aumentar a conscientização pode levar o titular a se preocupar com a privacidade.

## <span style="color:#EA5C2B">Falta de acesso ou portabilidade dos dados (u3) </span> 

**HOTSPOT: DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL** 

**O titular não têm acesso aos seus dados pessoais ou não pode transportar  dados pessoais para outra plataforma ou fornecedor**

1.  Dados pessoais estão sendo coletados e/ou processados?

2.  Falta um processo que pode extrair dados para um titular dos dados?

☀ **Exemplos:** 

Dados do sensor de um dispositivo vestível são enviados para um aplicativo de rastreamento de estilo de vida, mas o usuário não  consegue acessar as estatísticas e informações deduzidas com base em seus dados que o aplicativo coletou e processou. Um titular de dados consegue solicitar seus dados, nem diretamente através do sistema, ou indiretamente (por exemplo, uma solicitação a um helpdesk que gera o conjunto de dados solicitado e o encaminha para o titular dos dados)

💡 **Insights:**
- O acesso e a portabilidade dos dados é um direito do titular dos dados.
- Não se aplica a dados que  violem a privacidade de outros titulares de dados, segredos corporativos, etc.
- Esse acesso também pode existir fora do sistema. 
- A portabilidade de dados envolve apenas dados pessoais que foram fornecidos diretamente pelo titular.


## <span style="color:#EA5C2B"> Falta de decontroles para apagar ou excluir dados (u4) </span

**HOTSPOT:DADOS PESSOAIS**

FONTE DA AMEAÇA: ORGANIZACIONAL**

**O titular não consegue solicitar o apagamento ou retificação dos dados**

1.  Os dados pessoais estão sendo armazenados?

2.  Falta um processo que apague e retifique dados relativos a um
    determinado assunto?

☀ **Exemplos:** 
Um titular de dados solicita a exclusão de seus dados de mídia social, mas apenas sua conta é revogada, os dados reais permanecem. O titular dos dados mudou e deseja atualizar seu endereço no sistema, mas não consegue.

💡 **Insights:**
- A solicitação de apagar e corrigir é um direito do titular.
- A exclusão só pode ser solicitada com motivos.
- A solicitação também pode ser feita fora do sistema, mas a exclusão sempre deve ser tecnicamente viável.
- O titular dos dados pode solicitar a retificação dos dados para aumentar a precisão. 

## <span style="color:#EA5C2B"> Falta de suporte para consentimento (u5) </span>

**HOTSPOT: ARMAZENAMENTO DE DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**O consentimento do titular não é considerado, e os dados ainda estão  sendo processados, sem consentimento.**

1.  O sistema requer o consentimento do usuário para processar os dados?

2.  O sistema leva o consentimento em consideração? (Existem meios para que o titular dos dados forneça ou retire o consentimento explicitamente?)

☀ **Exemplos:** 

Dados de wearables estão sendo usados ​​para um estudo de pesquisa, mas: 1) o titular dos dados nunca deu seu consentimento, 2) O titular dos dados decide revogar seu consentimento, mas não encontra maneiras de fazê-lo, 3) O sistema apenas para de coletar novos dados, mas continua a análise com dados coletados anteriormente.

💡 **Insights:**

- O consentimento deve ser sempre dado livremente e, portanto, também pode ser revogável.
- O sistema deve entender as consequências da revogação do consentimento
- Isso pode ser um recurso diretamente disponível para o titular dos dados ou pode ser feito indiretamente. Em ambos os casos, um processo interno deve estar em vigor como apoio.

## <span style="color:#cd2e4f"> Não conformidade </span>

### O que é?

O sistema não está aderente aos requisitos da LGPD e outras
regulações

### Como assim?

Os princípios de processamento de proteção de dados incluem:

-   limitação de propósito: apenas coletar e processar dados para o propósito pré-determinado
-   Proporcionalidade: colete e processe apenas o conjunto mínimo de dados necessários para o propósito
-   Limitação de armazenamento:apenas armazene os dados pelo tempo necessário para o propósito

obs: esta categoria é influenciada principalmente pelo GDPR da
UE, mas os princípios gerais se aplicam também à LGPD no Brasil.

### Possíveis consequências:

Os princípios de proteção de dados são projetados para proteger a privacidade dos titulares dos dados. Eles sempre devem ser implementados. Além disso, a violação dessas obrigações legais pode resultar em multas pesadas e danos à reputação.

## <span style="color:#cd2e4f"> Coleta desproporcional</span>

**HOTSPOT: FLUXO DE ENTRADA COM DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**Mais dados pessoais estão sendo coletados do que o necessário.**

1.  Dados pessoais estão sendo coletados?

2.  Todos os atributos são necessários para o propósito de processamento?

☀ **Exemplos:** 

Os dados são coletados antes que os propósitos de coleta e processamento sejam documentados. Os logs de auditoria registram todas as atividades com dados pessoais (mas não são obrigatórios). Os dados de geolocalização coletados são muito precisos, apenas a cidade é necessária para o efeito.

💡 **Insights:**
- O consentimento deve ser sempre dado livremente e, portanto, também pode ser revogável.
- O sistema deve entender as consequências da revogação do consentimento
- Isso pode ser um recurso diretamente disponível para o titular dos dados ou pode ser feito indiretamente. Em ambos os casos, um processo interno deve estar em vigor como apoio.

## <span style="color:#cd2e4f"> Processamento ilegítimo</span>

**HOTSPOT: FLUXO DE ENTRADA COM DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**Não há fundamento legal para a coleta ou posterior processamento e guarda de dados pessoais.**

1.  Dados pessoais estão sendo processados no sistema?

2.  O titular dos dados consentiu com o tratamento e existe fundamento
    legal?

☀ **Exemplos:** 

Uma smart tv coleta o histórico de visualização de seus usuários e o envia periodicamente para o back-end, sem qualquer fundamento legal (nem consentimento).

💡 **Insights:**

- É necessário um fundamento legal para cada atividade de processamento. (**O consentimento é apenas um deles!**)
- Motivo legal inclui: interesse legítimo ou público, obrigação legal, necessidade contratual e consentimento.
- Está em fluxos de entrada, mas se aplica a todas as atividades de processamento subsequentes no sistema.

## <span style="color:#cd2e4f"> Processamento desproporcional (nc3) </span>

**HOTSPOT: FLUXO DE ENTRADA COM DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**Mais dados pessoais estão sendo processados ​​do que o necessário.**

1.  Dados pessoais estão sendo processados no sistema?

2.  Os dados pessoais em processamento não são estritamente necessários para os propósitos de processamento ou que foram coletados?

☀ **Exemplos:** Os dados pessoais estão sendo usados ​​como dados de teste ou como conjuntos de treinamento para ML. Os logs de acesso são usados​para verificar a que horas os funcionários estavam no trabalho, e não só  apenas em caso de violações de segurança.

💡 **Insights:**
- De acordo com os princípios da proteção de dados, estes só podem ser processados se tiverem propósito definido. 
- Uma mudança contextual geralmente requer um propósito diferente. Os dados devem ser minimizados tanto quanto possível. Refere-se à capacidade de ligação e identificabilidade.

## <span style="color:#cd2e4f"> Tomada de decisão automatizada (nc4) </span> 

**HOTSPOT: DADOS PARA TOMADA DE DECISÃO**

** FONTE DA AMEAÇA: ORGANIZACIONAL**

**A decisão é tomada exclusivamente com base no processamento automatizado de dados pessoais, impactando o titular.**

1.  O processo toma decisões que afetam diretamente o titular dos dados sem interferência humana ou verificação?

2.  Existe base legal para fazer isso? O titular dos dados pode contestar a decisão?

☀ **Exemplos:** 

Um empréstimo foi rejeitado com base na tomada de decisão  automatizada. O cliente não conseguiu intervenção humana ou revisão da decisão. A rede neural toma decisões relacionadas ao cliente, mas ninguém pode explicar ao cliente em que o modelo se baseia.

💡 **Insights:**
- A tomada de decisão automatizada é geralmente proibida (a menos que seja exigida por um contrato, autorizado por lei ou com consentimento explícito)
- Relaciona-se com a inconsciência do titular dos dados sobre as ameaças.
- Direitos adicionais do titular dos dados também se aplicam.
 
## <span style="color:#cd2e4f"> Armazenamento desproporcional (nc5) </span>

**HOTSPOT: DADOS PESSOAIS**

**FONTE DA AMEAÇA: ORGANIZACIONAL**

**Mais dados pessoais estão sendo armazenados do que o necessário.**

1.  Dados pessoais estão sendo armazenados?

2.  O banco de dados está armazenando mais do que apenas as informações
    necessárias ou por um período mais longo do que o necessário?

☀ **Exemplos:** O sistema armazena todos os dados pessoais coletados porque "podemos precisar deles no futuro", enquanto um conjunto de dados agregados será suficiente.

💡 **Insights:**
- Não há base legal para armazenar mais do que o estritamente necessário para o(s) propósito(s) ou para manter os dados por um período de tempo mais longo.
- Os dados devem ser minimizados tanto quanto possível.
- Quando os dados pessoais são necessários, medidas devem ser tomadas para minimizar as ameaças do tipo L e I
- Relacionado à retenção e limitação de propósito

___

## INSTRUÇÕES 

1. Reúna um grupo de 2 a 5 pessoas que desejam avaliar a privacidade de uma arquitetura de software.

2. Obtenha um diagrama de fluxo de dados (um DFD) sobre a funcionalidade ou arquiteura que serão analisadas

3. Reveze os jogadores que escolhem cartas.

-  Leia o cartão desenhado.

-  Repita, para cada ponto de contato com dados, as perguntas que correspondem ao cartão que está sendo analisado.  (se não tiver certeza, suponha que \"sim\")

*Pergunta 1: isso poderia ser feito?*
Essa pergunta serve para determinar se os pré-requisitos da ameaça foram atendidos ou se a ameaça existe.

*Pergunta 2: é um problema?*
Essa pergunta ajuda a avaliar se a ameaça realmente existe.

-  Quando você responde \"sim\" a ambas as perguntas para um ponto de contato com dados específico, você encontrou uma ameaça. **Excelente!** Não se esqueça de documentar.

-  Continue iterando sobre os outros pontos de contato com os dados, até que ninguém possa identificar qualquer nova ameaça naquele ponto.

4.  Só acaba quando todas as cartas forem examinadas

## ALTERNATIVAS

> PARA ACELERAR O PROCESSO

Apenas o sacador de cartas pode descrever uma ameaça aplicável. Sem a iteração de grupo em cada cartão. Assim que a carta é manuseada pelo sacador, ela é colocada na pilha de descarte. Provavelmente resultará em um conjunto menos completo de ameaças, o processo mais fluido. 

> COM TEMPO MARCADO

Defina o tempo do exercício (ou limite o número de cartões) e faça várias sessões pequenas de modelagem de ameaças. Como esse processo de modelagem de ameaças pode levar algum tempo com as discussões, pode ser melhor fazer várias sessões pequenas. Certifique-se de marcar quais cartas já foram avaliadas. 

> DIVIRTA-SE

Transforme as sessões em algo descontraído como um jogo, com pontos para cada ameaça identificada. Se você quiser incluir um elemento lúdico, faça uma competição. Sugestão de
pontuação: cada ameaça pertencente à mesma categoria soma dois pontos. 

> INDIVIDUALMENTE

Use os cartões de tipo de ameaça para um exercício individual de descoberta de ameaças à privacidade. Embora o LINDDUN GO tenha sido projetado para ser aplicado em grupo, os cartões também podem ser usados por um único ser fazendo modelagem de ameaças como base para o conhecimento sobre privacidade.

> FREESTYLE

Use apenas os cartões da categoria LINDDUN GO para criar ameaças à privacidade, sem consulta à documentos externos. Em vez de usar os cartões de ameaças em geral, concentre-se apenas nas principais categorias do LINDDUN GO. Observe que isso requer conhecimento de privacidade suficiente para ser executado com êxito.

## ITENS DE CADA CARTA A SEREM PREENCHIDOS:

**HOTSPOTS ou FONTES DE AMEAÇAS**

Em contraste com a modelagem de ameaças à segurança, as ameaças à privacidade não exigem um invasor externo sempre. Identificar hotspots ajuda a identificar ameaças, mesmo que não haja possibilidade de invasão por vias externas. 

*As três fontes de ameaças consideradas no LINDDUN GO:*

1. **Organizacional**: Ou a organização como um todo não respeita a privacidade do titular, ou um funcionário/usuário autorizado usa os dados pessoais de modo intrusivo. (intencionalmente ou não)

2. **Externa**: Agente externo ao sistema, que obteve acesso (ou pode observar, mesmo sem acesso de escrita) a comunicação ou os dados armazenados (normalmente sem autorização, a menos que especificado de outra forma)

3. **Parte receptora**: É a parte que recebe os dados, ou extremidade de recebimento (pode ser o próprio usuário). Observe que todas as ameaças de *linkabilidade* e *Identificabilidade* descritas para uma fonte de ameaça organizacional também se aplicam a atores que têm acesso legítimo ao sistema e a atores externos quando há uma violação de divulgação de informações no ponto de acesso correspondente.

## **TERMINOLOGIA EM PRIVACIDADE**

**Atributos:** uma qualidade ou característica de uma entidade ou ação. Blocos básicos de construção de dados pessoais.

**Credenciais:** dados pessoais usados para autenticar um usuário ou contextualizar dados de identidade digital (por exemplo, combinação de nome de usuário e senha)

**Titular dos dados:** pessoa cujos dados estão sendo coletados e processados

**Dados desidentificados** (ou anônimos): dados pessoais dos quais certas propriedades de identificação são removidas ou minimizadas, o que reduz a chance de identificação

**Identificador:** atributo suficiente para identificar o ser titular dos dados

**Item de dados:** dados pessoais (identificáveis)

**Dados não pessoais:** dados não vinculados a nenhuma pessoa. (Por ex: o clima em Recife, a hora atual em São Paulo, etc.)

**Dados pessoais** (identificáveis): qualquer informação relacionada a um indivíduo identificado ou identificável \[GDPR, LGPD\]

**Dados (pessoais) identificados:** informações pessoais que estão diretamente ligadas à identidade de uma pessoa 

**Quase identificador:** pedaço de informação que, por si só não é um identificador único, mas pode ser combinado com outros quase-identificadores para criar um identificador.



____

SOBRE

**LINDDUN GO** foi projetado para ser uma ferramenta ágil de modelagem de ameaças à privacidade. É uma abordagem estruturada de acordo com as categorias de ameaças LIND (D) da ONU. Seu objetivo é fornecer suporte estruturado, porém leve, para modelagem de ameaças em privacidade.

**LIND(D)UN** significa:
*Linkability, Identifiability, Non-repudiation, Detectability, Disclosure of information, Unawareness e Non-compliance.*

ps.: A divulgação de informações (information disclosure) é uma categoria de segurança. Ele não está incluído aqui, pois LINDDUN GO se concentra na privacidade. No entanto, recomendamos combinar LINDDUN com modelagem de ameaças à segurança, pois a privacidade depende muito da segurança. Mais informações podem ser encontradas nos cartões de categorias de ameaças.

© 2020 imec-DistriNet, KU Leuven. Este trabalho foi licenciado sob
uma licença [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0).Para saber mais sobre o LINDDUN, acesse: www.linddun.org
