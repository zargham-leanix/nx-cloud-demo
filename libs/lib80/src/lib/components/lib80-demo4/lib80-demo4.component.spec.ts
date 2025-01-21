import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo4Component } from './lib80-demo4.component';

describe('Lib80Demo4Component', () => {
  let component: Lib80Demo4Component;
  let fixture: ComponentFixture<Lib80Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
