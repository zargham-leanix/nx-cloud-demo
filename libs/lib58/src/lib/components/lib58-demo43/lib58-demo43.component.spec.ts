import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo43Component } from './lib58-demo43.component';

describe('Lib58Demo43Component', () => {
  let component: Lib58Demo43Component;
  let fixture: ComponentFixture<Lib58Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
