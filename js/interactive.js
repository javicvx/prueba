// Animación de fondo en sección info al mover el mouse
document.querySelector('.info-section').addEventListener('mousemove', e => {
  const section = e.currentTarget;
  const rect = section.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  section.style.setProperty('--x', `${x}%`);
  section.style.setProperty('--y', `${y}%`);
});
