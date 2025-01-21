import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo27Component } from './lib63-demo27.component';

describe('Lib63Demo27Component', () => {
  let component: Lib63Demo27Component;
  let fixture: ComponentFixture<Lib63Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
