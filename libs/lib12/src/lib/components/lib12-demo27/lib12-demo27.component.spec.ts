import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo27Component } from './lib12-demo27.component';

describe('Lib12Demo27Component', () => {
  let component: Lib12Demo27Component;
  let fixture: ComponentFixture<Lib12Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
