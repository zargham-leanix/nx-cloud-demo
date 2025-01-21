import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo40Component } from './lib48-demo40.component';

describe('Lib48Demo40Component', () => {
  let component: Lib48Demo40Component;
  let fixture: ComponentFixture<Lib48Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
