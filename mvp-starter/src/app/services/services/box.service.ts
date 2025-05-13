import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Box } from '../../models/models/box.model';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private apiUrl = 'http://localhost:5000/api/boxes';

  constructor(private http: HttpClient) {}

  getBoxes(): Observable<Box[]> {
    const mockBoxes: Box[] = [
      {
        _id: '1',
        title: 'Gardening Starter Kit',
        description: 'Perfect tools and seeds for beginner gardeners.',
        price: 49.99,
        image: '/assets/Gardening.jpeg',
        category: 'Gardening',
        hobby: 'Gardening',
        contents: ['Seeds', 'Shovel', 'Gloves'],
      },
      {
        _id: '2',
        title: 'Acrylic Painting Kit',
        description:
          'Canvas, brushes, and paints to unleash your inner artist.',
        price: 59.99,
        image: '/assets/Painting.jpeg',
        category: 'Art',
        hobby: 'Painting',
        contents: ['Canvas', 'Acrylic Paints', 'Brushes'],
      },
      {
        _id: '3',
        title: 'Coffee Connoisseur Box',
        description: 'Curated beans and brewing tools from around the world.',
        price: 69.99,
        image: '/assets/Coffee.jpeg',
        category: 'Coffee',
        hobby: 'Coffee Tasting',
        contents: ['Arabica Beans', 'French Press', 'Tasting Notes'],
      },
    ];

    return of(mockBoxes).pipe(
      map((boxes: Box[]) => {
        // Example transformation: Add a discount on all boxes
        return boxes.map((box) => ({
          ...box,
          price: box.price * 0.9, // Apply a 10% discount
        }));
      })
    );
  }

  getBoxById(id: string): Observable<Box | null> {
    const mockBoxes: Box[] = [
      {
        _id: '1',
        title: 'Gardening Starter Kit',
        description: 'Perfect tools and seeds for beginner gardeners.',
        price: 49.99,
        image: '/assets/Gardening.jpeg',
        category: 'Gardening',
        hobby: 'Gardening',
        contents: ['Seeds', 'Shovel', 'Gloves'],
      },
      {
        _id: '2',
        title: 'Acrylic Painting Kit',
        description:
          'Canvas, brushes, and paints to unleash your inner artist.',
        price: 59.99,
        image: '/assets/Painting.jpeg',
        category: 'Art',
        hobby: 'Painting',
        contents: ['Canvas', 'Acrylic Paints', 'Brushes'],
      },
      {
        _id: '3',
        title: 'Coffee Connoisseur Box',
        description: 'Curated beans and brewing tools from around the world.',
        price: 69.99,
        image: '/assets/Coffee.jpeg',
        category: 'Coffee',
        hobby: 'Coffee Tasting',
        contents: ['Arabica Beans', 'French Press', 'Tasting Notes'],
      },
    ];

    // Return the box with the given id
    const box = mockBoxes.find((b) => b._id === id);
    return of(box || null); // Using `of` to return an observable of the box
  }

  subscribeToBox(id: string, userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/subscribe`, userData);
  }
}
