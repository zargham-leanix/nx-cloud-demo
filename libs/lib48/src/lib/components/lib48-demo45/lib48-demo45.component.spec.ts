import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo45Component } from './lib48-demo45.component';

describe('Lib48Demo45Component', () => {
  let component: Lib48Demo45Component;
  let fixture: ComponentFixture<Lib48Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
