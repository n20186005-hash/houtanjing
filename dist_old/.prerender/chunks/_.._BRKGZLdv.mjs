import { T as createAstro, h as addAttribute, l as renderTemplate, p as maybeRenderHead, r as renderComponent } from "./server_BlDm9rbd.mjs";
import { n as mapLinks, o as createComponent, r as place, t as $$BaseLayout } from "./BaseLayout_DtjDvED5.mjs";
import { t as __exportAll } from "./index_D_2Zbtma.mjs";
//#region src/data/content.ts
var pages = [
	{
		slug: "visit",
		title: "猴探井天空之橋怎麼玩？遊覽路線與出發前注意事項",
		shortTitle: "完整遊玩指南",
		description: "猴探井天空之橋完整遊玩指南：入口動線、265 階吊橋、停留時間、鞋款、防曬與安全注意事項一次整理。",
		eyebrow: "第一次到訪",
		lead: "這裡適合用一段從容的午後，走過山谷、看見平原，也替 139 縣道旅程留下一個有高度的停靠點。",
		image: "bridge",
		facts: [
			{
				value: "204 m",
				label: "吊橋全長約"
			},
			{
				value: "265",
				label: "橋面階梯"
			},
			{
				value: "短程",
				label: "順遊型景點"
			}
		],
		sections: [
			{
				eyebrow: "建議動線",
				title: "從入口到觀景平台，順著山谷慢慢走",
				body: "由入口進入園區後，先沿步道前往天空之橋，過橋後可在對面觀景區稍作停留，再走向眺望平台。回程不要趕，橋面的高低差與階梯會比平面步道更需要留意腳步。",
				items: [
					"入口與園區步道",
					"天空之橋",
					"對面觀景區",
					"眺望平台",
					"返回入口"
				]
			},
			{
				eyebrow: "走橋準備",
				title: "穿抓地力穩定的鞋，比打卡裝備更重要",
				body: "橋面共有 265 階，雨後木質或金屬接面可能濕滑。建議穿運動鞋或包覆性較好的平底鞋；夏季帶水、帽子與防曬，午後也要留意雷雨與能見度。",
				items: [
					"幼童由成人牽行",
					"避免在橋面長時間停留",
					"膝蓋不適者衡量往返能力",
					"雨天先確認是否開放"
				]
			},
			{
				eyebrow: "停留節奏",
				title: "一般短程遊覽即可，喜歡拍照可多留一會",
				body: "若以過橋、看景、返回為主，可安排為一段短程遊覽；若想等光線、拍夕陽或走周邊步道，則應預留更多時間。假日人潮也會拉長通行與拍照時間。"
			}
		],
		callout: "開放、票價與天候管制可能調整，出發前先查看 Google 地圖目前狀態。",
		related: [
			"parking",
			"accessibility",
			"guides/how-long-to-stay"
		]
	},
	{
		slug: "hours-and-tickets",
		title: "猴探井天空之橋開放資訊與票價｜出發前查詢重點",
		shortTitle: "開放與票價",
		description: "整理猴探井天空之橋開放時間、票價與臨時休園的查詢方式，避免使用過時資訊，出發前快速確認現場狀態。",
		eyebrow: "行前確認",
		lead: "開放時間、票價與天候管制都可能依現場安排變動。比起記住一組數字，更重要的是在出發當天完成最後確認。",
		image: "sunset",
		sections: [
			{
				title: "出發前，先確認這四件事",
				items: [
					"當日營業狀態",
					"現場票價與適用資格",
					"降雨或強風是否影響開放",
					"最後入園與離場時間"
				]
			},
			{
				title: "現場購票與入園",
				body: "如當日採售票入園，依現場公告完成購票即可。本站不提供線上售票；多人或特殊資格旅客可先電話詢問適用方式。"
			},
			{
				title: "什麼情況可能臨時調整？",
				body: "山區天候變化快，降雨、強風、雷雨、設施維護或活動安排都可能影響吊橋開放。看到舊遊記的時間與票價時，請不要直接視為目前資訊。"
			}
		],
		callout: "最省事的做法：出發當天開啟 Google 地圖，查看目前營業狀態與近期公告。",
		related: [
			"map",
			"visit",
			"transport"
		]
	},
	{
		slug: "transport",
		title: "猴探井天空之橋怎麼去？自駕、交通與 Google 地圖導航",
		shortTitle: "交通方式",
		description: "猴探井天空之橋交通指南，整理台中、彰化、南投市區自駕方向、大眾運輸提醒與 Google 地圖導航。",
		eyebrow: "前往八卦山",
		lead: "猴探井位在南投市福山里、八卦山 139 縣道一帶。自駕最有彈性，也最適合串聯微熱山丘與沿線觀景點。",
		image: "bridge",
		sections: [
			{
				eyebrow: "台中出發",
				title: "把它排進南投半日或一日遊",
				body: "可由國道系統往南投方向，再依即時導航進入八卦山區。不要只依賴固定分鐘數，假日車流、道路施工與山區天候都會改變抵達時間。"
			},
			{
				eyebrow: "彰化出發",
				title: "沿 139 縣道進入，風景也是行程的一部分",
				body: "從彰化一側前往時，很適合將八卦山沿線視為完整旅程。道路有單車與重機旅客，轉彎與路肩停靠時務必放慢。"
			},
			{
				eyebrow: "南投市區出發",
				title: "往八卦山方向上山",
				body: "由南投市區前往路程相對直接，仍建議開啟即時導航確認最後一段道路與入口位置。"
			},
			{
				eyebrow: "大眾運輸",
				title: "先確認去程，也要先看回程",
				body: "班次可能有限，下車後仍可能需要步行。多人同行或行程包含數個 139 縣道景點時，自駕或計程車通常更有彈性。",
				items: [
					"確認下車站點與步行距離",
					"預先保存回程班次",
					"避免只看舊遊記時刻表"
				]
			}
		],
		callout: "山區道路請留意單車、機車與臨停車輛；請依現場標誌行駛。",
		related: [
			"parking",
			"map",
			"routes/route-139"
		]
	},
	{
		slug: "parking",
		title: "猴探井天空之橋停車指南｜入口、停車位置與假日提醒",
		shortTitle: "停車指南",
		description: "猴探井天空之橋停車資訊，整理景區周邊停車、入口辨識、假日車流、收費變動與雨天上下車提醒。",
		eyebrow: "抵達現場",
		lead: "景區周邊可見不同停車空間，但營業與收費可能調整。抵達後以現場指示為準，並替居民與其他用路人保留通行空間。",
		image: "bridge",
		sections: [
			{
				title: "先找到入口，再決定停在哪裡",
				body: "接近猴探井街 300 號時放慢速度，留意景區入口與停車指示。不要因為看到路邊空位，就假設可以停車。"
			},
			{
				title: "公有空間與私人停車場，規則可能不同",
				body: "收費方式、營業時段與可停車種會依現場而異。進場前看清楚告示；若沒有清楚標示，先詢問管理人員。",
				items: [
					"確認計次或計時",
					"留意關門時間",
					"保存停車位置",
					"不要承諾固定免費"
				]
			},
			{
				title: "假日與雨天要多留一點餘裕",
				body: "熱門時段可能出現排隊與臨停車流。雨天上下車時，路肩與坡面更容易濕滑；請讓同行者在安全處下車，不要停在彎道或影響農路。"
			},
			{
				title: "重機、自行車與汽車共用山路",
				body: "139 縣道是熱門騎乘路線。開車門、迴轉或駛離停車位前，請再次確認後方來車。"
			}
		],
		callout: "私人停車空間的營業與費用可能變動；抵達後以現場標示為準。",
		related: [
			"transport",
			"map",
			"visit"
		]
	},
	{
		slug: "map",
		title: "猴探井天空之橋 Google 地圖、地址與導航",
		shortTitle: "地址與地圖",
		description: "猴探井天空之橋 Google 地圖、地址與導航入口。快速開啟地圖、從目前位置導航，並查看交通與停車提醒。",
		eyebrow: "一鍵導航",
		lead: "目的地請搜尋「猴探井天空之橋」，地址為南投縣南投市猴探井街 300 號。",
		image: "bridge",
		facts: [
			{
				value: "南投市",
				label: "所在行政區"
			},
			{
				value: "139",
				label: "鄰近縣道路線"
			},
			{
				value: "八卦山",
				label: "所在風景區"
			}
		],
		sections: [{
			title: "導航前先做的事",
			items: [
				"確認目的地名稱與地址",
				"查看目前營業狀態",
				"留意最後一段山區道路",
				"抵達前放慢並觀察停車指示"
			]
		}, {
			title: "地址",
			body: "南投縣南投市猴探井街 300 號。若導航顯示多個相似名稱，以地址與景點名稱交叉確認。"
		}],
		related: [
			"transport",
			"parking",
			"nearby"
		]
	},
	{
		slug: "photo-spots",
		title: "猴探井天空之橋拍照位置｜吊橋弧線、山谷與夕陽構圖",
		shortTitle: "拍照位置",
		description: "猴探井天空之橋拍照攻略：入口縱深、橋面對稱、微笑弧線、觀景台遠景、夕陽逆光與手機鏡頭建議。",
		eyebrow: "帶走山谷光線",
		lead: "真正好看的不只是人在橋上，而是吊橋落進森林的弧線、遠方平原的空氣感，以及夕陽把山谷染暖的瞬間。",
		image: "sunset",
		sections: [
			{
				title: "入口：用欄杆把視線帶向山谷",
				body: "站在不妨礙通行的位置，利用橋面與兩側欄杆形成縱深。人物不必放正中央，稍微偏向光線較乾淨的一側更自然。"
			},
			{
				title: "橋面：對稱構圖要快、要讓路",
				body: "橋面中央適合廣角與對稱構圖，但請先觀察前後來人，不要久站、架設大型器材或要求其他旅客等待。"
			},
			{
				title: "側面：把「微笑天梯」完整收進畫面",
				body: "從較遠的觀景位置拍攝，才能呈現吊橋下彎的完整弧線。手機可先用標準鏡頭，長焦則能壓縮吊橋與平原的距離。"
			},
			{
				title: "夕陽：保留高光，也保留離場時間",
				body: "逆光人像可降低曝光讓天空顏色更完整，再利用人物輪廓表現氣氛。不要只守在橋中央等日落，先確認園區開放與返程時間。"
			}
		],
		callout: "拍照時保持通道暢通；空拍與腳架使用請依現場規範。",
		related: [
			"sunset",
			"visit",
			"hours-and-tickets"
		]
	},
	{
		slug: "sunset",
		title: "猴探井夕陽攻略｜八卦山看日落、拍照與返程提醒",
		shortTitle: "夕陽指南",
		description: "猴探井天空之橋夕陽指南：觀看方向、晴天與薄雲差異、拍攝位置、入園時間與日落後返程安全。",
		eyebrow: "夕陽谷",
		lead: "面向彰化平原的開闊視野，讓猴探井的黃昏不只是一場日落，而是山、橋與城市逐漸交換色彩的時刻。",
		image: "sunset",
		facts: [
			{
				value: "西向",
				label: "平原視野"
			},
			{
				value: "黃昏",
				label: "推薦光線"
			},
			{
				value: "天候",
				label: "決定能見度"
			}
		],
		sections: [
			{
				title: "薄雲往往比全晴更有層次",
				body: "晴朗時能看到平原的遼闊感；薄雲會接住橙紅色光線；霧霾或低雲則可能遮住地平線。不要把「一定看到夕陽」寫進行程，保留天氣的變數。"
			},
			{
				title: "提早抵達，不要在最後一刻趕上橋",
				body: "把停車、購票與步行時間一起算進去，先完成勘景再選拍攝位置。人多時應避免聚集在橋面中央。"
			},
			{
				title: "日落後，山路安全比最後一張照片重要",
				body: "離場前確認園區規定與出口動線。返程山路較暗，車輛應降低速度並留意單車、行人與臨停車輛。"
			}
		],
		callout: "日落時間隨季節改變；請查當日天氣與園區開放狀態。",
		related: [
			"photo-spots",
			"hours-and-tickets",
			"routes/half-day-trip"
		]
	},
	{
		slug: "accessibility",
		title: "猴探井天空之橋適合長輩與兒童嗎？階梯、推車與恐高提醒",
		shortTitle: "行動與同行評估",
		description: "猴探井天空之橋適合長輩、兒童、嬰兒車或恐高者嗎？整理 265 階吊橋、往返負擔與陪同建議。",
		eyebrow: "先替同行者想一步",
		lead: "這是一座有 265 階的梯子吊橋，不是平面步道。行程好不好玩，往往取決於是否提前理解每位同行者的需要。",
		image: "bridge",
		sections: [
			{
				title: "長輩與膝蓋不適者",
				body: "上下階梯與往返都會造成負擔。可先在入口觀察橋面與人流，再決定是否過橋；不過橋也能把周邊觀景與順遊行程安排得舒服。"
			},
			{
				title: "幼童與嬰兒車",
				body: "幼童應由成人牽行，避免在橋面奔跑。核心吊橋有大量階梯，嬰兒車不適合通過；若攜帶推車，應先確認寄放或替代動線。"
			},
			{
				title: "輪椅使用者",
				body: "輪椅無法完整通行核心吊橋。可將重點放在可到達的外圍區域，並於出發前向現場確認當日可使用設施與動線。"
			},
			{
				title: "恐高者",
				body: "先從入口觀察橋面高度、通透欄杆與人流。若身體出現緊張、暈眩或呼吸不適，不必勉強；陪同者可一起改走地面景觀路線。"
			}
		],
		callout: "最好的同行安排，是讓每個人都能保留「不過橋」的選擇。",
		related: [
			"guides/fear-of-heights",
			"visit",
			"routes/family-trip"
		]
	},
	{
		slug: "nearby",
		title: "猴探井附近景點｜微熱山丘、139 縣道與南投半日遊",
		shortTitle: "附近景點",
		description: "猴探井天空之橋附近景點推薦，整理微熱山丘、中興新村、139 縣道、南投市區等順遊搭配與安排順序。",
		eyebrow: "把一座橋變成一段旅程",
		lead: "猴探井最適合的玩法，是和八卦山 139 縣道、甜點、聚落散步與黃昏景色串成半日行程。",
		image: "sunset",
		sections: [
			{
				title: "微熱山丘南投三合院",
				body: "適合放在猴探井之前，先以台灣三合院與鳳梨酥作為輕鬆開場，再往山區移動。適合第一次到訪與帶長輩同行。"
			},
			{
				title: "中興新村",
				body: "樹蔭、老建築與生活街區讓行程節奏更舒展。可安排午餐或午後散步，再把夕陽時段留給猴探井。"
			},
			{
				title: "139 縣道沿線",
				body: "山稜道路與觀景停靠點是自駕旅程的主角之一。請只在合法、安全的位置停車，不在彎道臨停拍照。"
			},
			{
				title: "南投市區與半山夢工廠",
				body: "若同行者偏好室內空間，可將市區景點放在白天，傍晚再上山。兩者形成室內與戶外的平衡。"
			}
		],
		callout: "景點營業與道路狀況可能調整，串聯行程前逐一查看當日資訊。",
		related: [
			"routes/half-day-trip",
			"routes/route-139",
			"transport"
		]
	},
	{
		slug: "history",
		title: "猴探井名稱由來與天空之橋故事",
		shortTitle: "名稱與故事",
		description: "認識猴探井名稱由來、八卦山谷地形、天空之橋的連接作用，以及微笑天梯與夕陽谷的景觀特色。",
		eyebrow: "山谷裡的名字",
		lead: "「猴探井」不是一隻真的猴子，也不是一口人工水井，而是一段由山形、想像與地方記憶交織出的地景名稱。",
		image: "bridge",
		sections: [
			{
				title: "像猴子俯看井底的山谷",
				body: "猴探井位於八卦山脈，山谷地形像一口井，前方小山峰則被想像成蹲伏俯瞰井底的猴子，因此得名。"
			},
			{
				title: "天空之橋讓兩側步道相連",
				body: "山谷兩側原有通往茶園涼亭與眺望台的步道。天空之橋跨越其間，形成新的通行與觀景節點，也讓吊橋成為園區最鮮明的地標。"
			},
			{
				title: "一抹掛在森林裡的微笑",
				body: "吊橋下彎的弧線像微笑，因此有「微笑天梯」別名。黃昏時，橋身、森林與西側平原疊在一起，也讓猴探井有了「夕陽谷」的印象。"
			}
		],
		related: [
			"visit",
			"sunset",
			"photo-spots"
		]
	},
	{
		slug: "faq",
		title: "猴探井天空之橋常見問題｜停留時間、階梯、停車與雨天",
		shortTitle: "常見問題",
		description: "猴探井天空之橋 FAQ：是否值得去、要走多久、會不會晃、適合長輩與嬰兒車嗎、下雨是否開放、停車怎麼找。",
		eyebrow: "出發前快速看",
		lead: "把最常影響行程的問題集中在這裡。若只剩一分鐘，先看階梯、天候與停車三件事。",
		image: "bridge",
		sections: [],
		faqs: [
			{
				question: "猴探井天空之橋值得專程去嗎？",
				answer: "若你喜歡吊橋、平原遠景與夕陽，或本來就要走 139 縣道，很值得順遊。若期待大型設施或一整天活動，可能不符合預期。"
			},
			{
				question: "大約要停留多久？",
				answer: "以短程遊覽為主；過橋、看景與拍照的速度會因人潮與同行者體力而不同。想等夕陽或慢慢拍照，請預留更多時間。"
			},
			{
				question: "橋會晃嗎？恐高的人適合嗎？",
				answer: "吊橋行走時可能產生輕微動感，通透的欄杆與高度也會讓部分恐高者有壓力。可先在入口觀察，不必勉強過橋。"
			},
			{
				question: "適合長輩、兒童或嬰兒車嗎？",
				answer: "核心吊橋有 265 階。幼童需由成人牽行；膝蓋不適者要衡量往返能力；嬰兒車與輪椅不適合完整通過吊橋。"
			},
			{
				question: "下雨可以去嗎？",
				answer: "雨天可能濕滑，也可能因天候調整吊橋開放。出發前先看當日營業狀態與天氣，現場則依管理指示。"
			},
			{
				question: "停車要收費嗎？",
				answer: "周邊不同停車空間的收費與營業方式可能不同，請以現場標示為準，不要把舊遊記價格視為固定資訊。"
			}
		],
		related: [
			"visit",
			"parking",
			"accessibility"
		]
	},
	{
		slug: "guides/is-it-worth-visiting",
		title: "猴探井天空之橋值得去嗎？適合客群、停留時間與真實建議",
		shortTitle: "值得去嗎？",
		description: "從景觀、交通、階梯、停留時間與附近行程分析猴探井天空之橋是否值得去，快速判斷適不適合你。",
		eyebrow: "行程決策",
		lead: "答案不是單純的「值得」或「不值得」：把它放進 139 縣道半日遊很精彩，若單獨安排一整天，期待可能會落空。",
		image: "sunset",
		sections: [
			{
				title: "這四種人，通常會喜歡",
				items: [
					"正在安排微熱山丘或 139 縣道",
					"喜歡吊橋、山谷與平原遠景",
					"想拍夕陽或逆光人像",
					"偏好短程散步而非長途登山"
				]
			},
			{
				title: "這四種情況，要先調整期待",
				items: [
					"使用輪椅或嬰兒車",
					"對高度與吊橋非常敏感",
					"期待大型親子遊樂設施",
					"只為這裡安排完整一日"
				]
			},
			{
				title: "最推薦的安排方式",
				body: "中午前走訪中興新村或微熱山丘，午後沿 139 縣道移動，在猴探井完成短程散步；若天氣合適，再把黃昏留給觀景平台。"
			}
		],
		callout: "把猴探井當作八卦山旅程的高光停靠點，通常比把它當成全天主題樂園更合適。",
		related: [
			"nearby",
			"routes/half-day-trip",
			"parking"
		]
	},
	{
		slug: "guides/how-long-to-stay",
		title: "猴探井天空之橋要走多久？停留時間與遊覽節奏",
		shortTitle: "要走多久？",
		description: "猴探井天空之橋停留多久最剛好？依快速過橋、慢拍夕陽、親子長輩同行整理不同遊覽節奏。",
		eyebrow: "時間怎麼抓",
		lead: "沒有一個分鐘數適合所有人。橋上的人流、265 階體力、拍照習慣與是否等夕陽，都會改變停留時間。",
		image: "bridge",
		sections: [
			{
				title: "快速順遊",
				body: "適合已安排多個景點、以過橋與看景為主的旅客。不要壓縮到必須在橋面趕路，仍需保留停車與入園緩衝。"
			},
			{
				title: "一般散步與拍照",
				body: "走完主要動線、在觀景區稍作停留，再返回入口。這是多數第一次到訪者較舒服的節奏。"
			},
			{
				title: "夕陽與攝影",
				body: "需要提早到場勘景，也要把日落後離場與山路返程算進去。先確認當日園區開放，不要只依賴日落時間。"
			}
		],
		related: [
			"visit",
			"sunset",
			"routes/half-day-trip"
		]
	},
	{
		slug: "guides/rainy-day",
		title: "猴探井下雨可以去嗎？濕滑、能見度與備案",
		shortTitle: "雨天可以去嗎？",
		description: "猴探井天空之橋雨天攻略：吊橋是否開放、橋面濕滑、霧氣能見度與南投雨天備案。",
		eyebrow: "天氣變化",
		lead: "雨天不是只影響照片；它也會改變橋面摩擦、山谷能見度與現場開放狀態。",
		image: "bridge",
		sections: [
			{
				title: "先確認是否開放，再決定要不要上山",
				body: "降雨、雷雨或強風可能影響吊橋開放。出發前查看目前營業狀態，抵達現場後遵從管理指示。"
			},
			{
				title: "小雨也要把濕滑當一回事",
				body: "穿抓地力好的鞋、放慢上下階梯速度，避免一手撐傘一手拍照而失去平衡。幼童需全程牽行。"
			},
			{
				title: "能見度差，就把行程移到室內",
				body: "低雲與霧氣可能遮住平原遠景。可把中興新村周邊餐飲或南投市區室內景點作為備案。"
			}
		],
		related: [
			"hours-and-tickets",
			"accessibility",
			"nearby"
		]
	},
	{
		slug: "guides/fear-of-heights",
		title: "恐高的人適合走猴探井天空之橋嗎？",
		shortTitle: "恐高評估",
		description: "恐高能走猴探井天空之橋嗎？從橋面階梯、視覺通透感、同伴陪同行為與替代安排協助出發前評估。",
		eyebrow: "不用勉強過橋",
		lead: "恐高不是意志力問題。先理解橋面、欄杆視覺與人流，再替自己保留隨時折返或不過橋的空間。",
		image: "bridge",
		sections: [
			{
				title: "先在入口觀察，不急著踏上第一階",
				body: "留意自己看向山谷時的反應，也觀察橋面人流。若已出現明顯暈眩、發抖或呼吸不順，不要勉強。"
			},
			{
				title: "走橋時把視線放在前方固定位置",
				body: "保持自己的步速，扶穩並避免突然回頭。同行者不要催促、開玩笑晃動，或用拍攝要求增加壓力。"
			},
			{
				title: "不過橋也能看風景",
				body: "可將行程重點放在入口周邊、可到達的觀景位置與 139 縣道順遊。好旅行不以完成挑戰為唯一標準。"
			}
		],
		related: [
			"accessibility",
			"visit",
			"guides/is-it-worth-visiting"
		]
	},
	{
		slug: "routes/route-139",
		title: "139 縣道順遊路線｜微熱山丘、猴探井與八卦山風景",
		shortTitle: "139 縣道順遊",
		description: "139 縣道半日遊路線，串聯微熱山丘、猴探井天空之橋、八卦山觀景與南投晚餐，附安排順序。",
		eyebrow: "沿著山稜開一段",
		lead: "139 縣道不只是抵達猴探井的道路；茶園、聚落、觀景與風的速度，共同構成這段八卦山自駕。",
		image: "sunset",
		sections: [
			{
				eyebrow: "第一站",
				title: "微熱山丘",
				body: "用三合院與鳳梨風味作為行程開場。停留節奏輕鬆，也方便先確認山區天氣。"
			},
			{
				eyebrow: "第二站",
				title: "139 縣道沿線",
				body: "沿山稜前行，只在合法、安全的觀景位置停靠。山路上有自行車與重機，請降低速度。"
			},
			{
				eyebrow: "第三站",
				title: "猴探井天空之橋",
				body: "走橋、看山谷與平原。若安排夕陽，預先確認開放時間並提早入園。"
			},
			{
				eyebrow: "收尾",
				title: "南投市區晚餐",
				body: "日落後下山，把餐飲放在市區，避免在不熟悉的山路上匆忙尋找下一站。"
			}
		],
		callout: "139 縣道是熱門騎乘路線；不在彎道、路肩或出入口臨停拍照。",
		related: [
			"nearby",
			"transport",
			"sunset"
		]
	},
	{
		slug: "routes/half-day-trip",
		title: "微熱山丘＋猴探井半日遊｜南投午後到夕陽路線",
		shortTitle: "經典半日遊",
		description: "南投半日遊推薦：微熱山丘、139 縣道、猴探井天空之橋與夕陽的順遊路線，適合情侶與第一次到訪。",
		eyebrow: "午後慢慢走",
		lead: "把甜點放在前面，把最好的光留在最後。這條半日路線不需要塞滿景點，重點是每一站都剛好。",
		image: "sunset",
		sections: [
			{
				eyebrow: "午後",
				title: "微熱山丘：先坐下來，進入南投節奏",
				body: "從三合院與鳳梨風味開始，短暫休息後再上山。假日請替停車與排隊保留彈性。"
			},
			{
				eyebrow: "傍晚前",
				title: "猴探井：先走橋，再決定是否等夕陽",
				body: "抵達後先完成主要動線。天氣與能見度好，再到觀景位置等待黃昏；若起霧或下雨，提早轉往市區。"
			},
			{
				eyebrow: "入夜",
				title: "南投市區：用一頓晚餐收尾",
				body: "離場後放慢山路車速，到市區再安排晚餐。不要為了多拍一張照片壓縮安全返程時間。"
			}
		],
		related: [
			"nearby",
			"sunset",
			"guides/how-long-to-stay"
		]
	},
	{
		slug: "routes/family-trip",
		title: "猴探井親子輕鬆路線｜中興新村、午餐與彈性過橋",
		shortTitle: "親子輕鬆路線",
		description: "猴探井親子行程：從中興新村散步、午餐到猴探井外圍觀景，依孩子狀況彈性決定是否走 265 階吊橋。",
		eyebrow: "把選擇留給孩子",
		lead: "親子行程的關鍵不是完成多少，而是大人與孩子都有舒服的退路。先散步、先吃飯，再看體力決定是否過橋。",
		image: "bridge",
		sections: [
			{
				eyebrow: "上午",
				title: "中興新村散步",
				body: "選擇樹蔭較多、節奏較慢的區域散步，讓孩子有活動空間，也讓長輩不必一開始就走階梯。"
			},
			{
				eyebrow: "中午",
				title: "南投市區午餐",
				body: "補充水分與體力，避開正午最曬時段。出發上山前再次查看天氣與營業狀態。"
			},
			{
				eyebrow: "午後",
				title: "猴探井外圍與觀景區",
				body: "到入口先觀察吊橋與人流，依幼童、長輩與陪同者狀況決定是否過橋。嬰兒車不適合通過核心吊橋。"
			}
		],
		callout: "幼童需由成人牽行；任何人不舒服，都可以選擇不過橋。",
		related: [
			"accessibility",
			"visit",
			"nearby"
		]
	}
];
var pageBySlug = Object.fromEntries(pages.map((page) => [page.slug, page]));
//#endregion
//#region src/pages/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://houtanjing.com");
function getStaticPaths() {
	return pages.map((page) => ({
		params: { slug: page.slug },
		props: { page }
	}));
}
var $$Component = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page } = Astro.props;
	const imagePath = page.image === "sunset" ? "/images/houtanjing-sunset.jpg" : "/images/houtanjing-bridge.jpg";
	const imageAlt = page.image === "sunset" ? "猴探井天空之橋、八卦山谷與西向夕陽" : "猴探井天空之橋橫跨八卦山谷";
	const relatedPages = page.related.map((slug) => pageBySlug[slug]).filter((related) => Boolean(related));
	const breadcrumbs = [{
		name: "首頁",
		url: "/"
	}, {
		name: page.shortTitle,
		url: `/${page.slug}`
	}];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": page.title,
		"description": page.description,
		"image": imagePath,
		"breadcrumbs": breadcrumbs,
		"faqs": page.faqs ?? []
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="page-hero"><div class="container page-hero-grid"><div><nav class="breadcrumbs" aria-label="麵包屑導覽"><a href="/">首頁</a><span aria-hidden="true">/</span><span aria-current="page">${page.shortTitle}</span></nav><p class="eyebrow eyebrow-light">${page.eyebrow}</p><h1>${page.title}</h1><p class="page-lead">${page.lead}</p>${page.facts && renderTemplate`<div class="page-facts" aria-label="頁面重點資訊">${page.facts.map((fact) => renderTemplate`<div class="page-fact"><strong>${fact.value}</strong><span>${fact.label}</span></div>`)}</div>`}</div><figure class="page-hero-image"><img${addAttribute(imagePath, "src")}${addAttribute(`${place.name}（${place.city}）${imageAlt}`, "alt")} width="1189" height="768" loading="eager"><figcaption class="image-caption">景觀影像：交通部觀光署參山國家風景區管理處（本圖片版權歸原攝影者所有）</figcaption></figure></div></header><article class="section"><div class="container article-grid"><div class="article-main">${page.sections.map((section, index) => renderTemplate`<section class="content-section"${addAttribute(`section-${index + 1}`, "id")}>${section.eyebrow && renderTemplate`<p class="eyebrow">${section.eyebrow}</p>`}<h2>${section.title}</h2>${section.body && renderTemplate`<p>${section.body}</p>`}${section.items && renderTemplate`<ul class="content-list">${section.items.map((item) => renderTemplate`<li>${item}</li>`)}</ul>`}</section>`)}${page.faqs && renderTemplate`<section class="content-section" aria-labelledby="faq-page-title"><p class="eyebrow">FAQ</p><h2 id="faq-page-title">最常被問的行前問題</h2><div class="faq-list" style="margin-top: 24px;">${page.faqs.map((item) => renderTemplate`<details><summary>${item.question}</summary><p>${item.answer}</p></details>`)}</div></section>`}${page.slug === "map" && renderTemplate`<section class="content-section"><p class="eyebrow">互動地圖</p><h2>猴探井天空之橋位置</h2><p>${place.address}。地圖載入後可縮放查看周邊道路；規劃路線請使用下方導航按鈕。</p><div class="map-article" style="margin-top: 26px;"><iframe${addAttribute(mapLinks.embed, "src")} title="猴探井天空之橋 Google 地圖" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="map-actions"><a class="btn btn-dark"${addAttribute(mapLinks.search, "href")} target="_blank" rel="noopener noreferrer">在 Google 地圖開啟</a><a class="btn btn-outline"${addAttribute(mapLinks.directions, "href")} target="_blank" rel="noopener noreferrer">從目前位置導航</a></div></section>`}${page.callout && renderTemplate`<aside class="callout">${page.callout}</aside>`}</div><aside class="article-aside" aria-label="本頁內容"><strong>本頁內容</strong>${page.sections.map((section, index) => renderTemplate`<a${addAttribute(`#section-${index + 1}`, "href")}>${section.title}</a>`)}${page.faqs && renderTemplate`<a href="#faq-page-title">常見問題</a>`}<a${addAttribute(mapLinks.search, "href")} target="_blank" rel="noopener noreferrer">開啟 Google 地圖 ↗</a></aside></div></article>${relatedPages.length > 0 && renderTemplate`<section class="related-wrap"><div class="container"><h2>接著規劃</h2><div class="related-grid">${relatedPages.map((related) => renderTemplate`<a class="related-card"${addAttribute(`/${related.slug}`, "href")}><span>READ NEXT</span>${related.shortTitle}</a>`)}</div></div></section>`}` })}`;
}, "H:/GitHub/houtanjing/src/pages/[...slug].astro", void 0);
var $$file = "H:/GitHub/houtanjing/src/pages/[...slug].astro";
var $$url = "/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
