import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo42Component } from './lib48-demo42.component';

describe('Lib48Demo42Component', () => {
  let component: Lib48Demo42Component;
  let fixture: ComponentFixture<Lib48Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
