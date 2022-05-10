const required = mes => v => !!v || mes || 'Must not be empty';
const email = mes => v => /.+@.+\..+/.test(v) || mes || 'E-mail must be valid';
const spec = mes => v => /^.*[!»;%:?*()_+=,.[\]{}<>\\|"'”’]+.*$/.test(v) || mes || 'Must be special character';
const small = mes => v => /^.*[a-z]+.*$/.test(v) || mes || 'Must be lower case';
const big = mes => v => /^.*[A-Z]+.*$/.test(v) || mes || 'Must be uppercase';
const num = mes => v => /^.*[0-9]+.*$/.test(v) || mes || 'Must be number';
const same = (value, mes) => v => v === value || mes || 'Does not match';
const min =
  (min = 6, mes) =>
  v =>
    v?.length >= min || mes || `Min ${min} char`;
const max =
  (max = 6, mes) =>
  v =>
    v?.length <= max || mes || `Max ${max} char`;

export { required, email, spec, small, big, num, min, max, same };
