import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo37Component } from './lib48-demo37.component';

describe('Lib48Demo37Component', () => {
  let component: Lib48Demo37Component;
  let fixture: ComponentFixture<Lib48Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
