const upFirstChar = string => string.charAt(0).toUpperCase() + string.slice(1);
const getRoles = (roles, role) =>
  roles.reduce((acc, i) => {
    acc[`is${upFirstChar(i.name)}`] = Boolean(role & i.value);
    return acc;
  }, {});

export { upFirstChar, getRoles };
