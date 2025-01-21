import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo43Component } from './lib75-demo43.component';

describe('Lib75Demo43Component', () => {
  let component: Lib75Demo43Component;
  let fixture: ComponentFixture<Lib75Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
