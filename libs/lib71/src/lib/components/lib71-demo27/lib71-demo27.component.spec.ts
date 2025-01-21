import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo27Component } from './lib71-demo27.component';

describe('Lib71Demo27Component', () => {
  let component: Lib71Demo27Component;
  let fixture: ComponentFixture<Lib71Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
