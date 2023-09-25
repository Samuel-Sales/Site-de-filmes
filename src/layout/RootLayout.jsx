import { Link, Outlet } from "react-router-dom";
import styles from './RootLayout.module.css';

export function RootLayout() {
    return (
        <>
            <header className={styles.header}>
                <h1>Boas-vindas a nossa aplicação de filmes</h1>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                </ul>
            </header>

            {/* Renderizacao das paginas */}
            <Outlet />
            {/*  */}
            
            <footer className={styles.footer}>
                Copyright 2050. Todos os direitos reservados
            </footer>
        </>
    )
}