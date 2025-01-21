import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo11Component } from './lib38-demo11.component';

describe('Lib38Demo11Component', () => {
  let component: Lib38Demo11Component;
  let fixture: ComponentFixture<Lib38Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
