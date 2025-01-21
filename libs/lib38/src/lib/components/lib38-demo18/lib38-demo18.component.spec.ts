import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo18Component } from './lib38-demo18.component';

describe('Lib38Demo18Component', () => {
  let component: Lib38Demo18Component;
  let fixture: ComponentFixture<Lib38Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
