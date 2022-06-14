import { useRouter } from 'next/router';

import ALink from '~/components/features/alink';

function CategoryMenu() {
    const query = useRouter().query;

    return (
        <div className="dropdown category-dropdown">
            <ALink href="#" className="dropdown-toggle" title="Browse Categories">
            </ALink>

            <div className="dropdown-menu">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                        <li className={query.category == 'electronics' ? 'active' : ''}><ALink href="#" scroll={false}>Top Management</ALink></li>
                        <li className={query.category == 'gift-idea' ? 'active' : ''}><ALink href="#" scroll={false}>Senior Management</ALink></li>
                        <li className={query.category == 'beds' ? 'active' : ''}><ALink href="#" scroll={false}>Majlis Area</ALink></li>
                        <li className={query.category == 'lighting' ? 'active' : ''}><ALink href="#" scroll={false}>Management Desk & Chairs</ALink></li>
                        <li className={query.category == 'sofas-and-sleeper-sofas' ? 'active' : ''}><ALink href="#" scroll={false}>Workstation & Ergonomic Chairs</ALink></li>
                        <li className={query.category == 'storage' ? 'active' : ''}><ALink href="#" scroll={false}>Formal and Casual Meeting Area</ALink></li>
                        <li className={query.category == 'armchairs-and-chaises' ? 'active' : ''}><ALink href="#" scroll={false}>Collaborative & Public Seating</ALink></li>
                        <li className={query.category == 'decoration' ? 'active' : ''}><ALink href="#" scroll={false}>Training Area & Pantry Area</ALink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoryMenu; 