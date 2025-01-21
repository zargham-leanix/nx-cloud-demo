import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo43Component } from './lib41-demo43.component';

describe('Lib41Demo43Component', () => {
  let component: Lib41Demo43Component;
  let fixture: ComponentFixture<Lib41Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
