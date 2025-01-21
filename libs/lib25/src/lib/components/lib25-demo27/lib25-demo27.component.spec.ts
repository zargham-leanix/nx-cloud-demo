import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo27Component } from './lib25-demo27.component';

describe('Lib25Demo27Component', () => {
  let component: Lib25Demo27Component;
  let fixture: ComponentFixture<Lib25Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
