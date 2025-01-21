import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo4Component } from './lib85-demo4.component';

describe('Lib85Demo4Component', () => {
  let component: Lib85Demo4Component;
  let fixture: ComponentFixture<Lib85Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
