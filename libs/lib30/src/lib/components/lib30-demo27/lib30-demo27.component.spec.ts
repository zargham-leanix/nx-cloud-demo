import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo27Component } from './lib30-demo27.component';

describe('Lib30Demo27Component', () => {
  let component: Lib30Demo27Component;
  let fixture: ComponentFixture<Lib30Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
