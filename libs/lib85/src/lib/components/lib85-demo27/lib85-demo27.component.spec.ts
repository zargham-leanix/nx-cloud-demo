import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo27Component } from './lib85-demo27.component';

describe('Lib85Demo27Component', () => {
  let component: Lib85Demo27Component;
  let fixture: ComponentFixture<Lib85Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
