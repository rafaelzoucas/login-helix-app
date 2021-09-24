import React, {useState} from 'react'
import styles from './styles.module.scss'

export default function TermsDeliveryman({id = 'modal', onClose = () => {}}) {
   
    return(
        <div id={id} className={styles.modalContainer}>
            <div className={styles.termsContainer}>
                <section className={styles.title}>
                    <h3>Termos de Uso</h3>
                    <p>Versão 1.0</p>
                    <span>Atualizada em 28 de agosto de 2021.</span>
                </section>

                <section className={styles.terms}>
                    <p className={styles.titulo}>
                        Pelo presente Termo, fica estabelecido que as partes abaixo qualificadas: HELIX LOGÍSTICA LTDA, doravante denominado HELIX e ENTREGADOR PARCEIRO (PRESTADOR TERCEIRO), na forma dos dados informados no Cadastro, têm justo e contratado o presente Termos e Condições de Uso da Plataforma – Contratante (”Termos e Condições”) consoante as condições a seguir:
                    </p>

                    <ol type="1">
                        <li>
                            TERMOS DE SERVIÇO
                            <p>
                                Este Termo regula as condições de uso, cadastro e validação do entregador parceiro na PLATAFORMA ONLINE mantida por HELIX LOGÍSTICA Ltda., para que esse possa oferecer os seus serviços de entrega aos Usuários da plataforma.
                            </p>
                        </li>

                        <li>
                            PRÉ-REQUISITOS E DOCUMENTOS
                            <p>
                                O entregador  parceiro deverá cadastrar-se na plataforma online informando todos os dados necessários à perfeita conclusão do cadastro e posterior validação, incluindo a apresentação dos seguintes documentos:
                            </p>
                            <ol type="I">
                                <li>
                                    Carteira Nacional de Habilitação (CNH) - Categoria A ou B;
                                </li>
                                <li>
                                    CRLV Atualizado;
                                </li>
                                <li>
                                    Comprovante de Residência em seu nome ou de parente de primeiro grau;
                                </li>
                                <li>
                                    Foto de rosto;
                                </li>
                            </ol>
                        </li>

                        <li>
                            EQUIPAMENTOS NECESSÁRIOS
                            <p>
                                Para prestação dos serviços na plataforma o entregador parceiro deverá possuir:
                            </p>
                            <ol type="I">
                                <li>
                                    Telefone celular com sistema operacional Android 5.0 ou superior ou telefone celular iPhone 8 ou superior;
                                </li>
                                <li>
                                    Caixa térmica com capacidade mínima de 45 litros;
                                </li>
                                <li>
                                    Internet móvel 4g;
                                </li>
                            </ol>
                        </li>

                        <li>
                            PLATAFORMA ONLINE
                            <p>
                                A Helix é detentora de uma PLATAFORMA ONLINE.
                                As funcionalidades disponibilizadas através da plataforma online consistem em disponibilizar as tecnologias e ferramentas necessárias para realizar a chamada de Motoboys ou motoristas (PRESTADORES TERCEIROS) para prestação de serviço de entrega aos usuários;
                            </p>
                        </li>

                        <li>
                            DOCUMENTAÇÃO
                            <p>
                                O entregador está ciente de que toda a documentação apresentada será analisada e aprovada previamente pela intermediadora (Helix), que poderá ou não validar o cadastro do entregador, e que poderão ser adotados critérios internos de aprovação. O entregador apenas poderá oferecer os seus serviços de entrega através da Plataforma da Helix após ter seu cadastro validado, perdurando esta exigência por todo tempo que se mantiver a parceria. 
                                O entregador se compromete com a veracidade e autenticidade de todos os documentos carregados na Plataforma Helix, assim como por todas as informações cadastrais, sob pena de responder civil e criminalmente.
                            </p>
                        </li>
                        <li>
                            UTILIZAÇÃO DA PLATAFORMA ONLINE
                            <p>
                                Caso o entregador parceiro deseje receber chamados oriundos da Plataforma da Helix com solicitações de serviço de entrega por parte dos usuários é necessário estar com seu celular ligado, conectado à internet, através de dados móveis, logado e conectado na Plataforma da Helix.
                            </p>

                            <ol>
                                <li>
                                    Para a perfeita prestação dos serviços será preciso coletar, armazenar, transmitir e/ou disponibilizar às empresas parceiras, os dados e informações fornecidos pelo entregador à intermediadora no momento do seu cadastro e/ou em tempo real. Assim, as informações do entregador poderão ser repassadas às empresas parceiras, inclusive as informações pessoais:
                                    <ol type="I">
                                        <li>
                                            Nome completo;
                                        </li>
                                        <li>
                                            Foto do perfil;
                                        </li>
                                        <li>
                                            Dados do veículo;
                                        </li>
                                    </ol>
                                </li>

                                <li>
                                    O entregador parceiro está ciente de que:
                                    <ol type="I">
                                        <li>
                                            O usuário (Empresa Parceira) poderá avaliar a qualidade do serviço prestado. Essas avaliações e comentários poderão ser divulgados na Plataforma da Helix.
                                        </li>
                                        <li>
                                            Obtendo nota inaceitável a ser avaliada pela intermediadora, o entregador poderá ser inativado ou excluído da plataforma Helix, a qualquer momento, mediante prévio aviso com a indicação dos motivos que ensejaram o fato.
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>

                        <li>
                            VALORES, REGRAS E FORMA DE PAGAMENTO

                            <ol type="I">
                                {/* <li>
                                    Os valores das entregas serão estabelecidos pela Helix previamente, de acordo com a distância entre o endereço do chamador e o endereço de destino, com o valor mínimo de R$ 5,00 (cinco reais) até 3Km (três quilômetros), sendo adicionado R$ 0,50 (cinquenta centavos) por quilômetro no valor total da entrega a partir de 3Km (três quilômetros), considerando desde a origem ao destino, podendo esse valor sofrer alteração de acordo com a cidade de atuação, levando em consideração a taxa dinâmica (horário de pico, trânsito, etc). Sendo assim o entregador não poderá recusar ou renegociar valor da entrega com o chamador, desrespeitando o valor já estabelecido pela Plataforma da Helix, sob pena de exclusão da plataforma.
                                </li> */}
                                <li>
                                    Os valores das entregas são de R$ 5,00 (cinco reais) de segunda-feira até sábado e R$ 6,00 (seis reais) aos domingos. Podendo esse valor sofrer alteração de acordo com a cidade de atuação. Sendo assim o entregador não poderá recusar ou renegociar valor da entrega com o chamador, desrespeitando o valor já estabelecido pela Plataforma da Helix, sob pena de exclusão da plataforma.
                                </li>
                                <li>
                                    Nos casos em que o entregador precisar retornar ao endereço do chamador e retornar novamente ao endereço de destino, devido a erro originário da empresa (Ex: Endereçamento incorreto, pedido incompleto, cliente final não atender), o chamador deverá pagar o valor de 2 (duas) entregas. Salvo em casos em que o erro seja originário do entregador parceiro, sendo assim, deve este reparar as próprias custas.
                                </li>
                                <li>
                                    Nos casos em que o ENTREGADOR precisar retornar ao endereço do chamador após a entrega, (Ex: Devolver máquina de cartão, dinheiro ou devolução do produto) o ENTREGADOR não poderá em hipótese alguma cobrar adicional por esse retorno.
                                </li>
                                <li>
                                    No caso de o entregador aceitar a chamada de uma entrega e não comparecer ao local chamado, será inabilitado da plataforma, e deverá apresentar justificativa por escrito, ficando unicamente a critério da intermediadora a sua reativação na plataforma.
                                </li>
                                <li>
                                    O entregador compromete-se a transportar exclusivamente a encomenda do usuário da Plataforma da Helix, quando estiver com alguma entrega em andamento, prezando pelo bom atendimento e funcionamento do sistema, bem como mantendo o tempo estimado de entrega pela intermediadora, sob pena de ser inabilitado da plataforma.
                                </li>
                                <li>
                                    O entregador receberá diretamente da empresa parceira, por meio de pagamento sendo dinheiro ou por transferência PIX, ao concluir a entrega, ou seja, retirar o pedido, entregar ao destinatário final e se necessário retornar a empresa parceira com troco em papel moeda ou máquina de cartão, o valor mínimo de R$ 5,00 (cinco reais) sendo este alterado por ordem da Helix, comunicado previamente ao entregador.
                                </li>
                                <li>
                                    É obrigatório que o entregador possua e faça uso da ferramenta PIX, independente do banco, para que assim, possa receber o pagamento por seus serviços prestados.
                                </li>
                                <li>
                                    Nos casos em que o entregador aja de má-fé e informe a empresa parceira valor diferente do estabelecido pela intermediadora, será tempestivamente inabilitado da plataforma Helix, sem qualquer maneira de justificativa ou forma de retorno.
                                </li>
                            </ol>
                        </li>

                        <li>
                            EMPRÉSTIMO DE MOCHILA TÉRMICA

                            <p>
                                Em casos os quais o entregador não possua meio de transporte de entregas, a Helix fornecerá uma mochila térmica com capacidade de 45 litros, a título de empréstimo, que vigorará pelo tempo o qual este entregador participar da parceria, podendo ser recolhida a qualquer tempo ou lugar, sem necessidade de motivação ou justificativa.
                            </p>

                            <ol>
                                <li>
                                    Fica a cargo do entregador em relação ao equipamento: 

                                    <ol type="I">
                                        <li>
                                            Portar a mochila com o devido cuidado, evitando assim qualquer dano resultante de pancadas, excesso de peso, calor ou batidas.
                                        </li>
                                        <li>
                                            Efetuar a limpeza quando necessário, se utilizando de produtos que não resultem em manchas ou bolhas no tecido.
                                        </li>
                                        <li>
                                            Utilizar o equipamento apenas para atender entregas de estabelecimentos parceiros da Helix.
                                        </li>
                                        <li>
                                            Não efetuar qualquer alteração no tecido, plástico ou isopor presentes no equipamento.
                                        </li>
                                        <li>
                                            Não repassar, emprestar ou alugar o equipamento a terceiros.
                                        </li>
                                    </ol>
                                </li>

                                <li>
                                    Em caso de inativação deste entregador parceiro, possui o mesmo, o prazo de 03 (três) dias para retornar este equipamento à Helix, sob pena de instauração de processo judicial por apropriação indébita (Art. 168 do Código Penal).
                                </li>

                                <li>
                                    Por eventuais danos decorrentes de mau uso, ficando a intermediadora responsável por analisar, será cobrado do entregador parceiro o valor de reparo. Em casos em que o equipamento retorne inutilizável, será cobrado o valor integral do mesmo, R$ 170,00 (cento e setenta reais) e se houver recusa do entregador para pagamento, serão tomadas as devidas medidas judiciais.
                                </li>

                                <li>
                                    Em hipóteses em que o entregador não teve dolo ou culpa para o dano acarretado ao equipamento, a intermediadora entrará em contato com o mesmo e tentará um acordo que se faça proveitoso a ambos.
                                </li>
                            </ol>
                        </li>

                        <li>
                            RESPONSABILIDADES DO ENTREGADOR PARCEIRO
                            
                            <ol>
                                <li>
                                    Manter seus dados cadastrais e documentação devidamente atualizados junto à intermediadora.
                                </li>

                                <li>
                                    Motocicleta equipada com baú ou mochila com capacidade mínima de 45 litros ou veículo capaz de suprir a necessidade, no momento da aceitação da chamada. Não possuindo mochila térmica, será disponibilizada a título de empréstimo pela intermediadora.
                                </li>

                                <li>
                                    O entregador parceiro é inteiramente responsável pelo uso da Plataforma Helix que ocorrerem em seu login e senha, desta forma, o entregador se compromete a não fornecer seus dados de acesso à Plataforma a ninguém e nem permitir que um terceiro se utilize de sua motocicleta ou veículo, sob pena de rescisão do presente termo.
                                </li>

                                <li>
                                    O entregador reconhece e tem consciência de todos os riscos envolvidos na prestação dos serviços de motoboy ou motorista (variando de acordo com o caso) e têm ciência de todos os cuidados necessários e razoavelmente esperados de um profissional desta área.
                                </li>

                                <li>
                                    É de inteira responsabilidade do entregador:

                                    <ol type="I">
                                        <li>
                                            Dispor dos equipamentos técnicos e operacionais necessários para realizar a entrega ou se necessário fazer o pedido de empréstimo dos mesmo para intermediadora;
                                        </li>

                                        <li>
                                            Arcar com todas as despesas, custos, taxas, impostos e contribuições relativas à manutenção e operação da motocicleta/veículo, incluindo gastos com combustível, limpeza, ferramentas, equipamentos, impostos, vistorias, consertos, revisões, entre outros;
                                        </li>

                                        <li>
                                            Dispor e operar os equipamentos técnicos e operacionais necessários para acessar a Plataforma da Helix, tais como aparelho de telefone celular de modelo que seja compatível com a Plataforma, conexão à internet móvel, pacote de dados, entre outros;
                                        </li>

                                        <li>
                                            Cumprir com todas as obrigações exigidas por lei relativas ao transporte de cargas, bem como manter sua documentação regularizada e atualizada para a prestação dos serviços de entregador.
                                        </li>

                                        <li>
                                            Não utilizar para proveito próprio ou de terceiros quaisquer informações relacionadas aos consumidores, empresas parceiras ou intermediadora, produtos e serviços e afins, ou qualquer informação que tenha acesso em virtude da presente autorização, razão pela qual se obriga a não armazenar nem tratar os dados pessoais obtidos, nem a entrar em contato depois de haver entregado ou cancelado qualquer pedido com os consumidores ou empresas parceiras;
                                        </li>

                                        <li>
                                            Deverá tratar o consumidor, intermediadora e empresa parceira com ética, educação, confidencialidade, presteza e competência profissional;
                                        </li>

                                        <li>
                                            Não discriminará, de qualquer forma, nenhum consumidor ou empresa parceira, por qualquer que seja o motivo;
                                        </li>

                                        <li>
                                            Deverá abster-se de forçar, induzir ou convencer o consumidor ou empresa parceira a cancelar o uso ou a negociar para atendimento fora da utilização da plataforma.
                                        </li>

                                        <li>
                                            Entende que qualquer reclamação deverá ser direcionada diretamente à intermediadora, pelo canal de comunicação da plataforma. Assim, não utilizará de sites particulares como o “reclame aqui” ou outros parecidos, redes sociais, ou quaisquer outros meios que os não estipulados neste instrumento para promover a sua reclamação ou denegrir a imagem da intermediadora, dos consumidores, empresas parceiras, ou dos seus empregados ou parceiros.
                                        </li>
                                    </ol>
                                </li>

                                <li>
                                    Toda e qualquer infração de trânsito ou dano que ocorrer advindo da entrega, quais sejam:
                                    Multas, pontuação na CNH, acidentes, processos judiciais ou administrativos, danos e/ou extravio dos produtos entregues para o serviço de entregador, entre outros, deverão ser arcados única e exclusivamente pelo entregador, sem que a intermediadora seja de qualquer forma responsabilizada por esses eventos.
                                </li>

                                <li>
                                    O entregador parceiro obriga-se pelo perfeito transporte e entrega no local de destino dos produtos que lhe forem confiados pelo usuário, devendo entregá-los ao destinatário nas mesmas condições e estado em que os recebeu do usuário.
                                </li>

                                <li>
                                    O entregador está ciente que deverá refazer a entrega quando houver erro seu na condução da encomenda, causando prejuízos aos usuários finais ou não.
                                </li>

                                <li>
                                    O entregador obriga-se a retornar ao estabelecimento solicitante, quando na ocasião estiver com maquininha de cartão, dinheiro de troco, comprovante, embalagem, bolsa ou algo do tipo correspondente à entrega realizada.
                                </li>

                                <li>
                                    Nos casos em que o entregador realizar a entrega e não receber o valor correspondente ao serviço, deverá entrar em contato com o suporte da Helix de forma imediata para que o caso seja averiguado, não possuindo a intermediadora qualquer obrigação ou responsabilidade de ressarci-lo.
                                </li>

                                <li>
                                    Nas hipóteses em que o entregador cancele a entrega ou não realize e receba o valor referente a esta, o suporte irá cancelar a entrega e automaticamente o entregador será inativado como entregador parceiro, podendo prestar justificativa através do suporte da Helix.
                                </li>

                                <li>
                                    O entregador assume através deste termo que:

                                    <ol type="I">
                                        <li>
                                            Possui moto ou qualquer outro veículo motorizado devidamente regularizado nos órgãos competentes, para realizar serviços de entrega.
                                        </li>

                                        <li>
                                            Manterá o seu veículo, em bom estado de conservação, e com todos os acessórios necessários para uma pilotagem segura e responsável.
                                        </li>

                                        <li>
                                            Assume que possui seguro para que possa sanar eventuais prejuízos com veículos de terceiros, objeto/alimento transportado, causados por acidentes ou incidentes durante percurso de entrega.
                                        </li>
                                    </ol>
                                </li>

                                <li>
                                    O entregador parceiro está ciente que poderá ficar inativo ou bloqueado nas seguintes hipóteses:

                                    <ol type="A">
                                        <li>
                                            Inativo: Quando houver e-mail ou telefone inexistentes, documentação irregular ou por desinteresse do próprio.
                                        </li>

                                        <li>
                                            Bloqueado: Quando houver conduta considerada grave.
                                            
                                            <p>
                                                &bull;
                                                <i>Parágrafo primeiro:</i> é considerada conduta grave as seguintes práticas:
                                                O entregador se apropriar indevidamente do objeto que deveria ser entregue ao consumidor final; O entregador se apropriar indevidamente de dinheiro ou máquina de cartão que deveria ser entregue ao estabelecimento solicitante;
                                                O entregador praticar quaisquer atitudes que possam prejudicar a intermediadora, seja na questão de imagem da intermediadora perante o mercado e terceiros, questão financeira, comercial, de marketing, entre outras que a intermediadora julgar cabíveis.
                                                Caso descumpra com os termos estabelecidos neste.
                                            </p>

                                            <p>
                                                &bull;
                                                <i>Parágrafo segundo: </i>Nos casos supracitados, a intermediadora se reserva ao direito de avaliar a conduta do entregador parceiro de acordo com o regido neste instrumento, podendo, a intermediadora, realizar o bloqueio sem necessidade de aviso prévio ao entregador parceiro, podendo agir de forma unilateral e com os critérios que a intermediadora optar por adotar.
                                            </p>

                                            <p>
                                                &bull;
                                                <i>Parágrafo terceiro:</i> Após análise de todos os fatos, em caso de confirmação de conduta grave, a intermediadora bloqueará o entregador de sua plataforma, podendo, ainda, responder civil e criminalmente pelos danos que tenha ocasionado.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>

                        <li>
                            DEVERES DO ENTREGADOR
                            <p>
                                Em virtude destes termos e condições o entregador se compromete a:
                                Usar a plataforma Helix única e exclusivamente nos termos definidos;
                                Utilizar-se do equipamento provido pela intermediadora a título de empréstimo com prudência e respeitando os critérios estabelecidos por este termo.
                                Cumprir com todos os requisitos e obrigações legais vigentes aplicáveis à atividade exercida na plataforma Helix;
                                Prover informações reais e fidedignas ao momento de preencher o cadastro de acesso à plataforma Helix;
                                Declarar que todos os documentos e informações cadastrais enviados à plataforma são autênticos, atuais e verdadeiros.
                                Respeitar todos os elementos de propriedade intelectual da intermediadora, pelo qual se absterá de realizar engenharia reversa, de compilação, derivação de código fonte ou similares que envolvam qualquer sistema da plataforma ou seus produtos derivados;
                                Não deverá realizar qualquer entrega sob efeito de bebidas embriagantes, alucinógenos, narcóticos e demais substâncias que possam afetar seu estado psicológico normal.
                                Deverá utilizar vestimenta adequada, bem como utilizar calçado respeitando os limites legais exigidos pelo CTB (código de trânsito brasileiro).
                                O entregador se compromete a contribuir com sistema de previdência social, na qualidade de autônomo, ficando, assim, a intermediadora, isenta de toda e qualquer responsabilidade a respeito desta obrigação, assim como de consequências que possam surgir pela não realização desta atividade.
                                No caso de motoboys ou motociclistas, eles deverão ter as suas motocicletas devidamente adequadas para o transporte de produtos conforme regulamentado pela lei 12.009/2009, o entregador que utiliza moto, declara que está ciente e integralmente regulado pela referida lei de motofretista.
                                Reconhecer e ter consciência de todos os riscos envolvidos, inclusive no que se refere aos riscos decorrentes do transporte de materiais ilícitos, perigosos, armas de fogo ou munições, materiais inflamáveis ou combustíveis, drogas, entorpecentes, explosivos, e qualquer outro tipo de produto proibido pela legislação, sendo seu o ônus referente a toda e qualquer despesa ou prejuízo decorrentes da prestação do serviço, exonerando a intermediadora de qualquer responsabilidade, já que a sua adesão à plataforma Helix é feita de livre e espontânea vontade para otimizar seus serviços, inexistindo qualquer influência da intermediadora na prestação do serviço de transporte, que é contratado diretamente e de forma autônoma entre o entregador e a intermediadora.
                                Compreende que deverá participar de capacitações oferecidas periodicamente para que possa iniciar as entregas.
                                Igualmente, o entregador parceiro declara que, o respeito pelo bom nome e reputação da intermediadora são elementos-chave para continuar com sua autorização ao uso da plataforma Helix, razão pela qual, em caso de estar envolvido em lavagem de ativos, tráfico de entorpecentes, assalto, sequestro, extorsão, pertencimento ou tratos com organizações armadas ilegais, homicídio, tráfico de armas, terrorismo, crimes contra a humanidade ou delitos contra a liberdade, integridade e formação sexuais, entre outros, será motivo suficiente para revogar a autorização ao uso da plataforma, isentando a intermediadora de qualquer responsabilidade direta ou indireta que se possa gerar por motivos das atividades descritas anteriormente.
                            </p>
                        </li>
                        
                        <li>
                            UTILIZAÇÃO DE MARCAS, LOGOS, NOME E INSÍGNIAS

                            <p>
                                O entregador Parceiro reconhece que não poderá usar, reproduzir, modificar, explorar, publicar ou realizar qualquer outra ação com as marcas, logotipos, nomes e insígnias da intermediadora ou de empresas parceiras (ou por ela licenciados ou utilizados) sem a prévia autorização expressa e por escrito. O entregador aceita que o não cumprimento desta cláusula acarretará em sanções civis e penais correspondentes e também em sua imediata desativação para o uso da plataforma.
                            </p>
                        </li>

                        <li>
                            AUTORIZAÇÃO DE CESSÃO DE DIREITOS DE IMAGEM
                            <p>
                                O entregador neste ato promove a cessão e transferência à intermediadora dos direitos de uso de sua imagem, capturada enquanto realiza entregas, eventualmente usada em campanhas e eventos produzidos e/ou patrocinados pela intermediadora atestando que entende como imagem qualquer forma de representação, inclusive fotográfica, bem como o processo audiovisual que resulta da fixação de imagens com ou sem som, que tenha a finalidade de criar, por meio de sua reprodução, a impressão de movimento, independentemente dos processos de sua captação, do suporte usado inicial ou posteriormente para fixá-lo, bem como dos meios utilizados para sua veiculação. Declara o entregador ainda que a presente cessão seja feita em caráter universal, total e definitivo, por prazo indeterminado e a título gratuito, produzindo efeitos não só no Brasil, bem como no exterior.
                                O entregador também autoriza a intermediadora a utilizar a título gratuito ou oneroso (acordada pela intermediadora) a imagem cedida, no brasil ou no exterior, sem qualquer limitação de tempo ou da modalidade de utilização, sem que caiba ao mesmo, qualquer participação no eventual proveito econômico que direta ou indiretamente a intermediadora venha a auferir, sendo que o presente ajuste produzirá efeitos inclusive em relação aos eventuais herdeiros e sucessores do entregador parceiro.
                            </p>
                        </li>

                        <li>
                            USO DE INFORMAÇÕES DO ENTREGADOR PARCEIRO
                            <p>
                                O entregador manifesta expressamente ter sido informado a respeito da informação pessoal por ele entregue, que tem amplo conhecimento e autoriza que:
                            </p>

                            <ol type="I">
                                <li>
                                    A intermediadora, em virtude destes termos e condições, mantenha em seu banco de dados, informações do entregador tais como: nome, sobrenome, e-mail, telefone, endereço, fotografias, informações bancárias e demais informações necessárias para sua inscrição e prestação de serviço. Tais informações poderão ser armazenadas pela intermediadora com a finalidade de comunicar às operadoras o necessário para a prestação adequada do serviço e para comunicar ao entregador sobre informação comercial, publicitária e de mercado relacionada com sua atividade comercial.
                                </li>

                                <li>
                                    As informações obtidas, de igual modo, podem ser utilizadas para fins de objeto de análise para a estratégia de negócios do portal web e da plataforma, apoiada em ferramentas de inteligência de negócios e descrição de dados, que permitam adquirir conhecimentos prospectivos para fins de previsão de tempo de entrega, classificação e segmentação do entregador.
                                </li>

                                <li>
                                    Que as informações poderão ser utilizadas ainda para o cumprimento por parte da intermediadora dos deveres adquiridos em virtude destes termos e condições, podendo ser acessados por empregados ou contratados da intermediadora para geração de relatórios variados, para a correção de erros operacionais e para a análise de possíveis casos de fraude ou inconsistência com este instrumento.
                                </li>

                                <li>
                                    Que a intermediadora utilize tecnologias comuns de internet para acompanhar as eventuais interações do entregador com a empresa parceira, cliente ou com a plataforma, inclusive com coleta e armazenamento de endereço de ip, página solicitada, tempo de duração do acesso ou quaisquer outras formas legítimas de interação.
                                </li>

                                <p>
                                    &bull;
                                    <i>Parágrafo primeiro</i>:
                                    Fundamentado na lei de privacidade de dados pessoais Nº 13.709/18, o entregador declara que está ciente das cláusulas presentes neste instrumento, e fornece, de livre e espontânea vontade, à intermediadora, o consentimento para o tratamento de seus dados pessoais.
                                </p>

                                <p>
                                    &bull;
                                    <i>Parágrafo primeiro</i>:
                                    O entregador estará ciente que deverá disponibilizar, a qualquer momento para intermediadora, na sua atividade dentro da plataforma, quaisquer tipos de informações que sejam requeridas a fim de sanar quaisquer dúvidas.
                                </p>
                            </ol>
                        </li>

                        <li>
                            AUTORIZAÇÃO DE RASTREAMENTO DO ENTREGADOR

                            <p>
                                O ENTREGADOR estará ciente que a INTERMEDIADORA disponibilizará para a empresa solicitante da entrega, o percurso a ser realizado por este. Ressaltando-se que os dados não são disponibilizados, sendo somente exibidos às empresas parceiras, ou seja, as empresas terão acesso apenas à visualização da localização do entregador em tempo real, sendo impossibilitado o acesso aos dados.
                            </p>
                        </li>

                        <li>
                            VIOLAÇÃO DA BASE DE DADOS OU SISTEMA

                            <p>
                                Não é permitida a utilização de nenhum dispositivo, software, ou outro recurso que venha a interferir nas atividades e operações da Plataforma da Helix, bem como nas publicações de Oferta, descrições, contas ou seus bancos de dados. Qualquer intromissão, tentativa de, ou atividade que viole ou contrarie as leis de direito de propriedade intelectual e/ou as proibições estipuladas neste instrumento, tornarão o responsável passível das ações legais pertinentes, bem como das sanções aqui previstas, sendo ainda responsável pelas indenizações por eventuais danos causados.
                            </p>
                        </li>

                        <li>
                            PROPRIEDADE INTELECTUAL

                            <p>
                                O uso comercial da expressão “Helix” como marca, nome empresarial ou nome de domínio, bem como, mas não excludente, os conteúdos das telas relativas aos serviços da Helix Logística Ltda., assim como os programas, bancos de dados, aplicativos mobile, redes e arquivos, que permitem que o Usuário acesse e use sua conta, são de propriedade da intermediadora e estão protegidos pelas leis e tratados internacionais de direito autoral, marcas, patentes, modelos e desenhos industriais. O uso indevido e a reprodução total ou parcial dos referidos conteúdos são proibidos, salvo a autorização expressa da Helix Logística Ltda.
                                A intermediadora não será responsável pelos conteúdos, práticas e serviços ofertados em outros sites que não sejam de propriedade ou operados por si, ainda que exista independentemente do motivo, link para os mesmos na plataforma Helix. A presença de links para outros sites não implica relação de sociedade, de supervisão, de cumplicidade ou solidariedade da intermediadora para com esses sites e seus conteúdos.
                            </p>
                        </li>

                        <li>
                            INEXISTÊNCIA DE GARANTIAS

                            <p>
                                Os Serviços são proporcionados &quot;como estão&quot; e a Helix não dará qualquer garantia a respeito deles. Em particular, não garante que:
                                O funcionamento da plataforma será ininterrupto, seguro ou isento de erros;
                                O uso da Plataforma proporcione qualquer performance ou atenda a qualquer expectativa.
                                O uso da Plataforma proporcione valores rentáveis mínimos à sobrevivência, ou manutenção de veículos utilizados nas entregas.
                                Considerando que o entregador é um profissional autônomo, a Helix não será em nenhum momento responsável por quaisquer consequências, prejuízos ou danos causados à motocicleta ou veículo, ou, ao próprio entregador em virtude dos serviços de entrega, sejam eles disponibilizados e contratados através do uso da plataforma Helix.
                                A Helix não tem qualquer responsabilidade sobre qualquer comentário ou avaliação eventualmente disponibilizado na Plataforma da Helix e, portanto, o entregador parceiro desde já isenta a Helix de quaisquer reclamações, danos ou prejuízos decorrentes desses conteúdos.
                            </p>
                        </li>

                        <li>
                            INEXISTÊNCIA DE VÍNCULO TRABALHISTA

                            <ol>
                                <li>
                                    Como profissional independente, o entregador parceiro atesta e confirma que a Plataforma Helix e suas ferramentas não são essenciais para o desenvolvimento de suas atividades econômicas e que não há qualquer relação hierárquica, de dependência, subordinação ou trabalhista entre o entregador e a Helix Logística Ltda.
                                </li>
                                
                                <li>
                                    Em decorrência do presente Termos e Condições, sob qualquer hipótese ou em qualquer situação, não se presumirá a eventual existência, ou se estabelecerá a presunção de qualquer vínculo societário e/ou empregatício, bem como quaisquer obrigações de caráter trabalhista e previdenciário entre as partes, por si, seus contratados, prepostos e/ou empregados, e não serão fiadoras das obrigações e encargos trabalhistas e sociais uma da outra, cabendo a cada parte a exclusividade e responsabilidade por tais obrigações, inclusive nas esferas civil e penal.
                                </li>

                                <li>
                                    O Entregador parceiro assume a obrigação de suportar integralmente todas as condenações, custos e despesas relativas a processos administrativos e judiciais de qualquer natureza, que sejam eventualmente instaurados ou ajuizados contra a Helix em consequência dos serviços de entrega prestados pelo entregador e contratados através da Plataforma Helix, ainda que a demanda em questão ocorra após a rescisão destes termos.
                                </li>

                                <li>
                                    As Partes destes termos são independentes entre si e cada uma é inteiramente responsável pelos seus custos operacionais, despesas, taxas, contribuições e impostos relativos à manutenção de sua empresa.
                                </li>

                                <li>
                                    Resta desconfigurado o vínculo trabalhista entre o entregador parceiro e a intermediadora, uma vez que inexistem os elementos necessários para o reconhecimento do vínculo empregatício.
                                </li>
                            </ol>
                        </li>

                        <li>
                            VIGÊNCIA

                            <p>
                                A presente autorização de uso é indefinida, não obstante, a intermediadora poderá unilateralmente revogar a autorização de uso em qualquer momento, nos casos previamente definidos, desabilitando o entregador. Já o entregador, devidamente cadastrado na plataforma, pode a qualquer momento, por sua livre iniciativa, deixar de utilizar a plataforma, sem ocasionar nenhum prejuízo a ela.
                            </p>
                        </li>

                        <li>
                            ALTERAÇÃO

                            <p>
                                Este Termo pode ser modificado pela Helix Logística Ltda. a qualquer momento, sendo que as modificações entrarão em vigor na data da publicação e, ao continuar utilizando os serviços prestados através da Plataforma Helix, o Contratante automaticamente concorda e estará sujeito aos novos termos do Contrato.
                            </p>
                        </li>

                        <li>
                            FORO

                            <p>
                                As Partes elegem o Foro da Comarca Assis-SP para dirimir quaisquer controvérsias oriundas, direta ou indiretamente, do presente instrumento de Contrato, excluindo-se qualquer outro por mais privilegiado que seja.
                                O entregador parceiro se responsabiliza pelo serviço oferecido na plataforma Helix nos casos em que as entregas forem oriundas de integração de uma empresa parceira.
                                Estes Termos e Condições estabelecem o pleno entendimento das Partes quanto ao assunto aqui tratado. Não pode ser alterado oralmente, mas apenas com a expressa renúncia, alteração, modificação, extensão ou quitação feita por escrito e encaminhada à empresa Helix Logística Ltda.
                            </p>
                        </li>
                    </ol>                    
                    
                    <p className={styles.titulo}>
                        Estes Termos e Condições estabelecem o pleno entendimento das PARTES quanto ao assunto aqui tratado. Não pode ser alterado oralmente, mas apenas com a expressa renúncia, alteração, modificação, extensão ou quitação feita por escrito e encaminhada à empresa HELIX.
                    </p>
                    <section className={styles.actionBtns}>
                        <button>Cancelar</button>
                        <button onClick={onClose}>Eu aceito os termos</button>
                    </section>
                </section>

            </div>
        </div>
    )
}