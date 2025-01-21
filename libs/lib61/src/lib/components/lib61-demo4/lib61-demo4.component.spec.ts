import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo4Component } from './lib61-demo4.component';

describe('Lib61Demo4Component', () => {
  let component: Lib61Demo4Component;
  let fixture: ComponentFixture<Lib61Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
