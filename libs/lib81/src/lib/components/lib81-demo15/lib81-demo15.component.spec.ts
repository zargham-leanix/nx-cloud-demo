import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo15Component } from './lib81-demo15.component';

describe('Lib81Demo15Component', () => {
  let component: Lib81Demo15Component;
  let fixture: ComponentFixture<Lib81Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
