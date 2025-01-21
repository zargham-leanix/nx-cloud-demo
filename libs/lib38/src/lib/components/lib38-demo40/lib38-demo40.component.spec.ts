import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo40Component } from './lib38-demo40.component';

describe('Lib38Demo40Component', () => {
  let component: Lib38Demo40Component;
  let fixture: ComponentFixture<Lib38Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
