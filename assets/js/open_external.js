document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    const url = link.getAttribute("href");

    // 外部リンク（http または https）
    if (url.startsWith("http")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }

    // 内部の markdown / html も新しいタブで開く
    if (url.endsWith(".md") || url.endsWith(".html")) {
      link.setAttribute("target", "_blank");
    }
  });
});
