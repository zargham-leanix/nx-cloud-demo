import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo41Component } from './lib91-demo41.component';

describe('Lib91Demo41Component', () => {
  let component: Lib91Demo41Component;
  let fixture: ComponentFixture<Lib91Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
