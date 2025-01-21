import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo37Component } from './lib91-demo37.component';

describe('Lib91Demo37Component', () => {
  let component: Lib91Demo37Component;
  let fixture: ComponentFixture<Lib91Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
