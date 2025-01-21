import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo27Component } from './lib48-demo27.component';

describe('Lib48Demo27Component', () => {
  let component: Lib48Demo27Component;
  let fixture: ComponentFixture<Lib48Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
