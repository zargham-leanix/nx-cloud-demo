import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo12Component } from './lib55-demo12.component';

describe('Lib55Demo12Component', () => {
  let component: Lib55Demo12Component;
  let fixture: ComponentFixture<Lib55Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
