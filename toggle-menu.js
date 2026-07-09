//ハンバーガーメニュー（詳しく探す）の開閉処理
window.addEventListener("load", function () {
  // index.htmlに書かれているID名を使って要素を取得します
  const triggerBtn = document.getElementById("menu-trigger"); // 「詳しく探す」ボタン
  const drawerMenu = document.getElementById("drawer-menu"); // 引き出しメニュー本体

  // 【役割】「詳しく探す」ボタンがクリックされたときの動き
  if (triggerBtn && drawerMenu) {
    triggerBtn.addEventListener("click", function (event) {
      // メニューに「is-open」というクラスがついていれば消し、ついていなければ追加する（トグル処理）
      drawerMenu.classList.toggle("is-open");

      // クリックしたときにページの一番上に戻ってしまうのを防ぐ
      event.stopPropagation();
    });

    //メニュー以外の場所（画面のどこか）をクリックしたときにメニューを自動で閉じる処理
    document.addEventListener("click", function (event) {
      // クリックされた場所がメニュー内、またはボタン内でなければメニューを閉じます
      if (
        !drawerMenu.contains(event.target) &&
        !triggerBtn.contains(event.target)
      ) {
        drawerMenu.classList.remove("is-open");
      }
    });
  }
});

//jQueryを使った処理（フローティングメニューのスクロール追従設定）
$(function () {
  // 設計図にある「左上のトップボタン（フローティングメニュー）」をスクロールに合わせて動かす処理
  $(window).scroll(function () {
    $("nav.floating")
      .stop()
      .animate({ top: $(window).scrollTop() + 100 }, 500);
  });
});
