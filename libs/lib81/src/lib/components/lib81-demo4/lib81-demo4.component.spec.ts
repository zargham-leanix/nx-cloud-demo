import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo4Component } from './lib81-demo4.component';

describe('Lib81Demo4Component', () => {
  let component: Lib81Demo4Component;
  let fixture: ComponentFixture<Lib81Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
