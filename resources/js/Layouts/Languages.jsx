import djangoIcon from '@iconify-icons/logos/django';
import javaIcon from '@iconify-icons/logos/java';
import laravelIcon from '@iconify-icons/logos/laravel';
import mysqlIcon from '@iconify-icons/logos/mysql';
import phpIcon from '@iconify-icons/logos/php';
import pythonIcon from '@iconify-icons/logos/python';
import reactIcon from '@iconify-icons/logos/react';
import sqliteIcon from '@iconify-icons/logos/sqlite';
import { Icon } from '@iconify/react';

const languages = [
    {
        name: 'React',
        icon: <Icon icon={reactIcon} width="30" />,
        experience: 'Advanced',
    },
    {
        name: 'MySQL',
        icon: <Icon icon={mysqlIcon} width="30" />,
        experience: 'Intermediate',
    },
    {
        name: 'SQLite',
        icon: <Icon icon={sqliteIcon} width="30" />,
        experience: 'Intermediate',
    },
    {
        name: 'Django',
        icon: <Icon icon={djangoIcon} width="30" />,
        experience: 'Advanced',
    },
    {
        name: 'Laravel',
        icon: <Icon icon={laravelIcon} width="30" />,
        experience: 'Intermediate',
    },
    {
        name: 'PHP',
        icon: <Icon icon={phpIcon} width="30" />,
        experience: 'Intermediate',
    },
    {
        name: 'Python',
        icon: <Icon icon={pythonIcon} width="30" />,
        experience: 'Advanced',
    },
    {
        name: 'Java',
        icon: <Icon icon={javaIcon} width="30" />,
        experience: 'Intermediate',
    },
];

export default function Languages() {
    return (
        <div
            id="languages-container"
            className="mt-0 flex snap-x flex-col items-center justify-center overflow-x-auto pb-10 pt-0"
        >
            <h2 className="mb-6 text-4xl font-bold text-blue-400">
                Languages & Technologies
            </h2>

            <div className="flex gap-1">
                {languages.map((language, index) => (
                    <div
                        key={index}
                        className="flex cursor-pointer flex-col flex-wrap items-center opacity-80 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-100"
                    >
                        <div className="h-40 w-40">{language.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
