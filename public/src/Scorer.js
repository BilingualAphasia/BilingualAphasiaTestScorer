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
 TODO
*/
var scoreHistoryofBilingualism = function(){

};

/*
 TODO
*/
var scoreEnglishBackground = function(){

};

/*
 TODO
*/
var scoreSpontaneousSpeech = function(){

	/*
	For spontaneous speech, See post test anysis 514-539
	*/
	// var questions = [18,19,20,21,22]
	// for (q in questions){
	// 	var num = data[questions[q]].match(/[0-9]*/);
	// 	num = parseInt(num[0]);
	// 	if(num > 0){
	// 		score = parseInt(score)+num;
	// 		total++;
	// 	}
	// }

};

/*
 TODO
*/
var scorePointing = function(){

};

/*
 TODO
*/
var scoreSimpleandSemiComplexCommands = function(){

  /*
     Simple commands
     */
    var questions = [33,34,35,36,37,38,39,40,41,42];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }

};

/*
 TODO
*/
var scoreComplexCommands = function(){

	 /*
     Complex commands
     */
    var questions = [43,44,45,46,47]
    for (q in questions){
    	var num = data[questions[q]].match(/[0-9]*/);
    	num = parseInt(num[0]);
    	if(num > 0){
    		score = parseInt(score)+num;
    		total=total+3;
    	}
    }


};

/*
 TODO
*/
var scoreVerbalAuditoryDiscrimination = function(){

	/*
	For Verbal Auditory discrimination
	*/
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


};

/*
 TODO
*/
var scoreSyntacticComprehension = function(){


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
};

/*
 TODO
*/
var scoreSemanticCategories = function(){

};

/*
 TODO
*/
var scoreSynonyms = function(){

};

/*
 TODO
*/
var scoreAntonyms = function(){

};

/*
 TODO
*/
var scoreGrammaticalityJudgement = function(){

    /*
     Grammaticaly Judgement
     */
    var questions = [173,174,175,176,177,178,179,180,181,182];
    for (q in questions){
        if(data[questions[q]] == "+"){
            score = score+1;
            total++;
        }else if(data[questions[q]] == "-"){
            total++;
        }
    }
};

/*
 TODO
*/
var scoreSemanticAcceptability = function(){

};

/*
 TODO
*/
var scoreLexicalDecision = function(){


	/*
	For repetition of words
	*/
	var questions = [193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251];
	for (q in questions){
		if(data[questions[q]] == "+"){
			score = score+1;
			total++;
		}else if(data[questions[q]] == "-"){
			total++;
		} 
	}

};

/*
 TODO
*/
var scoreSeries = function(){

};

/*
 TODO
*/
var scoreVerbalFluency = function(){

};

/*
 TODO
*/
var scoreNaming = function(){

};

/*
 TODO
*/
var scoreSentenceConstruction = function(){

};

/*
 TODO
*/
var scoreSemanticOpposites = function(){

};

/*
 TODO
*/
var scoreDerivationalMorphology = function(){

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
};

/*
 TODO
*/
var scoreMorphologicalOpposites = function(){

};

/*
 TODO
*/
var scoreDescription = function(){

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
 TODO
*/
var scoreMentalArithmetic = function(){

};

/*
 TODO
*/
var scoreListeningComprehension = function(){

};

/*
 TODO
*/
var scoreReading = function(){

};

/*
 TODO
*/
var scoreCopying = function(){

};

/*
 TODO
*/
var scoreDictationforWords = function(){

};

/*
 TODO
*/
var scoreDictationforSentences = function(){

};

/*
 TODO
*/
var scoreReadingComprehensionforWords = function(){

	/*
	Reading out loud
	*/
	var questions = [367,368,369,370,371,372,373,374,375,376];
	for (q in questions){
		if(data[questions[q]] == "+"){
			score = score+1;
			total++;
		}else if(data[questions[q]] == "-"){
			total++;
		} 
	}
};

/*
 TODO
*/
var scoreReadingComprehensionforSentences = function(){

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
	

	scoreAuditorVerbalDiscrimination();
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

    newarea.innerHTML = newarea.innerHTML + "<span>"+score+"/"+total+"</span";
};


/* 
 TODO 
*/
var scoreSemantics = function(){

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

};


/* 
 TODO 
*/
var scoreRepetition = function(){

};


/* 
 TODO 
*/
var scoreJudgment = function(){

};


/* 
 TODO 
*/
var scoreLexical = function(){

};


/* 
 TODO 
*/
var scoreAccess = function(){

};


/* 
 TODO 
*/
var scorePropositionalizing = function(){

};


/* 
 TODO 
*/
var scoreReading = function(){

};


/* 
 TODO 
*/
var scoreWriting = function(){

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