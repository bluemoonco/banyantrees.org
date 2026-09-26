const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

const form = document.querySelector('#brief-form');
if (form) {
  const param = new URLSearchParams(location.search).get('interest');
  const choice = param === 'professional' ? 'Professional project' : param === 'specimen' ? 'Mature specimen' : 'Young tree';
  const input = [...form.querySelectorAll('input[name="interest"]')].find(el => el.value === choice);
  if (input) input.checked = true;
  const treeId = new URLSearchParams(location.search).get('tree');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = [
      'THE BANYAN TREE COMPANY — CONVERSATION BRIEF',
      `Interest: ${data.get('interest')}`,
      `Project location: ${data.get('location')}`,
      `Timing: ${data.get('timing')}`,
      treeId ? `Tree ID: ${treeId}` : '',
      `Vision: ${data.get('vision') || 'To discuss'}`,
      `Site/access: ${data.get('site') || 'To discuss'}`
    ].filter(Boolean);
    document.querySelector('#brief-summary').textContent = lines.join('\n');
    const result = document.querySelector('#brief-result');
    result.hidden = false;
    result.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start'});
  });
  document.querySelector('#copy-brief').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(document.querySelector('#brief-summary').textContent);
      status.textContent = 'Brief copied. Call us when ready.';
    } catch {
      status.textContent = 'Select the text above to copy it, then call us.';
    }
  });
}
