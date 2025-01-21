import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo27Component } from './lib91-demo27.component';

describe('Lib91Demo27Component', () => {
  let component: Lib91Demo27Component;
  let fixture: ComponentFixture<Lib91Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
