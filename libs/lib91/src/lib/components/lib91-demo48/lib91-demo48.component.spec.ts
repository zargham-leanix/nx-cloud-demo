import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo48Component } from './lib91-demo48.component';

describe('Lib91Demo48Component', () => {
  let component: Lib91Demo48Component;
  let fixture: ComponentFixture<Lib91Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
