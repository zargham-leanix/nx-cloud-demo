import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo23Component } from './lib66-demo23.component';

describe('Lib66Demo23Component', () => {
  let component: Lib66Demo23Component;
  let fixture: ComponentFixture<Lib66Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
