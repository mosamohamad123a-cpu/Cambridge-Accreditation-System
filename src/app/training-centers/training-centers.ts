
import { Component } from '@angular/core';

export interface TrainingCenter {
  id: number;
  name: string;
  location: string;
  description: string;
  accreditationDate: string;
  status: string;
  accredited: boolean;
}

export const trainingCenters: TrainingCenter[] = [
  {
    id: 1,
    name: "Jordan Skills Academy",
    location: "Amman, Jordan",
    description: "Provides professional and technical training courses.",
    status: "Active",
    accreditationDate: "2026-03-15",
    accredited: true
  },
  {
    id: 2,
    name: "Future Leaders Center",
    location: "Irbid, Jordan",
    description: "Offers leadership and management training.",
    status: "Active",
    accreditationDate: "2026-04-10",
    accredited: true
  },
  {
    id: 3,
    name: "Smart Training Institute",
    location: "Zarqa, Jordan",
    description: "Specializes in computer and programming courses.",
    status: "Inactive",
    accreditationDate: "2024-06-20",
    accredited: false
  },
  {
    id: 4,
    name: "Creative Minds Academy",
    location: "Aqaba, Jordan",
    description: "Focuses on creative arts and design training.",
    status: "Active",
    accreditationDate: "2025-09-05",
    accredited: true
  },
  {
    id: 5,
    name: "Tech Innovators Hub",
    location: "Madaba, Jordan",
    description: "Provides innovative technology and entrepreneurship training.",
    status: "Active",
    accreditationDate: "2025-11-12",
    accredited: true
  },
  {
    id: 6,
    name: "Global Business Institute",
    location: "Aqaba, Jordan",
    description: "Offers comprehensive business and management training.",
    status: "Active",
    accreditationDate: "2025-08-15",
    accredited: true
  }
];

@Component({
  selector: 'app-training-centers',
  imports: [],
  templateUrl: './training-centers.html',
  styleUrl: './training-centers.css',
})



export class TrainingCenters {

  trainingCenters = trainingCenters;
searchText: string = '';
  

  activeCenters = trainingCenters.filter(center =>
    center.accredited === true &&
    center.status === "Active"
  );

  filteredCenters = [...this.activeCenters];

  searchCenters(event: Event) {

    const value = (event.target as HTMLInputElement).value;

    this.searchText = value;

    this.filteredCenters = this.activeCenters.filter(center =>
      center.name.toLowerCase().includes(value.toLowerCase())
    );

  }

}



