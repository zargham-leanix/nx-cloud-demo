import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo27Component } from './lib81-demo27.component';

describe('Lib81Demo27Component', () => {
  let component: Lib81Demo27Component;
  let fixture: ComponentFixture<Lib81Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
