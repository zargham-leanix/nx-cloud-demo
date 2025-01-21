import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo4Component } from './lib84-demo4.component';

describe('Lib84Demo4Component', () => {
  let component: Lib84Demo4Component;
  let fixture: ComponentFixture<Lib84Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
