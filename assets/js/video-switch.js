(function () {
  function youtubeEmbed(value) {
    if (!value) return "";
    const match =
      value.match(/[?&]v=([\w-]{11})/) ||
      value.match(/youtu\.be\/([\w-]{11})/) ||
      value.match(/embed\/([\w-]{11})/) ||
      value.match(/^([\w-]{11})$/);
    return match ? "https://www.youtube.com/embed/" + match[1] : "";
  }

  function bilibiliEmbed(value) {
    if (!value) return "";
    const bv = value.match(/BV[\w]+/);
    return bv
      ? "https://player.bilibili.com/player.html?bvid=" +
          bv[0] +
          "&page=1&high_quality=1"
      : "";
  }

  function defaultSource() {
    return /^zh\b/i.test(navigator.language || "") ? "bilibili" : "youtube";
  }

  function render(root, source) {
    const frame = root.querySelector(".video-frame");
    const youtube = youtubeEmbed(root.getAttribute("data-youtube"));
    const bilibili = bilibiliEmbed(root.getAttribute("data-bilibili"));
    const src = source === "bilibili" ? bilibili : youtube;

    root.querySelectorAll("[data-video-source]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-video-source") === source);
    });

    if (!src) {
      frame.innerHTML =
        '<p class="video-empty">Choose YouTube or Bilibili after the demo link is ready.</p>';
      return;
    }

    frame.innerHTML =
      '<iframe src="' +
      src +
      '" title="Paper demo video" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>';
  }

  document.querySelectorAll(".video-embed").forEach(function (root) {
    let source = defaultSource();
    if (source === "youtube" && !youtubeEmbed(root.getAttribute("data-youtube"))) {
      source = "bilibili";
    }
    if (source === "bilibili" && !bilibiliEmbed(root.getAttribute("data-bilibili"))) {
      source = "youtube";
    }

    root.addEventListener("click", function (event) {
      const button = event.target.closest("[data-video-source]");
      if (!button || !root.contains(button)) return;
      render(root, button.getAttribute("data-video-source"));
    });

    render(root, source);
  });
})();
