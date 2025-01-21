import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo10Component } from './lib66-demo10.component';

describe('Lib66Demo10Component', () => {
  let component: Lib66Demo10Component;
  let fixture: ComponentFixture<Lib66Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
