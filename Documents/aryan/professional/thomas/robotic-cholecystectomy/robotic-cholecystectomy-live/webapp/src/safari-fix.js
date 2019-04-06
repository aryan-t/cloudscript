// fix for safari cpu/resource error present in most ios versions

module.exports = {
  loadFix: function (container) {
	var scrollContainer = document.querySelector(container + ' ion-content div.scroll-content');

	var lastY = 0; // Needed in order to determine direction of scroll.
	var allowUp, allowDown;

	scrollContainer.addEventListener('touchstart', function(event) {
		lastY = event.pageY;
		allowUp = this.scrollTop > 0;
		allowDown = this.scrollTop < this.scrollHeight - this.clientHeight;
	});

	scrollContainer.addEventListener('touchmove', function(event) {
		var top = event.touches[0].clientY;

		// Determine scroll position and direction.
		var scrollTop = event.currentTarget.scrollTop;
		var isUp = lastY - top < 0;

		if (isUp && allowUp || !isUp && allowDown) {
			event.stopPropagation();
		} else {
			event.preventDefault();
		}

		lastY = top;
	});
  }
};

