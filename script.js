document.getElementById('contacto-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  const mensaje = `Gracias, ${nombre}. Te contactaremos a ${email}.`;
  document.getElementById('mensaje').textContent = mensaje;
});
