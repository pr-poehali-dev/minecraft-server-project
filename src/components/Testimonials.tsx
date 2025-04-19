import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Алексей",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Играю на CubeWorld уже больше года и ни разу не пожалел. Отзывчивая администрация, интересные ивенты и постоянные обновления - всё что нужно для хорошего сервера!",
    date: "15.05.2023"
  },
  {
    id: 2,
    name: "Мария",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Никогда не встречала такого дружелюбного комьюнити. На сервере всегда найдутся люди, готовые помочь. Мой любимый режим - CubeSky!",
    date: "03.07.2023"
  },
  {
    id: 3,
    name: "Дмитрий",
    avatar: "/placeholder.svg",
    rating: 4,
    text: "Отличный сервер с минимумом лагов и максимумом возможностей. Особенно нравится Hi-Tech режим, есть где разгуляться любителям механизмов.",
    date: "22.09.2023"
  }
];

const Testimonials = () => {
  const renderRating = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "fill-cubeworld-accent text-cubeworld-accent" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Что говорят игроки</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мнение нашего сообщества - лучшее доказательство качества CubeWorld
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="cube-card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex">{renderRating(testimonial.rating)}</div>
                </div>
                <div className="ml-auto text-sm text-gray-500">{testimonial.date}</div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
