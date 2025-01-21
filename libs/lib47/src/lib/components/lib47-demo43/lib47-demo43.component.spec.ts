import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo43Component } from './lib47-demo43.component';

describe('Lib47Demo43Component', () => {
  let component: Lib47Demo43Component;
  let fixture: ComponentFixture<Lib47Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
