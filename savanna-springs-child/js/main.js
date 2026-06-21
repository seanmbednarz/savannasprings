/* Savanna Springs — front-end interactions */
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		/* ---- Mobile menu ---- */
		var burger = document.querySelector('[data-ss-burger]');
		var panel = document.querySelector('[data-ss-mobile]');
		if (burger && panel) {
			burger.addEventListener('click', function () {
				var open = panel.classList.toggle('is-open');
				burger.setAttribute('aria-expanded', open ? 'true' : 'false');
			});
		}

		/* ---- Mobile submenu accordions (tap a section to expand its links) ---- */
		document.querySelectorAll('[data-ss-acc] > .ss-m-acc-btn').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var acc = btn.closest('[data-ss-acc]');
				var open = acc.classList.toggle('is-open');
				btn.setAttribute('aria-expanded', open ? 'true' : 'false');
			});
		});

		/* ---- FAQ accordion (one open at a time) ---- */
		document.querySelectorAll('[data-ss-accordion]').forEach(function (acc) {
			acc.querySelectorAll('[data-ss-faq-toggle]').forEach(function (btn) {
				btn.addEventListener('click', function () {
					var item = btn.closest('.ss-faq-item');
					var isOpen = item.classList.contains('is-open');
					acc.querySelectorAll('.ss-faq-item').forEach(function (el) {
						el.classList.remove('is-open');
						var b = el.querySelector('[data-ss-faq-toggle]');
						if (b) { b.setAttribute('aria-expanded', 'false'); }
					});
					if (!isOpen) {
						item.classList.add('is-open');
						btn.setAttribute('aria-expanded', 'true');
					}
				});
			});
		});

		/* ---- Lead / contact forms: AJAX submit + success state ---- */
		function showSuccess(form) {
			var card = form.closest('.ss-formcard');
			if (!card) { return; }
			var success = card.querySelector('[data-ss-success]');
			form.classList.add('is-hidden');
			if (success) { success.classList.remove('is-hidden'); }
		}

		document.querySelectorAll('[data-ss-form]').forEach(function (form) {
			form.addEventListener('submit', function (e) {
				// Progressive enhancement: try AJAX, fall back to normal POST.
				if (!window.fetch) { return; }
				e.preventDefault();
				var btn = form.querySelector('button[type="submit"]');
				if (btn) { btn.disabled = true; btn.style.opacity = '0.7'; }
				fetch(form.action, { method: 'POST', body: new FormData(form), credentials: 'same-origin' })
					.then(function () { showSuccess(form); })
					.catch(function () { form.submit(); });
			});
		});

		/* Reset buttons */
		document.querySelectorAll('[data-ss-reset]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var card = btn.closest('.ss-formcard');
				if (!card) { return; }
				var form = card.querySelector('[data-ss-form]');
				var success = card.querySelector('[data-ss-success]');
				if (form) { form.reset(); form.classList.remove('is-hidden'); var s = form.querySelector('button[type="submit"]'); if (s) { s.disabled = false; s.style.opacity = ''; } }
				if (success) { success.classList.add('is-hidden'); }
			});
		});

		/* Non-JS fallback: ?ss_sent=1 shows the first success card */
		if (/[?&]ss_sent=1/.test(window.location.search)) {
			var firstForm = document.querySelector('[data-ss-form]');
			if (firstForm) { showSuccess(firstForm); }
		}
	});
})();
