import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo14Component } from './lib91-demo14.component';

describe('Lib91Demo14Component', () => {
  let component: Lib91Demo14Component;
  let fixture: ComponentFixture<Lib91Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
