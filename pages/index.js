import Head from 'next/head'
import Menu from '../components/menu';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Dita Store</title>
            </Head>
            <Menu />
                <div>
                    <h3>Selamat Datang di Dita Store<br/>
                        Pusat Perbelajaan Kebutuhan Wanita.
                    </h3>
                    <h4>Alamat : Jl. Raya Lijen No.137 Olehsari<br/>
                        Instagram : @ditastrore.ds<br/>
                        Wa : 082332135344<br/>
                        Buka Mulai Pukul 08.00 - 15.00 WIB                         
                    </h4>
                </div>
        </div>
    );
}