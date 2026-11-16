
import { Component } from '@angular/core';

export interface Trainer {
  id: number;
  name: string;
  specialization: string;
  location: string;
  description: string;
  experience: number;
  status: string;
  accredited: boolean;
}

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Ahmad Ali",
    specialization: "Web Development",
    location: "Amman, Jordan",
    description: "Experienced in frontend and backend development.",
    experience: 5,
    status: "Active",
    accredited: true
  },
  {
    id: 2,
    name: "Sara Mohammad",
    specialization: "Graphic Design",
    location: "Irbid, Jordan",
    description: "Specializes in graphic design and visual communication.",
    experience: 4,
    status: "Active",
    accredited: true
  },
  {
    id: 3,
    name: "Omar Khaled",
    specialization: "Cybersecurity",
    location: "Zarqa, Jordan",
    description: "Provides cybersecurity and network security training.",
    experience: 6,
    status: "Inactive",
    accredited: false
  },
  {
    id: 4,
    name: "Lina Ahmad",
    specialization: "Digital Marketing",
    location: "Aqaba, Jordan",
    description: "Specializes in digital marketing and social media.",
    experience: 3,
    status: "Active",
    accredited: true
  },
  {
    id: 5,
    name: "Khaled Samir",
    specialization: "Database Management",
    location: "Madaba, Jordan",
    description: "Experienced in database design and management.",
    experience: 7,
    status: "Active",
    accredited: true
  },
  {
    id: 6,
    name: "Noor Ibrahim",
    specialization: "Project Management",
    location: "Amman, Jordan",
    description: "Provides project management and leadership training.",
    experience: 5,
    status: "Active",
    accredited: true
  }
];

@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.html',
  styleUrl: './trainers.css',
})



export class Trainers {

  trainers = trainers;

  searchText: string = '';

  activeTrainers = trainers.filter(trainer =>
    trainer.accredited === true &&
    trainer.status === "Active"
  );

  filteredTrainers = [...this.activeTrainers];

  searchTrainers(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.searchText = value;

    this.filteredTrainers = this.activeTrainers.filter(trainer =>
      trainer.name.toLowerCase().includes(value.toLowerCase())
    );
  }
}
