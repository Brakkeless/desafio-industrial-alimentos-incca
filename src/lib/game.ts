export type Difficulty = "Fácil" | "Intermedia" | "Avanzada" | "Final";
export type LevelKind =
  | "process"
  | "safety"
  | "inventory"
  | "bottleneck"
  | "mass"
  | "blend"
  | "thermal"
  | "quality"
  | "efficiency"
  | "decision";
export interface Level {
  id: number;
  title: string;
  area: string;
  difficulty: Difficulty;
  kind: LevelKind;
  prompt: string;
  instruction: string;
  options?: string[];
  correct: string;
  explanation: string;
  application: string;
}
export interface AnswerRecord {
  levelId: number;
  answer: string;
  elapsedSeconds: number;
}
export interface RankRow {
  id?: string;
  alias: string;
  score: number;
  duration_seconds: number;
  created_at?: string;
  rank?: number;
}

export const levels: Level[] = [
  {
    id: 1,
    title: "Diseña el flujo",
    area: "Ingeniería Industrial",
    difficulty: "Fácil",
    kind: "process",
    prompt:
      "Una planta recibe fruta fresca y debe convertirla en pulpa empacada.",
    instruction:
      "Elige la secuencia que evita reprocesos y protege la inocuidad.",
    options: [
      "Recepción → inspección → lavado → proceso → empaque",
      "Lavado → recepción → empaque → inspección → proceso",
      "Empaque → proceso → recepción → lavado → inspección",
    ],
    correct: "Recepción → inspección → lavado → proceso → empaque",
    explanation:
      "Primero se recibe y se revisa la fruta. Después se lava, se procesa y, al final, se empaca.",
    application:
      "Este orden evita devolverse, mezclar fruta sucia con producto limpio o empacar algo que todavía no está listo.",
  },
  {
    id: 2,
    title: "Inocuidad primero",
    area: "Ingeniería de Alimentos",
    difficulty: "Fácil",
    kind: "safety",
    prompt:
      "Un operario cortó pollo crudo y ahora preparará vegetales listos para consumo.",
    instruction: "Selecciona la acción correcta antes de continuar.",
    options: [
      "Limpiar el cuchillo con una toalla",
      "Usar los mismos utensilios para ahorrar tiempo",
      "Cambiar o lavar y desinfectar utensilios y manos",
    ],
    correct: "Cambiar o lavar y desinfectar utensilios y manos",
    explanation:
      "Los microbios del pollo crudo pueden pasar a los vegetales por las manos, el cuchillo o la tabla.",
    application:
      "Antes de cambiar de alimento se lavan y desinfectan manos y utensilios, o se usan otros limpios.",
  },
  {
    id: 3,
    title: "Inventario que protege",
    area: "Integración de las dos ingenierías",
    difficulty: "Fácil",
    kind: "inventory",
    prompt: "Hay tres lotes de yogur con fechas de vencimiento distintas.",
    instruction:
      "¿Qué regla debes aplicar para despachar primero el lote más próximo a vencer?",
    options: [
      "PEPS: primero en entrar, primero en salir",
      "FEFO: primero en vencer, primero en salir",
      "UEPS: último en entrar, primero en salir",
    ],
    correct: "FEFO: primero en vencer, primero en salir",
    explanation:
      "FEFO significa que sale primero el producto que vence primero, aunque haya llegado después.",
    application:
      "Así se evita perder yogures o entregar productos vencidos.",
  },
  {
    id: 4,
    title: "Encuentra el cuello de botella",
    area: "Ingeniería Industrial",
    difficulty: "Intermedia",
    kind: "bottleneck",
    prompt: "Lavado procesa 30 cajas/h, corte 20 cajas/h y empaque 25 cajas/h.",
    instruction:
      "Identifica la operación que limita la capacidad total de la línea.",
    options: ["Lavado: 30 cajas/h", "Corte: 20 cajas/h", "Empaque: 25 cajas/h"],
    correct: "Corte: 20 cajas/h",
    explanation:
      "La estación más lenta marca el ritmo de toda la línea. En este caso, corte solo procesa 20 cajas por hora.",
    application:
      "Mejorar primero el corte aumenta la producción. Acelerar las otras etapas solo formaría una fila de cajas.",
  },
  {
    id: 5,
    title: "Balance de masa",
    area: "Ingeniería de Alimentos",
    difficulty: "Intermedia",
    kind: "mass",
    prompt:
      "Mezclas 80 kg de pulpa y 20 kg de azúcar. En este modelo no hay pérdidas.",
    instruction: "Ajusta la masa total del producto final.",
    correct: "100",
    explanation:
      "Si no se pierde nada, todo lo que entra debe salir: 80 kg + 20 kg = 100 kg.",
    application:
      "Este cálculo ayuda a preparar lotes y a descubrir si se está perdiendo producto.",
  },
  {
    id: 6,
    title: "Formula la mezcla",
    area: "Ingeniería de Alimentos",
    difficulty: "Intermedia",
    kind: "blend",
    prompt:
      "Mezclas cantidades iguales de dos soluciones: una al 10 % y otra al 30 % de sólidos.",
    instruction: "Ajusta la concentración final de la mezcla.",
    correct: "20",
    explanation:
      "Como se mezclan cantidades iguales, se calcula el promedio: (10 % + 30 %) ÷ 2 = 20 %.",
    application:
      "Este cálculo se usa para preparar bebidas y alimentos siempre con la misma concentración.",
  },
  {
    id: 7,
    title: "Control térmico",
    area: "Ingeniería de Alimentos",
    difficulty: "Intermedia",
    kind: "thermal",
    prompt:
      "Un tratamiento térmico fue validado para una combinación específica de tiempo y temperatura.",
    instruction:
      "¿Cuál decisión protege la inocuidad y la calidad del proceso?",
    options: [
      "Aplicar la combinación validada y registrar tiempo y temperatura",
      "Usar cualquier temperatura si el producto se ve bien",
      "Reducir el tiempo para producir más sin validar",
    ],
    correct: "Aplicar la combinación validada y registrar tiempo y temperatura",
    explanation:
      "El tratamiento solo es seguro si se cumplen la temperatura y el tiempo que fueron comprobados.",
    application:
      "Anotar el tiempo y la temperatura permite saber si el lote fue procesado correctamente.",
  },
  {
    id: 8,
    title: "Calidad bajo control",
    area: "Ingeniería Industrial",
    difficulty: "Avanzada",
    kind: "quality",
    prompt:
      "En una carta de control, una medición aparece por fuera de los límites establecidos.",
    instruction: "Interpreta correctamente la señal.",
    options: [
      "El proceso mejoró automáticamente",
      "Existe una posible causa especial que debe investigarse",
      "Se deben ampliar los límites para incluir el dato",
    ],
    correct: "Existe una posible causa especial que debe investigarse",
    explanation:
      "Un dato fuera de los límites avisa que ocurrió algo diferente y que debemos investigarlo.",
    application:
      "Se revisan la máquina, el método, la materia prima y el trabajo del operario antes de decidir.",
  },
  {
    id: 9,
    title: "Mide la eficiencia",
    area: "Ingeniería Industrial",
    difficulty: "Avanzada",
    kind: "efficiency",
    prompt:
      "La línea produjo 80 unidades buenas en una hora; su meta teórica era 100.",
    instruction: "Ajusta la eficiencia de producción alcanzada.",
    correct: "80",
    explanation:
      "Se lograron 80 de las 100 unidades esperadas: 80 ÷ 100 = 80 %.",
    application:
      "El resultado ayuda a detectar paradas, pérdidas o problemas de calidad.",
  },
  {
    id: 10,
    title: "Salva el lote",
    area: "Integración de las dos ingenierías",
    difficulty: "Final",
    kind: "decision",
    prompt:
      "La cámara fría superó el límite definido y no se sabe cuánto tiempo estuvo fuera de control.",
    instruction: "Elige la respuesta profesional más segura y eficiente.",
    options: [
      "Despachar rápido antes de que cambie el aspecto",
      "Mezclar el lote con producto nuevo",
      "Retener e identificar el lote, revisar registros y evaluar antes de liberar",
    ],
    correct:
      "Retener e identificar el lote, revisar registros y evaluar antes de liberar",
    explanation:
      "Si no sabemos cuánto tiempo estuvo caliente, no podemos asegurar que el producto sea seguro.",
    application:
      "Se separa el lote, se revisan los registros y solo se despacha si la evaluación confirma que está bien.",
  },
];
export const BASE_POINTS = [100, 100, 100, 140, 140, 140, 140, 190, 190, 250];
export const normalizeAnswer = (value: string | number) => String(value).trim();
export function isCorrect(levelId: number, answer: string | number) {
  const level = levels[levelId - 1];
  return Boolean(level) && normalizeAnswer(answer) === level.correct;
}
export function scoreAnswer(
  levelId: number,
  answer: string | number,
  elapsedSeconds: number,
) {
  if (!isCorrect(levelId, answer)) return 0;
  const base = BASE_POINTS[levelId - 1] ?? 0;
  const safe = Math.max(0, Math.min(120, Math.floor(elapsedSeconds)));
  return base + Math.max(0, 30 - Math.floor(safe / 3));
}
export function totalScore(records: AnswerRecord[]) {
  const unique = new Map(records.map((r) => [r.levelId, r]));
  if (unique.size !== 10) return 0;
  return levels.reduce(
    (sum, l) =>
      sum +
      scoreAnswer(
        l.id,
        unique.get(l.id)?.answer ?? "",
        unique.get(l.id)?.elapsedSeconds ?? 120,
      ),
    0,
  );
}
export function cleanAlias(input: string) {
  return input.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 20);
}

