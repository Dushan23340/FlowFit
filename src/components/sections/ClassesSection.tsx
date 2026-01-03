import { Clock, Flame, Wifi, MapPin } from "lucide-react";
import { useState } from "react";

const classes = [
  {
    name: "Morning Yoga Flow",
    description: "Start your day with energizing vinyasa sequences",
    duration: "60 min",
    level: "All Levels",
    icon: "🌅",
  },
  {
    name: "HIIT Power Session",
    description: "High-intensity intervals for maximum calorie burn",
    duration: "45 min",
    level: "Intermediate",
    icon: "🔥",
  },
  {
    name: "Strength & Mobility",
    description: "Build muscle and improve flexibility",
    duration: "50 min",
    level: "All Levels",
    icon: "💪",
  },
  {
    name: "Mindful Evening Stretch",
    description: "Gentle stretching to unwind and relax",
    duration: "45 min",
    level: "Beginner",
    icon: "🌙",
  },
];

const schedule = [
  {
    time: "6:00 AM",
    mon: { class: "Morning Yoga Flow", type: "studio" },
    tue: null,
    wed: { class: "Morning Yoga Flow", type: "online" },
    thu: null,
    fri: { class: "Morning Yoga Flow", type: "studio" },
    sat: null,
    sun: null,
  },
  {
    time: "7:30 AM",
    mon: { class: "HIIT Power", type: "studio" },
    tue: { class: "Strength", type: "online" },
    wed: { class: "HIIT Power", type: "studio" },
    thu: { class: "Strength", type: "online" },
    fri: { class: "HIIT Power", type: "studio" },
    sat: { class: "HIIT Power", type: "studio" },
    sun: null,
  },
  {
    time: "6:00 PM",
    mon: { class: "Strength", type: "studio" },
    tue: { class: "Evening Stretch", type: "online" },
    wed: { class: "Strength", type: "studio" },
    thu: { class: "Evening Stretch", type: "online" },
    fri: null,
    sat: null,
    sun: { class: "Evening Stretch", type: "online" },
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type FilterType = "all" | "online" | "studio";

const ClassesSection = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <section id="classes" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Classes & Schedule
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Find Your Perfect Class
          </h2>
          <p className="text-muted-foreground">
            From energizing HIIT sessions to calming yoga flows, we have
            something for every body and schedule.
          </p>
        </div>

        {/* Class Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {classes.map((classItem, index) => (
            <div
              key={classItem.name}
              className="bg-card rounded-2xl p-6 shadow-soft hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{classItem.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {classItem.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {classItem.description}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {classItem.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-secondary" />
                  <span className="text-foreground font-medium">
                    {classItem.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Weekly Schedule
            </h3>
            <div className="flex gap-2">
              {(["all", "online", "studio"] as FilterType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    Time
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="text-center py-3 px-2 text-sm font-medium text-muted-foreground"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time} className="border-t border-border">
                    <td className="py-4 px-2 text-sm font-medium text-foreground">
                      {row.time}
                    </td>
                    {days.map((day) => {
                      const cell =
                        row[day.toLowerCase() as keyof typeof row] as {
                          class: string;
                          type: string;
                        } | null;
                      const show =
                        cell &&
                        (filter === "all" || filter === cell.type);

                      return (
                        <td key={day} className="py-4 px-2">
                          {show ? (
                            <div className="group cursor-pointer">
                              <div className="bg-primary-light rounded-lg p-2 text-center transition-all hover:bg-primary hover:shadow-soft">
                                <p className="text-xs font-medium text-foreground group-hover:text-primary-foreground">
                                  {cell.class}
                                </p>
                                <div className="flex items-center justify-center gap-1 mt-1">
                                  {cell.type === "online" ? (
                                    <Wifi className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
                                  ) : (
                                    <MapPin className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
                                  )}
                                  <span className="text-[10px] text-muted-foreground group-hover:text-primary-foreground/80 capitalize">
                                    {cell.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center text-muted-foreground/50">
                              —
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
