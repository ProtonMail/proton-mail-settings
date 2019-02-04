export function get(config = {}) {
    const classNames = Object.keys(config).filter((key) => config[key]);
    return ['pm_badge', ...classNames].join(' ');
}
