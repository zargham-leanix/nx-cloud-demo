import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo32Component } from './lib48-demo32.component';

describe('Lib48Demo32Component', () => {
  let component: Lib48Demo32Component;
  let fixture: ComponentFixture<Lib48Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
