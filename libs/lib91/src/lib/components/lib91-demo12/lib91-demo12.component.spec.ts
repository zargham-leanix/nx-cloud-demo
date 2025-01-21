import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo12Component } from './lib91-demo12.component';

describe('Lib91Demo12Component', () => {
  let component: Lib91Demo12Component;
  let fixture: ComponentFixture<Lib91Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
