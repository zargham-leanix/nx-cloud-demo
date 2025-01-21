import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo4Component } from './lib33-demo4.component';

describe('Lib33Demo4Component', () => {
  let component: Lib33Demo4Component;
  let fixture: ComponentFixture<Lib33Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
