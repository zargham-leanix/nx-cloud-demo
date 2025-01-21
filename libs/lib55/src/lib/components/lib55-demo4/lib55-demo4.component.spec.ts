import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo4Component } from './lib55-demo4.component';

describe('Lib55Demo4Component', () => {
  let component: Lib55Demo4Component;
  let fixture: ComponentFixture<Lib55Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
