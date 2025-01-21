import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo4Component } from './lib58-demo4.component';

describe('Lib58Demo4Component', () => {
  let component: Lib58Demo4Component;
  let fixture: ComponentFixture<Lib58Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
