export const categoryColors = (category) => {
  switch (category) {
    case 'Tecnología':
      return 'warning';
    case 'Industria':
      return 'warning';
    case 'Salud':
      return 'primary';
    case 'Ciencia':
      return 'primary';
    case 'Actualidad':
      return 'warning';
    case 'Economía':
      return 'warning';
    case 'Religión':
      return 'primary';
    case 'Educación':
      return 'primary';
    case 'Documentales':
      return 'warning';
    default:
      return 'primary';
  }
};
