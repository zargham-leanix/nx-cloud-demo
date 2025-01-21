import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo48Component } from './lib61-demo48.component';

describe('Lib61Demo48Component', () => {
  let component: Lib61Demo48Component;
  let fixture: ComponentFixture<Lib61Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
