import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo27Component } from './lib93-demo27.component';

describe('Lib93Demo27Component', () => {
  let component: Lib93Demo27Component;
  let fixture: ComponentFixture<Lib93Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
