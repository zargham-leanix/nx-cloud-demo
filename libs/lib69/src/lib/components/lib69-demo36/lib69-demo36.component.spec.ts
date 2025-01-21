import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo36Component } from './lib69-demo36.component';

describe('Lib69Demo36Component', () => {
  let component: Lib69Demo36Component;
  let fixture: ComponentFixture<Lib69Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
