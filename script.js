document.addEventListener('DOMContentLoaded', () => {
  // بخش نمایش معنی ضرب‌المثل وقتی هاور می‌کنی
  const proverbCards = document.querySelectorAll('.proverb-card');

  proverbCards.forEach(card => {
    const meaning = card.querySelector('.meaning');
    if (meaning) {
      meaning.style.display = 'none';

      card.addEventListener('mouseenter', () => {
        meaning.style.display = 'block';
      });

      card.addEventListener('mouseleave', () => {
        meaning.style.display = 'none';
      });
    }
  });

  // فرم ارسال ضرب‌المثل
  const form = document.getElementById('proverbForm');
  const submittedContainer = document.getElementById('submittedProverbs');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const userName = form.userName.value.trim();
    const userProverb = form.userProverb.value.trim();

    if (!userName || !userProverb) {
      alert('Please fill in both fields.');
      return;
    }

    // ایجاد عنصر جدید برای ضرب‌المثل ارسال شده
    const newProverbDiv = document.createElement('div');
    newProverbDiv.classList.add('submitted-item');
    newProverbDiv.innerHTML = `
      <strong>${userName} says:</strong>
      <p style="font-family: 'Nastaliq', serif; font-size: 1.1rem;">${userProverb}</p>
    `;

    submittedContainer.appendChild(newProverbDiv);

    // پاک کردن فرم
    form.reset();
  });
});