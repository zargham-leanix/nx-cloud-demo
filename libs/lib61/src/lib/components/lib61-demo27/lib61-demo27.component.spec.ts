import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo27Component } from './lib61-demo27.component';

describe('Lib61Demo27Component', () => {
  let component: Lib61Demo27Component;
  let fixture: ComponentFixture<Lib61Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
