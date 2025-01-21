import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo26Component } from './lib32-demo26.component';

describe('Lib32Demo26Component', () => {
  let component: Lib32Demo26Component;
  let fixture: ComponentFixture<Lib32Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
