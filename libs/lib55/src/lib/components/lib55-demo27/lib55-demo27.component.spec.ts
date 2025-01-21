import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo27Component } from './lib55-demo27.component';

describe('Lib55Demo27Component', () => {
  let component: Lib55Demo27Component;
  let fixture: ComponentFixture<Lib55Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
