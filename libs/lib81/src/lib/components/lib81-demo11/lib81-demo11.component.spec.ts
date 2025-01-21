import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo11Component } from './lib81-demo11.component';

describe('Lib81Demo11Component', () => {
  let component: Lib81Demo11Component;
  let fixture: ComponentFixture<Lib81Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
