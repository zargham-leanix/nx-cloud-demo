import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo43Component } from './lib91-demo43.component';

describe('Lib91Demo43Component', () => {
  let component: Lib91Demo43Component;
  let fixture: ComponentFixture<Lib91Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
