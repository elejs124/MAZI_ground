// 다이렉트 메세지 입력칸 나오게끔 하는 놈
$(function () {
    //직접입력 인풋박스 기존에는 숨어있다가
    $("#delivery_Msg_Direct").hide();

    $("#delivery_Msg_Select").change(function () {
        //직접입력을 누를 때 나타남
        if ($("#delivery_Msg_Select").val() == "direct") {
            $("#delivery_Msg_Direct").show();
        } else {
            $("#delivery_Msg_Direct").hide();
        }
    })


    // btn 토글 기능
    BtnContainer = $(".payment_Btn")
    BtnContainer.click(function () {
        for (var i = 0; i < 8; i++){
            $(BtnContainer[i]).css('background-color', 'white').css('color', 'black')
        }
        $(this).css('background-color', 'black').css('color', 'white')
    })
});