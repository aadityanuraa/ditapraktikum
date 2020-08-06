import Head from 'next/head'
import Menu from '../components/menu';

export default function Tentang() {
    return (
        <div>
            <Head>
                <title>Tentang Kami</title>
            </Head>
            <Menu />
                <div>
                    <h2>Tentang Kami</h2>
                    <h4>Mulai dari pakaian seperti dress, tunik, celana dan kulot
                        dengan bahan yang berkualitas.<br/>
                        Dan di Dita Store juga menyediakan tas berbagai macam model.
                        Semua Barang Pre-Order dan siap antar ke seluruh Indonesia.
                    </h4>

                </div>
        </div>
    );
}
       