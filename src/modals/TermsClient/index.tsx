import React from 'react'
import styles from './styles.module.scss'

export default function TermsClient({id = 'modal', onClose = () => {}}) {

    return(
        <div id={id} className={styles.modalContainer}>
            <div className={styles.termsContainer}>
                <section className={styles.title}>
                    <h3>Termos de Uso</h3>
                    <p>Versão 1.0</p>
                    <span>Atualizada em 28 de agosto de 2021.</span>
                </section>

                <section className={styles.terms}>
                    <h4>1. RELAÇÃO CONTRATUAL</h4>
                    <p>Estes Termos de uso (“Termos”) regem seu acesso e uso, como pessoa física ou jurídica, dentro do Brasil, de aplicativos, sítios de Internet, bens, conteúdos e serviços disponibilizados pela Helix Logística Ltda. Sociedade empresária limitada sob código de descrição da natureza jurídica 206-2, estabelecida no território brasileiro, inscrita no Cadastro Nacional de Pessoas Jurídicas do Ministério da Fazenda (CNPJ/MF) sob o nº (CNPJ).</p>

                    <h4>2. TERMOS DE SERVIÇO</h4>
                    <p>Ao acessar e usar os Serviços você concorda com os presentes termos e condições, que estabelecem o relacionamento contratual entre você e a Helix Logística Ltda. Caso não concorde com estes Termos, fica vedado o acesso e uso de nossos serviços. Mediante referido acesso e uso, estes Termos imediatamente encerram, substituem e superam todos os acordos, Termos e acertos anteriores entre você e a Helix. A Helix poderá imediatamente encerrar estes Termos ou quaisquer Serviços em relação à sua empresa ou, de modo geral, deixar de oferecer ou negar acesso aos Serviços ou a qualquer parte deles, a qualquer momento e por qualquer motivo.
                    A Helix poderá alterar os Termos relativos aos Serviços a qualquer momento. Aditamentos entrarão em vigor quando a Helix fizer a postagem da versão atualizada dos Termos em nossa plataforma digital ou das condições atualizadas ou Termos adicionais sobre o respectivo Serviço. O fato de você representar sua empresa ou mesmo como pessoa física, continuar a acessar ou usar os Serviços após essa postagem representa seu consentimento em vincular-se aos Termos alterados.
                    </p>

                    <h4>3. OS SERVIÇOS</h4>
                    <p>Os Serviços integram uma plataforma de tecnologia que permite aos(às) Usuários(as) de aplicativos móveis ou sites de Internet da Helix, providenciar Serviços de transporte e/ou logística e/ou compra e/ou venda de certos bens com terceiros provedores independentes desses Serviços. Mesmo que se utilize de cadastro de pessoa física, os serviços são disponibilizados para seu uso comercial e não pessoal. Você, bem como sua empresa, reconhece que a Helix não é fornecedora de bens, não presta serviços de transporte ou logística, não funciona como transportadora, e que todos esses serviços de transporte ou logística são prestados por prestadores terceiros independentes que não são empregados(as) e nem representantes da Helix, sendo esta, apenas um meio de ligação entre as empresas e os prestadores de serviço independentes.</p>

                    <h4>4. LICENÇA</h4>
                    <p>Sujeito ao cumprimento destes Termos, a Helix concede a você uma licença limitada, não exclusiva, não passível de sublicença, revogável a qualquer tempo, momento e por qualquer motivo e não transferível para: Acesso e uso dos Aplicativos e sites de internet, em seus dispositivos pessoais, exclusivamente para o seu uso dos Serviços; E acesso e uso de qualquer conteúdo, informação e material correlato que possa ser disponibilizado por meio dos Serviços, em cada caso, para seu uso comercial e nunca pessoal. Quaisquer direitos não expressamente outorgados por estes Termos são reservados à Helix</p>

                    <h4>5. TITULARIDADE</h4>
                    <p>Os Serviços e todos os direitos sobre eles são e permanecerão de propriedade da Helix. Estes Termos e o uso dos Serviços não lhe outorgam nem lhe conferem qualquer direito:
                    Sobre os Serviços, exceto pela licença limitada concedida anteriormente; Ou de usar ou, de qualquer modo, fazer referência a nomes societários, logotipos, nomes de produtos ou de Serviços, marcas comerciais da Helix, salvo em casos em que este direito é concedido pela mesma por meio de acordo contratual.
                    </p>

                    <h4>6. UTILIZAÇÃO DOS SERVIÇOS</h4>
                    <h6>I. CONTAS DE USUÁRIOS PESSOA FÍSICA.</h6>
                    <p>Para utilizar grande parte dos Serviços, você deve registrar-se e manter uma conta pessoal de usuário de Serviços (“Conta”). Você deve ter pelo menos 18 anos ou a maioridade exigida por lei em seu foro (se for diferente de 18 anos), para abrir uma Conta. O Registro de Conta exige que você apresente à Helix certas informações pessoais, tais como seu nome, endereço de coleta, CPF e número de telefone celular, e-mail, assim como a atividade que comercializa. Você concorda em manter informações corretas, completas e atualizadas em sua Conta. Se você não mantiver informações corretas, completas e atualizadas em sua Conta, você poderá ficar impossibilitado(a) de acessar e utilizar os Serviços da Helix, conforme estes Termos. Você é responsável por todas as atividades realizadas na sua Conta e concorda em manter sempre a segurança e o sigilo do nome de usuário e senha da sua Conta.</p>
                    <h6>II. CONTAS DE USUÁRIOS PESSOA JURÍDICA</h6>
                    <p>Para utilizar a maioria dos aspectos do Serviço, a Helix solicitará um cadastro e manterá uma Conta de Serviço ativa, na qual serão requeridos dados específicos, como: 
                    (A) Dados do proprietário: Nome, CPF, número de telefone celular, e-mail; 
                    (B) Dados da empresa: Nome, CNPJ, telefone, endereço e ramo de atividades;
                    Concluído o processo de registro, será criada uma Conta da Empresa (Conta PJ) para a qual será atribuído um nome de usuário e uma senha. Este nome de usuário e senha podem ser compartilhados entre indivíduos na Empresa, desde que o usuário autorizado pela Empresa tenha pelo menos 18 (dezoito) anos de idade. A Empresa concorda e garante manter informações precisas, completas e atualizadas na Conta Corporativa. A falha em manter informações da Conta Corporativa precisas, completas e atualizadas pode resultar na incapacidade da Empresa de acessar e usar o Serviço ou a rescisão pela Helix desses Termos com a Empresa Parceira. A Empresa é responsável por todas as atividades que ocorrem sob a Conta Corporativa, incluindo as atividades realizadas por seu pessoal autorizado. Igualmente, a Empresa Parceira concorda em manter a segurança e o segredo de seu nome de usuário e senha da sua Conta Corporativa em todos os momentos, permitindo apenas que o pessoal exclusivamente autorizado use a Conta Corporativa e sendo totalmente responsável por qualquer ação ou omissão que este pessoal execute utilizando o nome de usuário e senha atribuídos à Empresa. Em nenhum caso, a Helix será responsável em nome da Empresa por qualquer uso que a Empresa Parceira ou seu pessoal tenha feito com o nome de usuário e senha, incluindo, sem limitação: As informações fornecidas pela Empresa, tais como o CNPJ, nome empresarial, informações bancárias, sede, número de telefone, representante legal e e-mail corporativo; Atividades fraudulentas causadas pelo uso indevido do nome de usuário e senha da Conta Corporativa.
                    </p>
                    <h6>III. CONDUTA E OBRIGAÇÕES DO USUÁRIO.</h6>
                    <p>Fica vedado o utilizador ceder ou de qualquer outro modo transferir, sua Conta a nenhuma outra pessoa ou entidade. Você concorda em cumprir todas as leis aplicáveis quando usar os Serviços e que somente poderá usar os Serviços para finalidades legítimas de acordo com o ordenamento jurídico brasileiro (por ex. não transportar materiais ilegais ou perigosos). Você não poderá, quando usar os Serviços, causar transtorno, aborrecimento, ser inconveniente ou desrespeitoso(a) ou danos à propriedade dos Prestadores de Serviço Terceiros ou de qualquer outro terceiro.
                    Você não poderá em nenhum momento, contratar, negociar, oferecer serviços de entrega sem o intermédio da Helix e ou encomendas aos Prestadores Terceiros parceiros da Helix, extra aplicativo, de forma que se resguarde a conduta ética, sob pena de exclusão ou inativação, ou bloqueio parcial, temporário ou definitivo da plataforma Helix. 
                    A avaliação aos prestadores de serviços é de inteira responsabilidade do usuário, e os comentários devem se valer da mais absoluta verdade, bem como as notas avaliativas devem ser compatíveis com  o comportamento e satisfação do usuário para o Prestador Terceiro. 
                    O usuário é avaliado pelo Prestador Terceiro, nesse sentido deve prezar e oferecer um bom atendimento ao Prestador Terceiro, tratando o Prestador Terceiro como um parceiro, e sempre oferecendo os melhores meios e condições para que as entregas sejam efetivadas com eficiência e rapidez. Em casos de avaliações negativas pelos Prestadores Terceiros, fica livre a Helix, para deliberar quanto ao atendimento, podendo encerrar a parceria com o usuário ou deixar de fornecer seus serviços momentaneamente.
                    </p>
                    <h6>IV. ACESSO À REDE E EQUIPAMENTOS.</h6>
                    <p>Você é responsável por obter o acesso a rede de dados necessário para usar os Serviços. As taxas e encargos de sua rede de dados e mensagens poderão se aplicar se você acessar ou usar os Serviços de um dispositivo sem fio e você será responsável por essas taxas e encargos. Você é responsável por adquirir e atualizar os equipamentos e dispositivos necessários para acessar e usar os Serviços e Aplicativos e quaisquer de suas atualizações. A Helix não garante que os serviços, ou qualquer parte deles, funcionarão em qualquer equipamento ou dispositivo em particular. Além disso, os Serviços poderão estar sujeitos a mau funcionamento e atrasos inerentes ao uso da Internet e de comunicações eletrônicas.</p>

                    <h4>7. PAGAMENTO</h4>
                    <p>Você entende que os serviços ou bens que você receber de um Prestador Terceiro, contratados por meio dos Serviços, poderão ser cobrados (“Preço”), após você ter recebido serviços ou bens obtidos por meio do uso do Serviço.
                    Na relação entre você e a Helix, a Helix reserva-se o direito de estabelecer, remover e/ou revisar o Preço relativo a todos os serviços ou bens obtidos por meio do uso dos Serviços a qualquer momento, a critério exclusivo da Helix.
                    Você poderá optar pelo cancelamento da solicitação de serviços ou bens de um Prestador Terceiro a qualquer momento ANTES DO ACEITE DO PRESTADOR TERCEIRO, caso escolha por CANCELAR APÓS O ACEITE, SERÁ COBRADO A TAXA DO PRESTADOR TERCEIRO QUE DEVERÁ SER PAGA DIRETAMENTE A ELE, bem como o DESCONTO DE UMA NOVA TAXA ADMINISTRATIVA pela intermediação entre você e o Prestador Terceiro realizada pela Helix.</p>
                    <h6>I. VALOR DESTINADO AO PRESTADOR TERCEIRO.</h6>
                    <p>Você é o responsável direto pelo pagamento ao Prestador Terceiro e deverá efetuar tal pagamento imediatamente após a prestação do serviço; ou entrega do bem;
                    O preço pago por você não será em nenhuma hipótese reembolsado pela Helix, nem pelo Prestador Terceiro. O valor da taxa de entrega será calculado automaticamente pela Plataforma, conforme a distância entre o Endereço de Coleta (onde o produto ou bem deverá ser coletado pelo Prestador Terceiro) e o Endereço de Destino (onde o produto ou bem deverá ser entregue).</p>
                    <h6>II. SALDO DISPONÍVEL NA PLATAFORMA.</h6>
                    <p>Para realizar solicitações de Prestadores Terceiros pela plataforma da Helix, você deverá ter um saldo de crédito positivo em nossa plataforma. Saldo este que deverá ser adicionado por você, efetuando uma recarga, através de transferência bancária ou PIX que estarão disponíveis na área financeira da Plataforma. A cada entrega solicitada será descontado o valor de R$ 1,00 (um real) do seu Saldo Atual como taxa administrativa pela intermediação entre você e o Prestador Terceiro realizada pela Helix. Você tem um limite de saldo de R$ 10,00 (dez reais) negativos. Ao atingir qualquer valor inferior a R$ 0,00 (zero reais) no seu saldo, a sua Conta será BLOQUEADA no próximo dia (após as 23:59 horas) até que realize o pagamento ou adicione novos créditos.</p>
                    <h6>III. ERROS POR PARTE DA EMPRESA.</h6>
                    <p>Em eventuais erros cometidos por você, como empresa parceira, tais quais: 
                    Endereçamento incorreto; Pedido incompleto; Cliente final não atender o Prestador de Serviços ou por qualquer outro motivo recusar o recebimento; Independente de motivo ou razão, o qual o Prestador Terceiro necessite retornar até você ou sua empresa e se deslocar novamente ao endereço de Destino para que possa finalizar este pedido, será cobrada uma NOVA taxa de serviço do mesmo, descontando também automaticamente mais R$ 1,00 (um real) do seu saldo.</p>
                    <h6>IV. ERROS POR PARTE DO PRESTADOR TERCEIRO.</h6>
                    <p>Para ocorridos que este eventual erro seja por parte do Prestador Terceiro, a título de exemplo: Endereçamento estava correto; Pedido completo; Finalizar o pedido em endereço diverso; Fica a cargo do Prestador Terceiro a reparação, não possuindo a Helix, qualquer tipo de obrigação ou responsabilidade.</p>

                    <h4>8. RECUSA DE GARANTIA; LIMITAÇÃO DE RESPONSABILIDADE; INDENIZAÇÃO.</h4>
                    <h6>I. RECUSA DE GARANTIA.</h6>
                    <p>Os serviços são prestados “no estado” e “como disponíveis”. A Helix recusa todas as declarações e garantias, expressas, implícitas ou legais, não expressamente contidas nestes termos, inclusive as garantias implícitas de comercialização, adequação a uma finalidade específica e não infringência. Ademais, a Helix não faz nenhuma declaração nem dá garantia sobre a confiabilidade, pontualidade, qualidade, adequação ou disponibilidade dos serviços ou de quaisquer serviços ou bens solicitados por meio do uso dos serviços, nem que os serviços serão ininterruptos ou livres de erros. A Helix não garante a qualidade, adequação, segurança ou habilidade de prestadores terceiros. Você concorda que todo o risco decorrente do uso dos serviços e de qualquer serviço ou bem solicitado por meio da tecnologia será sempre seu na máxima medida permitida pela lei aplicável.</p>
                    <h6>II. LIMITAÇÃO DE RESPONSABILIDADE.</h6>
                    <p>A Helix não será responsável por danos indiretos, incidentais, especiais, punitivos ou emergentes, inclusive lucros cessantes, perda de dados, danos morais ou patrimoniais relacionados, associados ou decorrentes de qualquer uso dos serviços ainda que a Helix tenha sido alertada para a possibilidade desses danos. A Helix não será responsável por nenhum dano, obrigação ou prejuízo decorrente do: Seu uso dos serviços ou sua incapacidade de acessar ou usar os serviços; Qualquer operação ou relacionamento entre você e qualquer Prestador Terceiro, ainda que a Helix tenha sido alertada para a possibilidade desses danos. A Helix não será responsável por atrasos ou falhas decorrentes de causas diversas e, tampouco, pela qualidade e integridade dos bens disponibilizados por prestadores terceiros. Você reconhece que Prestadores Terceiros que prestam serviços de transporte solicitados por meio da Helix, poderão oferecer serviços de entrega utilizando motocicletas ou carros de qualquer cilindrada, ano, cor ou modelo.
                    Os serviços da Helix poderão ser usados por você para solicitar e programar serviços de transporte, bens ou logística prestados por prestadores terceiros, mas você concorda que a Helix não tem responsabilidade em relação a você, por conta de qualquer serviço de transporte, bens ou logística realizados por Prestadores Terceiros. Como consequência, a Helix não tem qualquer responsabilidade por rotas adotadas por Prestadores Terceiros ou por quaisquer itens perdidos ou avariados durante o transporte.
                    As limitações e recusa de garantias contidas nesta cláusula, não possuem o objetivo de limitar responsabilidades ou alterar direitos de consumidor que de acordo com a lei aplicável não podem ser limitados ou alterados.
                    </p>

                    <h4>9. INEXISTÊNCIA DE VÍNCULO TRABALHISTA E SOCIETÁRIO.</h4>
                    <p>Em decorrência dos presentes Termos e Condições, sob qualquer hipótese ou em qualquer situação, não se presumirá a eventual existência, ou se estabelecerá a presunção de qualquer vínculo societário e/ou empregatício, bem como quaisquer obrigações de caráter trabalhista e previdenciário entre as partes, por si, seus contratados, prepostos e/ou empregados, e não serão fiadoras das obrigações e encargos trabalhistas e sociais uma da outra, cabendo a cada parte a exclusividade e responsabilidade por tais obrigações, inclusive nas esferas civil e penal.
                    As Partes deste Contrato são independentes entre si e cada uma é inteiramente responsável pelos seus custos operacionais, despesas, taxas, contribuições e impostos relativos à manutenção de sua empresa.
                    </p>

                    <h4>10. LEGISLAÇÃO APLICÁVEL; JURISDIÇÃO.</h4>
                    <p>Estes Termos serão regidos e interpretados exclusivamente de acordo com o ordenamento jurídico vigente no território Brasileiro. Bem como qualquer reclamação, conflito ou controvérsia que surgir deste contrato ou a ele.</p>

                    <h4>11. DISPOSIÇÕES GERAIS.</h4>
                    <p>Caso qualquer disposição destes Termos seja tida como ilegal, inválida ou inexequível total ou parcialmente, por qualquer legislação, essa disposição ou parte dela será, naquela medida, considerada como não existente para os efeitos destes Termos, mas a legalidade, validade e exequibilidade das demais disposições contidas nestes Termos não serão afetadas. Nesse caso, as partes substituirão a disposição ilegal, inválida ou inexequível, ou parte dela, por outra que seja legal, válida e exequível e que, na máxima medida possível, tenha efeito similar à disposição tida como ilegal, inválida ou inexequível para fins de conteúdo e finalidade dos presentes Termos. Estes Termos constituem a totalidade do acordo e entendimento das partes sobre este assunto e substituem e prevalecem sobre todos os entendimentos e compromissos anteriores sobre este assunto. Nestes Termos, as palavras “inclusive” e “inclui” significam “incluindo, sem limitação”.</p>

                    <section className={styles.actionBtns}>
                        <button>Cancelar</button>
                        <button onClick={onClose}>Eu aceito os termos</button>
                    </section>
                </section>

            </div>
        </div>
    )
}