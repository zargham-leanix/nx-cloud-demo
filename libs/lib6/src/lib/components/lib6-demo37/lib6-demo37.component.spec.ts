import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo37Component } from './lib6-demo37.component';

describe('Lib6Demo37Component', () => {
  let component: Lib6Demo37Component;
  let fixture: ComponentFixture<Lib6Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
