import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo26Component } from './lib48-demo26.component';

describe('Lib48Demo26Component', () => {
  let component: Lib48Demo26Component;
  let fixture: ComponentFixture<Lib48Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
