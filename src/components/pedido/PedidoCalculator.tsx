import React, { useState, useEffect } from 'react';
import { ShoppingBag, Plus, Minus } from 'lucide-react';
import pedidoData from '../../data/pedido.json';
import ubicacionData from '../../data/ubicacion.json';

interface Pedido {
  [key: string]: {
    cantidad: number;
    unidades?: number;
  };
}

const PedidoCalculator: React.FC = () => {
  const [pedido, setPedido] = useState<Pedido>({});

  const actualizarCantidad = (productoId: string, delta: number, unidades?: number) => {
    setPedido(prevPedido => {
      const nuevaCantidad = (prevPedido[productoId]?.cantidad || 0) + delta;
      
      if (nuevaCantidad <= 0) {
        const { [productoId]: _, ...restoPedido } = prevPedido;
        return restoPedido;
      }

      return {
        ...prevPedido,
        [productoId]: {
          cantidad: nuevaCantidad,
          unidades: unidades
        }
      };
    });
  };

  const calcularTotal = () => {
    return Object.entries(pedido).reduce((total, [productoId, { cantidad, unidades }]) => {
      const categoria = pedidoData.categorias.find(cat => 
        cat.items.some(item => item.id === productoId)
      );
      const producto = categoria?.items.find(item => item.id === productoId);

      if (!producto) return total;

      if ('precios' in producto) {
        return total + (producto.precios[unidades as keyof typeof producto.precios] * cantidad);
      } else if ('precio' in producto) {
        return total + (producto.precio * cantidad);
      }

      return total;
    }, 0);
  };

  const formatearPedidoParaWhatsApp = () => {
    let mensaje = "¡Hola! Quiero hacer el siguiente pedido:\n\n";

    Object.entries(pedido).forEach(([productoId, { cantidad, unidades }]) => {
      const categoria = pedidoData.categorias.find(cat => 
        cat.items.some(item => item.id === productoId)
      );
      const producto = categoria?.items.find(item => item.id === productoId);

      if (producto) {
        if ('precios' in producto) {
          mensaje += `• ${producto.nombre}: ${cantidad} pedidos de ${unidades} unidades\n`;
        } else {
          mensaje += `• ${producto.nombre}: ${cantidad}\n`;
        }
      }
    });

    mensaje += `\nTotal: $${calcularTotal().toLocaleString()}`;
    return encodeURIComponent(mensaje);
  };

  const enviarPedidoWhatsApp = () => {
    const whatsappNumber = ubicacionData.whatsapp.replace(/\+/g, '').replace(/\s/g, '');
    const mensaje = formatearPedidoParaWhatsApp();
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Armá tu Pedido</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Seleccioná tus piezas favoritas y armá tu pedido a medida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {pedidoData.categorias.map((categoria) => (
              <div key={categoria.id} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 font-heading">{categoria.nombre}</h3>
                <div className="space-y-4">
                  {categoria.items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg p-4 flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.nombre}</h4>
                        {'precios' in item ? (
                          <p className="text-sm text-text-light">
                            x5: ${item.precios[5].toLocaleString()} - x10: ${item.precios[10].toLocaleString()}
                          </p>
                        ) : (
                          <p className="text-sm text-text-light">${item.precio.toLocaleString()}</p>
                        )}
                      </div>
                      <div className="flex items-center space-x-4">
                        {'precios' in item && (
                          <select
                            className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-sm"
                            value={pedido[item.id]?.unidades || 5}
                            onChange={(e) => {
                              const cantidad = pedido[item.id]?.cantidad || 0;
                              setPedido(prev => ({
                                ...prev,
                                [item.id]: { cantidad, unidades: Number(e.target.value) }
                              }));
                            }}
                          >
                            <option value={5}>x5</option>
                            <option value={10}>x10</option>
                          </select>
                        )}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => actualizarCantidad(item.id, -1, pedido[item.id]?.unidades || 5)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{pedido[item.id]?.cantidad || 0}</span>
                          <button
                            onClick={() => actualizarCantidad(item.id, 1, pedido[item.id]?.unidades || 5)}
                            className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 font-heading">Tu Pedido</h3>
              <div className="space-y-4 mb-6">
                {Object.entries(pedido).map(([productoId, { cantidad, unidades }]) => {
                  const categoria = pedidoData.categorias.find(cat => 
                    cat.items.some(item => item.id === productoId)
                  );
                  const producto = categoria?.items.find(item => item.id === productoId);

                  if (!producto) return null;

                  let subtotal = 0;
                  if ('precios' in producto) {
                    subtotal = producto.precios[unidades as keyof typeof producto.precios] * cantidad;
                  } else if ('precio' in producto) {
                    subtotal = producto.precio * cantidad;
                  }

                  return (
                    <div key={productoId} className="flex justify-between text-sm">
                      <span>
                        {producto.nombre}
                        {unidades && ` (${cantidad}x${unidades})`}
                        {!unidades && ` (${cantidad})`}
                      </span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>${calcularTotal().toLocaleString()}</span>
                </div>
                <button
                  onClick={enviarPedidoWhatsApp}
                  disabled={Object.keys(pedido).length === 0}
                  className="w-full py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <ShoppingBag size={20} className="mr-2" />
                  Enviar Pedido por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PedidoCalculator;