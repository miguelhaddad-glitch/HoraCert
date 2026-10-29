// ==========================================================================
// HoraCerta Escolar - Vanilla JavaScript Application
// Horários: 07:30 às 17:30 (com Intervalos e Almoço) - Sem Nomes de Professores
// ==========================================================================

const DEFAULT_SCHEDULE = [
  // SEGUNDA-FEIRA (Day 1)
  { id: 'sch-1-01', dayOfWeek: 1, slotNumber: 1, startTime: '07:30', endTime: '08:15', subject: 'Matemática', room: 'Sala 301', status: 'normal', topic: 'Geometria Analítica' },
  { id: 'sch-1-02', dayOfWeek: 1, slotNumber: 2, startTime: '08:15', endTime: '09:00', subject: 'Matemática', room: 'Sala 301', status: 'normal', topic: 'Exercícios ENEM' },
  { id: 'sch-1-03', dayOfWeek: 1, slotNumber: 3, startTime: '09:00', endTime: '09:45', subject: 'Física', room: 'Sala 108', originalRoom: 'Lab de Física', status: 'room_changed', topic: 'Eletrodinâmica', note: '🚨 Atenção: Mudança para Sala 108 devido à manutenção elétrica.' },
  { id: 'sch-1-b1', dayOfWeek: 1, isBreak: true, startTime: '09:45', endTime: '10:00', subject: '☕ Intervalo / Recreio', room: 'Pátio Central', status: 'normal' },
  { id: 'sch-1-04', dayOfWeek: 1, slotNumber: 4, startTime: '10:00', endTime: '10:45', subject: 'Redação', room: 'Sala 301', status: 'normal', topic: 'Proposta de Intervenção' },
  { id: 'sch-1-05', dayOfWeek: 1, slotNumber: 5, startTime: '10:45', endTime: '11:30', subject: 'Biologia', room: 'Lab de Ciências', status: 'normal', topic: 'Genética Mendeliana' },
  { id: 'sch-1-06', dayOfWeek: 1, slotNumber: 6, startTime: '11:30', endTime: '12:15', subject: 'Química', room: 'Sala 301', status: 'normal', topic: 'Termoquímica' },
  { id: 'sch-1-ln', dayOfWeek: 1, isBreak: true, isLunch: true, startTime: '12:15', endTime: '13:30', subject: '🍽️ Almoço', room: 'Refeitório Escolar', status: 'normal' },
  { id: 'sch-1-07', dayOfWeek: 1, slotNumber: 7, startTime: '13:30', endTime: '14:15', subject: 'História', room: 'Sala 301', status: 'normal', topic: 'Era Vargas' },
  { id: 'sch-1-08', dayOfWeek: 1, slotNumber: 8, startTime: '14:15', endTime: '15:00', subject: 'Geografia', room: 'Sala 301', status: 'normal', topic: 'Geopolítica Contemporânea' },
  { id: 'sch-1-09', dayOfWeek: 1, slotNumber: 9, startTime: '15:00', endTime: '15:45', subject: 'Língua Portuguesa', room: 'Sala 301', status: 'normal', topic: 'Modernismo Brasileiro' },
  { id: 'sch-1-b2', dayOfWeek: 1, isBreak: true, startTime: '15:45', endTime: '16:00', subject: '🥪 Intervalo da Tarde', room: 'Pátio', status: 'normal' },
  { id: 'sch-1-10', dayOfWeek: 1, slotNumber: 10, startTime: '16:00', endTime: '16:45', subject: 'Inglês', room: 'Sala de Idiomas', status: 'normal', topic: 'Reading & Connectives' },
  { id: 'sch-1-11', dayOfWeek: 1, slotNumber: 11, startTime: '16:45', endTime: '17:30', subject: 'Filosofia', room: 'Sala 301', status: 'normal', topic: 'Ética Contemporânea' },
  { id: 'sch-1-end', dayOfWeek: 1, isEndDay: true, startTime: '17:30', endTime: '17:30', subject: '🔔 Término das Aulas / Ir Embora', room: 'Portão Principal', status: 'normal' },

  // TERÇA-FEIRA (Day 2)
  { id: 'sch-2-01', dayOfWeek: 2, slotNumber: 1, startTime: '07:30', endTime: '08:15', subject: 'História', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-02', dayOfWeek: 2, slotNumber: 2, startTime: '08:15', endTime: '09:00', subject: 'História', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-03', dayOfWeek: 2, slotNumber: 3, startTime: '09:00', endTime: '09:45', subject: 'Língua Portuguesa', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-b1', dayOfWeek: 2, isBreak: true, startTime: '09:45', endTime: '10:00', subject: '☕ Intervalo / Recreio', room: 'Pátio Central', status: 'normal' },
  { id: 'sch-2-04', dayOfWeek: 2, slotNumber: 4, startTime: '10:00', endTime: '10:45', subject: 'Geografia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-05', dayOfWeek: 2, slotNumber: 5, startTime: '10:45', endTime: '11:30', subject: 'Matemática', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-06', dayOfWeek: 2, slotNumber: 6, startTime: '11:30', endTime: '12:15', subject: 'Física', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-ln', dayOfWeek: 2, isBreak: true, isLunch: true, startTime: '12:15', endTime: '13:30', subject: '🍽️ Almoço', room: 'Refeitório Escolar', status: 'normal' },
  { id: 'sch-2-07', dayOfWeek: 2, slotNumber: 7, startTime: '13:30', endTime: '14:15', subject: 'Química', room: 'Lab de Química', status: 'normal' },
  { id: 'sch-2-08', dayOfWeek: 2, slotNumber: 8, startTime: '14:15', endTime: '15:00', subject: 'Biologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-09', dayOfWeek: 2, slotNumber: 9, startTime: '15:00', endTime: '15:45', subject: 'Redação', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-b2', dayOfWeek: 2, isBreak: true, startTime: '15:45', endTime: '16:00', subject: '🥪 Intervalo da Tarde', room: 'Pátio', status: 'normal' },
  { id: 'sch-2-10', dayOfWeek: 2, slotNumber: 10, startTime: '16:00', endTime: '16:45', subject: 'Sociologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-2-11', dayOfWeek: 2, slotNumber: 11, startTime: '16:45', endTime: '17:30', subject: 'Inglês', room: 'Sala de Idiomas', status: 'normal' },
  { id: 'sch-2-end', dayOfWeek: 2, isEndDay: true, startTime: '17:30', endTime: '17:30', subject: '🔔 Término das Aulas / Ir Embora', room: 'Portão Principal', status: 'normal' },

  // QUARTA-FEIRA (Day 3)
  { id: 'sch-3-01', dayOfWeek: 3, slotNumber: 1, startTime: '07:30', endTime: '08:15', subject: 'Física', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-02', dayOfWeek: 3, slotNumber: 2, startTime: '08:15', endTime: '09:00', subject: 'Química', room: 'Lab de Química', status: 'normal' },
  { id: 'sch-3-03', dayOfWeek: 3, slotNumber: 3, startTime: '09:00', endTime: '09:45', subject: 'Matemática', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-b1', dayOfWeek: 3, isBreak: true, startTime: '09:45', endTime: '10:00', subject: '☕ Intervalo / Recreio', room: 'Pátio Central', status: 'normal' },
  { id: 'sch-3-04', dayOfWeek: 3, slotNumber: 4, startTime: '10:00', endTime: '10:45', subject: 'Filosofia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-05', dayOfWeek: 3, slotNumber: 5, startTime: '10:45', endTime: '11:30', subject: 'Sociologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-06', dayOfWeek: 3, slotNumber: 6, startTime: '11:30', endTime: '12:15', subject: 'Biologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-ln', dayOfWeek: 3, isBreak: true, isLunch: true, startTime: '12:15', endTime: '13:30', subject: '🍽️ Almoço', room: 'Refeitório Escolar', status: 'normal' },
  { id: 'sch-3-07', dayOfWeek: 3, slotNumber: 7, startTime: '13:30', endTime: '14:15', subject: 'História', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-08', dayOfWeek: 3, slotNumber: 8, startTime: '14:15', endTime: '15:00', subject: 'Língua Portuguesa', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-09', dayOfWeek: 3, slotNumber: 9, startTime: '15:00', endTime: '15:45', subject: 'Geografia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-b2', dayOfWeek: 3, isBreak: true, startTime: '15:45', endTime: '16:00', subject: '🥪 Intervalo da Tarde', room: 'Pátio', status: 'normal' },
  { id: 'sch-3-10', dayOfWeek: 3, slotNumber: 10, startTime: '16:00', endTime: '16:45', subject: 'Educação Física', room: 'Quadra Poliesportiva', status: 'normal' },
  { id: 'sch-3-11', dayOfWeek: 3, slotNumber: 11, startTime: '16:45', endTime: '17:30', subject: 'Redação', room: 'Sala 301', status: 'normal' },
  { id: 'sch-3-end', dayOfWeek: 3, isEndDay: true, startTime: '17:30', endTime: '17:30', subject: '🔔 Término das Aulas / Ir Embora', room: 'Portão Principal', status: 'normal' },

  // QUINTA-FEIRA (Day 4)
  { id: 'sch-4-01', dayOfWeek: 4, slotNumber: 1, startTime: '07:30', endTime: '08:15', subject: 'Biologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-02', dayOfWeek: 4, slotNumber: 2, startTime: '08:15', endTime: '09:00', subject: 'Biologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-03', dayOfWeek: 4, slotNumber: 3, startTime: '09:00', endTime: '09:45', subject: 'Redação', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-b1', dayOfWeek: 4, isBreak: true, startTime: '09:45', endTime: '10:00', subject: '☕ Intervalo / Recreio', room: 'Pátio Central', status: 'normal' },
  { id: 'sch-4-04', dayOfWeek: 4, slotNumber: 4, startTime: '10:00', endTime: '10:45', subject: 'Educação Física', room: 'Quadra Poliesportiva', status: 'normal' },
  { id: 'sch-4-05', dayOfWeek: 4, slotNumber: 5, startTime: '10:45', endTime: '11:30', subject: 'Matemática', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-06', dayOfWeek: 4, slotNumber: 6, startTime: '11:30', endTime: '12:15', subject: 'Física', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-ln', dayOfWeek: 4, isBreak: true, isLunch: true, startTime: '12:15', endTime: '13:30', subject: '🍽️ Almoço', room: 'Refeitório Escolar', status: 'normal' },
  { id: 'sch-4-07', dayOfWeek: 4, slotNumber: 7, startTime: '13:30', endTime: '14:15', subject: 'Química', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-08', dayOfWeek: 4, slotNumber: 8, startTime: '14:15', endTime: '15:00', subject: 'História', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-09', dayOfWeek: 4, slotNumber: 9, startTime: '15:00', endTime: '15:45', subject: 'Geografia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-b2', dayOfWeek: 4, isBreak: true, startTime: '15:45', endTime: '16:00', subject: '🥪 Intervalo da Tarde', room: 'Pátio', status: 'normal' },
  { id: 'sch-4-10', dayOfWeek: 4, slotNumber: 10, startTime: '16:00', endTime: '16:45', subject: 'Língua Portuguesa', room: 'Sala 301', status: 'normal' },
  { id: 'sch-4-11', dayOfWeek: 4, slotNumber: 11, startTime: '16:45', endTime: '17:30', subject: 'Artes', room: 'Ateliê de Artes', status: 'normal' },
  { id: 'sch-4-end', dayOfWeek: 4, isEndDay: true, startTime: '17:30', endTime: '17:30', subject: '🔔 Término das Aulas / Ir Embora', room: 'Portão Principal', status: 'normal' },

  // SEXTA-FEIRA (Day 5)
  { id: 'sch-5-01', dayOfWeek: 5, slotNumber: 1, startTime: '07:30', endTime: '08:15', subject: 'Língua Portuguesa', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-02', dayOfWeek: 5, slotNumber: 2, startTime: '08:15', endTime: '09:00', subject: 'Geografia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-03', dayOfWeek: 5, slotNumber: 3, startTime: '09:00', endTime: '09:45', subject: 'Física', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-b1', dayOfWeek: 5, isBreak: true, startTime: '09:45', endTime: '10:00', subject: '☕ Intervalo / Recreio', room: 'Pátio Central', status: 'normal' },
  { id: 'sch-5-04', dayOfWeek: 5, slotNumber: 4, startTime: '10:00', endTime: '10:45', subject: 'Artes', room: 'Ateliê de Artes', status: 'normal' },
  { id: 'sch-5-05', dayOfWeek: 5, slotNumber: 5, startTime: '10:45', endTime: '11:30', subject: 'Química', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-06', dayOfWeek: 5, slotNumber: 6, startTime: '11:30', endTime: '12:15', subject: 'Matemática', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-ln', dayOfWeek: 5, isBreak: true, isLunch: true, startTime: '12:15', endTime: '13:30', subject: '🍽️ Almoço', room: 'Refeitório Escolar', status: 'normal' },
  { id: 'sch-5-07', dayOfWeek: 5, slotNumber: 7, startTime: '13:30', endTime: '14:15', subject: 'Biologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-08', dayOfWeek: 5, slotNumber: 8, startTime: '14:15', endTime: '15:00', subject: 'História', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-09', dayOfWeek: 5, slotNumber: 9, startTime: '15:00', endTime: '15:45', subject: 'Redação', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-b2', dayOfWeek: 5, isBreak: true, startTime: '15:45', endTime: '16:00', subject: '🥪 Intervalo da Tarde', room: 'Pátio', status: 'normal' },
  { id: 'sch-5-10', dayOfWeek: 5, slotNumber: 10, startTime: '16:00', endTime: '16:45', subject: 'Filosofia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-11', dayOfWeek: 5, slotNumber: 11, startTime: '16:45', endTime: '17:30', subject: 'Sociologia', room: 'Sala 301', status: 'normal' },
  { id: 'sch-5-end', dayOfWeek: 5, isEndDay: true, startTime: '17:30', endTime: '17:30', subject: '🔔 Término das Aulas / Ir Embora', room: 'Portão Principal', status: 'normal' }
];

const DEFAULT_NOTICES = [
  {
    id: 'not-01',
    title: '🚨 EMERGÊNCIA: Manutenção no Bloco B - Troca de Salas',
    message: 'Devido à manutenção na rede elétrica do Bloco B, a aula de Física (09:00 às 09:45) foi transferida temporariamente do Laboratório para a Sala 108.',
    category: 'room_change',
    urgency: 'emergency',
    isEmergency: true,
    author: 'Coordenação Pedagógica',
    date: 'Hoje, 07:15',
    affectedRooms: 'Lab de Física ➔ Sala 108'
  },
  {
    id: 'not-02',
    title: 'Simulado Geral ENEM 2026',
    message: 'Estão abertas as inscrições para o Simulado Geral ENEM. O teste ocorrerá no próximo sábado no Auditório Principal.',
    category: 'event',
    urgency: 'normal',
    isEmergency: false,
    author: 'Secretaria Escolar',
    date: 'Ontem, 14:00',
    affectedRooms: 'Auditório Principal'
  },
  {
    id: 'not-03',
    title: 'Prazo da Redação Dissertativa Nota 1000',
    message: 'Lembrete aos alunos do 3º Ano: a proposta de intervenção social sobre "Inteligência Artificial" deve ser entregue na pasta física até sexta-feira.',
    category: 'general',
    urgency: 'normal',
    isEmergency: false,
    author: 'Coordenação de Redação',
    date: '2 dias atrás',
    affectedRooms: 'Sala 301'
  }
];

const DEFAULT_EVENTS = [
  { id: 'evt-01', title: 'Prova Bimestral de Matemática', subject: 'Matemática', type: 'prova', date: '2026-11-04', time: '07:30', room: 'Sala 301', weight: 'Peso 4.0', description: 'Geometria Analítica e Funções Trigonométricas.', completed: false },
  { id: 'evt-02', title: 'Entrega da Redação Nota 1000', subject: 'Redação', type: 'trabalho', date: '2026-11-06', time: '10:00', room: 'Sala 301', weight: 'Peso 3.0', description: 'Texto dissertativo de até 30 linhas com proposta de intervenção.', completed: true },
  { id: 'evt-03', title: 'Seminário de História: Guerras do Século XX', subject: 'História', type: 'apresentacao', date: '2026-11-10', time: '13:30', room: 'Auditório 2', weight: 'Peso 2.5', description: 'Apresentação em equipe com slides.', completed: false }
];

// App State
const state = {
  activeTab: 'dashboard',
  selectedDay: 1, // 1 = Segunda
  schedule: JSON.parse(localStorage.getItem('horacerta_pure_schedule')) || DEFAULT_SCHEDULE,
  notices: JSON.parse(localStorage.getItem('horacerta_pure_notices')) || DEFAULT_NOTICES,
  events: JSON.parse(localStorage.getItem('horacerta_pure_events')) || DEFAULT_EVENTS,
  editingClassId: null,
  classToDuplicate: null,
  classToSwap: null
};

// Save state to localStorage
const saveState = () => {
  localStorage.setItem('horacerta_pure_schedule', JSON.stringify(state.schedule));
  localStorage.setItem('horacerta_pure_notices', JSON.stringify(state.notices));
  localStorage.setItem('horacerta_pure_events', JSON.stringify(state.events));
};

// Audio chime using Web Audio API
const playChime = (type = 'normal') => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'emergency') {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.type = 'sawtooth';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(880, ctx.currentTime);
      osc2.frequency.setValueAtTime(1174, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.35);
      osc2.stop(ctx.currentTime + 0.35);
    } else {
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.45);
      });
    }
  } catch (e) {
    console.warn(e);
  }
};

// Show floating notification toast
const showToast = (title, message, type = 'normal') => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  playChime(type);

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'emergency' ? 'emergency' : ''}`;
  toast.innerHTML = `
    <div style="font-weight: 800; font-size: 13px; color: ${type === 'emergency' ? '#991b1b' : '#1e293b'}">${title}</div>
    <div style="font-size: 12px; color: #475569; margin-top: 3px;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
};

// Tab Switching
const switchTab = (tabId) => {
  state.activeTab = tabId;
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn, .dock-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  const target = document.getElementById(`tab-${tabId}`);
  if (target) target.classList.add('active');

  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Render Emergency Banner
const renderEmergencyBanner = () => {
  const emergencyNotice = state.notices.find(n => n.isEmergency);
  const banner = document.getElementById('emergency-banner');
  if (!banner) return;

  if (emergencyNotice) {
    banner.classList.add('active');
    document.getElementById('emergency-title').textContent = emergencyNotice.title;
    document.getElementById('emergency-rooms').textContent = emergencyNotice.affectedRooms ? `Alteração: ${emergencyNotice.affectedRooms}` : '';
  } else {
    banner.classList.remove('active');
  }
};

// Render Dashboard
const renderDashboard = () => {
  const dayClasses = state.schedule.filter(c => c.dayOfWeek === 1);
  const nextClass = dayClasses.find(c => c.status === 'room_changed') || dayClasses[0];

  // Next Class Card
  const nextCard = document.getElementById('dashboard-next-class');
  if (nextCard && nextClass) {
    const isRoomChanged = nextClass.status === 'room_changed';
    nextCard.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 10px; flex: 1;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="background: var(--primary-blue); color: white; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: var(--radius-full); text-transform: uppercase;">
            Próxima Aula
          </span>
          ${isRoomChanged ? '<span style="background: var(--emergency-red-light); color: var(--emergency-red); border: 1px solid var(--emergency-red-border); font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: var(--radius-full);">🚨 Sala Alterada!</span>' : ''}
          <span style="font-size: 12px; font-weight: 600; color: var(--slate-500);">${nextClass.startTime} às ${nextClass.endTime}</span>
        </div>
        <h2 style="font-size: 26px; font-weight: 900; color: var(--slate-900); letter-spacing: -0.5px;">${nextClass.subject}</h2>
        ${nextClass.topic ? `<p style="font-size: 13px; color: var(--slate-600);">Conteúdo: <strong>${nextClass.topic}</strong></p>` : ''}
        ${nextClass.note ? `<div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 8px 12px; font-size: 12px; color: #991b1b; border-radius: 0 8px 8px 0; margin-top: 4px;">${nextClass.note}</div>` : ''}
      </div>

      <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 18px; text-align: center; min-width: 220px;">
        <span style="font-size: 11px; text-transform: uppercase; font-weight: 800; color: var(--slate-400); display: block; margin-bottom: 4px;">Onde ir:</span>
        <div style="font-size: 24px; font-weight: 900; color: var(--slate-900);">${nextClass.room}</div>
        ${nextClass.originalRoom && nextClass.originalRoom !== nextClass.room ? `<div style="font-size: 11px; color: var(--emergency-red); text-decoration: line-through; margin-top: 2px;">Era: ${nextClass.originalRoom}</div>` : ''}
        <button onclick="showToast('Lembrete de Aula', 'Aula de ${nextClass.subject} na ${nextClass.room} às ${nextClass.startTime}.', 'normal')" class="btn btn-green" style="width: 100%; margin-top: 12px;">
          Lembrar 5 min antes
        </button>
      </div>
    `;
  }

  // Daily Timeline
  const timeline = document.getElementById('dashboard-timeline');
  if (timeline) {
    timeline.innerHTML = dayClasses.map(item => {
      if (item.isEndDay) {
        return `
          <div class="end-card">
            <span>${item.startTime} • ${item.subject}</span>
            <span>Bom descanso! 🎒</span>
          </div>
        `;
      }
      if (item.isBreak) {
        return `
          <div class="${item.isLunch ? 'lunch-card' : 'break-card'}">
            <span>${item.startTime} às ${item.endTime} • ${item.subject}</span>
            <span>${item.room}</span>
          </div>
        `;
      }

      const isChanged = item.status === 'room_changed';
      return `
        <div class="class-card ${isChanged ? 'room-changed' : ''}">
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="background: var(--slate-100); border: 1px solid var(--slate-200); border-radius: 10px; padding: 6px 12px; text-align: center; font-weight: 800; font-size: 12px;">
              <div>${item.startTime}</div>
              <div style="font-size: 10px; color: var(--slate-400); font-weight: normal;">às ${item.endTime}</div>
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: 800; font-size: 15px; color: var(--slate-900);">${item.subject}</span>
                ${isChanged ? '<span style="background: var(--emergency-red); color: white; font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 99px;">SALA ALTERADA</span>' : ''}
              </div>
              ${item.topic ? `<div style="font-size: 12px; color: var(--slate-500); margin-top: 2px;">${item.topic}</div>` : ''}
            </div>
          </div>
          <div>
            <span class="room-badge ${isChanged ? 'emergency' : ''}">${item.room}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Upcoming Exams
  const examsList = document.getElementById('dashboard-exams');
  if (examsList) {
    examsList.innerHTML = state.events.slice(0, 3).map(evt => `
      <div style="border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 12px 14px; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
        <div>
          <div style="font-weight: 800; font-size: 13px; color: var(--slate-800);">${evt.title}</div>
          <div style="font-size: 11px; color: var(--slate-500); margin-top: 2px;">
            <span style="color: var(--primary-blue); font-weight: 700;">${evt.subject}</span> • Data: ${evt.date.split('-').reverse().join('/')} às ${evt.time}
          </div>
        </div>
        <span style="font-size: 11px; font-weight: 700; background: var(--slate-100); padding: 3px 8px; border-radius: 6px;">${evt.room}</span>
      </div>
    `).join('');
  }
};

// Render Schedule View
const renderSchedule = () => {
  const dayClasses = state.schedule
    .filter(c => c.dayOfWeek === state.selectedDay)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const list = document.getElementById('schedule-list');
  if (!list) return;

  if (dayClasses.length === 0) {
    list.innerHTML = `
      <div style="background: white; border: 2px dashed var(--slate-200); border-radius: var(--radius-xl); padding: 40px; text-align: center;">
        <h3 style="font-weight: 800; color: var(--slate-800); font-size: 16px;">Nenhum horário cadastrado para este dia</h3>
        <p style="font-size: 12px; color: var(--slate-500); margin: 6px 0 16px 0;">Clique abaixo para carregar os horários das 07:30 às 17:30.</p>
        <button onclick="resetScheduleToDemo()" class="btn btn-green">Recarregar Horários Padrão</button>
      </div>
    `;
    return;
  }

  list.innerHTML = dayClasses.map(item => {
    if (item.isEndDay) {
      return `
        <div class="end-card">
          <span>${item.startTime} • ${item.subject}</span>
          <span>Fim do dia letivo! 🎒</span>
        </div>
      `;
    }
    if (item.isBreak) {
      return `
        <div class="${item.isLunch ? 'lunch-card' : 'break-card'}">
          <span>${item.startTime} às ${item.endTime} • ${item.subject} (${item.isLunch ? '1h15 min' : '15 min'})</span>
          <span>Local: ${item.room}</span>
        </div>
      `;
    }

    const isChanged = item.status === 'room_changed';
    return `
      <div class="class-card ${isChanged ? 'room-changed' : ''}">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="background: var(--slate-100); border: 1px solid var(--slate-200); border-radius: 10px; padding: 6px 12px; text-align: center; font-weight: 800; font-size: 12px;">
            <div>${item.startTime}</div>
            <div style="font-size: 10px; color: var(--slate-400); font-weight: normal;">às ${item.endTime}</div>
            ${item.slotNumber ? `<div style="font-size: 9px; color: var(--primary-blue); font-weight: 800; text-transform: uppercase;">${item.slotNumber}º Tempo</div>` : ''}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-weight: 800; font-size: 16px; color: var(--slate-900);">${item.subject}</span>
              ${isChanged ? '<span style="background: var(--emergency-red); color: white; font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 99px;">SALA ALTERADA</span>' : ''}
            </div>
            ${item.topic ? `<div style="font-size: 12px; color: var(--slate-500); margin-top: 2px;">${item.topic}</div>` : ''}
            ${item.note ? `<div style="font-size: 11px; color: #b91c1c; font-weight: 600; margin-top: 2px;">${item.note}</div>` : ''}
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="room-badge ${isChanged ? 'emergency' : ''}">${item.room}</span>
          <button onclick="openEditModal('${item.id}')" class="btn btn-outline" style="padding: 6px 10px;" title="Editar horário">✏️</button>
          <button onclick="openDuplicateModal('${item.id}')" class="btn btn-outline" style="padding: 6px 10px;" title="Duplicar para outro dia">📋</button>
          <button onclick="deleteClass('${item.id}')" class="btn btn-outline" style="padding: 6px 10px; color: var(--emergency-red);" title="Excluir">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
};

// Render Calendar / Events
const renderCalendar = () => {
  const container = document.getElementById('calendar-list');
  if (!container) return;

  container.innerHTML = state.events.map(evt => `
    <div style="background: white; border: 1px solid var(--slate-200); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
      <div style="display: flex; align-items: center; gap: 14px;">
        <input type="checkbox" ${evt.completed ? 'checked' : ''} onchange="toggleEventCompletion('${evt.id}')" style="width: 18px; height: 18px; cursor: pointer;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 800; font-size: 15px; color: var(--slate-900); ${evt.completed ? 'text-decoration: line-through; color: var(--slate-400);' : ''}">${evt.title}</span>
            <span style="background: var(--primary-blue-light); color: var(--primary-blue); font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">${evt.subject}</span>
          </div>
          <div style="font-size: 12px; color: var(--slate-500); margin-top: 4px;">
            📅 Data: ${evt.date.split('-').reverse().join('/')} às ${evt.time} • Local: <strong>${evt.room}</strong> • ${evt.weight}
          </div>
          ${evt.description ? `<p style="font-size: 12px; color: var(--slate-600); margin-top: 4px;">${evt.description}</p>` : ''}
        </div>
      </div>
      <div>
        <button onclick="deleteEvent('${evt.id}')" class="btn btn-outline" style="padding: 6px 10px; color: var(--emergency-red);">Excluir</button>
      </div>
    </div>
  `).join('');
};

// Render Notices
const renderNotices = () => {
  const feed = document.getElementById('notices-feed');
  if (!feed) return;

  feed.innerHTML = state.notices.map(n => `
    <div style="background: white; border: 1px solid ${n.isEmergency ? 'var(--emergency-red-border)' : 'var(--slate-200)'}; border-radius: var(--radius-lg); padding: 18px; margin-bottom: 14px; position: relative; overflow: hidden; ${n.isEmergency ? 'background: #fffafa;' : ''}">
      ${n.isEmergency ? '<div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--emergency-red);"></div>' : ''}
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
        ${n.isEmergency ? '<span style="background: var(--emergency-red); color: white; font-size: 10px; font-weight: 900; padding: 2px 8px; border-radius: 99px;">EMERGÊNCIA</span>' : '<span style="background: var(--primary-blue-light); color: var(--primary-blue); font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 99px;">COMUNICADO</span>'}
        <span style="font-size: 11px; color: var(--slate-400);">${n.date}</span>
      </div>
      <h3 style="font-size: 16px; font-weight: 800; color: var(--slate-900); margin-bottom: 4px;">${n.title}</h3>
      <p style="font-size: 13px; color: var(--slate-700); line-height: 1.5;">${n.message}</p>
      ${n.affectedRooms ? `<div style="margin-top: 8px; font-size: 12px; font-weight: 700; color: #b45309; background: var(--warning-amber-light); padding: 4px 10px; border-radius: 6px; display: inline-block;">📍 ${n.affectedRooms}</div>` : ''}
    </div>
  `).join('');
};

// Render Current View
const renderCurrentView = () => {
  renderEmergencyBanner();
  if (state.activeTab === 'dashboard') renderDashboard();
  if (state.activeTab === 'schedule') renderSchedule();
  if (state.activeTab === 'calendar') renderCalendar();
  if (state.activeTab === 'notices') renderNotices();
};

// Actions: Class CRUD
const openAddModal = () => {
  state.editingClassId = null;
  document.getElementById('modal-class-title').textContent = 'Adicionar Novo Horário';
  document.getElementById('form-subject').value = 'Matemática';
  document.getElementById('form-start-time').value = '07:30';
  document.getElementById('form-end-time').value = '08:15';
  document.getElementById('form-room').value = 'Sala 301';
  document.getElementById('form-topic').value = '';
  document.getElementById('form-day').value = state.selectedDay;
  document.getElementById('class-modal').classList.add('active');
};

const openEditModal = (id) => {
  const item = state.schedule.find(c => c.id === id);
  if (!item) return;

  state.editingClassId = id;
  document.getElementById('modal-class-title').textContent = 'Personalizar Horário';
  document.getElementById('form-subject').value = item.subject;
  document.getElementById('form-start-time').value = item.startTime;
  document.getElementById('form-end-time').value = item.endTime;
  document.getElementById('form-room').value = item.room;
  document.getElementById('form-topic').value = item.topic || '';
  document.getElementById('form-day').value = item.dayOfWeek;
  document.getElementById('class-modal').classList.add('active');
};

const saveClassForm = (e) => {
  e.preventDefault();
  const subject = document.getElementById('form-subject').value.trim();
  const startTime = document.getElementById('form-start-time').value;
  const endTime = document.getElementById('form-end-time').value;
  const room = document.getElementById('form-room').value.trim();
  const topic = document.getElementById('form-topic').value.trim();
  const dayOfWeek = Number(document.getElementById('form-day').value);

  if (state.editingClassId) {
    state.schedule = state.schedule.map(c => c.id === state.editingClassId ? { ...c, subject, startTime, endTime, room, topic, dayOfWeek } : c);
    showToast('Horário Atualizado!', `${subject} (${startTime} - ${endTime}) salvo.`, 'normal');
  } else {
    const newClass = {
      id: 'sch-' + Date.now(),
      dayOfWeek,
      startTime,
      endTime,
      subject,
      room,
      topic,
      status: 'normal'
    };
    state.schedule.push(newClass);
    showToast('Horário Cadastrado!', `${subject} adicionada à grade.`, 'normal');
  }

  saveState();
  closeModals();
  renderCurrentView();
};

const deleteClass = (id) => {
  if (confirm('Deseja excluir este horário da sua grade?')) {
    state.schedule = state.schedule.filter(c => c.id !== id);
    saveState();
    renderCurrentView();
    showToast('Horário Removido', 'A aula foi excluída.', 'normal');
  }
};

const openDuplicateModal = (id) => {
  state.classToDuplicate = state.schedule.find(c => c.id === id);
  if (!state.classToDuplicate) return;
  document.getElementById('dup-target-day').value = state.selectedDay === 5 ? 1 : state.selectedDay + 1;
  document.getElementById('duplicate-modal').classList.add('active');
};

const saveDuplicateForm = (e) => {
  e.preventDefault();
  if (!state.classToDuplicate) return;

  const targetDay = Number(document.getElementById('dup-target-day').value);
  const duplicated = {
    ...state.classToDuplicate,
    id: 'sch-' + Date.now(),
    dayOfWeek: targetDay,
    status: 'normal'
  };

  state.schedule.push(duplicated);
  saveState();
  closeModals();
  renderCurrentView();
  showToast('Aula Duplicada!', `${duplicated.subject} copiada com sucesso.`, 'normal');
};

const clearSchedule = () => {
  if (confirm('Deseja limpar todos os horários para começar a sua grade do zero?')) {
    state.schedule = [];
    saveState();
    renderCurrentView();
    showToast('Grade Limpa!', 'Cadastre seus próprios horários.', 'normal');
  }
};

const resetScheduleToDemo = () => {
  state.schedule = [...DEFAULT_SCHEDULE];
  saveState();
  renderCurrentView();
  showToast('Horários Recarregados!', 'Grade oficial das 07:30 às 17:30 restaurada.', 'normal');
};

const simulateEmergencySwap = () => {
  const target = state.schedule.find(c => c.subject === 'Física') || state.schedule[0];
  if (!target) return;

  target.room = 'Sala 108';
  target.status = 'room_changed';
  target.note = '🚨 Atenção: Mudança para Sala 108 devido à manutenção elétrica.';

  state.notices.unshift({
    id: 'not-' + Date.now(),
    title: '🚨 EMERGÊNCIA: Troca de Sala - Aula de Física',
    message: 'A aula de Física foi transferida do Laboratório para a Sala 108.',
    category: 'room_change',
    urgency: 'emergency',
    isEmergency: true,
    author: 'Coordenação Pedagógica',
    date: 'Agora mesmo',
    affectedRooms: 'Lab de Física ➔ Sala 108'
  });

  saveState();
  renderCurrentView();
  showToast('🚨 ALERTA DE EMERGÊNCIA!', 'Aula de Física transferida para Sala 108!', 'emergency');
};

const toggleEventCompletion = (id) => {
  state.events = state.events.map(e => e.id === id ? { ...e, completed: !e.completed } : e);
  saveState();
  renderCurrentView();
  showToast('Atividade Atualizada', 'Status de conclusão salvo!', 'normal');
};

const deleteEvent = (id) => {
  state.events = state.events.filter(e => e.id !== id);
  saveState();
  renderCurrentView();
  showToast('Atividade Excluída', 'Removida do calendário escolar.', 'normal');
};

const closeModals = () => {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
};

// Initial Setup on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderCurrentView();

  // Navigation Click Handlers
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Day Selector Click Handlers
  document.querySelectorAll('[data-day]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedDay = Number(btn.dataset.day);
      document.querySelectorAll('[data-day]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSchedule();
    });
  });

  // Modal Forms
  const classForm = document.getElementById('class-form');
  if (classForm) classForm.addEventListener('submit', saveClassForm);

  const duplicateForm = document.getElementById('duplicate-form');
  if (duplicateForm) duplicateForm.addEventListener('submit', saveDuplicateForm);

  // Close modals on escape key or clicking backdrop
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModals();
    });
  });
});
