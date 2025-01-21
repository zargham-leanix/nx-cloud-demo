import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo27Component } from './lib95-demo27.component';

describe('Lib95Demo27Component', () => {
  let component: Lib95Demo27Component;
  let fixture: ComponentFixture<Lib95Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
