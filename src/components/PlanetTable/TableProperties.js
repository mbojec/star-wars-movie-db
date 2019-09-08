export const table = [
  { keyValue: 'name', label: 'Planet name' },
  { keyValue: 'rotation_period', label: 'Rotation period' },
  { keyValue: 'orbital_period', label: 'Orbital period' },
  { keyValue: 'diameter', label: 'Diameter' },
  { keyValue: 'climate', label: 'Climate' },
  { keyValue: 'surface_water', label: 'Surface water' },
  { keyValue: 'population', label: 'Population' },
];

export function sortAsc(key) {
  return function(a, b) {
    if (key === 'name' || key === 'climate') {
      if (a[key] > b[key]) {
        return 1;
      }
      if (b[key] > a[key]) {
        return -1;
      }
      return 0;
    } else {
      return (a[key] === 'unknown' ? -1 : a[key]) - (b[key] === 'unknown' ? -1 : b[key]);
    }
  };
}

export function sortDesc(key) {
  return function(a, b) {
    if (key === 'name' || key === 'climate') {
      if (a[key] > b[key]) {
        return -1;
      }
      if (b[key] > a[key]) {
        return 1;
      }
      return 0;
    } else {
      return (b[key] === 'unknown' ? -1 : b[key]) - (a[key] === 'unknown' ? -1 : a[key]);
    }
  };
}
