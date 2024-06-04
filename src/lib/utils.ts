// This file contains utility functions that can be used in multiple places in the application.

const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age;
};

const calculateAgeGroup = (age: number): string => {
    if (age >= 0 && age <= 20) {
        return '0-20';
    } else if (age >= 21 && age <= 40) {
        return '21-40';
    } else if (age >= 41 && age <= 60) {
        return '41-60';
    } else {
        return '61+';
    }
};

const textWaveAnimationVariants = {
    initial: {
        opacity: 5,
        y: 5,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.035,
            duration: 0.25,
        },
    }),
};

export { calculateAge, calculateAgeGroup, textWaveAnimationVariants };