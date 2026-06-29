/* Savanna Springs — front-end interactions */
(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		/* ---- Mobile menu (off-canvas side drawer) ---- */
		var burger = document.querySelector('[data-ss-burger]');
		var panel = document.querySelector('[data-ss-mobile]');
		var backdrop = document.querySelector('[data-ss-mobile-backdrop]');

		function setMenu(open) {
			if (!panel) { return; }
			panel.classList.toggle('is-open', open);
			panel.setAttribute('aria-hidden', open ? 'false' : 'true');
			if (backdrop) {
				backdrop.classList.toggle('is-open', open);
				if (open) { backdrop.hidden = false; } else { setTimeout(function () { if (!panel.classList.contains('is-open')) { backdrop.hidden = true; } }, 300); }
			}
			if (burger) { burger.setAttribute('aria-expanded', open ? 'true' : 'false'); }
			document.body.classList.toggle('ss-menu-open', open);
		}

		if (burger && panel) {
			burger.addEventListener('click', function () { setMenu(!panel.classList.contains('is-open')); });
			if (backdrop) { backdrop.addEventListener('click', function () { setMenu(false); }); }
			document.querySelectorAll('[data-ss-close]').forEach(function (b) {
				b.addEventListener('click', function () { setMenu(false); });
			});
			document.addEventListener('keydown', function (e) {
				if (e.key === 'Escape' && panel.classList.contains('is-open')) { setMenu(false); }
			});
			// Close when navigating to a same-page section / clicking a real link.
			panel.querySelectorAll('a[href]').forEach(function (a) {
				a.addEventListener('click', function () { setMenu(false); });
			});
		}

		/* ---- Mobile submenu accordions (tap a section to expand its links) ----
		   Delegated so it works regardless of bind timing / inner icon taps. */
		document.addEventListener('click', function (e) {
			var btn = e.target.closest ? e.target.closest('.ss-m-acc-btn') : null;
			if (!btn) { return; }
			var acc = btn.closest('[data-ss-acc]');
			if (!acc) { return; }
			e.preventDefault();
			var open = acc.classList.toggle('is-open');
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
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
