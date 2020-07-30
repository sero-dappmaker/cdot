class Lang {

    zh_CN = {
        project: {
            rule:"规则",
            title: "合约详情",
            contractAddress: "合约地址",
            balanceSero: "当前余额 (SERO)",
            leaguesetting:"社团设置",
			refereecode:"请输入设置账号的邀请码",
			settinginfo:"社团设置仅设置当前用户具有投资(34911.491)，升级为社团管理员权限，相应用户投资实际(34911.491)后，才能获取社团成员相应的收益。"
        },

        account: {
            title: {
                utxo: "钱包账户",
                contract: "合约账户",
                swith: "切换账户",
                balanceSero: "余额 (SERO)",
                estimatedTotal: "预计总收益 (SERO)",
                dayIncome: "当天返还比例",
                staticIncome: "当天静态返还 (SERO)",
                withdraw: "可提现金额 (SERO)",
                detail: "详情",
                id: "编号",
                referId: "推荐人编号",
                areaId: "大区编号",
                totalInvest: "本金",
                profitLevel: "收益倍数",
                latestTime: "最新收益时间",
                totalReturn: "当前返还总数(SERO)",
                totalReturnDay: "当天返还总数(SERO)",
                recommend: "下级人数",
                staticIncomeTips: "今天的静态收益已经支付到可提现账户.",
                staticIncomeTips2: "触发收益到提现账户.",
                investDetail: "投资详情",
                myIncome: "我的业绩",
                areaTotal: "大区业绩",
                areaOtherTotal: "业绩总和(不含大区)",

                staticReward: "静态返还",
                recommendReward: "推荐奖",
                nobilityReward: "星级奖",
                vipReward: "VIP奖",
                viewCode: "查看智能合约",

                total:"总额",
                staticincome:"静态收益",
                recommendincome:"推荐收益",
                managerincome:"管理收益",
                exchangerate:"兑换比例"


            },
            button: {
                deposit: "充值",
                invest: "投资",
                trigger: "触发收益",
                withdraw: "提现",
                close: "关闭",
                copy: "拷贝",
                exchange: "兑换",
            },
            modal: {
                deposit: {
                    title: "充值",
                    copy: "拷贝",
                },

                invest: {
                    title: "投资",
                    referId: "推荐人编号",
                    amount: "投资金额",
                    amountTips: "100 SERO起投",
                    availableSERO: "可用的余额",
                    total: "应付合计",
                    estimate: "预计收益",
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                },

                trigger: {
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                },

                withdraw: {
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                    tips: "* 提现金额将直接提到UTXO账户.",
                },
            },
        },
        toast: {
            lessAmount: "SERO余额不足以支付本次交易.",
            minInvest: "最小投资金额为 100 SERO.",
            tx: "交易提交成功, 等待区块打包交易, 交易哈希: ",
            copySuccess: "拷贝成功! ",
            rule:`                  
CDO制度解析
合约规则
1.以推荐码作推荐链接关系。
2.静态收益:为合约地址币数总量的三十分之一加权分配,确保了该智能合约永久运行，享受首条匿名公链的未来愉快价值空间。而单个帐户的当天静态返还=个人当前未返还总数÷全网当前未返还总数x当天返还总数;另外单个帐户日最高释放量为预计总收益的千分之三点三，超出部分会继续返回合约池继续分配。
玩家参与条件:
A级：100-4999		SERO静+动态奖2倍出局;
B级: 5000-29999		SERO静+动态奖3倍出局;
PS:一次性投资1万以上SER0成为社区团队不烧伤.1万以下1比1烧伤.
VIP: 30000及以上	SERO静+动态3倍出局
VIP奖一次性投 资30000拿伞下新增业绩2%平级拿%1.
PS;(分享收益、平级收益即时结算，有级差、有烧伤;平级奖指的是同部门出现第一个平级的时候，依然可以拿它网体下新增业绩对VIP级收益,直到同部门中出现新的平级，则平级奖由倒数第二个平级者获得。各个vip的平级奖依此类推，只有出现平级才会出现平级奖。)
门票制度
1.每一个账号都必须用投资SERO数量10%的CD0做为门票。所花费购买门票的CDO和投资的SERO共同进入合约地址。CD0发行1个亿. PS;000000内CD0兑换比例sero1比cdo10.超过5000000.每进10万SERO兑换比例逐渐上涨.
可原点位复投加单。
3.分享收益:
1层10%
2层6%
3层至12层1%
PS;直推1人拿1层,直推2人拿3层,直推3人拿6层，直推4人拿9层，直推5人拿12层
d)分享收益每日结算，可提现可复投。
4.管理奖:
除去最大业绩部门之外，其它所有业绩相加计算。级别业绩收益
一星除最 大直推部门业绩外，其余所有直推部门业绩总和10万SERO分享伞下新增业绩3%、平级拿新增业绩1%
二星除最大直推部门业绩外，其余所有直推部门业绩总和40万SER0分享伞下新增业绩5%、平级拿新增业绩1%
三星除最大直推部门业绩外,其余所有直推部门业绩总和120万SERO分享伞下新增业绩7%、平级拿新增业绩1%
四星除最大直推部门业绩外，其余所有直推部门业绩总和240万SERO分享伞下新增业绩9%、平级拿新增业绩1%(备注:分享收益、平级收益即时结算,有级差、有烧伤;平级奖指的是同部门出现第一个平级的时候，依然可以拿它网体下新增业绩对应星级收益，直到同部门门中出现新的平级，则平级奖由倒数第二个平级者获得。各个星级的平级奖依此类推，只有出现平级才会出现平
5.技术占股6%
6.系统开源，数据上链，代码写定，去中心化记账，没有后门，不可篡改，自动运行，自动分
7.系统公开合约规则及默认推荐码,玩家可在无推荐人的情况下主动参与。
8.开源代码查询地址:https://github.com/sero-dappmaker/cdot/
以上规则智能合约解析!`,
        }
    };

    en_US = {
        project: {
            rule:"规则",
            title: "Contract Info",
            contractAddress: "Contract Address",
            balanceSero: "Current Balance (SERO)",
            leaguesetting:"Society settings",
			refereecode:"Please enter the invitation code for setting up the account",
			settinginfo:"The community setting only sets that the current user has investment (34911.491) and is upgraded to the community administrator authority. After the corresponding user invests the actual (34911.491), the corresponding income of the community members can be obtained."
        },

        account: {
            title: {
                utxo: "Wallet Account",
                contract: "Contract Account",
                swith: "Switch Account",
                balanceSero: "Balance (SERO)",
                estimatedTotal: "Estimated Total Income (SERO)",
                dayIncome: "Return rate on the day",
                staticIncome: "Static Return (SERO)",
                withdraw: "Withdrawal Account (SERO)",
                detail: "Detail",
                id: "ID",
                referId: "Refer ID",
                areaId: "Large Area ID",
                totalInvest: "Total Invest",
                profitLevel: "Profit Level",
                latestTime: "Latest Share Time",
                totalReturn: "Total Return",
                totalReturnDay: "Total return on the day (SERO)",
                recommend: "Recommend Number",
                staticIncomeTips: "Your income have been paid to the withdrawal account.",
                staticIncomeTips2: "Trigger to withdrawal account. ",
                investDetail: "Invest Info",
                myIncome: "My performance",
                areaTotal: "Regional performance",
                areaOtherTotal: "Total performance (excluding the large region)",

                staticReward: "Static",
                recommendReward: "Recommend",
                nobilityReward: "Nobility",
                vipReward: "VIP",
                viewCode: "View Smart Contract",

                total:"total amount",
                staticincome:"Static income",
                recommendincome:"recommendincome",
                managerincome:"Management income",
                exchangerate:"Exchange ratio"
            },
            button: {
                deposit: "Deposit SERO",
                invest: "Invest",
                trigger: "Trigger Income",
                withdraw: "Withdraw",
                close: "Close",
                copy: "Copy",
                exchange: "exchange",
            },
            modal: {
                deposit: {
                    title: "Deposit",
                    copy: "COPY",
                },

                invest: {
                    title: "Invest",
                    referId: "Refer ID",
                    ticket: "Tickets",
                    amount: "Invet Amount",
                    amountTips: "At least invest 100 SERO",
                    availableSERO: "Available Blance",
                    availableExchange: "Max Exchange",
                    total: "Total",
                    estimate: "Estimated Return",
                    password: "Password",
                },

                trigger: {
                    password: "Password",
                },

                withdraw: {
                    password: "Password",
                    tips: "* This is the withdrawal of the amount to the UTXO account.",
                },
            },
        },
        toast: {
            lessAmount: "The balance is not enough to pay for this transaction.",
            minInvest: "Invest Amount at least 100 SERO.",
            tx: "The transaction was submitted successfully, waiting for the block to be packaged, and the transaction hash: ",
            copySuccess: "Copy to clipboard successfully! ",
            rule:`Analysis of CDO System
Contract rules
1. Use the recommendation code as the recommendation link relationship.
2. Static income: a weighted distribution of one-thirtieth of the total amount of coins in the contract address, ensuring the permanent operation of the smart contract and enjoying the future pleasant value space of the first anonymous public chain. The static return of a single account on the day = the total number of individuals currently not returned ÷ the total number of current non-returns on the entire network x the total number of returns on the day; the maximum daily release of a single account is 3.3% of the estimated total revenue, and the excess will continue to be returned to the contract The pool continues to allocate.
Player participation conditions:
Level A: 100-4999 SERO static + dynamic award 2 times out;
Level B: 5000-29999 SERO static + dynamic prize 3 times out;
PS: One-time investment of more than 10,000 SER0 to become a community team does not burn. 1 to 1 burns below 10,000.
VIP: 30000 and above SERO static + dynamic 3 times out
The VIP prize is a one-time investment of 30,000 to get new performance under the umbrella of 2%, and to get %1.
PS; (Sharing income, immediate settlement of equal income, with grade difference, burns; equal grade award refers to the first equal grade in the same department, you can still use it to add new performance under the network to the VIP grade income. Until there is a new tie in the same department, the tie award will be won by the penultimate tie. The tie awards of each VIP will be deduced by analogy, and the tie award will only appear if there is a tie.)
Ticket system
1. Each account must use CD0 with 10% of the SERO investment as a ticket. The CDO used to purchase the tickets and the SERO invested enter the contract address together. CD0 issued 100 million. PS; The conversion ratio of CD0 within 000000 sero1 is higher than cdo10. Over 5000000. The conversion ratio of every 100,000 SERO is gradually increasing.
It can be re-invested and added to the original position.
3. Sharing income:
1 layer 10%
2nd floor 6%
3 to 12 floors 1%
PS; direct push 1 person takes 1 layer, direct push 2 people take 3 floors, direct push 3 people take 6 floors, direct push 4 people take 9 floors, direct push 5 people take 12 floors
d) Sharing income is settled daily, with cash withdrawal and reinvestment.
4. Management Award:
Except for the department with the largest performance, all other performances are added together. Grade performance income
Except for the performance of the largest direct promotion department, the total performance of all other direct promotion departments is 100,000 SERO sharing 3% of the new performance under the umbrella, and 1% of the new performance of the peer group.
Except for the performance of the largest direct promotion department, the total performance of all other direct promotion departments of the two stars is 400,000 SER0. The new performance under the umbrella is 5%, and the level is 1%.
In addition to the performance of Samsung's largest direct promotion department, the total performance of all the other direct promotion departments totaled 1.2 million SERO sharing 7% of the new performance under the umbrella, and 1% of the new performance of the peer group.
Except for the performance of the largest direct promotion department, all the other direct promotion departments have a total of 2.4 million SERO sharing 9% of the new performance under the umbrella, and 1% of the new performance for the peer group. Level difference, burns; level award refers to when the first level of the same department appears, you can still use the new performance under the network to correspond to the star income, until a new level of the same department appears, the level is equal The grade award is won by the penultimate peer. The grade award for each star rating and so on.
5. Technology accounts for 6%
6. The system is open source, data is on the chain, code is written, decentralized accounting, no back door, non-tamperable, automatic operation, automatic distribution
7. The system discloses the contract rules and the default recommendation code, and players can take the initiative to participate without a recommender.
8. Open source code query address:https://github.com/sero-dappmaker/cdot/
The above rules and smart contract analysis!`,
        },
    }

    be_BY = {
        project: {
            rule:"规则",
            title: "Детали контракта",
            contractAddress: "Адрес контракта",
            balanceSero: "Текущий баланс (SERO)",
            leaguesetting:"Настройки общества",
			refereecode:"Пожалуйста, введите код приглашения для настройки учетной записи",
			settinginfo:"Параметр сообщества только устанавливает, что у текущего пользователя есть инвестиции (34911,491), и обновляется до полномочий администратора сообщества. После того, как соответствующий пользователь инвестирует фактические инвестиции (34911,491), можно получить соответствующий доход членов сообщества."
        },

        account: {
            title: {
                utxo: "Счет кошелька",
                contract: "Контокоррентный счет",
                swith: "Сменить аккаунт",
                balanceSero: "Баланс (SERO)",
                estimatedTotal: "Расчетный общий доход (SERO)",
                dayIncome: "День Доход",
                staticIncome: "Фиксированный доход дня (SERO)",
                withdraw: "Доступен вывод средств (SERO)",
                detail: "подробности",
                id: "Число",
                referId: "Идентификатор реферера",
                areaId: "ID региона",
                totalInvest: "Основная сумма",
                profitLevel: "Многократный доход",
                latestTime: "Время последнего дохода",
                totalReturn: "Всего текущих возвратов (SERO)",
                totalReturnDay: "Всего возвращено в день (SERO)",
                recommend: "Количество рефералов",
                staticIncomeTips: "Сегодняшний фиксированный доход выплачивается на счет снятия",
                staticIncomeTips2: "Триггер доход на счет вывода",
                investDetail: "Детали инвестирования",
                myIncome: "Мое выступление",
                areaTotal: "Региональный спектакль",
                areaOtherTotal: "Общий доход (кроме региональных)",

                staticReward: "Фиксированный доход",
                recommendReward: "реферальные вознаграждения",
                nobilityReward: "Звездная награда",
                vipReward: "VIP Награда",
                viewCode: "Посмотреть смарт-контракт",


                total:"Общая сумма",
                staticincome:"Статический доход",
                recommendincome:"Рекомендуемый доход",
                managerincome:"Управление доходами",
                exchangerate:"Коэффициент обмена"
            },
            button: {
                deposit: "депозит",
                invest: "инвестиции",
                trigger: "Триггер доход",
                withdraw: "Снять со счета",
                close: "близко",
                copy: "копия",
                exchange: "обмен",
            },
            modal: {
                deposit: {
                    title: "депозит",
                    copy: "копия",
                },

                invest: {
                    title: "инвестиции",
                    referId: "Идентификатор реферера",
                    amount: "Сумма инвестиций",
                    amountTips: "Начинает кастовать 100 SERO",
                    availableSERO: "доступные средства",
                    total: "Всего к оплате",
                    estimate: "Расчетный доход",
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                },

                trigger: {
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                },

                withdraw: {
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                    tips: "* Вывод средств будет производиться непосредственно на счет UTXO.",
                },
            },
        },
        toast: {
            lessAmount: "Баланса SERO недостаточно для покрытия этой транзакции.",
            minInvest: "Минимальная сумма инвестиций составляет 100 SERO.",
            tx: "Предоставление транзакции успешный, ожидание транзакции блока упаковки, хэш транзакции: ",
            copySuccess: "Успешно скопировано",
            rule:`Анализ системы CDO
Правила договора
1. Используйте код рекомендации в качестве отношения ссылки рекомендации.
2. Статический доход: взвешенное распределение одной трети от общего количества монет в адресе контракта, обеспечивающее постоянную работу смарт-контракта и имеющее пространство будущей приятной стоимости первой анонимной публичной цепочки. Статический возврат одной учетной записи в день = общее количество физических лиц, которые в настоящее время не возвращены ÷ общее количество текущих невозвращений во всей сети x общее количество возвратов в день, максимальный ежедневный выпуск одной учетной записи составляет 3,3% от предполагаемой общей выручки, и излишек будет по-прежнему возвращаться в контракт. Пул продолжает выделяться.
Условия участия игрока:
Уровень A: 100-4999 SERO статическое + динамическое вознаграждение 2 раза;
Уровень B: 5000-29999 SERO статический + динамический приз 3 раза;
PS: Единовременные вложения в размере более 10000 SER0, чтобы стать командой сообщества, не сгорают, от 1 до 1 - до 10 000.
VIP: 30000 и выше SERO статический + динамический 3 раза
VIP-приз - это единовременная инвестиция в 30000 для получения новых результатов под эгидой 2% и для получения% 1.
PS; (Распределение дохода, немедленное урегулирование равного дохода, с разницей в оценках, сгорание; награда за равный класс относится к первой равной оценке в том же отделе, вы все равно можете использовать новую производительность в сети, чтобы увеличить доход класса VIP. До тех пор, пока в том же отделе не появится новая ничья, награда за ничью будет выигрывать предпоследней ничьей. За каждую ничью будут рассчитываться награды за ничью, а награда за ничью будет появляться только при наличии ничьей.
Билетная система
1. Каждая учетная запись должна использовать CD0 с 10% инвестиций SERO в качестве билета. CDO, использованный для покупки билетов, и инвестированный SERO вместе вводят адрес договора. CD0 выпущено 100 млн. PS; коэффициент конверсии CD0 в пределах 000000 серо1 выше, чем cdo10. Более 5000000. Коэффициент конверсии каждые 100000 SERO постепенно увеличивается.
Он может быть повторно инвестирован и добавлен в исходную позицию.
3. Распределение дохода:
1 слой 10%
2 этаж 6%
От 3 до 12 этажей 1%
PS; прямое нажатие 1 человек занимает 1 слой, прямое нажатие 2 человека занимают 3 этажа, прямое нажатие 3 человека занимают 6 этажей, прямое нажатие 4 человека занимают 9 этажей, прямое нажатие 5 человек занимают 12 этажей
г) Разделение дохода рассчитывается ежедневно с снятием наличных и реинвестированием.
4. Премия за управление:
За исключением отдела с наибольшей производительностью, все остальные представления складываются вместе. Оценка производительности доход
За исключением показателей крупнейшего отдела прямого продвижения, общая производительность всех других отделов прямого продвижения составляет 100 000 SERO, на которые приходится 3% новых показателей под эгидой и 1% новых показателей группы сверстников.
За исключением производительности самого большого отдела прямого продвижения, общая производительность всех других отделов прямого продвижения двух звезд составляет 400 000 SER0. Новый результат под зонтиком составляет 5%, а уровень - 1%.
В дополнение к производительности крупнейшего департамента прямого продвижения Samsung общая производительность всех остальных департаментов прямого продвижения составила 1,2 миллиона SERO, на которые пришлось 7% новых показателей под эгидой и 1% новых показателей группы сверстников.
За исключением показателей крупнейшего отдела прямого продвижения, все остальные отделы прямого продвижения имеют в общей сложности 2,4 миллиона SERO, на долю которых приходится 9% новых показателей под эгидой и 1% новых показателей для группы сверстников. Разница в уровнях, прожиги, присуждение уровня относится к тому моменту, когда появляется первый уровень того же отдела, вы все равно можете использовать новую производительность в сети, чтобы соответствовать звездному доходу, пока не появится новый уровень того же отдела, уровень будет равен Награду за оценку получает предпоследний коллега, награду за оценку каждой звезды и так далее.
5. Технология составляет 6%
6. Система с открытым исходным кодом, данные находятся в цепочке, код написан, децентрализованный учет, нет черного хода, не вмешивается, автоматическое управление, автоматическое распространение
7. Система раскрывает правила контракта и код рекомендации по умолчанию, и игроки могут проявить инициативу к участию без рекомендации.
8. Открытый запрос исходного кода:https://github.com/sero-dappmaker/cdot/
Вышеуказанные правила и умный анализ контракта!`,
        }
    };

    ko_KR = {
        project: {
            rule:"规则",
            title: "계약세부",
            contractAddress: "계약 주소",
            balanceSero: "현재 잔액 (SERO)",
            leaguesetting:"사회 설정",
			refereecode:"계정 설정을위한 초대 코드를 입력하십시오",
			settinginfo:"커뮤니티 설정은 현재 사용자에게 투자가 있고 (34911.491) 커뮤니티 관리자 권한으로 업그레이드되도록 설정하며, 해당 사용자가 실제 투자 (34911.491)를 투자하면 커뮤니티 회원의 해당 수입을 얻을 수 있습니다."
        },

        account: {
            title: {
                utxo: "월렛 계정",
                contract: "계약 계정",
                swith: "계정 변경",
                balanceSero: "밸런스 (SERO)",
                estimatedTotal: "총 예상 수익 (SERO)",
                dayIncome: "당일 수익률",
                staticIncome: "고정 수입 (SERO)",
                withdraw: "출금 금액 가능 (SERO)",
                detail: "세부",
                id: "번호",
                referId: "리퍼러 ID",
                areaId: "지역 ID",
                totalInvest: "교장",
                profitLevel: "여러 수입",
                latestTime: "마지막 소득 시간",
                totalReturn: "총 전류 리턴 (SERO)",
                totalReturnDay: "하루에 반환 된 총액 (SERO)",
                recommend: "부하 직원 수",
                staticIncomeTips: "인출 계좌로 지급되는 오늘의 고정 수입",
                staticIncomeTips2: "인출 계좌로 수입 트리거",
                investDetail: "투자세부",
                myIncome: "내 공연",
                areaTotal: "지역 성과",
                areaOtherTotal: "총 실적 (지역 제외)",

                staticReward: "고정 수입",
                recommendReward: "추천 보상",
                nobilityReward: "별 보상",
                vipReward: "VIP 보상",
                viewCode: "스마트 계약서보기",


                total:"총액",
                staticincome:"정적 수입",
                recommendincome:"추천 수입",
                managerincome:"관리 수입",
                exchangerate:"교환 비율"
            },
            button: {
                deposit: "예금",
                invest: "투자",
                trigger: "트리거 수익",
                withdraw: "철수",
                close: "닫기",
                copy: "복사",
                exchange: "교환",
            },
            modal: {
                deposit: {
                    title: "예금",
                    copy: "복사",
                },

                invest: {
                    title: "투자",
                    referId: "리퍼러 ID",
                    amount: "투자 금액",
                    amountTips: "100 SERO 시작",
                    availableSERO: "사용 가능한 잔액",
                    total: "총 지불",
                    estimate: "추정 소득",
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                },

                trigger: {
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                },

                withdraw: {
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                    tips: "* 출금은 UTXO 계정으로 직접 이루어집니다.",
                },
            },
        },
        toast: {
            lessAmount: "이 거래를 처리하기에 SERO 잔액이 부족합니다.",
            minInvest: "최소 투자 금액은 100 SERO입니다.",
            tx: "트랜잭션 제출 완료, 블록 패키징 트랜잭션 대기 중, 트랜잭션 해시 : ",
            copySuccess: "성공적으로 복사",
            rule:`CDO 시스템 분석
계약 규칙
1. 추천 코드를 추천 링크 관계로 사용하십시오.
2. 정적 수입 : 계약 주소에있는 총 코인 금액의 30 분의 1의 가중 분배로, 스마트 계약의 영구적 인 운영을 보장하고 첫 익명의 공개 체인의 미래의 유쾌한 가치 공간을 즐기십시오. 당일 단일 계정의 정적 반품 = 현재 반환되지 않은 총 개인 수 ÷ 전체 네트워크의 현재 비 반품 총 수 x 당일의 총 수익 수; 단일 계정의 최대 일일 릴리스는 총 예상 총 수입의 3.3 %이며 초과분은 계속 계약서에 반환됩니다 풀은 계속 할당됩니다.
플레이어 참여 조건 :
레벨 A : 100-4999 SERO 정적 + 동적 보너스 2 회 제한;
레벨 B : 5000-29999 SERO 정적 + 동적 상금 3 번 초과;
추신 : 커뮤니티 팀이되기 위해 10,000 SER0 이상의 일회성 투자는 타지 않습니다.
VIP : 30000 이상 SERO 정적 + 동적 3 배 초과
VIP상은 2 %의 우산 아래에서 새로운 성과를 얻고 % 1을 얻기 위해 30,000의 일회성 투자입니다.
추신 : (소득 차이, 동등한 소득의 즉각적인 정착, 학년 차이, 화상; 동일한 학년상은 동일한 부서의 첫 번째 동등한 학년을 말하며, VIP 등급 소득을 높이기 위해 네트워크에서 새로운 성과를 계속 사용할 수 있습니다. 같은 부서에 새로운 넥타이가있을 때까지 두 번째 넥타이는 넥타이 보너스를받습니다. 각 VIP의 넥타이 보너스는 유추에 의해 추론되며 넥타이가있는 경우에만 나타납니다.)
티켓 시스템
1. 각 계정은 SERO 투자의 10 %가 CD0 인 티켓으로 티켓을 사용해야합니다. 티켓 구매에 사용한 CDO와 투자 한 SERO는 계약 주소를 함께 입력합니다. 1 억 건의 CD0 발행 PS; 000000 sero1 내에서 CD0의 전환율이 cdo10보다 높고 5000000을 초과하여 10 만 SERO마다 전환율이 점차 증가하고 있습니다.
다시 투자하여 원래 위치에 추가 할 수 있습니다.
3. 소득 분배 :
1 층 10 %
2 층 6 %
3 ~ 12 층 1 %
추신 : 직접 밀기 1 명 1 층, 직접 밀기 2 명 3 층, 직접 밀기 3 명 6 층, 직접 밀기 4 명 9 층, 직접 밀기 5 명 12 층
d) 현금 분배 및 재투자를 통해 공유 소득이 매일 정산됩니다.
4. 경영 상 :
성과가 가장 큰 부서를 제외하고 다른 모든 성과가 함께 추가됩니다. 학년 실적 수입
가장 큰 직접 승진 부서의 성과를 제외하고, 다른 모든 직접 승진 부서의 총 성과는 10 만 SERO로, 새 그룹의 3 %, 새 그룹의 1 %입니다.
가장 큰 직접 승진 부서의 성과를 제외하고 두 별의 다른 모든 직접 승진 부서의 총 성과는 400,000 SER0입니다. 우산 아래의 새로운 성과는 5 %이고 수준은 1 %입니다.
삼성 최대 직판 부서의 성과 외에도 다른 직판 부서 전체의 총 성과는 총 120 만 SERO로 우산 아래 새로운 성능의 7 %, 동료 그룹의 새로운 성능의 1 %를 공유했습니다.
가장 큰 직접 승진 부서의 성과를 제외하고, 다른 모든 직접 승진 부서는 총 240 만 SERO가 우산 아래 새 성과의 9 %를 공유하고 동료 그룹의 새 성과의 1 %를 공유합니다. 레벨 차이, 화상, 레벨상은 동일한 부서의 첫 번째 레벨이 나타날 때, 동일한 부서의 새 레벨이 나타날 때까지 스타 수입에 해당하는 네트워크에서 새로운 성능을 계속 사용할 수 있으며 레벨이 같습니다. 등급상은 두 번째 동료에 의해 수여되며 각 별 등급 등에 대한 등급 상입니다.
5. 기술은 6 %를 차지합니다
6. 시스템은 오픈 소스이며, 데이터는 체인에 있으며, 코드가 작성되며, 분산 회계, 백도어, 변조 불가능, 자동 조작, 자동 배포가 없습니다.
7. 시스템은 계약 규칙과 기본 추천 코드를 공개하고 플레이어는 추천없이 참여를 주도 할 수 있습니다.
8. 오픈 소스 코드 쿼리 주소 :https://github.com/sero-dappmaker/cdot/
위의 규칙과 현명한 계약 분석!`,
        }
    };

    ja_JP = {
        project: {
            rule:"规则",
            title: "契約詳細",
            contractAddress: "契約住所",
            balanceSero: "現在の残高（SERO）",
            leaguesetting:"社会の設定",
			refereecode:"アカウントを設定するための招待コードを入力してください",
			settinginfo:"コミュニティ設定は、現在のユーザーに投資（34911.491）があることのみを設定し、コミュニティ管理者権限にアップグレードされます。対応するユーザーが実際（34911.491）に投資すると、コミュニティメンバーの対応する収入を取得できます。"
        },

        account: {
            title: {
                utxo: "ウォレットアカウント",
                contract: "契約アカウント",
                swith: "アカウントを切り替える",
                balanceSero: "バランス（SERO）",
                estimatedTotal: "推定総収益（SERO）",
                dayIncome: "同日の返品率",
                staticIncome: "毎日の静的収入（SERO）",
                withdraw: "引き出し可能な現金（SERO）",
                detail: "細部",
                id: "数",
                referId: "リファラーID",
                areaId: "地域ID",
                totalInvest: "主要な",
                profitLevel: "複数の収益",
                latestTime: "最新の収益時間",
                totalReturn: "返品合計（SERO）",
                totalReturnDay: "当日のトータルリターン（SERO）",
                recommend: "紹介の数",
                staticIncomeTips: "今日の静的収益は引き出し口座に支払われました",
                staticIncomeTips2: "引き出し口座に収益をトリガー",
                investDetail: "投資の詳細",
                myIncome: "私のパフォーマンス",
                areaTotal: "地区のパフォーマンス",
                areaOtherTotal: "パフォーマンスの合計（地域を除く）",

                staticReward: "静的リターン",
                recommendReward: "紹介報酬",
                nobilityReward: "スター賞",
                vipReward: "VIP報酬",
                viewCode: "スマートコントラクトを表示",


                total:"合計金額",
                staticincome:"静的収入",
                recommendincome:"推奨収入",
                managerincome:"管理収入",
                exchangerate:"交換比率"
            },
            button: {
                deposit: "預り金",
                invest: "投資",
                trigger: "トリガー収益",
                withdraw: "引き出す",
                close: "閉じる",
                copy: "複写",
                exchange: "両替",
            },
            modal: {
                deposit: {
                    title: "預り金",
                    copy: "複写",
                },

                invest: {
                    title: "投資",
                    referId: "リファラーID",
                    amount: "投資額",
                    amountTips: "100 SERO開始",
                    availableSERO: "利用可能残高",
                    total: "お支払い総額",
                    estimate: "推定収入",
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                },

                trigger: {
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                },

                withdraw: {
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                    tips: "※引き出しはUTXO口座に直接行われます。",
                },
            },
        },
        toast: {
            lessAmount: "SERO残高はこのトランザクションをカバーするのに十分ではありません。",
            minInvest: "最小投資額は100 SEROです。",
            tx: "トランザクション送信が成功し、ブロックパッケージングトランザクションを待機しています、トランザクションハッシュ： ",
            copySuccess: "正常にコピーされました",
            rule:`CDOシステムの分析
契約ルール
1.推奨リンク関係として推奨コードを使用します。
2.静的収入：契約アドレス内のコインの総量の30分の1の加重分布。スマートコントラクトの永続的な運用を保証し、最初の匿名パブリックチェーンの将来の快適なバリュースペースを享受します。当日の単一アカウントの静的収益=現在返されていない個人の総数÷ネットワーク全体の現在の非収益の合計数x当日の収益の合計数;単一アカウントの最大日次リリースは推定総収益の3.3％であり、超過分は引き続き契約に返還されますプールは引き続き割り当てられます。
プレイヤー参加条件：
レベルA：100-4999 SERO静的+動的アワード2回。
レベルB：5000-29999 SERO静的+動的賞金3回。
PS：コミュニティチームになるための10,000を超えるSER0の1回限りの投資は燃えません。1対1は10,000未満で燃えます。
VIP：30000以上SERO静的+動的3タイムアウト
VIP賞は、2％の傘の下で新しいパフォーマンスを獲得し、％1を獲得するための30,000の1回限りの投資です。
PS;（収入の共有、等収入の即時決済、等級差、火傷;等学位賞とは、同じ部門の最初の等学位を指します。ネットワークで新しいパフォーマンスを使用して、VIP等級収入を増やすことができます。同じ部門に新しいタイができるまで、タイ賞は最後から2番目のタイによって獲得されます。各VIPのタイ賞は類推によって推論され、タイが存在する場合にのみタイ賞が表示されます。
チケット制
1.各アカウントは、CD0を使用し、SEROへの投資の10％をチケットとして使用する必要があります。チケットの購入に使用したCDOと投資したSEROが一緒に契約住所を入力します。 CD0は1億を発行PS：000000 sero1内のCD0の変換比率はcdo10よりも高い5000000を超えます。100,000ごとのSEROの変換比率は徐々に増加しています。
再投資して元の位置に追加できます。
3.収入の共有：
1レイヤー10％
2階6％
3〜12階1％
PS;ダイレクトプッシュ1人で1レイヤー、ダイレクトプッシュ2人で3フロア、ダイレクトプッシュ3人で6フロア、ダイレクトプッシュ4人で9フロア、ダイレクトプッシュ5人で12フロア
d）収入の分配は、現金の引き出しと再投資により毎日解決されます。
4.管理賞：
最大のパフォーマンスを持つ部門を除いて、他のすべてのパフォーマンスが一緒に追加されます。成績収入
最大のダイレクトプロモーション部門のパフォーマンスを除いて、他のすべてのダイレクトプロモーション部門の合計パフォーマンスは100,000 SEROで、傘下の新しいパフォーマンスの3％、およびピアグループの新しいパフォーマンスの1％を共有しています。
最大のダイレクトプロモーション部門のパフォーマンスを除いて、2つ星の他のすべてのダイレクトプロモーション部門のパフォーマンスの合計は400,000 SER0で、傘下の新しいパフォーマンスは5％、レベルは1％です。
サムスン最大のダイレクトプロモーション部門のパフォーマンスに加えて、他のすべてのダイレクトプロモーション部門の合計パフォーマンスは120万SEROで、傘下の新しいパフォーマンスの7％、およびピアグループの新しいパフォーマンスの1％を共有しました。
最大のダイレクトプロモーション部門のパフォーマンスを除いて、他のすべてのダイレクトプロモーション部門の合計パフォーマンスは240万SEROです。共有の傘の下で新しいパフォーマンスの9％、ピアグループの新しいパフォーマンスの1％です。レベル差、火傷。レベルアワードは、同じ部門の最初のレベルが表示されたときに、同じ部門の新しいレベルが表示されるまで、ネットワークで新しいパフォーマンスを使用してスター収入に対応できます。グレードアワードは、2番目から2番目のピアによって獲得されます。
5.テクノロジーは6％を占める
6.システムはオープンソースであり、データはチェーン上にあり、コードが記述され、分散会計、バックドアなし、改ざん不可能、自動操作、自動配布
7.システムは契約ルールとデフォルトの推奨コードを公開し、プレーヤーは主導権を握って推奨者なしで参加できます。
8.オープンソースコードのクエリアドレス：https://github.com/sero-dappmaker/cdot/
上記のルールとスマート契約分析！`,
        }
    };
}

export default Lang