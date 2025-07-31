console.log("jquery-test.jsを読み込みました．")

// セレクタ
let test_p_1 = $("#test-p-1").text();
console.log(test_p_1);

let test_p_2 = $(".test-p-2").text();
console.log(test_p_2);

let p_123 = $("p").text();
console.log(p_123)

// メソッド

// toggle
function toggle1() {
    // 表示
    $("#test-p-1").show();
}

function toggle2() {
    // 非表示
    $("#test-p-1").hide();
}


function slide() {
    // スライドダウン
    $("#test-p-1").slideDown();
}

function slide2() {
    // スライドアップ
    $("#test-p-1").slideUp();
}

function fade() {
    // フェードイン
    $("#test-p-1").fadeIn();
}

function fade2() {
    // フェードアウト
    $("#test-p-1").fadeOut();
}

function color() {
    $("#test-p-1").css("color", "blue");
    $("#test-p-1").css("fontSize", "100px");
}

// イベントハンドラ
// focusイベントを取得する
$("#input-1").on("focus", function() {
    console.log("インプットタグがフォーカスされました．");
});

// clickイベント
$("h3").on("click", function() {
    console.log("h3タグがクリックされました．");
    $(this).next().slideToggle();
});