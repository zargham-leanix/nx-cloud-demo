import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo27Component } from './lib38-demo27.component';

describe('Lib38Demo27Component', () => {
  let component: Lib38Demo27Component;
  let fixture: ComponentFixture<Lib38Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
