import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo44Component } from './lib66-demo44.component';

describe('Lib66Demo44Component', () => {
  let component: Lib66Demo44Component;
  let fixture: ComponentFixture<Lib66Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
