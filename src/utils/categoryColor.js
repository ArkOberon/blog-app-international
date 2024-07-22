export const categoryColors = (category) => {
  switch (category) {
    case 'Tecnología':
      return 'primary';
    case 'Industria':
      return 'warning';
    case 'Salud':
      return 'success';
    case 'Ciencia':
      return 'info';
    case 'Política':
      return 'warning';
    case 'Economía':
      return 'primary';
    case 'Religión':
      return 'info';
    case 'Educación':
      return 'primary';
    case 'Investigaciones':
      return 'info';
    default:
      return 'primary';
  }
};
