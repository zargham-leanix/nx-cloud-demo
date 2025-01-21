import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo27Component } from './lib31-demo27.component';

describe('Lib31Demo27Component', () => {
  let component: Lib31Demo27Component;
  let fixture: ComponentFixture<Lib31Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
