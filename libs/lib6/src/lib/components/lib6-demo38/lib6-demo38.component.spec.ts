import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo38Component } from './lib6-demo38.component';

describe('Lib6Demo38Component', () => {
  let component: Lib6Demo38Component;
  let fixture: ComponentFixture<Lib6Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
