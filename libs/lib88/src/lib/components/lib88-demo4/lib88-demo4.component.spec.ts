import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo4Component } from './lib88-demo4.component';

describe('Lib88Demo4Component', () => {
  let component: Lib88Demo4Component;
  let fixture: ComponentFixture<Lib88Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
