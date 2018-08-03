$(document).ready(function() {
  // 변수 초기화
  var $thumb = $(".thumb");
  var $backdrop = $("#backdrop");
  var $closeBtn = $(".btn.close");
  var $box = $("#lightbox .box");

  // 라이트 박스 켜기
  function openLightbox(index) {
    $("#image-" + index)
      .fadeIn("slow")
      .addClass("active");
    $backdrop.fadeIn("slow").addClass("active");
  }
  // 라이트 박스 닫기
  function closeLightbox() {
    $box.fadeOut("slow").removeClass("active");
    $backdrop.fadeOut("slow").removeClass("active");
  }

  // 썸네일 클릭 이벤트
  $thumb.click(function() {
    var index = $(this).index() + 1;
    openLightbox(index);
  });

  // 라이트 박스 닫기 버튼 이벤트
  $closeBtn.click(function() {
    closeLightbox();
  });
});
