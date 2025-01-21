import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo12Component } from './lib66-demo12.component';

describe('Lib66Demo12Component', () => {
  let component: Lib66Demo12Component;
  let fixture: ComponentFixture<Lib66Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
