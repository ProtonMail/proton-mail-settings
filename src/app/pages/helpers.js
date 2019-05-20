export const hasPermission = (userPermissions = [], requirements = []) => {
    if (!requirements.length) {
        return true;
    }
    return requirements.every((permission) => {
        return userPermissions.includes(permission);
    });
};
