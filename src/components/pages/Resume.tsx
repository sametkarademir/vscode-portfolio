"use client";

import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "SHFT",
    period: "2024 — Günümüz",
    location: "İstanbul, Türkiye",
    description:
      ".NET Core ve ABP Framework ile microservice ve monolitik mimarilerde backend servisleri geliştiriyorum. Clean Architecture ve CQRS pattern'leri uygulayarak ölçeklenebilir sistemler tasarlıyorum. React, Next.js ve Tailwind CSS ile admin panelleri, dashboard'lar ve kullanıcı arayüzleri oluşturuyorum. AWS Lambda, SQS, S3 ve CloudWatch ile production ortamlarını yönetiyor, GitHub Actions ve Jenkins ile CI/CD süreçlerini sürdürüyorum.",
  },
  {
    title: "Software Developer",
    company: "İtechrobotics",
    period: "2023 — 2023",
    location: "İstanbul, Türkiye",
    description:
      ".NET ve ABP Framework kullanarak kurumsal uygulamalar geliştirdim. Docker üzerinde deploy edilen microservice'leri tasarlayıp sürdürdüm. GitHub Actions ile CI/CD pipeline'ları kurarak test, code review ve otomasyon süreçleriyle kod kalitesini artırdım.",
  },
  {
    title: "Software Developer",
    company: "WifiSpot Network Management Solutions",
    period: "2022 — 2023",
    location: "İstanbul, Türkiye",
    description:
      "Ağ yönetim platformları için backend servisleri ve REST API'ler geliştirdim. Node.js ve .NET tabanlı sistemler üzerinde çalışarak yazılım altyapısını ağ bileşenleriyle entegre ettim.",
  },
  {
    title: "Network System Engineer",
    company: "Doğan Trend Otomotiv",
    period: "2022 — 2022",
    location: "İstanbul, Türkiye",
    description:
      "Kurumsal ağ ve sistem altyapısını yönettim. WAN/LAN tasarımı ve routing çözümlerini uygulayarak güvenli ve kesintisiz IT operasyonlarının sürekliliğini sağladım.",
  },
  {
    title: "Network Security Engineer",
    company: "Teknosa",
    period: "2021 — 2022",
    location: "İstanbul, Türkiye",
    description:
      "Kurumsal firewall, VPN ve güvenlik altyapısını yönettim. SIEM çözümleri ve incident response süreçleriyle olay müdahale operasyonlarını yürüttüm. Güvenlik politikaları ve izleme sistemlerini tasarlayıp uyguladım.",
  },
  {
    title: "System and Network Specialist",
    company: "Arvato Supply Chain Solutions",
    period: "2020 — 2021",
    location: "İstanbul, Türkiye",
    description:
      "Tedarik zinciri operasyonlarının IT altyapısını ve sistem güvenliğini yönettim. Sunucu, ağ ve erişim yönetimi süreçlerinden sorumlu olarak kesintisiz operasyonu sağladım.",
  },
  {
    title: "System and Network Manager",
    company: "Doğan Hukuk Bürosu",
    period: "2020 — 2021",
    location: "İstanbul, Türkiye",
    description:
      "Hukuk bürosunun tüm IT altyapısını ve sistem güvenliğini yönettim. Sunucu, ağ ve erişim yönetimi ile veri güvenliği politikalarını oluşturup uyguladım.",
  },
  {
    title: "System and Network Specialist",
    company: "Turkish Armed Forces (TSK)",
    period: "2015 — 2019",
    location: "İstanbul, Türkiye",
    description:
      "Kritik ortamlarda güvenli sistem ve ağ altyapısını yönettim. Bilgi güvenliği standartlarına uygun olarak operasyonel sürekliliği sağladım.",
  },
];

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-yellow/10">
              <Briefcase className="w-5 h-5 text-accent-yellow" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              İş Deneyimi
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-default to-transparent" />
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px bg-gradient-to-b from-accent-yellow/50 via-accent-yellow/30 to-transparent hidden md:block"
            aria-hidden
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const card = (
                <div className="rounded-2xl p-6 bg-bg-secondary border border-border-default hover:border-accent-yellow/40 transition-colors duration-200 w-full min-w-0">
                  <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-4 mb-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {exp.title}
                      </h3>
                      <p className="text-accent-yellow font-medium">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right shrink-0">
                      <span className="text-sm text-text-muted">{exp.period}</span>
                      <p className="text-sm text-text-muted">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );

              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-0"
                >
                  <div className={`w-full min-w-0 md:flex-1 md:pr-8 flex ${!isLeft ? "hidden md:flex" : ""}`}>
                    {isLeft ? <div className="w-full min-w-0">{card}</div> : null}
                  </div>

                  <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-accent-yellow border-2 border-bg-primary relative z-10" />

                  <div className={`w-full min-w-0 md:flex-1 md:pl-8 flex ${isLeft ? "hidden md:flex" : ""}`}>
                    {!isLeft ? <div className="w-full min-w-0">{card}</div> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
