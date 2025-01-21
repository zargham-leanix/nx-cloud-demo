import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo27Component } from './lib88-demo27.component';

describe('Lib88Demo27Component', () => {
  let component: Lib88Demo27Component;
  let fixture: ComponentFixture<Lib88Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
