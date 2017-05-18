/**
 * Created by S on 15.05.2017.
 */

$(document).ready(function () {


nameBoardEditor();
function nameBoardEditor() {
    var nameEditField = document.getElementsByClassName("board-name")[0];
    var boardNameVal = document.getElementById("board-name-value");
    var nameEditBtn = document.getElementById("board-name-edit");
    var nameEditing = document.getElementById("board-name-field");
    var nameSaveBtn = document.getElementById("name-save-btn");
    nameEditBtn.addEventListener("click", function () {
        nameEditField.style.display = "none";
        nameEditing.style.display = "inline-block";
        nameEditing.focus();
        nameSaveBtn.style.display = "inline";
        nameSaveBtn.addEventListener("click", savingValue);
        function savingValue() {
            if (nameEditing.value !== "") {
                boardNameVal.innerHTML = nameEditing.value + " ";
            }
            nameEditField.style.display = "inline";
            nameEditing.style.display = "none";
            nameSaveBtn.style.display = "none";
        }
    });
}

descriptionBoardEditor();
function descriptionBoardEditor() {
    var descriptionEditField = document.getElementsByClassName("board-description")[0];
    var boardDescriptionVal = document.getElementById("board-description-value");
    var descriptionEditBtn = document.getElementById("board-description-edit");
    var descriptionEditing = document.getElementById("board-description-field");
    var descriptionSaveBtn = document.getElementById("description-save-btn");
    descriptionEditBtn.addEventListener("click", function () {
        descriptionEditField.style.display = "none";
        descriptionEditing.style.display = "inline-block";
        descriptionEditing.focus();
        descriptionSaveBtn.style.display = "inline";
        descriptionSaveBtn.addEventListener("click", savingValue);
        function savingValue() {
            if (descriptionEditing.value !== "") {
                boardDescriptionVal.innerHTML = descriptionEditing.value + " ";
            }
            descriptionEditField.style.display = "inline";
            descriptionEditing.style.display = "none";
            descriptionSaveBtn.style.display = "none";
        }
    });
}

nameColumnEditor();
function nameColumnEditor() {
    var columnEditField = document.getElementsByClassName("column-name")[0];
    var columnNameVal = document.getElementById("column-name-value");
    var columnEditBtn = document.getElementById("column-name-edit");
    var columnEditing = document.getElementById("column-name-field");
    var columnSaveBtn = document.getElementById("column-save-btn");
    columnEditBtn.addEventListener("click", function () {
        columnEditField.style.display = "none";
        columnEditing.style.display = "inline-block";
        columnEditing.focus();
        columnSaveBtn.style.display = "inline";
        columnSaveBtn.addEventListener("click", savingValue);
        function savingValue() {
            if (columnEditing.value !== "") {
                columnNameVal.innerHTML = columnEditing.value + " ";
            }
            columnEditField.style.display = "inline-block";
            columnEditing.style.display = "none";
            columnSaveBtn.style.display = "none";
        }
    });
}

nameCardEditor();
function nameCardEditor() {
    var cardEditField = document.getElementById("card-name");
    var cardNameVal = document.getElementById("card-name-value");
    var cardEditBtn = document.getElementById("card-name-edit");
    var cardEditing = document.getElementById("card-name-field");
    var cardSaveBtn = document.getElementById("card-save-btn");
    cardEditBtn.addEventListener("click", function () {
        cardEditField.style.display = "none";
        cardEditing.style.display = "inline-block";
        cardEditing.focus();
        cardSaveBtn.style.display = "inline";
        cardSaveBtn.addEventListener("click", savingValue);
        function savingValue() {
            if (cardEditing.value !== "") {
                cardNameVal.innerHTML = cardEditing.value + " ";
            }
            cardEditField.style.display = "inline";
            cardEditing.style.display = "none";
            cardSaveBtn.style.display = "none";
        }
    });
}

descriptionCardEditor();
function descriptionCardEditor() {
    var descriptionEditField = document.getElementById("card-description");
    var cardDescriptionVal = document.getElementById("card-description-value");
    var descriptionEditBtn = document.getElementById("card-description-edit");
    var descriptionEditing = document.getElementById("card-description-field");
    var descriptionSaveBtn = document.getElementById("card-description-save-btn");

    //$('#card-description-edit').click(function(){
    descriptionEditBtn.addEventListener("click", function () {
        descriptionEditField.style.display = "none";
        descriptionEditing.style.display = "inline-block";
        descriptionEditing.focus();
        descriptionSaveBtn.style.display = "inline";

        //$('#card-description-save-btn').click(function(){
        descriptionSaveBtn.addEventListener("click", function () {
            if (descriptionEditing.value !== "") {
                cardDescriptionVal.innerHTML = descriptionEditing.value + " ";
            }
            descriptionEditField.style.display = "inline";
            descriptionEditing.style.display = "none";
            descriptionSaveBtn.style.display = "none";
        });
    });

    // descriptionEditBtn.addEventListener("click", function () {
    //     descriptionEditField.style.display = "none";
    //     descriptionEditing.style.display = "inline-block";
    //     descriptionEditing.focus();
    //     descriptionSaveBtn.style.display = "inline";
    //     descriptionSaveBtn.addEventListener("click", savingValue);
    //     function savingValue() {
    //         if (descriptionEditing.value !== "") {
    //             cardDescriptionVal.innerHTML = descriptionEditing.value + " ";
    //         }
    //         descriptionEditField.style.display = "inline";
    //         descriptionEditing.style.display = "none";
    //         descriptionSaveBtn.style.display = "none";
    //     }
    // });
}


var cards = document.getElementById("cards");
var originalCardInnerHtml = "";
function fun1() {
    originalCardInnerHtml = cards.innerHTML;
}
fun1();

addCard();
function addCard() {
    var addCardBtn = document.getElementById("card-add-btn");
    var card = document.getElementById("card");
    var cards = document.getElementById("cards");
    var displayStatus = window.getComputedStyle(card).display;


    // $('.cards').on('click', '#card-add-btn', function(){
    //
    //     if (displayStatus === "none") {
    //
    //
    //         card.style.display = "block";
    //     } else {
    //
    //         // var cloneCard = card.cloneNode(true);
    //         // cards.appendChild(cloneCard);
    //
    //         $( ".card" ).clone(false).appendTo( ".cards" );
    //     }
    // });

    $("#card-add-btn").click(function() {
        //var originalCard = cards.innerHTML;
        var displayStatus = window.getComputedStyle(card).display;

        if (displayStatus === "none") {
            card.style.display = "block";
            $(".fa-remove").on("click", function () {
                $(this).parent().remove();
            });
        } else {
            $(".cards").append(originalCardInnerHtml);
            var list = document.querySelectorAll(".card");
            for (var i = 0; i < list.length; i++) {
                document.querySelectorAll(".card")[i].style.display = "block";
            }

            $(".fa-remove").on("click", function () {
               $(this).parent().remove();
               console.log($(this));
            });

            $(".fa-edit#card-name-edit").on("click", function () {
                $(this).parent().parent().children(".card-name").css({"display":"none"});
                $(this).parent().parent().children("label").children("#card-name-field").css({"display":"inline-block"});
                $(this).parent().parent().children("label").children("#card-name-field").focus();
                $(this).parent().parent().children("label").children("#card-save-btn").css({"display":"inline"});

                $(this).parent().parent().children("label").children("#card-save-btn").on("click", function () {
                    console.log($(this).parent().parent().children("label").children("#card-name-field").val());
                    console.log($(this).prev().val());

                    if ($(this).parent().parent().children("label").children("#card-name-field").val() !== "") {
                        $(this).parent().parent().children("#card-name").children("#card-name-value").html($(this).parent().parent().children("label").children("#card-name-field").val() + " ");
                    }
                    $(this).parent().parent().children(".card-name").css({"display":"inline"});
                    $(this).parent().parent().children("label").children("#card-name-field").css({"display":"none"});
                    $(this).parent().parent().children("label").children("#card-save-btn").css({"display":"none"});
                });

                // addedCard.$("#card-name").css({"display":"none"});
            });

            $(".fa-edit#card-description-edit").on("click", function () {
                $(this).parent().parent().children(".card-description").css({"display":"none"});
                $(this).parent().parent().children("label").children("#card-description-field").css({"display":"inline-block"});
                $(this).parent().parent().children("label").children("#card-description-field").focus();
                $(this).parent().parent().children("label").children("#card-description-save-btn").css({"display":"inline"});

                $(this).parent().parent().children("label").children("#card-description-save-btn").on("click", function () {
                    //console.log($(this).parent().parent().children("label").children("#card-description-field").val());
                    //console.log($(this).prev().val());

                    if ($(this).parent().parent().children("label").children("#card-description-field").val() !== "") {
                        $(this).parent().parent().children("#card-description").children("#card-description-value").html($(this).parent().parent().children("label").children("#card-description-field").val() + " ");
                    }
                    $(this).parent().parent().children(".card-description").css({"display":"inline"});
                    $(this).parent().parent().children("label").children("#card-description-field").css({"display":"none"});
                    $(this).parent().parent().children("label").children("#card-description-save-btn").css({"display":"none"});
                });

                // addedCard.$("#card-name").css({"display":"none"});
            });

            // var cloneCard = card.cloneNode(true);
            // cards.appendChild(cloneCard);
            //
            // $( ".card" ).clone(true).appendTo( ".cards" );

            //console.log(originalCardInnerHtml);
        }
    });



    // addCardBtn.addEventListener("click", function () {
    //     var displayStatus = window.getComputedStyle(card).display;
    //     if (displayStatus === "none") {
    //         card.style.display = "block";
    //     } else {
    //          var cloneCard = card.cloneNode(true);
    //          cards.appendChild(cloneCard);
    //
    //         // var a = document.getElementById("cards").lastChild;
    //         // var cardNameValue= document.getElementById("card-name-value");
    //         // cardNameValue.innerHTML = "Card's name ";
    //
    //
    //         //$( ".card" ).clone(false).appendTo( ".cards" );
    //     }


        // var emptyCard = document.createElement("div");
        // emptyCard.classList.add("card");
        // cards.appendChild(emptyCard);
        // nameCardEditor();
        // descriptionCardEditor();

    //});
}

// setDef();
// function setDef() {
//     var a = document.getElementById("cards").lastChild;
//     var cardNameValue= document.getElementById("card-name-value");
//     cardNameValue.innerHTML = "Card's name ";
// }

});