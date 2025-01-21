import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo4Component } from './lib47-demo4.component';

describe('Lib47Demo4Component', () => {
  let component: Lib47Demo4Component;
  let fixture: ComponentFixture<Lib47Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
