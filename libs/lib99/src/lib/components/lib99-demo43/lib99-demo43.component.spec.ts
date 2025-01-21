import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo43Component } from './lib99-demo43.component';

describe('Lib99Demo43Component', () => {
  let component: Lib99Demo43Component;
  let fixture: ComponentFixture<Lib99Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
