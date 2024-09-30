class Language {
    constructor(name, countryCode, questions, yesText, noText, rtl = false) {
        this.name = name;
        this.countryCode = countryCode;
        this.questions = questions;
        this.yesText = yesText;
        this.noText = noText;
        this.rtl = rtl;
    }
}


$(function () {
    const DEFAULT_LANGUAGE = new Language(
        name = "English",
        countryCode = "gb",
        questions = [
            "Is it Sunday?",
            "Is it Monday?",
            "Is it Tuesday?",
            "Is it Wednesday?",
            "Is it Thursday?",
            "Is it Friday?",
            "Is it Saturday?"
        ],
        yesText = "YES!<br>&#128515;",
        noText = "NO!<br>&#128533;"
    );
    const LANGUAGES = [
        new Language(
            name = "Chinese",
            countryCode = "cn",
            questions = [
                "今天是星期天吗？",
                "今天是星期一吗？",
                "今天是星期二吗？",
                "今天是星期三吗？",
                "今天是星期四吗？",
                "今天是星期五吗？",
                "今天是星期六吗？"
            ],
            yesText = "是的!",
            noText = "不!"
        ),
        new Language(
            name = "Finnish",
            countryCode = "fi",
            questions = [
                "Onko sunnuntai?",
                "Onko maanantai?",
                "Onko se tiistai?",
                "Onko keskiviikko?",
                "Onko torstai?",
                "Onko perjantai?",
                "Onko lauantai?"
            ],
            yesText = "Joo!",
            noText = "Ei!"
        ),
        new Language(
            name = "Greek",
            countryCode = "gr",
            questions = [
                "Είναι Κυριακή;",
                "Είναι Δευτέρα;",
                "Είναι Τρίτη;",
                "Είναι Τετάρτη;",
                "Είναι Πέμπτη;",
                "Είναι Παρασκευή;",
                "Είναι Σάββατο;"
            ],
            yesText = "Ναί!",
            noText = "Οχι!"
        ),
        new Language(
            name = "Malayalam",
            countryCode = "in",
            questions = [
                "ഞായറാഴ്ചയാണോ?",
                "തിങ്കളാഴ്ചയാണോ?",
                "ചൊവ്വാഴ്ചയാണോ?",
                "ബുധനാഴ്ചയാണോ?",
                "വ്യാഴാഴ്ചയാണോ?",
                "വെള്ളിയാഴ്ചയാണോ?",
                "ശനിയാഴ്ചയാണോ?"
            ],
            yesText = "അതെ!",
            noText = "അല്ല!"
        ),
        new Language(
            name = "Persian",
            countryCode = "ir",
            questions = [
               "آیا یکشنبه است؟",
               "آیا دوشنبه است؟",
               "آیا سه شنبه است؟",
               "چهارشنبه است؟",
               "آیا پنجشنبه است؟",
               "آیا جمعه است؟",
               "آیا شنبه است؟"
            ],
            yesText = "آره!",
            noText = "نه!",
            rtl = true
        ),
        new Language(
            name = "Sinhala",
            countryCode = "lk",
            questions = [
                "ඉරිදා ද?",
                "සඳුදා ද?",
                "අඟහරුවාදා ද?",
                "බදාදා ද?",
                "බ්‍රහස්පතින්දා ද?",
                "එය සිකුරාදා ද?",
                "සෙනසුරාදා ද?"
            ],
            yesText = "ඔව්!",
            noText = "නැත!"
        ),
        new Language(
            name = "Spanish",
            countryCode = "cu",
            questions = [
                "¿Es domingo?",
                "¿Es lunes?",
                "¿Es martes?",
                "¿Es miércoles?",
                "¿Es jueves?",
                "¿Es viernes?",
                "¿Es sábado?"
            ],
            yesText = "¡Sí!",
            noText = "¡No!"
        ),
        new Language(
            name = "Swedish",
            countryCode = "se",
            questions = [
                "Är det söndag?",
                "Är det måndag?",
                "Är det tisdag?",
                "Är det onsdag?",
                "Är det torsdag?",
                "Är det fredag?",
                "Är det lördag?"
            ],
            yesText = "Ja!",
            noText = "Nej!"
        ),
        new Language(
            name = "Urdu",
            countryCode = "pk",
            questions = [
                "کیا آج اتوار ہے؟",
                "کیا آج پیر ہے؟",
                "کیا آج منگل ہے؟",
                "کیا آج بدھ ہے؟",
                "کیا آج جمعرات ہے؟",
                "کیا آج جمعہ ہے؟",
                "کیا آج ہفتہ ہے؟",
            ],
            yesText = "جی ہاں!",
            noText = "نہیں!",
            rtl = true
        )
    ]

    var desiredDay = $("html").data("day");
    var todayIsDesiredDay = (new Date()).getDay() == desiredDay;

    $("title").append(DEFAULT_LANGUAGE.questions[desiredDay]);
    $("#idDefaultQuestion").append(`<a id="${DEFAULT_LANGUAGE.name}" href="#${DEFAULT_LANGUAGE.name}" data-tooltip="${DEFAULT_LANGUAGE.name}" class="no-link"><i class="fi fis fic fi-${DEFAULT_LANGUAGE.countryCode}"></i> ${DEFAULT_LANGUAGE.questions[desiredDay]}</a>`);
    $("#idDefaultResult").html(todayIsDesiredDay ? DEFAULT_LANGUAGE.yesText : DEFAULT_LANGUAGE.noText);

    var moreLanguagesSection = $("#idMoreLanguagesSection");
    for(let i = 0 ; i < LANGUAGES.length ; ++i) {
        if(i > 0){
            for(let j = 0 ; j < 10 ; ++j)
                moreLanguagesSection.append(`<p class="vspace"></p>`);
        }
        let lang = LANGUAGES[i];
        if(lang.rtl){
            moreLanguagesSection.append(`<a id="${lang.name}" href="#${lang.name}" data-tooltip="${lang.name}" class="no-link"><i class="fi fis fic fi-${lang.countryCode}"></i> &#x200E;${lang.questions[desiredDay]} &larr; ${todayIsDesiredDay ? lang.yesText : lang.noText}&#x200F;</a>`);
        }
        else{
            moreLanguagesSection.append(`<a id="${lang.name}" href="#${lang.name}" data-tooltip="${lang.name}" class="no-link"><i class="fi fis fic fi-${lang.countryCode}"></i> ${lang.questions[desiredDay]} &rarr; ${todayIsDesiredDay ? lang.yesText : lang.noText}</a>`);
            // moreLanguagesSection.append(`<span id="${lang.name}" data-tooltip="${lang.name}" class="no-link"><i class="fi fis fic fi-${lang.countryCode}"></i> ${lang.questions[desiredDay]} &rarr; ${todayIsDesiredDay ? lang.yesText : lang.noText}</span>`);
        }
    }

    let lang = window.location.href.split("#")[1];
    if(LANGUAGES.some(e => e.name === lang)){
        $("#languagesDetails").attr("open", "");
        $(`#${lang}`).trigger("focus");
    }
});