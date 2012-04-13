/*
Scoring

    The most important thing to remember when entering
 responses is that items which are left blank are effectively
 ignored when scores are calculated. Thus, an item should be
 left blank  only when it has not been administered to a given
 subject, or when the item is to be disregarded  for some
 reason (e.g., the response is missing or cannot be
 determined). A response of "0", on the  other hand, is
 available as a choice on most items, and it indicates that
 the subject gave no  response when the item was administered.
 To illustrate the difference for purposes of scoring, a
 section of ten items all of which were left blank would
 receive a score of 0/0, while ten  responses of "0" would
 give 0/10.
    The score files created by PCBAT contain scores for
 sections 2-31 (Part B) or 33-42 (Part  C) of the BAT, as well
 as a matrix which breaks down the scores by the linguistic
 levels  (Phonology, Morphology, Lexicon, Syntax, and
 Semantics for Part B; Morphology/Syntax and  Lexicon for Part
 C) and skills (Comprehension, Repetition, Judgment, Lexical
 Access,  Propositionalizing, Reading, and Writing for Part B;
 Translation and Grammaticality Judgment  for Part C) tapped
 in each section. All of these scores are given in fractional
 and decimal form.  (In decimal scores, "N/A" corresponds to a
 score of 0/0.) An example of the matrix of scores is  shown
 below:

SCORES BY LINGUISTIC LEVEL AND SKILL  
 0/0     1/1     0/0     0/0     0/0     0/0     0/0   Phonlgy   1/1


*/

var scoreBAT = function(){
	participant.score = {};
	window.data = participant.data;

	scorePhonology();
	scoreMorphology();
	scoreLexicon();
	scoreSyntax();
	scoreSemantics();
	scoreMorphologySyntaxC();
	scoreLexiconC();
	scoreComprehension();
	scoreRepetition();
	scoreJudgment();
	scoreLexical();
	scoreAccess();
	scorePropositionalizing();
	scoreReading();
	scoreWriting();
	scoreTranslationC();
	scoreGrammaticalityJudgmentC();
};



/*
 History of Bilingualism
*/
var scoreHistoryofBilingualism = function(){
	participant.score.HistoryofBilingualism = {"score":0,"total":0};
};

/*
 EnglishBackground or the background of the langauge
*/
var scoreEnglishBackground = function(){
	participant.score.EnglishBackground = {"score":0,"total":0};
};

/*
 For spontaneous speech, See post test anysis 514-539
*/
var scoreSpontaneousSpeech = function(){
	var score = 0;
	var total = 0;
	
	var questions = [18,19,20,21,22];
	for (q in questions){
		var num = data[questions[q]].match(/[0-9]*/);
		num = parseInt(num[0]);
		if(num > 0){
			score = parseInt(score)+num;
			total = total + 4;
		}
	}
	participant.score.SpontaneousSpeech = {"score":score,"total":total};
};

/*
 Pointing
*/
var scorePointing = function(){
	var score = 0;
	var total = 0;
	
    var questions = [23,24,25,26,27,28,29,30,31,32];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.Pointing = {"score":score,"total":total};

};

/*
 SimpleandSemiComplexCommands
*/
var scoreSimpleandSemiComplexCommands = function(){
	var score = 0;
	var total = 0;
	
    var questions = [33,34,35,36,37,38,39,40,41,42];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.SimpleandSemiComplexCommands = {"score":score,"total":total};

};

/*
 ComplexCommands
*/
var scoreComplexCommands = function(){
	var score = 0;
	var total = 0;
	
	var questions = [43,44,45,46,47]
    for (q in questions){
    	var num = data[questions[q]].match(/[0-9]*/);
    	num = parseInt(num[0]);
    	if(num > 0){
    		score = parseInt(score)+num;
    		total=total+3;
    	}
    }
    participant.score.ComplexCommands = {"score":score,"total":total};

};

/*
 Verbal Auditory Discrimination
*/
var scoreVerbalAuditoryDiscrimination = function(){
	var score = 0;
	var total = 0;
	
	var questions = [{"num":48,"res":"2"}
		,{"num":49,"res":"1"}
		,{"num":50,"res":"X"}
		,{"num":51,"res":"1"}
		,{"num":52,"res":"2"}
		,{"num":53,"res":"4"}
		,{"num":54,"res":"4"}
		,{"num":55,"res":"5"}
		,{"num":56,"res":"2"}
		,{"num":57,"res":"X"}
		,{"num":58,"res":"3"}
		,{"num":59,"res":"1"}
		,{"num":60,"res":"2"}
		,{"num":61,"res":"X"}
		,{"num":62,"res":"4"}
		,{"num":63,"res":"3"}
		,{"num":64,"res":"3"}
		,{"num":65,"res":"1"}
		];
	for (q in questions){
		if(data[questions[q].num] == questions[q].res){
			score = score + 1;
			total++;
		}else if(data[questions[q]]=="0"){
			//do nothing, the score doesnt change, and the total doesnt go up as per the instructions.
		}else{
			score = score+0;
			total++;
		}
	}
	participant.score.VerbalAuditoryDiscrimination = {"score":score,"total":total};

};

/*
 TODO
*/
var scoreSyntacticComprehension = function(){
	var score = 0;
	var total = 0;
	
    var questions = [
        {"num":66,"res":"2"}
        ,{"num":67,"res":"1"}
        ,{"num":68,"res":"1"}
        ,{"num":69,"res":"4"}
        ,{"num":70,"res":"3"}
        ,{"num":71,"res":"1"}
        ,{"num":72,"res":"4"}
        ,{"num":73,"res":"1"}
        ,{"num":74,"res":"2"}
        ,{"num":75,"res":"3"}
        ,{"num":76,"res":"4"}
        ,{"num":77,"res":"1"}
        ,{"num":78,"res":"3"}
        ,{"num":79,"res":"2"}
        ,{"num":80,"res":"1"}
        ,{"num":81,"res":"2"}
        ,{"num":82,"res":"4"}
        ,{"num":83,"res":"2"}
        ,{"num":84,"res":"4"}
        ,{"num":85,"res":"4"}
        ,{"num":86,"res":"2"}
        ,{"num":87,"res":"2"}
        ,{"num":88,"res":"4"}
        ,{"num":89,"res":"1"}
        ,{"num":90,"res":"3"}
        ,{"num":91,"res":"3"}
        ,{"num":92,"res":"1"}
        ,{"num":93,"res":"1"}
        ,{"num":94,"res":"3"}
        ,{"num":95,"res":"1"}
        ,{"num":96,"res":"3"}
        ,{"num":97,"res":"1"}
        ,{"num":98,"res":"1"}
        ,{"num":99,"res":"2"}
        ,{"num":100,"res":"2"}
        ,{"num":101,"res":"1"}
        ,{"num":102,"res":"1"}
        ,{"num":103,"res":"2"}
        ,{"num":104,"res":"2"}
        ,{"num":105,"res":"3"}
        ,{"num":106,"res":"2"}
        ,{"num":107,"res":"4"}
        ,{"num":108,"res":"2"}
        ,{"num":109,"res":"3"}
        ,{"num":110,"res":"1"}
        ,{"num":111,"res":"2"}
        ,{"num":112,"res":"1"}
        ,{"num":113,"res":"1"}
        ,{"num":114,"res":"2"}
        ,{"num":115,"res":"1"}
        ,{"num":116,"res":"2"}
        ,{"num":117,"res":"1"}
        ,{"num":118,"res":"1"}
        ,{"num":119,"res":"2"}
        ,{"num":120,"res":"1"}
        ,{"num":121,"res":"2"}
        ,{"num":122,"res":"1"}
        ,{"num":123,"res":"1"}
        ,{"num":124,"res":"2"}
        ,{"num":125,"res":"1"}
        ,{"num":126,"res":"2"}
        ,{"num":127,"res":"2"}
        ,{"num":128,"res":"1"}
        ,{"num":129,"res":"1"}
        ,{"num":130,"res":"2"}
        ,{"num":131,"res":"2"}
        ,{"num":132,"res":"1"}
        ,{"num":133,"res":"2"}
        ,{"num":134,"res":"2"}
        ,{"num":135,"res":"1"}
        ,{"num":136,"res":"1"}
        ,{"num":137,"res":"1"}
        ,{"num":138,"res":"1"}
        ,{"num":139,"res":"2"}
        ,{"num":140,"res":"2"}
        ,{"num":141,"res":"1"}
        ,{"num":142,"res":"2"}
        ,{"num":143,"res":"2"}
        ,{"num":144,"res":"2"}
        ,{"num":145,"res":"2"}
        ,{"num":146,"res":"2"}
        ,{"num":147,"res":"1"}
        ,{"num":148,"res":"1"}
        ,{"num":149,"res":"2"}
        ,{"num":150,"res":"1"}
        ,{"num":151,"res":"1"}
        ,{"num":152,"res":"1"}
    ];
    for (q in questions){
        if(data[questions[q].num] == questions[q].res){
            score = score + 1;
            total++;
        }else if(data[questions[q]]=="0"){
            //do nothing, the score doesnt change, and the total doesnt go up as per the instructions.
        }else{
            score = score+0;
            total++;
        }
    }
    participant.score.SyntacticComprehension = {"score":score,"total":total};

};

/*
 Semantic Categories
*/
var scoreSemanticCategories = function(){
	var score = 0;
	var total = 0;
	
	var questions = [153,154,155,156,157];
    for (q in questions){
    	var num = data[questions[q]].match(/[0-9]*/);
    	num = parseInt(num[0]);
    	if(num > 0){
    		score = parseInt(score)+num;
    		total=total+4;
    	}
    }
    participant.score.SemanticCategories = {"score":score,"total":total};

};

/*
 Synonyms
*/
var scoreSynonyms = function(){
	var score = 0;
	var total = 0;
	
	var questions = [158,159,160,161,162];
    for (q in questions){
    	var num = data[questions[q]].match(/[0-9]*/);
    	num = parseInt(num[0]);
    	if(num > 0){
    		score = parseInt(score)+num;
    		total=total+4;
    	}
    }
    participant.score.Synonyms = {"score":score,"total":total};

};

/*
 Antonyms
*/
var scoreAntonyms = function(){
	var score = 0;
	var total = 0;
	
	var questions = [163,164,165,166,167];
    for (q in questions){
    	var num = data[questions[q]].match(/[0-9]*/);
    	num = parseInt(num[0]);
    	if(num > 0){
    		score = parseInt(score)+num;
    		total=total+4;
    	}
    }
    participant.score.Antonyms = {"score":score,"total":total};

};

/*
 Grammaticality Judgement 
*/
var scoreGrammaticalityJudgement = function(){
	var score = 0;
	var total = 0;
    
    var questions = [173,174,175,176,177,178,179,180,181,182];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.GrammaticalityJudgement = {"score":score,"total":total};

};

/*
 Semantic Acceptability
*/
var scoreSemanticAcceptability = function(){
	var score = 0;
	var total = 0;
    
    var questions = [183,184,185,186,187,188,189,190,191,192];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.SemanticAcceptability = {"score":score,"total":total};

};

/*
 RepetitionWords
*/
var scoreRepetitionWords = function(){
	var score = 0;
	var total = 0;
    
	var questions = [193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251];
	for (q in questions){
		if(data[questions[q]] == "+"){
			score = score+1;
			total++;
		}else if(data[questions[q]] == "-"){
			total++;
		} 
	}
	participant.score.RepetitionWords = {"score":score,"total":total};

};
/*
 Lexical Decision
 */
var scoreLexicalDecision = function(){
    var score = 0;
	var total = 0;
    
    var questions = [194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.LexicalDecision = {"score":score,"total":total};
};

/*
 Repetition Sentences
*/
var scoreRepetitionSentences = function(){
	var score = 0;
	var total = 0;
    
    var questions = [253,254,255,256,257,258,259];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.RepetitionSentences = {"score":score,"total":total};
};

/*
 Series
 */
var scoreSeries = function(){
	var score = 0;
	var total = 0;
    
    var questions = [260,261,262];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.Series = {"score":score,"total":total};
};

/*
 Verbal Fluency TODO what do we do with the number of words?
*/
var scoreVerbalFluency = function(){
	var score = 0;
	var total = 0;
    
    var questions = [263,265,267];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.VerbalFluency = {"score":score,"total":total};
};

/*
 Naming
*/
var scoreNaming = function(){
	var score = 0;
	var total = 0;
    
    var questions = [269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.Naming = {"score":score,"total":total};
};

/*
 Sentence Construction TODO what about the number of words etc
*/
var scoreSentenceConstruction = function(){
	var score = 0;
	var total = 0;
    
    var questions = [289,290,291,294,295,296,299,300,301,304,305,306,309,310,311];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.SentenceConstruction = {"score":score,"total":total};
};

/*
 Semantic Opposites
*/
var scoreSemanticOpposites = function(){
	var score = 0;
	var total = 0;

	var questions = [314,315,316,317,318,319,320,321,322,323];
	for (q in questions){
		console.log( data[questions[q]] );
		if(data[questions[q]] == "+"){
			score = score+1;
			total++;
		}else if(data[questions[q]].indexOf("1") > -1){
			score = score+1;
			total++;
		}else if(data[questions[q]] == "-"){
			total++;
		} 
	}
	participant.score.SemanticOpposites = {"score":score,"total":total};
};

/*
 Derivational Morphology
*/
var scoreDerivationalMorphology = function(){
	var score = 0;
	var total = 0;
	var questions = [324,325,326,327,328,329,330,331,332,333];
	for (q in questions){
		console.log( data[questions[q]] );
		if(data[questions[q]] == "+"){
			score = score+1;
			total++;
		}else if(data[questions[q]].indexOf("1") > -1){
			score = score+1;
			total++;
		}else if(data[questions[q]] == "-"){
			total++;
		} 
	}
	participant.score.DerivationalMorphology = {"score":score,"total":total};
};

/*
 MorphologicalOpposites
*/
var scoreMorphologicalOpposites = function(){
	var score = 0;
	var total = 0;
	var questions = [334,335,336,337,338,339,340,341,342,343];
	for (q in questions){
		console.log( data[questions[q]] );
		if(data[questions[q]] == "+"){
			score = score+1;
			total++;
		}else if(data[questions[q]].indexOf("1") > -1){
			score = score+1;
			total++;
		}else if(data[questions[q]] == "-"){
			total++;
		} 
	}
	participant.score.MorphologicalOpposites = {"score":score,"total":total};
};

/*
 TODO
*/
var scoreDescription = function(){
	participant.score.Description = {"score":0,"total":0};
/*
	For description, cannot be calculated automatically see post test 540-565
	*/
	// var num = data[344].match(/[0-9]*/);
	// num = parseInt(num[0]);
	// if(num > 0){
	// 	score = parseInt(score)+num;
	// 	total++;
	// }
	// if(data[345] =="+"){
	// 	score = score+1;
	// 	total++;
	// }else if(data[345] =="-"){
	// 	total++;
	// }
	// var num = data[346].match(/[0-9]*/);
	// num = parseInt(num[0]);
	// if(num > 0){
	// 	score = parseInt(score)+num;
	// 	total++;
	// }
};

/*
 Mental Arithmetic
*/
var scoreMentalArithmetic = function(){
	var score = 0;
	var total = 0;
    
    var questions = [347,348,349,350,351,352,353,354,355,356,357,358,359,360,361];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.MentalArithmetic = {"score":score,"total":total};
};

/*
 Listening Comprehension
*/
var scoreListeningComprehension = function(){
	var score = 0;
	var total = 0;
    
    var questions = [362,363,364,365,366];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
	participant.score.ListeningComprehension = {"score":score,"total":total};
};

/*
 Reading Words Aloud
*/
var scoreReadingWordsAloud = function(){
    var score = 0;
	var total = 0;
    
    var questions = [367,368,369,370,371,372,373,374,375,376];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.ReadingWordsAloud = {"score":score,"total":total};

};

/*
 ReadingSentencesAloud
 */
var scoreReadingSentencesAloud = function(){
    var score = 0;
	var total = 0;
    
    var questions = [377,378,379,380,381,382,383,384,385,386];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.ReadingSentencesAloud = {"score":score,"total":total};
};

/*
 ReadingComprehensionforParagraphs
 */
var scoreReadingComprehensionforParagraphs = function(){
    var score = 0;
	var total = 0;
    
    var questions = [387,388,389,390,391,392];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.ReadingComprehensionforParagraphs = {"score":score,"total":total};
};
/*
 Copying
*/
var scoreCopying = function(){
	var score = 0;
	var total = 0;
    
    var questions = [393,394,395,396,397];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.Copying = {"score":score,"total":total};

};

/*
 DictationofWords
*/
var scoreDictationofWords = function(){
	var score = 0;
	var total = 0;
    
    var questions = [398,399,400,401,402];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.DictationofWords = {"score":score,"total":total};

};

/*
 DictationofSentences
*/
var scoreDictationofSentences = function(){
	var score = 0;
	var total = 0;
    
    var questions = [403,404,405,406,407];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
    participant.score.DictationofSentences = {"score":score,"total":total};

};

/*
 TODO
*/
var scoreReadingComprehensionforWords = function(){
    var score = 0;
    var total = 0;

    var questions = [
        {"num":408,"res":"1"}
        ,{"num":409,"res":"4"}
        ,{"num":410,"res":"1"}
        ,{"num":411,"res":"3"}
        ,{"num":412,"res":"2"}
        ,{"num":413,"res":"2"}
        ,{"num":414,"res":"4"}
        ,{"num":415,"res":"1"}
        ,{"num":416,"res":"1"}
        ,{"num":417,"res":"2"}

    ];
    for (q in questions){
        if(data[questions[q].num] == questions[q].res){
            score = score + 1;
            total++;
        }else if(data[questions[q]]=="0"){
            //do nothing, the score doesnt change, and the total doesnt go up as per the instructions.
        }else{
            score = score+0;
            total++;
        }
    }
    participant.score.ReadingComprehensionforWords = {"score":score,"total":total};
};
/*
 TODO
*/
var scoreReadingComprehensionforSentences = function(){
    var score = 0;
    var total = 0;

    var questions = [
        {"num":418,"res":"2"}
        ,{"num":419,"res":"2"}
        ,{"num":420,"res":"3"}
        ,{"num":421,"res":"1"}
        ,{"num":422,"res":"1"}
        ,{"num":423,"res":"1"}
        ,{"num":424,"res":"3"}
        ,{"num":425,"res":"2"}
        ,{"num":426,"res":"4"}
        ,{"num":427,"res":"2"}
    ];
    for (q in questions){
        if(data[questions[q].num] == questions[q].res){
            score = score + 1;
            total++;
        }else if(data[questions[q]]=="0"){
            //do nothing, the score doesnt change, and the total doesnt go up as per the instructions.
        }else{
            score = score+0;
            total++;
        }
    }
    participant.score.ReadingComprehensionforSentences = {"score":score,"total":total};
};

/*
 TODO
*/
var scoreWriting = function(){

};

/*
 TODO
*/
var score



/* 
 TODO 
*/
var scorePhonology = function(){
	var area = document.getElementById("score_zone");
	var newarea = document.createElement("div");
	newarea.innerHTML = "<span class='scoretitle'>Phonology: </span>";
	area.appendChild(newarea);
	var data = JSON.parse(localStorage.getItem("participant")).data;
	var total = 0;
	var score = 0;
	

	scoreVerbalAuditoryDiscrimination();
	scoreLexicalDecision();
	scoreDescription();
	scoreReadingComprehensionforWords();
	
	newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreMorphology = function(){
	var area = document.getElementById("score_zone");
	var newarea = document.createElement("div");
	newarea.innerHTML = "<span class='scoretitle'>Morphology: </span>";
	area.appendChild(newarea);
	var data = JSON.parse(localStorage.getItem("participant")).data;
	var total = 0;
	var score = 0;
	
	scoreDerivationalMorphology();

	newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreLexicon = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Lexicon: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scorePointing();
    scoreSimpleandSemiComplexCommands();
    scoreComplexCommands();
    scoreVerbalAuditoryDiscrimination();
    scoreSemanticCategories();
    scoreSynonyms();
    scoreAntonyms();
    scoreRepetitionWords();
    scoreLexicalDecision();
    scoreVerbalFluency();
    scoreNaming();
    scoreSemanticOpposites();
    scoreDescription();
    scoreReadingWordsAloud();
    scoreCopying();
    scoreDictationofWords();
    scoreDictationofSentences();
    scoreReadingComprehensionforWords();






    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreSyntax = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Syntax: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

  	scoreSimpleandSemiComplexCommands();
   	scoreComplexCommands();
	scoreSyntacticComprehension();
    scoreGrammaticalityJudgement();
    scoreRepetitionSentences();
    scoreSentenceConstruction();
    scoreDescription();
    scoreReadingSentencesAloud();
    scoreDictationofSentences();
    scoreReadingComprehensionforSentences();






    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreSemantics = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Semantics: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scoreSemanticCategories();
    scoreSynonyms();
    scoreAntonyms();
    scoreSemanticAcceptability();
    scoreSemanticOpposites();
    scoreDescription();
    scoreListeningComprehension();
    scoreReadingComprehensionforParagraphs();


    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";

};


/* 
 TODO 
*/
var scoreMorphologySyntaxC = function(){

};


/* 
 TODO 
*/
var scoreLexiconC = function(){

};


/* 
 TODO 
*/
var scoreComprehension = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Comprehension: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scorePointing();
    scoreSimpleandSemiComplexCommands();
    scoreComplexCommands();
    scoreVerbalAuditoryDiscrimination();
    scoreSyntacticComprehension();
    scoreListeningComprehension();
    scoreReadingComprehensionforParagraphs();
    scoreDictationofWords();
    scoreDictationofSentences();
    scoreReadingComprehensionforWords();
    scoreReadingComprehensionforSentences();



    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreRepetition = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Repetition: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scoreRepetitionWords();
    scoreRepetitionSentences();


    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreJudgment = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Judgement: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scoreGrammaticalityJudgement();
    scoreSemanticAcceptability();
    scoreLexicalDecision();
    scoreSeries();


    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreLexicalAccess = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Lexical Access: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scoreSemanticCategories();
    scoreSynonyms();
    scoreAntonyms();
    scoreVerbalFluency();
    scoreNaming();
    scoreSemanticOpposites();
    scoreDerivationalMorphology();
    scoreMorphologicalOpposites();
    scoreDescription();
    scoreMentalArithmetic();



    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};




/* 
 TODO 
*/
var scorePropositionalizing = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Propositionalizing: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scoreSentenceConstruction();
    scoreDerivationalMorphology();
    scoreMorphologicalOpposites();
    scoreDescription();


    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreReading = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Reading: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

    scoreReadingWordsAloud();
    scoreReadingSentencesAloud();
    scoreReadingComprehensionforParagraphs();
    scoreReadingComprehensionforWords();
    scoreReadingComprehensionforSentences();

    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};
};


/* 
 TODO 
*/
var scoreWriting = function(){
    var area = document.getElementById("score_zone");
    var newarea = document.createElement("div");
    newarea.innerHTML = "<span class='scoretitle'>Writing: </span>";
    area.appendChild(newarea);
    var data = JSON.parse(localStorage.getItem("participant")).data;
    var total = 0;
    var score = 0;

   scoreCopying();
   scoreDictationofWords();
   scoreDictationofSentences();


    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreTranslationC = function(){

};


/* 
 TODO 
*/
var scoreGrammaticalityJudgmentC = function(){

};

scoreBAT();