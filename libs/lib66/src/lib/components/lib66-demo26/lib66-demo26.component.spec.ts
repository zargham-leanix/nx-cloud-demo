import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo26Component } from './lib66-demo26.component';

describe('Lib66Demo26Component', () => {
  let component: Lib66Demo26Component;
  let fixture: ComponentFixture<Lib66Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
