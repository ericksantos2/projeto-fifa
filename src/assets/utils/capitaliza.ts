export function capitaliza(texto: string): string {
  const textoCapitalizado = texto[0].toUpperCase() + texto.substring(1);
  return textoCapitalizado;
}