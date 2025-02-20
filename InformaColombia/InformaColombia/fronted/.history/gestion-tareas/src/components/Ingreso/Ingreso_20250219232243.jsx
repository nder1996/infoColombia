import React, { useState } from 'react';
import './Ingreso.css'; // Asegúrate de crear este archivo de estilos
import { TabView, TabPanel } from 'primereact/tabview';

const Ingreso = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
    };

    return (

        <div className="login-wrapper">
            <TabView>
                <TabPanel header="Inicio Session">
                    <div className="login-container">
                        <form onSubmit={handleSubmit} className="login-form">
                            <h2 className="login-title">Iniciar Sesión</h2>
                            <div className="input-group">
                                <label htmlFor="username">Usuario</label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                            </div>
                            <button type="submit" className="login-button">Ingresar</button>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
            </TabView>

        </div>
    );
};

export default Ingreso;