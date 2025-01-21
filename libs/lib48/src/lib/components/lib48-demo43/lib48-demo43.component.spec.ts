import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo43Component } from './lib48-demo43.component';

describe('Lib48Demo43Component', () => {
  let component: Lib48Demo43Component;
  let fixture: ComponentFixture<Lib48Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
