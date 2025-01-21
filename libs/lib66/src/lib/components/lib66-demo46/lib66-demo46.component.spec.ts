import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo46Component } from './lib66-demo46.component';

describe('Lib66Demo46Component', () => {
  let component: Lib66Demo46Component;
  let fixture: ComponentFixture<Lib66Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
