"use client";

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import { Button, Card, Form, Input, Select, message, Carousel } from "antd";
import {
  RocketOutlined,
  RobotOutlined,
  ApiOutlined,
  CodeOutlined,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  SendOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const { TextArea } = Input;
const { Option } = Select;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [activeFilter, setActiveFilter] = useState("todos");

  useEffect(() => {
    const chartDom = document.getElementById("results-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["Antes", "Después"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["Tiempo", "Costos", "Errores", "Productividad"],
        },
        series: [
          {
            name: "Antes",
            type: "bar",
            data: [100, 80, 65, 40],
            itemStyle: {
              color: "#9CA3AF",
            },
          },
          {
            name: "Después",
            type: "bar",
            data: [30, 25, 10, 95],
            itemStyle: {
              color: "#3B82F6",
            },
          },
        ],
      };
      myChart.setOption(option);

      window.addEventListener("resize", () => {
        myChart.resize();
      });

      return () => {
        window.removeEventListener("resize", () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, []);

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    messageApi.success("¡Mensaje enviado correctamente!");
    form.resetFields();
  };

  const services = [
    {
      icon: <RocketOutlined className="text-4xl text-blue-500" />,
      title: "Automatización de Procesos",
      description:
        "Optimizamos tus flujos de trabajo con soluciones personalizadas usando n8n.",
    },
    {
      icon: <RobotOutlined className="text-4xl text-blue-500" />,
      title: "Inteligencia Artificial",
      description:
        "Implementamos soluciones de IA para análisis predictivo y toma de decisiones.",
    },
    {
      icon: <ApiOutlined className="text-4xl text-blue-500" />,
      title: "Integración de Sistemas",
      description:
        "Conectamos tus aplicaciones existentes para un flujo de datos sin interrupciones.",
    },
    {
      icon: <CodeOutlined className="text-4xl text-blue-500" />,
      title: "Desarrollo a Medida",
      description:
        "Creamos soluciones tecnológicas adaptadas a tus necesidades específicas.",
    },
    {
      icon: <QuestionCircleOutlined className="text-4xl text-blue-500" />,
      title: "Consultoría Tecnológica",
      description:
        "Asesoramiento experto para la transformación digital de tu empresa.",
    },
    {
      icon: <CustomerServiceOutlined className="text-4xl text-blue-500" />,
      title: "Soporte Continuo",
      description:
        "Acompañamiento técnico permanente para garantizar el funcionamiento óptimo.",
    },
  ];

  const useCases = [
    {
      title: "Automatización de Marketing",
      description:
        "Integración de CRM, redes sociales y email marketing para campañas automatizadas.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029257/images/ebcabde8d270d5dbd1baf438efde7366_g0jcng.jpg",
    },
    {
      title: "Procesamiento de Datos",
      description:
        "Extracción, transformación y carga de datos entre múltiples fuentes de forma automática.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029308/images/1f8e2a8e9fd1173ea3b5491778b725e9_kwnuzb.jpg",
    },
    {
      title: "Monitoreo de Sistemas",
      description:
        "Alertas y notificaciones automáticas sobre el estado de tus sistemas y servicios.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029400/images/7f192424a81407e7c082ee7a672bfc8a_lkbgdr.jpg",
    },
    {
      title: "Gestión de Clientes",
      description:
        "Automatización del seguimiento y atención al cliente para mejorar la experiencia.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029473/images/c49f0fa8f865e29e45a7a187a9187105_pbmi2n.jpg",
    },
  ];

  const projects = [
    {
      title: "Sistema de Reservas Automatizado",
      category: "automatizacion",
      description:
        "Plataforma integrada para gestión de reservas con confirmaciones automáticas.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029635/images/fd88186086d242bc9799a067b7dfa954_c0octb.jpg",
    },
    {
      title: "Asistente Virtual con IA",
      category: "ia",
      description:
        "Chatbot inteligente para atención al cliente 24/7 con aprendizaje continuo.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029703/images/71dc1cbb90f6582793afd08024cb95bb_dyyyfv.jpg",
    },
    {
      title: "Dashboard Analítico",
      category: "desarrollo",
      description:
        "Panel de control con métricas en tiempo real para toma de decisiones.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029808/images/627eab9ca50b85e33bf7cf9336b515d9_lfbqhf.jpg",
    },
    {
      title: "Integración ERP-CRM",
      category: "integracion",
      description:
        "Conexión bidireccional entre sistemas empresariales para datos unificados.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029913/images/674c3dfa225748ba1cb743287fb90009_vvvytf.jpg",
    },
    {
      title: "Workflow de Aprobaciones",
      category: "automatizacion",
      description:
        "Sistema de gestión de aprobaciones con notificaciones y seguimiento.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029954/images/cfb60979ea0d3ed6158b9899ac7e2265_hxupa4.jpg",
    },
    {
      title: "Plataforma E-learning",
      category: "desarrollo",
      description:
        "Sistema de aprendizaje online con seguimiento automático de progreso.",
      image:
        "https://res.cloudinary.com/dxfksb8ua/image/upload/v1745030028/images/c3aeda4f22ae1ec39100bad1935d89ac_ufxtdb.jpg",
    },
  ];

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {contextHolder}

      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <RocketOutlined className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  IA Kisler Automatizaciones
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Servicios
              </a>
              <a
                href="#casos"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Casos de Uso
              </a>
              <a
                href="#proyectos"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                Contacto
              </a>
              <Button
                type="primary"
                className="bg-blue-500 !rounded-button whitespace-nowrap"
                size="middle"
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dxfksb8ua/image/upload/v1745029032/images/ec2aee91c29b66c89d53c55a113dba5d_ryuw1s.jpg"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Automatización Inteligente con N8N
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Transformamos tu negocio con soluciones de automatización
                avanzadas. Conectamos tus aplicaciones, optimizamos tus procesos
                y potenciamos tu productividad.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  type="primary"
                  size="large"
                  className="bg-blue-600 !rounded-button whitespace-nowrap"
                >
                  Comenzar Ahora
                </Button>
                <Button
                  size="large"
                  className="!rounded-button whitespace-nowrap"
                >
                  Ver Demostraciones
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de automatización e inteligencia
              artificial para optimizar tus procesos de negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                variant="outlined"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Casos de Uso con N8N
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo nuestras soluciones de automatización resuelven
              problemas reales del negocio.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {useCases.map((useCase, index) => (
              <SwiperSlide key={index}>
                <Card
                  className="h-full shadow-sm hover:shadow-md transition-shadow duration-300"
                  cover={
                    <div className="h-48 overflow-hidden">
                      <img
                        alt={useCase.title}
                        src={useCase.image}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  }
                  variant="outlined"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Resultados Comprobados
              </h3>
              <div id="results-chart" style={{ height: "400px" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestra galería de proyectos exitosos implementados para
              clientes de diversos sectores.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "todos"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-gray-300 rounded-l-lg cursor-pointer !rounded-button whitespace-nowrap`}
                onClick={() => setActiveFilter("todos")}
              >
                Todos
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "automatizacion"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border-t border-b border-r border-gray-300 cursor-pointer !rounded-button whitespace-nowrap`}
                onClick={() => setActiveFilter("automatizacion")}
              >
                Automatización
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "ia"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border-t border-b border-r border-gray-300 cursor-pointer !rounded-button whitespace-nowrap`}
                onClick={() => setActiveFilter("ia")}
              >
                IA
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "integracion"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border-t border-b border-r border-gray-300 cursor-pointer !rounded-button whitespace-nowrap`}
                onClick={() => setActiveFilter("integracion")}
              >
                Integración
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === "desarrollo"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border-t border-b border-r border-gray-300 rounded-r-lg cursor-pointer !rounded-button whitespace-nowrap`}
                onClick={() => setActiveFilter("desarrollo")}
              >
                Desarrollo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contáctanos
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Estamos listos para ayudarte a transformar tu negocio con
                soluciones de automatización inteligente.
              </p>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-blue-500 mt-1 mr-3"></i>
                    <p className="text-gray-600">
                      Santa Eduviges 36-26, Caracas
                    </p>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone-alt text-blue-500 mt-1 mr-3"></i>
                    <p className="text-gray-600">+58 424 287 0937</p>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope text-blue-500 mt-1 mr-3"></i>
                    <p className="text-gray-600">kisler.tecnologia@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Horario de Atención
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunes - Viernes:</span>
                    <span className="text-gray-800 font-medium">
                      9:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábado:</span>
                    <span className="text-gray-800 font-medium">
                      10:00 - 14:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingo:</span>
                    <span className="text-gray-800 font-medium">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Envíanos un Mensaje
              </h3>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                  name="name"
                  label="Nombre"
                  rules={[
                    { required: true, message: "Por favor ingresa tu nombre" },
                  ]}
                >
                  <Input placeholder="Tu nombre" className="rounded" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Correo Electrónico"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa tu correo electrónico",
                    },
                    {
                      type: "email",
                      message: "Ingresa un correo electrónico válido",
                    },
                  ]}
                >
                  <Input placeholder="tu@email.com" className="rounded" />
                </Form.Item>

                <Form.Item name="company" label="Empresa">
                  <Input
                    placeholder="Nombre de tu empresa"
                    className="rounded"
                  />
                </Form.Item>

                <Form.Item name="service" label="Servicio de Interés">
                  <Select placeholder="Selecciona un servicio">
                    <Option value="automatizacion">
                      Automatización de Procesos
                    </Option>
                    <Option value="ia">Inteligencia Artificial</Option>
                    <Option value="integracion">Integración de Sistemas</Option>
                    <Option value="desarrollo">Desarrollo a Medida</Option>
                    <Option value="consultoria">Consultoría Tecnológica</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Mensaje"
                  rules={[
                    { required: true, message: "Por favor ingresa tu mensaje" },
                  ]}
                >
                  <TextArea
                    placeholder="Cuéntanos sobre tu proyecto o necesidad"
                    rows={4}
                    className="rounded"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SendOutlined />}
                    size="large"
                    className="w-full bg-blue-500 !rounded-button whitespace-nowrap"
                  >
                    Enviar Mensaje
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <RocketOutlined className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">IA Automatiza</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformamos negocios a través de la automatización inteligente
                y soluciones de IA personalizadas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/ekracing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <TwitterOutlined className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/emisael-kisler-fullstack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <LinkedinOutlined className="text-xl" />
                </a>
                <a
                  href="https://github.com/ekisler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <GithubOutlined className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/kisler_tecnologia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <InstagramOutlined className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Automatización de Procesos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Inteligencia Artificial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Integración de Sistemas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Desarrollo a Medida
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Consultoría Tecnológica
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#casos"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Casos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Boletín Informativo
              </h3>
              <p className="text-gray-400 mb-4">
                Suscríbete para recibir noticias y actualizaciones sobre
                automatización e IA.
              </p>
              <div className="flex">
                <Input
                  placeholder="Tu correo electrónico"
                  className="rounded-l border-gray-700 bg-gray-700 text-white"
                />
                <Button
                  type="primary"
                  className="rounded-r border-blue-500 bg-blue-500 !rounded-button whitespace-nowrap"
                >
                  Suscribir
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 IA Kisler Automatizaciones. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 mt-4 md:mt-0">
              Desarrollado por{" "}
              <span className="text-blue-400">Emisael Kisler</span> |
              Desarrollador Fullstack
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
