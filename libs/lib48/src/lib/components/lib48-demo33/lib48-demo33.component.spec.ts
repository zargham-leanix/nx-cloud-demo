import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo33Component } from './lib48-demo33.component';

describe('Lib48Demo33Component', () => {
  let component: Lib48Demo33Component;
  let fixture: ComponentFixture<Lib48Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
