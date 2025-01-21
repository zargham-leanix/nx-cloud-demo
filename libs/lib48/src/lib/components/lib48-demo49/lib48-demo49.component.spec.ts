import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo49Component } from './lib48-demo49.component';

describe('Lib48Demo49Component', () => {
  let component: Lib48Demo49Component;
  let fixture: ComponentFixture<Lib48Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
