import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo17Component } from './lib38-demo17.component';

describe('Lib38Demo17Component', () => {
  let component: Lib38Demo17Component;
  let fixture: ComponentFixture<Lib38Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
