import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo43Component } from './lib12-demo43.component';

describe('Lib12Demo43Component', () => {
  let component: Lib12Demo43Component;
  let fixture: ComponentFixture<Lib12Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
