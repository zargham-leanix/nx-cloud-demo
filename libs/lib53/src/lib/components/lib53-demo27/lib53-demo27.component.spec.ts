import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo27Component } from './lib53-demo27.component';

describe('Lib53Demo27Component', () => {
  let component: Lib53Demo27Component;
  let fixture: ComponentFixture<Lib53Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
