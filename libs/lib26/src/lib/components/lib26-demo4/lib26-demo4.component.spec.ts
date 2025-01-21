import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo4Component } from './lib26-demo4.component';

describe('Lib26Demo4Component', () => {
  let component: Lib26Demo4Component;
  let fixture: ComponentFixture<Lib26Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
