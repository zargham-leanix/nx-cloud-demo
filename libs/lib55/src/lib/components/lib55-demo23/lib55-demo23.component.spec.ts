import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo23Component } from './lib55-demo23.component';

describe('Lib55Demo23Component', () => {
  let component: Lib55Demo23Component;
  let fixture: ComponentFixture<Lib55Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
