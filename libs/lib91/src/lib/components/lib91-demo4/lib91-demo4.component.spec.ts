import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo4Component } from './lib91-demo4.component';

describe('Lib91Demo4Component', () => {
  let component: Lib91Demo4Component;
  let fixture: ComponentFixture<Lib91Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
