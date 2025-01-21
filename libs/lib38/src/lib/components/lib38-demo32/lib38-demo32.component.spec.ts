import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo32Component } from './lib38-demo32.component';

describe('Lib38Demo32Component', () => {
  let component: Lib38Demo32Component;
  let fixture: ComponentFixture<Lib38Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
