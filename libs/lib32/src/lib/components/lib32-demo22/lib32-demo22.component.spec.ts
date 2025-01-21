import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo22Component } from './lib32-demo22.component';

describe('Lib32Demo22Component', () => {
  let component: Lib32Demo22Component;
  let fixture: ComponentFixture<Lib32Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
