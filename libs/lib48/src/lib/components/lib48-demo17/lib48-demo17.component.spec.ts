import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo17Component } from './lib48-demo17.component';

describe('Lib48Demo17Component', () => {
  let component: Lib48Demo17Component;
  let fixture: ComponentFixture<Lib48Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
